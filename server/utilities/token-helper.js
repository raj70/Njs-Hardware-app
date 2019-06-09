import jsonwebtoken from 'jsonwebtoken';

export const generateToken = (user) => {
    const tokenData = {
        email: user.email,
        id: user._id
    };

    return jsonwebtoken.sign(tokenData, process.env.SIGN_SECRET, {
        expiresIn: '5h'
    });
};

export const decodeToken = (req) => {
    const token = req.headers.authorization || req.headers['authorization'];

    if (!token) {
        return null;
    }

    try {
        const isValid = jsonwebtoken.verify(token, process.env.SIGN_SECRET);
        return isValid;
    } catch (error) {
        console.log(error);
        return null;
    }
};