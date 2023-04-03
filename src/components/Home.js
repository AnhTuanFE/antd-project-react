import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Layout, Space, Menu } from "antd";
import { Col, Divider, Row } from "antd";
import clsx from "clsx";
import styles from "./Home.module.css";

const { Header, Footer, Sider, Content } = Layout;

const style = {
  background: "#0092ff",
  padding: "8px 0",
  color: "black",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  border: "1px solid #000",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
  border: "1px solid #000",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  border: "1px solid #000",
};
const Home = () => (
  <div className={clsx(styles.wrap_home)}>
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Layout>
          <Sider style={siderStyle} className={clsx(styles.black_font)}>
            <span className={clsx(styles.black_font)}>Sider</span>
          </Sider>
          <Content style={contentStyle}>
            <Divider orientation="left">
              <span className={clsx(styles.black_font)}>Responsive</span>
            </Divider>
            <Row
              gutter={{
                xs: 8,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer style={footerStyle}>
          <span className={clsx(styles.black_font)}>Footer</span>
        </Footer>
      </Layout>
    </Space>
  </div>
);
export default Home;
