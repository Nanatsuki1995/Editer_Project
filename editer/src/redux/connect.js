/*
 * @Author: zengjian 
 * @Date: 2018-12-03 19:29:13 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-03 20:00:03
 */
import React from 'react'
import Customer from './context'

const connect =(fn) => (Wrapper) => {
    return class HOC extends React.Component {
        render() {
            return <Customer.Consumer>
                {(props)=>{
                    const newProps={...fn(props),dispatch:props.dispatch}
                    return <Wrapper {...this.props} {...newProps}/>
                }}
            </Customer.Consumer>
        }
    }
}

export default connect