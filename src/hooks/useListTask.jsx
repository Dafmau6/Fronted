import { useQuery } from 'react-query';
import HttpTaskClient from '@services/HttpTaskClient';

const taskClient = new HttpTaskClient();

const getTasks = async () => {
    return await taskClient.getTasks();
}

export const useListTask = () => {
    return useQuery('tasks', getTasks);
}