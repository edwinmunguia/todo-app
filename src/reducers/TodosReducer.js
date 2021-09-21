const todosReducer = (prevState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return [...prevState, action.newTodo];
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