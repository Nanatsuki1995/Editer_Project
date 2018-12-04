/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:12 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-03 18:53:12 
 */
let initialState = {

}
const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'delete':
            return {...state,delete:action.payload}
        default:
            return state
    }
}

export default reducer