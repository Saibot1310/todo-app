import html from './app.html?raw';
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

const ElementsIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompleted: '.clear-completed',
};
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementsIDs.TodoList, todos);
  }

  // Cuando la función App() se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newDescriptionInput = document.querySelector(ElementsIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementsIDs.TodoList);
  const clearCompletedButton = document.querySelector(ElementsIDs.ClearCompleted);

  // Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;

    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();

    event.target.value = '';

  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');

    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    const isDetroyElement = event.target.className === 'destroy';

  if (!element || !isDetroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  clearCompletedButton.addEventListener('click', () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

}