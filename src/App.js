import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Layout, Menu } from "antd";
import GridProduct from "./components/gridProduct/GridProduct";
import Home from "./components/Home";
import LearnHook from "./components/hook_react/LearnHook";
const { Header } = Layout;

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
                <Link className="nav_item" to="/hook">
                  test hook
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<GridProduct />} />
          <Route path="/hook" element={<LearnHook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
