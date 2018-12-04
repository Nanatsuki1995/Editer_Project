/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:53:19 
 * @Last Modified by:   zengjian 
 * @Last Modified time: 2018-12-03 18:53:19 
 */
import {combinReducer} from './combinReducer'
import r1 from './r1'
import r2 from './r2'

export default combinReducer({
    update:r1,
    delete:r2
})