import jwt from 'jsonwebtoken';

const TOKEN_NAME = "hd_token";

export function storeToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
}

export function isLoggedIn() {
    const token = localStorage.getItem(TOKEN_NAME);
    return token !== null;
}

export function isExpire() {
    const token = decodeToken();
    if (token) {
        const currentime = Math.floor(Date.now() / 1000);
        return currentime < token.exp;
    }
    return false;
}
export function logout() {
    localStorage.removeItem(TOKEN_NAME);
}

export function getUsername() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.email;
}

export function getUserId() {
    const token = decodeToken();
    if (!token) {
        return null;
    }

    return token.id;
}


function decodeToken() {
    const token = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}

function getToken() {
    const token = localStorage.getItem(TOKEN_NAME);
    return token;
}