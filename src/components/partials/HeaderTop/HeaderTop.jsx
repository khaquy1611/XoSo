import React , { useState , useEffect } from 'react'
import { Row, Col , Button } from 'antd';
import styles from './HeaderTop.module.css';
import { getCurrentDate } from '../../../helper/index ';
import { Link } from 'react-router-dom';
function HeaderTop() {
  const [date , setDate ] = useState(new Date().toLocaleTimeString());
  const updateDate = () => {
    setDate(new Date().toLocaleTimeString());
  }
  let interval = setInterval(updateDate , 1000);
  useEffect(() => {
    return () => {
      // cancel the subscription
      clearInterval(interval);
  };
  } , []);

  return (
    <Row className={styles.headerTop}> 
      <Col span="12" offset={6}>
        <Row justify="space-between" className={styles.antHeaderColumn}>
          <Col span={6}>
          {getCurrentDate("/")} <span>{date}</span>
          </Col>
          <Col span={6}>
          <Row justify="space-around"> 
            <Col className={styles.antColBtn} span="3">
            <Link to="/sign-up">
            <Button  className={styles.btn1} type="primary" shape="round" size="middle">
            Đăng Ký
          </Button>
          </Link>
            </Col>
            <Col span={3} className={styles.antColBtn2}>
            <Link to="/sign-in">
            <Button className={`${styles.btn2} `} type="danger" shape="round" size="middle">
            Đăng Nhập
          </Button>
          </Link>
            </Col>
          </Row>
          
          </Col>
        </Row>
      </Col>
    </Row>

  )
}

export default React.memo(HeaderTop)