import React from "react";
import '@style/global.scss'
import { Layout, theme } from 'antd';
import ContentDisplay from '@layout/ContentDisplay';
const { Header, Content, Footer } = Layout;


const ListarTarea = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    return (
    <h1>Hola mundo</h1>
    )
};

export default ListarTarea;