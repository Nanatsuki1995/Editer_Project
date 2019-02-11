

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU':
            return { menu: action.payload }
        default:
            return state
    }
}

export default reducer