/*
 * @Author: zengjian 
 * @Date: 2018-12-17 20:46:31 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-20 20:34:01
 */
import React from 'react'
import { findDOMNode } from 'react-dom'
import {
    DragSource,

} from 'react-dnd'
import './itemBox.scss'

import Pie from '../charts/pie'
import Bar from '../charts/bar'
import Line from '../charts/line'

const source = {
    beginDrag(props) {
        return props
    },
    canDrag(props) {
        if (props.id !== props.current) {
            return false
        }
        return true
    }
}

class BoxCmp extends React.Component{

    state = {
        type: ''
    }

    componentDidMount() {
        this.mouseUp()
    }

    mouseUp = () => {
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', this.computeSize)
        })
    }

    onClickHandler = (e, id) => {
        e.stopPropagation()
        this.props.selectItem(id)
    }

    updateSize = (e, type) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(111)
        this.setState({
            type: type
        })
        document.addEventListener('mousemove', this.computeSize);
    }

    computeSize = (e) => {
        const { type } = this.state
        const { updateSize, id, width, height, x, y, } = this.props
        const { clientX, clientY } = e
        const { x: xx, y: yy } = findDOMNode(this.ref).getBoundingClientRect()
        switch (type) {
            case 'RT':
                updateSize(id, clientX - xx, height, x, y)
                break;
            case 'D':
                updateSize(id, width, clientY - yy, x, y)
                break;
            case 'U':
                updateSize(id, width, height + (yy - clientY), x, clientY - (yy - y))
                break;
            case 'L':
                updateSize(id, width + (xx - clientX), height, clientX - (xx - x), y)
                break;
            case 'TL':
                updateSize(id, width + (xx - clientX), height + (yy - clientY), clientX - (xx - x), clientY - (yy - y))
                break;
            case 'TR':
                updateSize(id, clientX - xx, height + (yy - clientY), x, clientY - (yy - y))
                break;
            case 'DL':
                updateSize(id, width + (xx - clientX), clientY - yy, clientX - (xx - x), y)
                break;
            case 'DR':
                updateSize(id, (clientX - xx), clientY - yy, x, y)
                break;
            default:
                return
        }
    }
    render() {
        const { connectDragSource,x,y,background, id, current, width, height, type } = this.props;
        console.log(this.props)
        return connectDragSource(
            <div ref={e => this.ref = e} onClick={(e) => this.onClickHandler(e, id)}
                className={`box-feature ${id === current ? 'z-cur' : ''}`}
                style={{ left: x, top: y, background, width, height }}
            >
                <div className='u-leftTop' onMouseDown={(e) => this.updateSize(e, 'TL')}></div>
                <div className='u-top' onMouseDown={(e) => this.updateSize(e, 'U')}></div>
                <div className='u-rightTop' onMouseDown={(e) => this.updateSize(e, 'TR')}></div>
                <div className='u-right' onMouseDown={(e) => this.updateSize(e, 'RT')}></div>
                <div className='u-rightBottom' onMouseDown={(e) => this.updateSize(e, 'DR')}></div>
                <div className='u-bottom' onMouseDown={(e) => this.updateSize(e, 'D')}></div>
                <div className='u-leftBottom' onMouseDown={(e) => this.updateSize(e, 'DL')}></div>
                <div className='u-left' onMouseDown={(e) => this.updateSize(e, 'L')}></div>
                <div style={{position:'absolute',left:0,top:0,right:0,bottom:0,margin:'auto'}}>
                    {type==='pie' && <Pie/>} 
                    {type==='bar' && <Bar/>}
                    {type==='line' && <Line/>}
                </div>
                <div className='delete' onClick={(e) => this.props.deleteItem(e,'delete')}></div>
            </div>
        )
    }
}

export default DragSource('ITEM', source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(BoxCmp)