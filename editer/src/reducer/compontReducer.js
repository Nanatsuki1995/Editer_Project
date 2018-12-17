/*
 * @Author: zengjian 
 * @Date: 2018-12-16 16:54:12 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-17 22:24:27
 */
let initialState = {
    comps: [{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        id: 1,
        background:'red'
    }, {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        id: 2,
        background:'green'
    }, {
        x: 200,
        y: 200,
        width: 100,
        height: 100,
        id: 3,
        background: 'yellow'
    }],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'move':
            const newComps = state.comps.map(c => {
                if (c.id === action.payload.id) {
                    return {
                        ...c,
                        ...action.payload
                    }
                }
                return c
            })
            return {...state, comps: newComps }
        default:
            return state
    }
}

export default reducer