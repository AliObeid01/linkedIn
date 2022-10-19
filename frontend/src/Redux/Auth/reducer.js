export default function reducer(
    state = {
        loggedIn: false,
        email: null,
    },
    action
) {
    switch (action.type) {
        case "AUTHENTICATE_USER": {
            return {
                ...state,
                loggedIn: true,
                email: action.payload.email,
            };
        }
        case "UNAUTHENTICATE_USER": {
            return {
                ...state,
                loggedIn: false,
                email: action.payload.email,
            };
        }
        case "CHANGE_AUTHENTICATION": {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expiresAt: action.payload.expiresAt,
            };
        }

        default:
            return state;
    }
}
