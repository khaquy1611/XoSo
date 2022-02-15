import React from "react";
import MasterLayout from "../components/Layout";
import { Row, Col, Carousel , Tabs } from "antd";
import styles from "../pages/css/HomePage.module.css";
import Banner1 from '../img/banner1.jpg';
import Banner2 from '../img/banner2.jpg';
import Banner3 from '../img/banner3.jpg';
import Tab from '../components/Tabs/Tabs';
import MB from '../img/mb.gif';
import MT from '../img/mt.gif';
import MN from '../img/mn.gif';
import Three from '../img/3p.gif';
import Five from '../img/5p.gif';
import Ten from '../img/10p.gif';
import Fifteen from '../img/15p.gif';
import BC from '../img/bc.gif';
import CL from '../img/cl.gif';
import TX from '../img/tx.gif';
function HomePage() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  function callback(key) {
    console.log(key);
  }
  const tabs = [
    {
        id: 1,
        name: "Tất Cả",
        title: 'Tất Cả',
        heading: "Sắp Ra Mắt",
        img: [
          {
            id: 1,
            name: "MB",
            title: "MB",
            source: MB,
            link : "/nort"
          },
          {
            id: 2,
            name: "MT",
            title: "MT",
            source: MT,
            link: "/middle"
          },
          {
            id: 3,
            name: "MN",
            title: "MN",
            source: MN,
            link: "/south"
          },
          {
            id: 4,
            name: "Three",
            title: "Three",
            source: Three,

          },
          {
            id: 5,
            name: "Five",
            title: "Five",
            source: Five,
            link: "/lottery"
          },
          {
            id: 6,
            name: "Ten",
            title: "Ten",
            source:  Ten,
          },
          {
            id: 7,
            name: "BC",
            title: "BC",
            source: BC,
          },
          {
            id: 8,
            name: "CL",
            title: "CL",
            source: CL,
          },
          {
            id: 9,
            name: "TX",
            title: "TX",
            source: TX,
          }  
        ],
    },
    {
        id: 2,
        name: "Xổ Số",
        title: 'Xổ Số',
        img: [
          {
            id: 11,
            name: "MB",
            title: "MB",
            source: MB,
          },
          {
            id: 12,
            name: "MT",
            title: "MT",
            source: MT,
          },
          {
            id: 13,
            name: "MN",
            title: "MN",
            source: MN,
          },
        ]
    },
    {
        id: 3,
        name: "MiniGame",
        title: 'MiniGame',
        img: [
          {
            id: 20,
            name: "Five",
            title: "Five",
            source: Five,
          },
          {
            id: 21,
            name: "Ten",
            title: "Ten",
            source:  Ten,
          },
          {
            id: 22,
            name: "Fifteen",
            title: "Fifteen",
            source:Fifteen,
          }
        ]
    }
];
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: "10px"
  };
  return (
    <MasterLayout>
      <Row className={styles.main}>
        <Col span="12" offset={6}>
          <marquee className={styles.marquee}>
            Chúc mừng năm mới, An Khang Thịnh Vượng & Phát Tài{" "}
          </marquee>
          <div className={styles.carousel}>
          <Carousel autoplay afterChange={onChange} >
            <div>
            <img  src={Banner1} />
            </div>
            <div>
            <img  src={Banner2} />
            </div>
            <div>
            <img  src={Banner3} />
            </div>
            <div>
            <img  src={Banner1} />
            </div>
          </Carousel>
          </div>
          <marquee className={styles.marquee}>
          LOTO799.COM là trang web đặt cược hàng đầu trả thưởng nhanh uy tín nhất hiện nay!   
          </marquee>
          <Row justify="center">
          {/* Tabs */ }
          <Tab tabs={tabs} />
          </Row>
        </Col>
      </Row>

    </MasterLayout>
  );
}

export default React.memo(HomePage);
