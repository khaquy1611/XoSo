import React , { useState , useMemo } from 'react';
import Navigation from '../NavigationTabs/NavigationTabs';
import TabContent from '../TabConTent/TabContent';

function Tabs(props) {
    const [activeTabId, setActiveTab] = useState(props.tabs[0].id);

    const activeTab = useMemo(() => (
        props.tabs.find((tab) => (
            tab.id === activeTabId
        ))
    ), [activeTabId, props.tabs]);
  return (
    <div className={`tabs`}>
    <Navigation tabs={props.tabs} onNavClick={setActiveTab}
                activeTabId={activeTabId}/>
    <TabContent tab={activeTab} activeTabId={activeTabId}/>
    </div>
  )
}

export default Tabs