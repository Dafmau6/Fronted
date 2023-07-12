import React from "react";
import '@style/global.scss'
import { Layout, theme } from 'antd';
import ContentDisplay from '@layout/ContentDisplay';

const { Header, Content, Footer } = Layout;


const App = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    return (
        <Layout> 
            <Header style={{
                padding: 0, background: colorBgContainer

            }} />

            <ContentDisplay /> 

            visualización de contenido

            <Footer style={{ textAlign: 'center' }}>
                2020 Odisea en el Espacio
            </Footer> 
        </Layout>
    );
};

export default App;