/*
 * @Author: zengjian 
 * @Date: 2018-12-16 16:54:12 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-16 17:13:34
 */
let initialState = {
    x:0,
    y:0,
    width:100,
    height:100,
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'move':
        return {...state,x:action.payload.x,y:action.payload.y}
    }
}