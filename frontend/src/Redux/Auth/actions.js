export function authUser(email) {
    return {
        type: "AUTHENTICATE_USER",
        payload: {
            loggedIn: true,
            email: email,
        },
    };
}
export function unauthUser() {
    return {
        type: "UNAUTHENTICATE_USER",
        payload: {
            loggedIn: true,
            email: null,
        },
    };
}
export function changeAuth(accessToken, refreshToken, expiresAt) {
    return {
        type: "CHANGE_AUTHENTICATION",
        payload: {
            accessToken: accessToken,
            refreshToken: refreshToken,
            expiresAt: expiresAt,
        },
    };
}