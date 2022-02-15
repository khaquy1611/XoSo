import React from 'react'
import { Layout } from 'antd';
import Header from '../components/partials/Header/Header';
import Footer from '../components/partials/Footer/Footer';
const Content = Layout;
function MasterLayout(props) {
  return (
    <Layout className="layout">
    <Header />
    <Content styles={{ padding: '0 50px' }}>
    <div className="site-layout-content">
        {props.children}
    </div>
    </Content>
    <Footer />
    </Layout>
  )
}

export default React.memo(MasterLayout)