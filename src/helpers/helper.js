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
        if ((decodeToken.exp * 1000) >= (moment().unix() * 1000)) {
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
const getFiveDays = () => {
    let result = [];
    for (let index = 5; index > 0; index--) {
        result.push(moment().add((-index), 'day').format('Y-MM-D'))
    }
    for (let index = 0; index < 5; index++) {
        result.push(moment().add(index, 'day').format('Y-MM-D'))
    }
    return result
}

module.exports = { validateSession, loginSuccess, tokenUser, loggedUser, getFiveDays }