import {
  ShoppingOutlined,
  SearchOutlined,
  UserSwitchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { MenuItem } from "@mui/material";
import { Col, Dropdown, Input, Layout, Menu, Row, Space } from "antd";
import React from "react";
import "./header.scss";

Header.propTypes = {};

function Header(props) {
  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );
  return (
    <div className="header">
      <Layout className="header-container">
        <div>
          <Row>
            <Col span={5}>
              <img
                className="site-brand"
                src="https://pubcdn2.ivymoda.com/images/logo.png"
                alt="Trang chủ"
              />
            </Col>
            <Col span={9}>
              <form action="" method="post" className="search">
                <Input
                  className="search-input"
                  placeholder="Tìm kiểm sản phẩm"
                  prefix={<SearchOutlined />}
                />
              </form>
            </Col>
            <Col span={10}>
              <div className="header-actions">
                <Row justify="end">
                  <div className="item-wallet">
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <UserSwitchOutlined className="item" />
                          <ShoppingOutlined className="item" />
                          <HeartOutlined className="item" />
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Menu theme="light" mode="horizontal ">
              <Menu.Item key="1">
                <span>Áo</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span>Quần</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span>Váy</span>
              </Menu.Item>
              <Menu.Item key="4">
                <span>Áo khoác</span>
              </Menu.Item>
            </Menu>
          </Row>
        </div>
      </Layout>
    </div>
  );
}

export default Header;
