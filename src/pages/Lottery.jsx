import React from "react";
import MasterLayout from "../components/Layout";
import styles from "../pages/css/SouthPage.module.css";
import { Row, Col } from "antd";
import Tabs from "react-accessible-tabs";
import CustomTabContentNort from "../components/CustomTabContentNort/CustomTabContentNort";
import CustomTabContentSouth from "../components/CustomTabContentSouth/CustomTabContentSouth";
import CustomTabContentMiddle from "../components/CustomTabContentMiddle/CustomTabContentMiddle";
import TimerCountDown from "../components/TimerCoutDown/TimerCountDown";
function LotteryPage() {
  const tabContent = [
    {
      label: "XSMB",
      content: <CustomTabContentNort />,
    },
    {
      label: "XSMN",
      content: <CustomTabContentSouth />,
    },
    {
      label: "XSMT",
      content: <CustomTabContentMiddle />,
    },
    {
      label: "3P",
      content: <TimerCountDown seconds={0} minutes={3} />,
    },
    {
      label: "5P",
      content: <TimerCountDown seconds={0} minutes={5} />,
    },
    {
      label: "10P",
      content: <TimerCountDown seconds={0} minutes={10} />,
    },
  ];
  const initialSelectedIndex = 4;
  return (
    <MasterLayout>
      <Row className={styles.main}>
        <marquee>Chúc mừng năm mới, An Khang Thịnh Vượng & Phát Tài</marquee>
        <div className={styles.container}>
          <div className={styles.row}>
            <Tabs
              data={tabContent}
              initialSelectedIndex={initialSelectedIndex}
            />
            <div className={styles.containerFix}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Loại Hình</th>
                    <th>Số Cược</th>
                    <th>Điểm</th>
                    <th>Tiền Cược</th>
                    <th>Kết Qủa</th>
                    <th>Tiền Thắng / Lần / Số</th>
                    <th>Giờ Cược</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </Row>
    </MasterLayout>
  );
}

export default React.memo(LotteryPage);
