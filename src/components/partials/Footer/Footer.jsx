import React from "react";
import styles from "./Footer.module.css";
import { Row, Col } from "antd";
import Footer1 from "../../../img/footer-icon1.svg";
import Footer2 from "../../../img/footer-icon2.svg";
import Footer3 from "../../../img/footer-icon3.svg";
import Footer4 from "../../../img/footer-icon4.svg";
import Footer5 from "../../../img/footer-icon5.svg";
import Footer6 from "../../../img/footer-icon7.svg";
import AgriBank from "../../../img/logo-agribank.png";
import DongA from "../../../img/logo-donga.png";
import EximBank from "../../../img/logo-eximbank.png";
import SaCom from "../../../img/logo-sacom.png";
import TechCom from "../../../img/logo-techcom-2.png";
import VietCom from "../../../img/logo-vietcombank.png";
import VietTin from "../../../img/logo-vietin.png";
import Parico from "../../../img/logo-pagcor.png";
import NotAge from "../../../img/18+.png";
function Footer() {
  const logos = [
    {
      id: 1,
      name: "Footer 1",
      title: "Footer 1",
      source: Footer1,
    },
    {
      id: 2,
      name: "Footer 2",
      title: "Footer 2",
      source: Footer2,
    },
    {
      id: 3,
      name: "Footer 3",
      title: "Footer 3",
      source: Footer3,
    },
    {
      id: 4,
      name: "Footer 4",
      title: "Footer 4",
      source: Footer4,
    },
    {
      id: 5,
      name: "Footer 5",
      title: "Footer 5",
      source: Footer5,
    },
    {
      id: 6,
      name: "Footer 6",
      title: "Footer 6",
      source: Footer6,
    },
  ];

  const logoBanks = [
    {
      id: 1,
      name: "AgriBank",
      title: "AgriBank",
      source: AgriBank,
    },
    {
      id: 2,
      name: "DongA",
      title: "DongA",
      source: DongA,
    },
    {
      id: 3,
      name: "EximBank",
      title: "EximBank",
      source: EximBank,
    },
    {
      id: 4,
      name: "SaCom",
      title: "SaCom",
      source: SaCom,
    },
    {
      id: 5,
      name: "TechCom",
      title: "TechCom",
      source: TechCom,
    },
    {
      id: 6,
      name: "VietCom",
      title: "VietCom",
      source: VietCom,
    },
    {
      id: 6,
      name: "VietTin",
      title: "VietTin",
      source: VietTin,
    },
  ];

  const renderLogoFooter = (logo) => {
    return logo.map((item, index) => (
      <div className={styles.containerFooter}>
        <div className={styles.logoFooter} key={index}>
          <img src={item.source} alt={item.name} title={item.title} />
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.footer}>
      <h5 className={styles.h5}>LOTO799.COM</h5>
      <div className={styles.rowFooter}>{renderLogoFooter(logos)}</div>
      <ul className={styles.ulFooter}>
        <li>
          <a>Quy Định Luật Lệ</a>
        </li>
        <li>
          <a>Trách Nghiệm Người Chơi</a>
        </li>
        <li>
          <a>Chính Sách Bảo Mật</a>
        </li>
        <li>
          <a>Tuyên Bố Bản Quyền</a>
        </li>
      </ul>
      <h1>
        ©2018 Copyright: <a>LOTO799.COM</a>
      </h1>
      <h1>HỖ TRỢ RÚT TIỀN NHANH</h1>
      <div className={styles.rowFooter}>{renderLogoFooter(logoBanks)}</div>
      <div className={styles.rowFooterBottom}>
        <div className={styles.footerLeft}>
          <img src={Parico} alt="parico" title="Parico" />
          <p>
            Trang mạng cá cược <a>LOTO799.COM</a> được giám sát bởi tổ chức
            Gaming Associates.
          </p>
        </div>
        <div className={styles.footerRight}>
          <img src={NotAge} alt="notage" title="NotAge" />
          <p>
            Chúng tôi tích cực đẩy mạnh cá cược có trách nhiệm và cương quyết từ
            chối trẻ vị thành niên sử dụng phần mềm của chúng tôi để cá cược
            trên mạng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
