import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Row, Col } from "antd";

const { Header, Footer, Sider, Content } = Layout;
HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <Layout>
        <Header style={{ background: "red" }}>
          <div>
            <Row>
              <Col span={10}>Menu</Col>
              <Col span={4}>Branch</Col>
              <Col span={10}>Feature</Col>
            </Row>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

export default HomePage;
