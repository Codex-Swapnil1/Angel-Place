import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../CSS/MainLayout.css"
import logo from "../utils/logo.jpeg";
import { outlet } from "react-router-dom";
import {Text} from "@chakra-ui/react"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineBgColors,
} from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { GiSwordBrandish } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { FaBlog } from "react-icons/fa";






const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
     const {
       token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} >
              <div className="logo">
                  <img src={logo} />
                  <span className="sm-logo">AP</span>
                  <span className="lg-logo">Angle Place</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <IoIosPeople />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <BsBagCheck style={{ textColor: "white" }} />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <GiSwordBrandish />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <GiSwordBrandish />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <MdOutlineCategory />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <MdOutlineCategory />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <AiOutlineBgColors />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "oders",
              icon: <FcTodoList />,
              label: "Oders",
            },
            {
              key: "blogs",
              icon: <FaBloggerB />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <ImBlog />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <ImBlog />,
                  label: "BLog List",
                },

                {
                  key: "blog-category",
                  icon: <FaBlog />,
                  label: "Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBlog />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <IoIosPeople />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
