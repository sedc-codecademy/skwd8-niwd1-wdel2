const { FetchService } = require("./fetchService");

class TodosService {
    async getAllTodos() {
        const result = await FetchService.getRequest('todos');
        if (result.ok) {
            return await result.json();
        }
        else {
            throw new Error('Fetching todos failed.');
        }
    }

    async createTodo(payload) {
        const result = await FetchService.postRequest('todos', payload);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Creating todo failed');
        }
    }
}

export default new TodosService();