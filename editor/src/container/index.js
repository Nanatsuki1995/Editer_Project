/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:52:57 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-19 23:37:24
 */
import React from 'react'
import {Layout,Menu,Icon} from 'antd'

import CanvasCmp from '../components/canvas/index'
import SliderCmp from '../components/slider/index'
import connect from '../redux/connect'
import './index.scss'

const { Header, Footer, Content}=Layout

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Index extends React.Component{


    addComponent=(type)=>{
        this.props.dispatch({
            type: 'comp-add',
            payload: {
                type: type
            }
        })
    }
    componentDidMount(){
        this.props.dispatch({type: null})
    }



    render(){
        return <div className='editor-warpper'>
                <Header>
                    <Menu
                        style={{ lineHeight: '64px' }}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1" onClick={()=>this.addComponent('pie')}><Icon type="appstore"/>饼图</Menu.Item>
                        <Menu.Item key="2" onClick={()=>this.addComponent('bar')}><Icon type="appstore"/>柱状图</Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="appstore" />折线图</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="3" onClick={()=>this.addComponent('line')}>折线</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>
                <div className='editor-content'>
                    <div className='editor-left-side'></div>
                    <div className='editor-center'>
                        <Content className='editor-canvas'>
                            <CanvasCmp />
                        </Content>
                    </div>
                    <div className='editor-right-side'></div>
                </div>
                <Footer>
                    <SliderCmp/>
                </Footer>
            </div>
    }
}

export default connect()(Index)