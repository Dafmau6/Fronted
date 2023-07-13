import React,{useState} from "react";
import '@style/global.scss'
import { Layout, theme } from 'antd';
import { Form, Input, Button, Select, DatePicker} from 'antd';
import ContentDisplay from '@layout/ContentDisplay';
const { Header, Content, Footer } = Layout;


const ListarTarea = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const [datos, setDatos] = useState({
        Identificacion: '',
        Nombres: '',
        Apellidos: '',
        Tipocontrato: '',
        Genero: '',
    });

    const handleChange = event => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Realizar acciones con los datos ingresados, como enviar a un servidor
        console.log(datos);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                Identificacion:
                <Input
                    type="text"
                    name="identificacion"
                    value={datos.Identificacion}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Nombres:
                <Input
                    type="text"
                    name="nombres"
                    value={datos.Nombres}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Apellidos:
                <Input
                    type="text"
                    name="apellido"
                    value={datos.Apellidos}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Tipo de Contrato:
                <Input
                    type="text"
                    name="tipocontrato"
                    value={datos.Tipocontrato}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Genero:
                <Input
                    type="text"
                    name="genero"
                    value={datos.Genero}
                    onChange={handleChange}
                />
            </label>
            <br />
            <Button type="primary" htmlType="submit">
                    Agregar
                </Button>
            <br />

            <h3>Datos ingresados:</h3>
            <p>Identificacion: {datos.Identificacion}</p>
            <p>nombres: {datos.Nombres}</p>
            <p>Apellidos: {datos.Apellidos}</p>
            <p>TipoContrato: {datos.Tipocontrato}</p>
            <p>genero: {datos.genero}</p>
        </Form>
    );
};

export default ListarTarea;