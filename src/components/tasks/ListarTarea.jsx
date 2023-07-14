import React, { useState, useEffect } from 'react';
import '@style/global.scss'
import { Layout, theme } from 'antd';
import { Form, Input, Button, Select, DatePicker} from 'antd';
import ContentDisplay from '@layout/ContentDisplay';
const { Header, Content, Footer } = Layout;
import { useListTask } from '@hooks/useListTask';




const ListarTarea = () => {
    const { data: tasks, isLoading, isError, error } = useListTask();

    if (isLoading) {
        return <span>Cargando...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.nombres}</h2>
                    <p>{task.apellidos}</p>
                    <p>{task.tipocontrato}</p>
                    <p>{task.genero}</p>

                </div>
            ))}
        </div>
    );
};

export default ListarTarea;
