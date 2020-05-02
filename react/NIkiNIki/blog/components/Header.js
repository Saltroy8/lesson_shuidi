import React from 'react'
import '../static/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'

const Header=()=>(
    <div className="header">
        <Row type="flex" justify="center">
        <Col   xs={24} sm={24} md={10} lg={15} xl={12}>
              <span className="header-loge">NikiNiki</span>
              <span className="header-txt">献给奇迹和梦想</span>
        </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
              <Menu mode="horizontal">
                  <Menu.Item key="home">
                      <Icon type="home"/>
                      官网首页
                  </Menu.Item>

                  <Menu.Item key="new">
                      <Icon type="new"/>
                       最新资讯
                  </Menu.Item>

                  <Menu.Item key="life">
                      <Icon type="life"/>
                       世界观
                  </Menu.Item>

                  <Menu.Item key="video">
                      <Icon type="youtube"/>
                       视听站
                  </Menu.Item>

                  <Menu.Item key="user">
                      <Icon type="user"/>
                       用户中心
                  </Menu.Item>

              </Menu>
            </Col>
        </Row>
    </div>
)

export default Header