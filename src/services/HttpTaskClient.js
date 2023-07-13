import HttpClient from './HttpClient';
class HttpTaskClient extends HttpClient {
    constructor() {
        super('https://kind-seal-stockings.cyclic.app');
    }
    createTask(taskData) {
        return this.post('/profesores', taskData);
    }
    getTasks() {

        return this.get('/profesores');
    }
    getTask(id) {
        return this.get(`/profesores/${id}`);
    }
    updateTask(id, taskData) {
        return this.put(`/profesores/${id}`, taskData);
    }
    deleteTask(id) {
        return this.delete(`/profesores/${id}`);
    }
    startTask(id) {
        return this.post(`/profesores/${id}/iniciar`);
    }
    finishTask(id) {
        return this.post(`/profesores/${id}/finalizar`);
    }
    declineTask(id) {
        return this.post(`/profesores/${id}/declinar`);
    }
}
export default HttpTaskClient;