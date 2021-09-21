const todosReducer = (prevState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const todoId = prevState[prevState.length - 1].id + 1;
            return [...prevState, { id: todoId, label: action.todoLabel, checked: false }];
        }
        case 'DELETE_TODO': {
            return prevState.filter((todo) => todo.id !== action.todo.id);
        }
        case 'TOGGLE_TODO': {
            const mappedList = prevState.map((todo) => todo.id === action.todo.id ? { ...todo, checked: !todo.checked } : { ...todo });
            return mappedList;
        }
        default:
            return prevState;
            break;
    }
}

export default todosReducer;