import initalState from '../initalState'

const userReducer = (state = initalState.user, action) => {
    switch(action.type) {
        case 'createUser':
            console.log('Creating User');
            return state;
        default:
            return { name: "New User"}
    }
}

export default userReducer;