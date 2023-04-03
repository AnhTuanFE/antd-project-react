import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Layout, Space, Menu } from "antd";
import { Col, Divider, Row } from "antd";
import GridProduct from "./components/GridProduct";
import Home from "./components/Home";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  border: "1px solid #000",
};

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header
            className="header"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
            }}
          >
            <div
              style={{
                float: "left",
                width: 120,
                height: 31,
                margin: "16px 24px 16px 0",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            ></div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              text-color="white"
            >
              <Menu.Item key="home">
                <Link className="nav_item" to="/">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="product">
                <Link className="nav_item" to="/products">
                  Grid Products
                </Link>
              </Menu.Item>
              <Menu.Item key="addProduct">
                <Link className="nav_item" to="/addproduct">
                  Add product
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<GridProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
