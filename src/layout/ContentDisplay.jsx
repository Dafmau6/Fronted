import React from 'react'; 
import { Layout } from 'antd'; 
import NavigationMenu from './NavigationMenu'; 
import RouteResolver from './RouteResolver';
import { BrowserRouter as Router } from 'react-router-dom';
//next.js que se púede  usar para un mejor manejo de Router
const ContentDisplay = () => (
    <Layout>
        <Router>
            <NavigationMenu />
            <RouteResolver /> 
        </Router>
    </Layout>
);
export default ContentDisplay;