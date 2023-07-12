import CrearTarea from '@components/tasks/CrearTarea';
import ListarTarea from '@components/tasks/ListarTarea';
import { AlertOutlined, UserOutlined, UnorderedListOutlined } from
    "@ant-design/icons";
const routes = [
    {
        path: '/crear',
        component: CrearTarea,
        title: 'Crear Tarea d',
        icon: AlertOutlined
    },
    {
        path: '/listar',
        component: ListarTarea,
        title: 'Listar Tareas',
        icon: UnorderedListOutlined
    },
    {
        path: '*',
        component: () => null,
        title: 'Inicio',
        icon: UserOutlined
    }
];
export default routes;