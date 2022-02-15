import React from "react";
import styles from './Navigation.module.css';
function NavigationTabs(props) {
  return (

    <ul className={`${styles.tabs__nav}`}>
      {props.tabs.map((item) => (
        <li key={item.id} className={`${styles.tabs__item}`}>
          <button
            className={`${styles.tabs__button} ${
              props.activeTabId === item.id ? "active" : ""
            }`}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavigationTabs;
