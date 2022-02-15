import React , { useState } from "react";
import { Row, Col, Layout, Menu , Dropdown , Button  } from "antd";
import HeaderTop from "../HeaderTop/HeaderTop";
import logo from "../../../img/logo.png";
import styles from "./Header.module.css";
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import  { HomeOutlined , MenuFoldOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { SubMenu } = Menu;
function HeaderComponent() {
  const [isOpen , setOpen] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/money-tranfers" >Chuyển Tiền Nhanh</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/up-cards" >Nạp Thẻ Cào</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
      <Link to="/history">Lịch Sử Nạp Thẻ</Link>
      </Menu.Item>
    </Menu>
  );

  const OpenSubMenu = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  }

  return (
    <div className="wrapper">
      <HeaderTop />
      <Header className={styles.bottomHeader}>
        <Row>
          <Col span="16" offset={6}>
            <Row justify="space-between">
              <Col span="2">
                <Link to="/">
                  <img className={styles.logo} src={logo} alt="" />
                </Link>
              </Col>
              <Col span="19" className={styles.navbar}>
               <ul className={styles.ul}>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/">
                  <HomeOutlined /> Trang Chủ
                 </Link>
                 </li>
                 <li className={styles.li}> 
                 <Link className={styles.a} to="/nort">
                  Miền Bắc
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/south">
                  Miền Nam
                 </Link>
                 </li>

                <li className={styles.li}>
                 <Link  className={styles.a} to="/middle">
                  Miền Trung
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/lottery">
                  XS 5 Phút
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Dropdown overlay={menu} trigger={['click']}>
                 <Link className={styles.a} to="/">
                  Nạp Tiền <DownOutlined />
                 </Link>
                 </Dropdown>
                 </li>
               </ul>

              </Col>
              {isOpen &&  <div className={styles.subNav}>
              <ul className={styles.ul}>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/">
                  <HomeOutlined /> Trang Chủ
                 </Link>
                 </li>
                 <li className={styles.li}> 
                 <Link className={styles.a} to="/nort">
                  Miền Bắc
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/sout">
                  Miền Nam
                 </Link>
                 </li>

                <li className={styles.li}>
                 <Link  className={styles.a} to="/middle">
                  Miền Trung
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/lottery">
                  XS 5 Phút
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Dropdown overlay={menu} trigger={['click']}>
                 <Link className={styles.a} to="/">
                  Nạp Tiền <DownOutlined />
                 </Link>
                 </Dropdown>
                 </li>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/sign-up">
                 <Button className={`${styles.btn2} `} type="primary" shape="round" size="middle">
                  Đăng Ký
                 </Button>
                 </Link>
                 </li>
                 <li className={styles.li}>
                 <Link className={styles.a} to="/sign-in">
                 <Button className={`${styles.btn2} `} type="danger" shape="round" size="middle">
                  Đăng Nhập
                 </Button>
                 </Link>
                 </li>
               </ul>
              </div>}
             
              <MenuFoldOutlined onClick={(e) => OpenSubMenu(e)} className={styles.sub} />
            </Row>
          </Col>
          
        </Row>

      </Header>
    </div>
  );
}
export default React.memo(HeaderComponent);
