import { Strategy as FacebookStrategy } from "passport-facebook";
import userModel from "../models/user.model.js"
import passport from "passport";

function normalizeFacebookPhoto(photoUrl) {
  if (!photoUrl) return null;
  return photoUrl.replace("type=normal", "type=large");
}

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "emails", "name", "displayName", "photos"], 
    },
    async (_, __, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email from Facebook"));

        let user = await userModel.findOne({ email });
        if (!user) {
          user = new userModel({
            name: profile.displayName || `${profile.name.givenName} ${profile.name.familyName}`,
            email,
            isVerified: true,
            facebookId: profile.id,
            image: normalizeFacebookPhoto(profile.photos?.[0]?.value) || null,
          });
          await user.save();
        } else {
          const updated = {};
          if (!user.facebookId) updated.facebookId = profile.id;

          const newPhoto = normalizeFacebookPhoto(profile.photos?.[0]?.value);
          if (newPhoto && user.image !== newPhoto) updated.image = newPhoto;

          if (Object.keys(updated).length) {
            await userModel.findByIdAndUpdate(user._id, updated, { new: true });
          }
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);