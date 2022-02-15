import React, { useState, useRef, useEffect } from "react";
import { Select, Input, InputNumber, Button, Modal, Collapse } from "antd";
import styles from "./TimerCountDown.module.css";
const { Option } = Select;
const { Panel } = Collapse;
function TimerCountDown(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [seconds, setSeconds] = useState(
    Math.floor(Math.random() * props.seconds) + 1
  );
  const [minutes, setMinutes] = useState(
    Math.floor(Math.random() * props.minutes) + 1
  );
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && seconds === 0) {
        setMinutes(props.minutes);
        setSeconds(props.seconds);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
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

  const result = [
    "03",
    "04",
    "12",
    "22",
    "27",
    "35",
    "36",
    "38",
    "39",
    "41",
    "48",
    "50",
    "53",
    "58",
    "58",
    "59",
    "61",
    "63",
    "66",
    "66",
    "67",
    "68",
    "71",
    "73",
    "85",
    "89",
    "92",
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
  const resultPrize = [
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
    {
      id: 9,
      prize: "Giải bảy",
      value: "54 - 97 - 92 - 01",
    },
    {
      id: 10,
      prize: "Giải bảy",
      value: "54 - 97 - 92 - 01",
    },
    {
      id: 8,
      prize: "Giải bảy",
      value: "54 - 97 - 92 - 01",
    },
  ];

  // mảng dữ liệu kì hạn
  const duration = [
    {
      id: 3,
      limit: "3P-14022022-1112",
    },
    {
      id: 5,
      limit: "5P-14022022-20",
    },
    {
      id: 10,
      limit: "14022022-14322",
    },
    {
      id: 11,
      limit: "14022022-13342",
    },
    {
      id: 12,
      limit: "14022022-13433",
    },
    {
      id: 13,
      limit: "14022022-13343",
    },
    {
      id: 14,
      limit: "14022022-1322",
    },
  ];

  const renderTimeDeposit = (activeTab) => {
    return duration.map((item, index) => (
      <Collapse ghost="true" defaultActiveKey={["1"]}>
        <Panel header={`Kì ${item.limit}`} className={styles.Collapse}>
          <div className={styles.sectionRow}>
            <div className={styles.sectionLeft}>
              <div className={styles.overflow}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Xổ số 3 phút 14/02/2022 12:27</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultPrize.map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.prize}</td>
                        <td colSpan={2}>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.sectionRight}>
              <div className={styles.overflow}>
                <table className={styles.table}>
                  <tbody>
                    <span>Loto:</span>
                    {result.map((item, index) => (
                      <tr key={index}>
                        <td colSpan="2">{item}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    ));
  };
  // lấy ra kì hạn theo số phút
  const PrinftLimit = (duration) => {
    return duration.find((item, index) => {
      return item.id === props.minutes;
    });
  };

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
      <div className={styles.timer}>
        <div className={styles.timerLeft}>
          <form className="" name="" value="" method="" action="">
            <h1 className={styles.timerText}>
              Cược Xổ Số {props.minutes} Phút Kì{" "}
              <span>{PrinftLimit(duration).limit}</span>
            </h1>
            <div className={styles.timerLottery}>
              00:{minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <p>
              Chú ý: Bạn đang ở kì 3P-14022022-1112 vui lòng đặt cược trước 11
              giờ 15 phút nên đặt trước 30s. Hoặc tải lại trang để cược cho kì
              tiếp theo, nếu không bạn đặt sau thời gian kì quay hệ thống sẽ
              hoàn tiền lại
            </p>
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
                Chú ý: Vui lòng ghi ,(phẩy) giữa các số/cặp xiên cần cược. Ví
                dụ: chơi lô, đề hoặc 3 càng là{" "}
                <span style={{ color: "red" }}>20 50 61 hoặc 20, 50, 61</span>{" "}
                còn 2 cặp Xiên 2 ghi là:
                <span style={{ color: "red" }}>29 32, 28 47</span> hoặc 2 cặp
                xiên 3:{" "}
                <span style={{ color: "red" }}>32 92 12, 94 92 36 </span>
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
            </div>
          </form>
        </div>

        {/* timer right */}
        <div className={styles.timerRight}>
          <h3 className={styles.text}>Kết Qủa Sổ Xố 3 Phút</h3>
          <div className={styles.progress}>Kì #3P-14022022-1221 #4100</div>
          <div className={styles.overflow}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Xổ số 3 phút 14/02/2022 12:27</th>
                </tr>
              </thead>
              <tbody>
                {resultPrize.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.prize}</td>
                    <td colSpan={2}>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.overflow}>
            <table className={styles.table}>
              <tbody>
                <span>Loto:</span>
                {result.map((item, index) => (
                  <tr key={index}>
                    <td colSpan="2">{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {renderTimeDeposit()}
        </div>
      </div>
    </>
  );
}

export default React.memo(TimerCountDown);
