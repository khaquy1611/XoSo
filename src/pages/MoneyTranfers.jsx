import React, { useState, useEffect } from "react";
import MasterLayout from "../components/Layout";
import { Row, Col, Button , Select  } from "antd";
import styles from "./css/MoneyTranfer.module.css";
import Recaptcha from "react-recaptcha";
const { Option } = Select;
function MoneyTranfersPage() {
  const [isVerified, setVerified] = useState(false);

 
  const recaptchaLoaded = () => {
    console.log('captcha tải thành công');
  }

  if(window.location.reload) {
    recaptchaLoaded();
  }

  useEffect(() => {
    recaptchaLoaded();

    return () => {
      DestroyReCaptCha();
    }
  },[]);

  const verifyCaptcha = (response) => {
    if(response) {
      setVerified(true);
    }
  }

  let recaptchaInstance;
  const resetRecaptcha = () => {
    recaptchaInstance.reset();  
  };
   
  
  const DestroyReCaptCha = (response) => {
    if(response) {
      setVerified(false);
    }
  }
  const handleSubmit = () => {
    if (isVerified) {
      alert("Bạn Đã SubMit Thành Công");
    } else {
      alert("Vui Lòng Xác Nhận");
    }
  };



  const idCode = [
    '#1232121',
    '#1242121',
    '#1251221',
    '#1262112',
    '#1282112',
    '#1302112',
    '#1212212',
  ];

  const children = [];
  let length = idCode.length;
  for (let i = 0; i < length; i++) {
    children.push(
      <Option
        className={styles.option}
        key={i.toString(36) + i}
      >
        {idCode[i]}
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
              <h3>Nạp Tiền Tài Khoản</h3>
              <div className={styles.formGroup}>
                <p>Số Dư</p>
                <input
                  type="text"
                  class="form-control"
                  id="money_old"
                  name="money_old"
                  value="0 đ"
                  readonly=""
                />
              </div>
              <p
                style={{
                  color: "red",
                  fontSize: "large",
                  margin: "20px 0",
                  width: "70%",
                }}
              >
                Nhập số tiền cần nạp rồi ấn vào tạo lệnh nạp tiền rồi sẽ hiện ra
                số tài khoản của nhà cái loto799 rồi bạn chuyển tiền là số dư sẽ
                được cộng vào tài khoản của bạn
              </p>
              <div className={styles.formGroup}>
                <p>Số Tiền Cần Nạp</p>
                <input type="number" id="number" require min="1" max="10000" />
              </div>
              <div className={styles.formGroup}>
              <p>Chọn Mã</p>
              <Select
            className={styles.select}
            mode="multiple"
            size="default"
            defaultValue={idCode[0]}
            className={styles.select}
            showArrow={true}
          >
            {children}
          </Select>
              </div>
              <Button
                onClick={handleSubmit}
                type="danger"
                shape="round"
                size="large"
              >
                Tạo Lệnh Nạp Tiền
              </Button>
              <Recaptcha
                sitekey="6LcAuHkeAAAAALamgZDB-PTuBtYfwcjwynwcrw7S"
                render="explicit"
                onloadCallback={recaptchaLoaded}
                verifyCallback={verifyCaptcha}
                expiredCallbackName = {DestroyReCaptCha}
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
                Lưu ý: Nếu tạo lệnh nạp tiền quá 5 lần mà chưa chuyển khoản
                thành công sẽ bị khoá tài khoản!
              </p>
              </form>
            </div>

            <div className={styles.MoneyTranFerRight}>
            <h3>Lịch Sử Nạp Tiền</h3>
            <div className={styles.containerFix}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Mã Số</th>
                    <th>Số Tiền</th>
                    <th>Trạng Thái</th>
                    <th>Thời Gian</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>#1213223121</td>
                    <td>20.000.000</td>
                    <td>Đã Giao Dịch</td>
                    <td>22/02/2022</td>
                </tr>
                <tr>
                    <td>#1213223121</td>
                    <td>20.000.000</td>
                    <td>Đã Giao Dịch</td>
                    <td>22/02/2022</td>
                </tr>
                <tr>
                    <td>#1213223121</td>
                    <td>20.000.000</td>
                    <td>Đã Giao Dịch</td>
                    <td>22/02/2022</td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </Row>
    </MasterLayout>
  );
}

export default React.memo(MoneyTranfersPage);
