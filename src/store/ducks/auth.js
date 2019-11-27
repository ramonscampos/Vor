/* eslint-disable import/no-cycle */
import produce from 'immer';

export const Types = {
    SET_LOGGED: '@auth/SET_LOGGED',
    LOGOUT: '@auth/LOGOUT',
};

// Reducer

const INITIAL_STATE = {
    isLogged: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case Types.SET_LOGGED:
                draft.isLogged = true;
                break;
            case Types.LOGOUT:
                draft.isLogged = false;
                break;
            default:
        }
    });
}

// Action Creators
export const Creators = {
    setLogged: email => ({
        type: Types.SET_LOGGED,
        payload: {
            email,
        },
    }),

    logout: () => ({
        type: Types.LOGOUT,
    }),
};
