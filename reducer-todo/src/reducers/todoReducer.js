export const initialState = {
    todoArray: [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589,
    },
    {
        item: "Try out Reducers",
        completed: false,
        id: 3892987590,
    },
    {
        item: "Testing 1",
        completed: false,
        id: 3892987591,
    },
    {
        item: "Say Hello To World",
        completed: false,
        id: 3892987592,
    },
]}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "SUBMIT_TEXT":
            return {
                ...state, todoArray: state.todoArray.push({item: action.payload.stateText, completed: false, id: Math.floor(action.payload.timeStamp)*1000000})
            }
        case "DELETE_TASK":
            return {
                ...state, todoArray: state.todoArray.filter(element => element.completed === false)
            }
        case "TOGGLE_CLASSNAME":
            let clickNewState = state.todoArray.map(item => {
                if (item.id === action.payload) {
                    return {
                    ...item,
                    completed: !item.completed
                    };
                } else {
                    return item;
                }
            });

            return clickNewState;
        default:
            return state;
    }
}
