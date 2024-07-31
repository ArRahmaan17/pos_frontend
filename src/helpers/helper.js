const { jwtDecode } = require("jwt-decode");
const moment = require("moment");
const tokenUser = () => {
    return localStorage.getItem('token') ?? '';
}
const validateSession = () => {
    let token = tokenUser();
    let statusToken = false;
    if (token) {
        let decodeToken = jwtDecode(token);
        if (decodeToken.iat <= moment().add('1', 'day').unix()) {
            statusToken = true;
        }
    }
    return statusToken;
}
const loginSuccess = (token) => {
    localStorage.setItem('token', token);
    return
}
const loggedUser = () => {
    if (validateSession()) {
        let token = tokenUser();
        let decodeToken = jwtDecode(token);
        return decodeToken;
    } else {
        return {};
    }
}

module.exports = { validateSession, loginSuccess, tokenUser, loggedUser }