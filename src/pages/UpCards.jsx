import React, { useState, useEffect } from "react";
import MasterLayout from "../components/Layout";
import { Row, Col, Button, Select } from "antd";
import styles from "./css/UpCard.module.css";
import Recaptcha from "react-recaptcha";
import VietTel from "../img/Viettel.png";
import Vinaphone from "../img/Vinaphone.png";
import VinamMobile from "../img/Vietnamobile.png";
import Mobilephone from "../img/Mobifone.png";

const { Option } = Select;
function UpCardPage() {
  const [isVerified, setVerified] = useState(false);

  const recaptchaLoaded = () => {
    console.log("captcha tải thành công");
  };

  if (window.location.reload) {
    recaptchaLoaded();
  }

  useEffect(() => {
    recaptchaLoaded();

    return () => {
      DestroyReCaptCha();
    };
  }, []);

  const verifyCaptcha = (response) => {
    if (response) {
      setVerified(true);
    }
  };

  let recaptchaInstance;
  const resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  const DestroyReCaptCha = (response) => {
    if (response) {
      setVerified(false);
    }
  };
  const handleSubmit = () => {
    if (isVerified) {
      alert("Bạn Đã Xác Nhận Thành Công");
    } else {
      alert("Vui Lòng Xác Nhận");
    }
  };

  const Card = [
    "VietTel(85%)",
    "MobilePhone(85%)",
    "VinaPhone(85%)",
    "VietNamMobile(85%)",
  ];
  const price = [
    "10.000 VNĐ",
    "20.000 VNĐ",
    "30.000 VNĐ",
    "40.000 VNĐ",
    "50.000 VNĐ",
    "100.000 VNĐ",
    "1.000.000 VNĐ",
  ];

  const children = [];
  const priceArr = [];

  for (let i = 0; i < price.length; i++) {
    priceArr.push(
      <Option className={styles.option} key={i.toString(36) + i}>
        {price[i]}
      </Option>
    );
  }

  let length = Card.length;
  for (let i = 0; i < length; i++) {
    children.push(
      <Option className={styles.option} key={i.toString(36) + i}>
        {Card[i]}
      </Option>
    );
  }

  return (
    <MasterLayout>
      <Row className={styles.main}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.MoneyTranFerLeft}>
            <form className="" method="" action="" name="">
              <h3>Nạp Thẻ</h3>
              <div className={styles.formGroup}>
                <Select
                  className={styles.select}
                  mode="multiple"
                  size="default"
                  defaultValue={Card[0]}
                  className={styles.select}
                  showArrow={true}
                >
                  {children}
                </Select>
              </div>
              <div className={styles.formGroup}>
                <Select
                  className={styles.select}
                  mode="multiple"
                  size="default"
                  defaultValue={price[0]}
                  className={styles.select}
                  showArrow={true}
                >
                  {priceArr}
                </Select>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="number"
                  id="number"
                  require
                  min="1"
                  max="10000"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="number"
                  id="number"
                  require
                  min="1"
                  max="10000"
                  required
                />
              </div>
              <Button
                onClick={handleSubmit}
                type="danger"
                shape="round"
                size="large"
              >
                Nạp Thẻ
              </Button>
              <Recaptcha
                sitekey="6LcAuHkeAAAAALamgZDB-PTuBtYfwcjwynwcrw7S"
                render="explicit"
                onloadCallback={recaptchaLoaded}
                verifyCallback={verifyCaptcha}
                expiredCallbackName={DestroyReCaptCha}
              />
              ,
              <p
                style={{
                  color: "red",
                  fontSize: "large",
                  margin: "20px 0",
                  width: "70%",
                }}
              >
                Ghi Chú: - Các bạn nhập đúng seri và mã pin cùng chọn loại thẻ
                chuẩn xác rồi kiểm tra thẻ ở lịch sử thẻ nạp, kiểm tra tiền ở
                menu người dùng
                <br></br>- Phần trăm chiết khấu nhà mạng của Vietnamobile tức là
                cứ 100k bạn sẽ trừ phần trăm chiết khấu, số tiền tiền bạn thực
                nhận sẽ là: mệnh giá - chiết khấu. Kiểm tra thêm tại lịch sử thẻ
                nạp.
              </p>
              </form>
            </div>

            <div className={styles.MoneyTranFerRight}>
              <h3>Chiết Khấu %</h3>
              <div className={styles.containerFix}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Mạng</th>
                      <th>Quy Đổi</th>
                      <th>Trạng Thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={VietTel} alt="" />
                      </td>
                      <td>85%</td>
                      <td>Hoạt Động</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={Vinaphone} alt="" />
                      </td>
                      <td>85%</td>
                      <td>Hoạt Động</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={Mobilephone} alt="" />
                      </td>
                      <td>85%</td>
                      <td>Hoạt Động</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={VinamMobile} alt="" />
                      </td>
                      <td>85%</td>
                      <td>Hoạt Động</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>Thẻ Mới Nạp</h3>
          <div className={styles.containerFix}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th> Loại Thẻ</th>
                  <th>Mã Nạp</th>
                  <th>Mã Seria</th>
                  <th>Mệnh giá</th>
                  <th> Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VietTel</td>
                  <td>#12212112</td>
                  <td>221211212</td>
                  <td>20.000.000</td>
                  <td>Hoạt Động</td>
                  <td>Đang Chờ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Row>
    </MasterLayout>
  );
}

export default React.memo(UpCardPage);
