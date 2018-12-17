/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:52:51 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-17 21:16:17
 */
import React from 'react'
import './index.scss'
import connect from '../../redux/connect'
import Features from '../feature/container'

class CanvasCmp extends React.Component{
    static defaultProps = {
        zoom:70
    }
    render(){
        const percent = this.props.zoom/100
        return <div className='cp-canvas' style={{width:800*percent,height:600*percent}}>
            <Features />
        </div>
    }
}

export default connect(state=>state.canvas)(CanvasCmp)