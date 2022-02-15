import React , { useState } from "react";
import styles from "./TabContent.module.css";
import I1 from "../../img/l1.gif";
import I2 from "../../img/l2.gif";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
function TabContent(props) {
    const { activeTabId } = props;
    const [visible , setVisible] = useState(() => {
        const initialState = activeTabId == 1 ? 6 : 3;
        return initialState;
    });

    const showMoreItem = (value) => {
        if(visible === 6) {
          setVisible(prev => prev  + value);
        }else {
          setVisible(prev => prev  - value);
        }
    }
  return (
    <>
      <div className={styles.row}>
        {activeTabId == 1 ? (
          <div className={styles.right}>
          <Link to = "/sign-up">
          <img src={I1} />
          </Link>
          </div>
        ) : (
          ""
        )}

        <div className={styles.tabContent}>
          {props.tab.img.slice(0 , visible).map((item, index) => (
            <>
              <div className={`${styles.tabMiddle}`}>
                <div className={`${styles.tabItem}`} key={item.id}>
                <Link to={`${item.link}`}>
                  <img src={item.source} alt={item.name} title={item.title} />
                </Link>
                </div>
              </div>
            </>
          ))}

          {activeTabId == 1 ? (
      <Button  onClick={() => showMoreItem(3)}className={styles.btnLoadMore} type="primary" shape="round" size="large">
      {visible === 6 ? "Tải Thêm Trò Chơi" : "Ẩn Trò Chơi" }
      </Button>) : ""}
        </div>
        {activeTabId == 1 ? (
          <div className={styles.right}>
          <Link to = "/sign-up">
          <img src={I2} />
          </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default React.memo(TabContent);
