import React, { useState, useEffect } from "react";
import MasterLayout from "../components/Layout";
import { Row, Col, Button, Select } from "antd";
import styles from "../pages/css/WithDrawPage.module.css";

const { Option } = Select;
function WithDrawPage() {
  const Bank = ["VietTinBack", "Đông Á Bank", "VietComBank", "Ngân Hàng ACB"];
  const bankArr = [];

  for (let i = 0; i < Bank.length; i++) {
    bankArr.push(
      <Option className={styles.option} key={i.toString(36) + i}>
        {Bank[i]}
      </Option>
    );
  }

  return (
    <MasterLayout>
      <Row className={styles.main}>
        <div className={styles.container}>
          <div className={styles.withDrawRow}>
            <div className={styles.withDrawLeft}>
              <h3>Rút tiền</h3>
              <form name="" method="" action="">
                <div className={styles.formGroup}>
                  <p>Số Dư</p>
                  <input type="text" id="number" value="0đ" readonly required />
                </div>
                <div className={styles.formGroup}>
                  <p>Số Tiền</p>
                  <input
                    type="number"
                    id="number"
                    require
                    min="1"
                    max="10000"
                    required
                  />
                </div>
                <p>VNĐ</p>
                <p>
                  Tổng Số Tiền Rút: <span>0đ</span>
                </p>
                <div className={styles.formGroup}>
                  <Select
                    className={styles.select}
                    mode="multiple"
                    size="default"
                    defaultValue={Bank[0]}
                    showArrow={true}
                  >
                    {bankArr}
                  </Select>
                </div>
                <Button type="danger" shape="round" size="large">
                  Rút Tiền
                </Button>
                <p>
                  Lưu ý: Bạn chỉ được rút tiền khi cược đủ số tiền đã nạp! Tránh
                  tình trạng mới nạp vào rồi rút!
                </p>
              </form>
            </div>
            <div className={styles.withDrawRight}>
              <h3>Thêm Tài Khoản Ngân Hàng</h3>
              <form name="" method="" action="">
                <div className={styles.formGroup}>
                  <p>Số Tài Khoản</p>
                  <input type="text" id="number" value="" required />
                </div>
                <div className={styles.formGroup}>
                  <p>Tên Chủ Tài Khoản</p>
                  <input type="text" value="" name="" />
                </div>
                <div className={styles.formGroup}>
                  <p>Ngân Hàng</p>
                  <Select
                    className={styles.select}
                    mode="multiple"
                    size="default"
                    defaultValue={Bank[0]}
                    showArrow={true}
                  >
                    {bankArr}
                  </Select>
                </div>
                <Button type="danger" shape="round" size="large">
                  Thêm Ngân Hàng
                </Button>
              </form>
            </div>
          </div>
          <h3>Lịch Sử Rút Tiền</h3>
          <div className={styles.containerFix}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Số Tiền Thực Nhận</th>
                  <th>Ngân Hàng</th>
                  <th>Chi Nhánh</th>
                  <th>Ten TK</th>
                  <th>Số TK</th>
                  <th>Thời gian</th>
                  <th>Số Dư Cuối</th>
                  <th>Cập Nhập Cuối</th>
                  <th>Trạng Thái</th>
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
                  <td>Đang Chờ</td>
                  <td>Đang Chờ</td>
                  <td>Đang Chờ</td>
                  <td>Đang Chờ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "red" }}>
            Ghi chú: Thành công: Chuyển tiền về tài khoản của bạn thành công.
            Hủy: Không thể chuyển tiền về tài khoản bạn do bảo trì ngân hàng
            hoặc nhập sai thông tin thẻ, tiền đã được hoàn về tài khoản của bạn!
            Bảo Trì: Chúng tôi tạm ngừng hoạt động chuyển khoản do hệ thống hoặc
            ngân hàng đang bảo trì.
          </p>
        </div>
      </Row>
    </MasterLayout>
  );
}

export default React.memo(WithDrawPage);
