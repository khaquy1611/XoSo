import React, { useState, useEffect } from "react";
import styles from "./CustomTabContentSouth.module.css";
import { Select, Input, InputNumber, Button, Modal } from "antd";
import Tools from "../../img/tools.png";
import Print from "../../img/print.gif";
const { Option } = Select;
// Đây là component nội dung của Tabs Sổ Xố Miền Nam
function CustomTabContentSouth() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // Nội dung của option select xổ số
  let contentLotterySelect = [
    {
      id: "1",
      content: "Bao Lô 2 Số (x99)",
    },
    {
      id: "2",
      content: "Bao Lô 3 Số (3CàngLô)  (x960)",
    },
    {
      id: "3",
      content: "Bao Lô 4 Số (4CàngLô)  (x8880)",
    },
    {
      id: "4",
      content: "Xiên 2   (x17)",
    },
    {
      id: "5",
      content: "Xiên 3  (x65)",
    },
    {
      id: "6",
      content: "Xiên 4  (x250)",
    },
    {
      id: "7",
      content: "[Đánh Đề đặc biệt]  (x99)",
    },
    {
      id: "8",
      content: "Đề đầu đuôi - Đầu  (x99)",
    },
    {
      id: "9",
      content: "Đề Đầu đuôi - Đuôi  (x99)",
    },
    {
      id: "10",
      content: "3 Càng Đề  (x960)",
    },
    {
      id: "11",
      content: "4 Càng Đề  (x8880)",
    },
    {
      id: "12",
      content: "Trượt Xiên 4  (x2)",
    },
    {
      id: "13",
      content: "Trượt Xiên 8  (x8)",
    },
    {
      id: "14",
      content: "Trượt Xiên 10  (x12)",
    },
  ];

  // Nội dung của Bảng Xem Tỉ Lệ Đặt Cược
  const ratio = [
    {
      id: 1,
      // tỉ lệ
      ratio: "Bao Lô 2 Số",
      // loại hình
      type: "1đ = 27,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 2,
      // tỉ lệ
      ratio: "Bao Lô 3 Số (3CàngLô)",
      // loại hình
      type: "1đ = 23,000đ ăn 960,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 3,
      // tỉ lệ
      ratio: "Bao Lô 4 Số (4CàngLô)",
      // loại hình
      type: "1đ = 23,000đ ăn 8,880,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 4,
      // tỉ lệ
      ratio: "Bao Lô 2 Số",
      // loại hình
      type: "1đ = 27,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 5,
      // tỉ lệ
      ratio: "Xiên 2",
      // loại hình
      type: "1đ = 1,000đ ăn 17,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 6,
      // tỉ lệ
      ratio: "Xiên 3",
      // loại hình
      type: "1đ = 1,000đ ăn 65,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 7,
      // tỉ lệ
      ratio: "Xiên 4",
      // loại hình
      type: "1đ = 1,000đ ăn 250,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 8,
      // tỉ lệ
      ratio: "[Đánh Đề đặc biệt]",
      // loại hình
      type: "1đ = 1,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 9,
      // tỉ lệ
      ratio: "Bao Lô 2 Số",
      // loại hình
      type: "1đ = 27,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 10,
      // tỉ lệ
      ratio: "Đề đầu đuôi - Đầu",
      // loại hình
      type: "1đ = 10,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 11,
      // tỉ lệ
      ratio: "Đề Đầu đuôi - Đuôi",
      // loại hình
      type: "1đ = 10,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 12,
      // tỉ lệ
      ratio: "Bao Lô 2 Số",
      // loại hình
      type: "1đ = 27,000đ ăn 99,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 13,
      // tỉ lệ
      ratio: "3 Càng Đề",
      // loại hình
      type: "1đ = 1,000đ ăn 960,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 14,
      // tỉ lệ
      ratio: "4 Càng Đề",
      // loại hình
      type: "1đ = 1,000đ ăn 8,880,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 15,
      // tỉ lệ
      ratio: "Trượt Xiên 4",
      // loại hình
      type: "1đ = 1,000đ ăn 2,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 15,
      // tỉ lệ
      ratio: "Trượt Xiên 8",
      // loại hình
      type: "1đ = 1,000đ ăn 8,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
    {
      id: 14,
      // tỉ lệ
      ratio: "Trượt Xiên 10",
      // loại hình
      type: "1đ = 1,000đ ăn 12,000đ",
      // nhà đài
      broadcasters: "Miền Bắc",
    },
  ];

  // kết quả sổ xố của các miền
  const country = [
    "Miền Bắc",
    "Miền Nam",
    "Miền Trung",
    "Hà Nội",
    "Quảng Bình",
    "Quảng Ngãi",
    "Quảng Trị",
    "Thái Bình",
    "Ninh Bình",
    "Hồ Chí Minh",
    "Bình Dương",
    "Bến Tre",
    "Bạc Liêu",
    "Đắc Lăk",
    "An Nông",
  ];

  const date = [
    "12/02/2022",
    "10/02/2022",
    "9/02/2022",
    "8/02/2022",
    "7/02/2022",
    "6/02/2022",
    "5/02/2022",
    "4/02/2022",
    "3/02/2022",
    "2/02/2022",
    "1/02/2022",
  ];

  // Bảng dữ liệu kết quả
  const result = [
    {
      id: 1,
      prize: "Giải ĐB",
      value: "85672",
    },
    {
      id: 2,
      prize: "Giải nhất",
      value: "12634",
    },
    {
      id: 3,
      prize: "Giải nhì",
      value: "82668 - 43280",
    },
    {
      id: 4,
      prize: "Giải ba",
      value: "35547 - 44127 - 32685 - 12715 - 46627 - 97553",
    },
    {
      id: 5,
      prize: "Giải tư",
      value: "2508 - 1327 - 3187 - 9628",
    },
    {
      id: 6,
      prize: "Giải năm",
      value: "7077 - 0872 - 4571 - 0074 - 8549 - 2776",
    },
    {
      id: 7,
      prize: "Giải sáu",
      value: "720 - 565 - 926",
    },
    {
      id: 8,
      prize: "Giải bảy",
      value: "54 - 97 - 92 - 01",
    },
  ];

  const children = [];
  let length = contentLotterySelect.length;
  for (let i = 0; i < length; i++) {
    children.push(
      <Option
        className={styles.option}
        key={i.toString(36) + contentLotterySelect[i].id}
      >
        {contentLotterySelect[i].content}
      </Option>
    );
  }
  return (
    <>
      <div className={styles.row}>
        <div className={styles.left}>
        <form className="" name="" action="" method="">
          <div className={styles.containerSelect}>
            <h3 className={styles.text}>Chọn Cược Xổ Số Miền Nam</h3>
            <Select
              mode="multiple"
              size="default"
              defaultValue={contentLotterySelect[0].content}
              className={styles.select}
              showArrow={true}
            >
              {children}
            </Select>
          </div>
          <div className={styles.containerSelect}>
            <p className={styles.paraph}>Đài Quay</p>
            <Select
              mode="multiple"
              size="default"
              defaultValue={country[0]}
              className={styles.select}
              showArrow={true}
            >
              {country.map((item, index) => (
                <Option key={index.toString()}>{item}</Option>
              ))}
            </Select>
          </div>

          <div className={styles.formContainer}>
            <form method="" action="" name="">
              <p className={styles.paraph}>
                Số (Bao Lô, Xiên, Đầu Đuôi, 3Càng...) cần cược
              </p>
              <Input
                className={styles.Input}
                placeholder="Số/xiên cần chơi VD: 43 94 23 - 2 xiên: 42 35, 43 98"
              />
              <p className={styles.paraph}>
                Số điểm (lô 1điểm=18.000đ, xem ở tỉ lệ cược..)
              </p>
              <InputNumber
                className={styles.Input}
                min={1}
                max={10}
                defaultValue={1}
              />
              <Button className={styles.btn} type="danger" size="large">
                Đặt Cược
              </Button>
            </form>
          </div>
          <p className={styles.paraph}>
            Chú ý: Vui lòng ghi ,(phẩy) giữa các số/cặp xiên cần cược. Ví dụ:
            chơi lô, đề hoặc 3 càng là{" "}
            <span style={{ color: "red" }}>20 50 61 hoặc 20, 50, 61</span> còn 2
            cặp Xiên 2 ghi là:
            <span style={{ color: "red" }}>29 32, 28 47</span> hoặc 2 cặp xiên
            3: <span style={{ color: "red" }}>32 92 12, 94 92 36 </span>
            <strong>Kiểm tra cược có gì báo lỗi tại chat cho Admin</strong>
          </p>
          <q className={styles.quote}>
            Lưu ý: Đối với lô miền bắc 1điểm=27.000đ sẽ ăn 98.000d, Đề/xiên
            1điểm=1000đ. Xem thêm ở đây
          </q>

          <Button className={styles.success} onClick={showModal}>
            Xem Tỉ Lệ
          </Button>
          <Modal
            title="Xem tỉ lệ ăn XSMB (Tính theo 1điểm)"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className={styles.overflow}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Loại Hình</th>
                    <th>Tỷ Lệ</th>
                    <th>Nhà Đài</th>
                  </tr>
                </thead>
                <tbody>
                  {ratio.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.type}</td>
                      <td>{item.ratio}</td>
                      <td>{item.broadcasters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Modal>
          </form>
        </div>
        <div className={styles.right}>
          <h3 className={styles.text}>Lịch Sử Kế Qủa</h3>
          <div className={styles.box}>
            <div className={styles.boxRow}>
              <div className={styles.dateSelect}>
                <p>
                  <span>Kết Qủa Xổ Số</span>
                  <Select
                    mode="multiple"
                    size="default"
                    defaultValue="Miền Bắc"
                    className={styles.SelectDate}
                    showArrow={true}
                  >
                    {country.map((item, index) => {
                      return <Option key={index}>{item}</Option>;
                    })}
                  </Select>
                </p>
                <p>
                  <span>Ngày</span>
                  <Select
                    mode="multiple"
                    size="default"
                    defaultValue="12/02/2022"
                    className={styles.SelectDate}
                    showArrow={true}
                  >
                    {date.map((item, index) => {
                      return <Option key={index}>{item}</Option>;
                    })}
                  </Select>
                </p>
              </div>
              <div className={styles.dateLogo}>
                <a href="">
                  <img src={Tools} alt="" name="" />
                </a>
                <a href="https://www.minhngoc.net.vn/vedo/in-ve-do.php?mien=2&vdn=12-02-2022&page=4&option=print">
                  <img src={Print} alt="" name="" />
                </a>
              </div>
            </div>
            <div className={styles.title}>KQXS MIỀN NAM</div>
            <div className={styles.overflow}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <td>Thứ Bảy</td>
                    <td>Ngày: 12/02/2022</td>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.prize}</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">Tỷ Gía Cược</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <Button
                        type="danger"
                        shape="round"
                        size="large"
                        onClick={showModal}
                      >
                        Xem Tỉ Gía Thắng Thua
                      </Button>
                      <Modal
                        title="Xem tỉ lệ ăn XSMB (Tính theo 1điểm)"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <div className={styles.overflow}>
                          <table className={styles.table}>
                            <thead>
                              <tr>
                                <th>Loại Hình</th>
                                <th>Tỷ Lệ</th>
                                <th>Nhà Đài</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ratio.map((item, index) => (
                                <tr key={item.id}>
                                  <td>{item.type}</td>
                                  <td>{item.ratio}</td>
                                  <td>{item.broadcasters}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </Modal>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(CustomTabContentSouth);
