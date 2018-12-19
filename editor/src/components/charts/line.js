/*
 * @Author: zengjian 
 * @Date: 2018-12-19 22:01:22 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-19 22:07:29
 */
import ReactEcharts from 'echarts-for-react'
import React from 'react'

const option={
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}



const Line=(props)=>{
    return <div style={{width:'100%',height:'100%'}}><ReactEcharts style={{height:'100%',width:'100%'}} option={option} /></div>
}

export default Line