/* eslint-disable import/no-cycle */
import produce from 'immer';
import { Types as AuthTypes } from './auth';

export const Types = {};

// Reducer

const INITIAL_STATE = {
    profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case AuthTypes.SET_LOGGED:
                draft.profile = { email: action.payload.email };
                break;
            case AuthTypes.LOGOUT:
                draft.profile = null;
                break;
            default:
        }
    });
}

// Action Creators
export const Creators = {};
