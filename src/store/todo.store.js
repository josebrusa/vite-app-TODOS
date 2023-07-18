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

const loadStore = () => {
    throw new Error("Not implemented");
};

const getTodo = (filter = Filters.All) => {
    throw new Error("Not implemented");
};

/**
 *
 * @param {String} description
 */

const addTodo = (description) => {
    throw new Error("Not implemented");
};
/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
    throw new Error("Not implemented");
};

const deleteTodo = (todoId) => {
    throw new Error("Not implemented");
};

const deleteCompleted = (todoId) => {
    throw new Error("Not implemented");
};

const setFilter = (newFilter = Filters.All) => {
    throw new Error("Not implemented");
};

const getCurrentFilter = () => {
    throw new Error("Not implemented");
};
export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
};
