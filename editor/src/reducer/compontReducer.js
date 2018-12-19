/*
 * @Author: zengjian 
 * @Date: 2018-12-16 16:54:12 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-19 19:00:22
 */
import update from 'immutability-helper'

let initialState = {
    comps: [{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        id: 1,
        background:'none',
        type: 'bar'
    }, {
        x: 100,
        y: 0,
        width: 100,
        height: 100,
        id: 2,
        background:'rgba(0,0,0,.1)'
    }, {
        x: 200,
        y: 0,
        width: 100,
        height: 100,
        id: 3,
        background: 'rgba(0,0,0,.1)'
    }],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'comp-add':
            const id = state.comps.reduce((a,b)=>a.id>b.id?a.id:b.id)+1
            const comp = {
                x: 0,
                y: 0,
                width: 80,
                height: 80,
                background: 'none',
                id: id,
                type: action.payload.type
            }
            return update(state,{
                comps: {
                    $push: [comp]
                }
            })

        case 'comp-move':
            return update(state,{
                comps: {
                    $set:state.comps.map(child => {
                        if (child.id === action.payload.id) {
                            return {
                                ...child,
                                ...action.payload
                            }
                        }
                        return child
                    })
                }
            })
        default:
            return state
    }
}

export default reducer