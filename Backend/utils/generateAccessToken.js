import jwt from 'jsonwebtoken'
const generateAccessToken = (userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_KEY, { expiresIn: '5h' });
    return token;
}
export default generateAccessToken;