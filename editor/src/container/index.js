/*
 * @Author: zengjian 
 * @Date: 2018-12-10 19:52:57 
 * @Last Modified by: zengjian
 * @Last Modified time: 2019-02-11 16:21:56
 */
import React from 'react'
import {Layout,Menu,Icon} from 'antd'

import CanvasCmp from '../components/canvas/index'
import SliderCmp from '../components/slider/index'
import connect from '../redux/connect'
import config from '../config'
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
        
        //加载菜单数据
        fetch(config.host+'/menu').then(data=>data.json()).then(data=>{
           if(data.code){
               this.props.dispatch({
                   type:"MENU",
                   payload:data.result
               })
           }
        })
    }



    render(){
        const menuData=this.props.common?this.props.common.menu:[]
        console.log(menuData,123)
        return <div className='editor-warpper'>
                <Header>
                <Menu
                    style={{ lineHeight: '64px' }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                {
                    !!menuData&&menuData.map(child=>{
                        return <Menu.Item key={child.id} onClick={()=>this.addComponent(child.option[0].series[0].type)}><Icon type="appstore"/>{child.title}</Menu.Item>
                    })
                }
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

export default connect(state=>state)(Index)