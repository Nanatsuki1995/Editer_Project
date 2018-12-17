/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:19 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-17 21:22:31
 */
import {combinReducer} from './combinReducer'
import canvasReducer from './canvasReducer'
import componentReducer from './compontReducer'

export default combinReducer({
    canvas:canvasReducer,
    compts:componentReducer
})