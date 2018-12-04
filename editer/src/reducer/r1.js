/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:41:03 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-03 18:47:18
 */
let initialState = {

}
const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'update':
            return {...state,update:action.payload}
        default:
            return state
    }
}

export default reducer