/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:19 
 * @Last Modified by: zengjian
 * @Last Modified time: 2019-02-10 15:04:43
 */
import {combinReducer} from './combinReducer'
import canvasReducer from './canvasReducer'
import componentReducer from './compontReducer'
import commonReducer from './commonReducer'

export default combinReducer({
    canvas:canvasReducer,
    compts:componentReducer,
    common:commonReducer
})