const INITIAL_STATES = {
    name: '',
    email: '',
    uid: '',
    loader: false,
}

export default function (state = INITIAL_STATES, action) {
    switch (action.type) {

        case 'CHANGE_LOADER':
            return ({
                ...state,
                loader: !state.loader
            })


        default:
            return state;
    }
}