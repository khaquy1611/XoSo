import React, { useState, useEffect } from "react";
import MasterLayout from "../components/Layout";
import { Row, Button, Select , Space  , DatePicker ,Input  } from "antd";
import styles from "./css/HistoryPage.module.css";
import VietTel from "../img/Viettel.png";
import Vinaphone from "../img/Vinaphone.png";
import VinamMobile from "../img/Vietnamobile.png";
import Mobilephone from "../img/Mobifone.png";
import moment from 'moment';
const { Option } = Select;
const { RangePicker } = DatePicker;

function HistoryPage() {

const dateFormat = "YYYY-MM-DD";



  const Card = [
    "VietTel",
    "MobilePhone",
    "VinaPhone",
    "VietNamMobile",
  ];
  const status = [
   "Thành Công",
   "Chờ Xử Lí",
   "Bị Từ Chối"
  ];

  const children = [];
  const statusArr = [];

  for (let i = 0; i < status.length; i++) {
    statusArr.push(
      <Option className={styles.option} key={i.toString(36) + i}>
        {status[i]}
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
       <h3>Tra cứu thẻ nạp trong ngày</h3> 
       <div className={styles.HistoryRow}>
          <div className={styles.searchItem}>
          <h3>Lọc Dữ Liệu</h3>
              <Input placeholder="Basic usage" />
          </div>
          <div className={styles.searchItem}>
          <h3>Từ Ngày</h3>
          <Space direction="vertical" size={12}>
          <DatePicker className={styles.date} defaultValue={moment("2015-01-01" ,dateFormat)}
            />
          </Space>
          </div>
          <div className={styles.searchItem}>
          <h3>Đến Ngày</h3>
          <Space direction="vertical" size={12}>
          <DatePicker  className={styles.date} defaultValue={moment("2015-01-01" ,dateFormat)}
            />
          </Space>
          </div>
          <div className={styles.searchItem}>
          <h3>Tình Trạng Hoạt Động</h3>
          <Select
                  className={styles.select}
                  mode="multiple"
                  size="default"
                  defaultValue={status[0]}
                  className={styles.select}
                  showArrow={true}
                >
                  {statusArr}
                </Select>
          </div>
          <div className={styles.searchItem}>
          <h3>Nhà Cung Cấp</h3>
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
          <div className={styles.searchItem}>
            <Button size="large" shape="round" type="primary"  >Tìm</Button>
          </div>
       </div>

       <div className={styles.containerFix}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã thẻ</th>
                  <th>Seri</th>
                  <th>Mệnh giá</th>
                  <th>Thời gian</th>
                  <th>Ghi chú</th>
                  <th>Tình trạng</th>
                  <th>Thực nhận</th>
                  <th>Số dư</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>#12212112</td>
                  <td>2121212121</td>
                  <td>10.000.000</td>
                  <td>12/06/2021</td>
                  <td>OK</td>
                  <td>Hoạt Động</td>
                  <td>20.000.000</td>
                  <td>4.000.000</td>
                  <td>Sửa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Ghi chú: Thành công: thẻ nạp hoàn thành đã được hệ thống nạp và cộng tiền vào tài khoản của bạn.
Lỗi: Thẻ nạp sai, sai mã thẻ, mệnh giá hoặc đã bị sử dụng, không được cộng tiền vào tài khoản
Bảo Trì: Thẻ bạn nạp lên chưa được sử dụng, hệ thống chúng tôi bảo trì nạp thẻ mệnh giá loại thẻ này, vui lòng lưu lại thẻ, seri và pin và nạp lên hệ thống vào lúc khác.
Lịch sử nạp thẻ trong ngày hôm nay - sản lượng nạp thẻ hôm nay
Tra cứu nạp thẻ trong ngày</p>
      </div>
      </Row>
    </MasterLayout>
  );
}

export default React.memo(HistoryPage);
