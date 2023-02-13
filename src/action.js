import * as actions from './actionType';

export const updateEmployee = (value) => {
    return {
        type: actions.UPDATE,
        payload: value
    };
}