export const initialState = {
    todoArray:[
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589,
    },
    {
        item: "Try out Reducers",
        completed: false,
        id: 3892987590,
    }
]}

export const todoReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}