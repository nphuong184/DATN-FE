import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Layout } from "antd";
import "./style.scss";
ProductDetail.propTypes = {};

const { Content } = Layout;
function ProductDetail(props) {
  return (
    <div>
      <Content style={{ padding: "0 50px" }}>
        <Row>
          <Col span={12} style={{ background: "#E3FCBF" }}>
            <div className="product-detail__gallery">
              <div className="product-gallery__slide--big">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/17/8fc31fd3096168954987958950ff41c4.JPG"
                  alt=""
                />
              </div>
              <div className="product-gallery__slide--small">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/09/46bc51ef934c2bb797bf66aca5f05790.JPG"
                  alt=""
                />
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/09/46bc51ef934c2bb797bf66aca5f05790.JPG"
                  alt=""
                />
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/09/46bc51ef934c2bb797bf66aca5f05790.JPG"
                  alt=""
                />
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/09/46bc51ef934c2bb797bf66aca5f05790.JPG"
                  alt=""
                />
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/05/09/46bc51ef934c2bb797bf66aca5f05790.JPG"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col span={12} style={{ background: "#B3E8E5" }}></Col>
        </Row>
      </Content>
    </div>
  );
}

export default ProductDetail;
