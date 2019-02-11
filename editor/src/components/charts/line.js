/*
 * @Author: zengjian 
 * @Date: 2018-12-19 22:01:22 
 * @Last Modified by: zengjian
 * @Last Modified time: 2019-02-11 17:34:24
 */
import ReactEcharts from 'echarts-for-react'
import React from 'react'
import config from '../../config'

var option
fetch(config.host+'/menu').then(data=>data.json()).then(data=>{
    if(data.code){
        console.log(data,11111)
        option = data.result[0].option[0]
    }
})

console.log(option,33333)


const Line=(props)=>{
    return <div style={{width:'100%',height:'100%'}}><ReactEcharts style={{height:'100%',width:'100%'}} option={option} /></div>
}

export default Line