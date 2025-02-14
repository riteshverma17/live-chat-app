import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const generateTokenAndSetCookies = (userID,res) => {
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,  // 15 days
        httpOnly: true,  // this will prevent the cookie from being accessed by javascript
        sameSite:"strict", // this cookie will only be sent in a first-party context
        secure: process.env.NODE_ENV === 'development' ? true : false, // this will make the cookie only be sent in https
    })
}

export default generateTokenAndSetCookies;