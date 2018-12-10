/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:19 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-10 19:26:07
 */
import {combinReducer} from './combinReducer'
import canvasReducer from './canvasReducer'

export default combinReducer({
    canvas:canvasReducer
})