import React from "react";
import PropTypes from "prop-types";

import { Layout } from "antd";
import { Row, Col } from "antd";
Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <Layout style={{ background: "#FAF0D7" }}>
        <div>
          <Row>
            <Col span={10}>Menu.</Col>
            <Col span={4}>Branch</Col>
            <Col span={10}>Feature</Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}

export default Header;
