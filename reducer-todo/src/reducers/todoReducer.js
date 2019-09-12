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
            console.log({
                ...state, todoArray: [...state.todoArray, {item: action.payload.stateText, completed: false, id: Date.now}]
            })
        case "DELETE_TASK":
            return {
                ...state, todoArray: state.todoArray.filter(element => element.completed === false)
            }
        case "TOGGLE_CLASSNAME":
            //console.log(state.todoArray[0].id)
            let clickNewState = state.todoArray.map(element => {
                if (`${element.id}` === action.payload) {
                    console.log('match');
                    console.log(element);
                    console.log({...element, completed: !element.completed});
                    return {...element,completed: !element.completed}

                } else {
                    console.log('doesnt match')
                    return element;
                }
            });
            return clickNewState;
        default:
            return state;
    }
}
