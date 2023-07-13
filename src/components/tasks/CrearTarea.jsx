import React, {useEffect, useState} from 'react';
import useCreateTask from '@hooks/useCreateTask';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;
const CrearTarea = () => {

    const crear = useCreateTask();

    const onFinish = (values) => {
        console.log('Success:', values);
        crear.mutate(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
    

        <Form
            // Propiedades del formulario
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}

            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                label="Identificación"
                name="id"

                rules={[{
                    required: true, message: 'Please input the title!'
                }]}
            >
                <Input /> 
            </Form.Item>

            <Form.Item
                label="Nombres"
                name="nomb"

                rules={[{
                    required: true, message: 'Please input the title!'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Apellidos"
                name="apell"

                rules={[{
                    required: true, message: 'Please input the title!'
                }]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="Tipo de contrato"
                name="tip_contra"
                rules={[{
                    required: true, message: 'Please input the description!'
                }]}
            >
                <Input.TextArea /> 
                
            </Form.Item >

            < Form.Item
                label="Genero"
                name="gen"
                rules={
                    [{
                        required: true, message: 'Please select the status!'
                    }]}
            >
                <Select placeholder="Selecciona el genero">
                    <Option value="Masculino">Masculino</Option>
                    <Option value="Femenino">Femenino</Option>
                </Select>
            </Form.Item >


            < Form.Item wrapperCol={{ offset: 8, span: 16 }
            } >
                <Button type="primary" htmlType="submit">
                    Agregar
                </Button>
            </Form.Item >
        </Form >
    
    );
};

export default CrearTarea;