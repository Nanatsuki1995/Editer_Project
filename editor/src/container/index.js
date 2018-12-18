/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:52:57 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-18 18:33:56
 */
import React from 'react'
import {Layout,Menu,Icon} from 'antd'

import CanvasCmp from '../components/canvas/index'
import SliderCmp from '../components/slider/index'
import './index.scss'

const { Header, Footer, Sider, Content}=Layout

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Index extends React.Component{
    render(){
        return <div className='editor-warpper'>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1"><Icon type="appstore"/>饼图</Menu.Item>
                        <Menu.Item key="2"><Icon type="appstore"/>柱状图</Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="appstore" />折线图</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
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