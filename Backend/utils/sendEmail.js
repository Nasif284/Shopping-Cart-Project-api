import sendEmail from "../config/emailService.js";

const sendEmailFunc = async ({ sendTo, subject, text, html }) => {
  const result = await sendEmail(sendTo, subject, text, html);
  if (result.success) {
    return true;
  } else {
    return false;
  }
};
export default sendEmailFunc;
