import * as types from '../constants/ActionType'
import * as messages from '../constants/Message'
const initalState = messages.MSG_WELCOME;

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}

export default reducer;