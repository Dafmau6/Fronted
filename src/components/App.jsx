import React, { useEffect } from 'react';
import '@style/global.scss'
import { Layout, theme } from 'antd';
import ContentDisplay from '@layout/ContentDisplay';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const { Header, Content, Footer } = Layout;


const App = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    useEffect(() => {
        document.title = "Mi increíble aplicación React";
        }, []);

    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
};

export default App;