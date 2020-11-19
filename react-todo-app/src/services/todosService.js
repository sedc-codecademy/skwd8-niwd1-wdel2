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
}

export default new TodosService();