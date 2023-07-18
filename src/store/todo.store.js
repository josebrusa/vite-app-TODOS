import { Todo } from "../todos/models/todos.models";

const Filters = {
    All: "all",
    Completed: "Completed",
    Pending: "Pending",
};

const state = {
    todos: [
        new Todo("Piedra del alma"),
        new Todo("Piedra del poder"),
        new Todo("Piedra del tiempo"),
    ],
    filter: Filters.All,
};

const initStore = () => {
    console.log(state);
    console.log("initStore 🥑");
};

export default {
    initStore,
};
