(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function n(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+`-`+t[e[n+4]]+t[e[n+5]]+`-`+t[e[n+6]]+t[e[n+7]]+`-`+t[e[n+8]]+t[e[n+9]]+`-`+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}var r=new Uint8Array(16);function i(){return crypto.getRandomValues(r)}function a(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():o(e,t,n)}function o(e,t,r){e||={};let a=e.random??e.rng?.()??i();if(a.length<16)throw Error(`Random bytes length must be >= 16`);if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){if(r||=0,r<0||r+16>t.length)throw RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[r+e]=a[e];return t}return n(a)}var s=class{constructor(e){this.id=a(),this.description=e,this.done=!1,this.createdAt=new Date}},c={All:`all`,Completed:`completed`,Pending:`pending`},l={todos:[new s(`Piedra del alma`),new s(`Piedra del infinito`),new s(`Piedra del tiempo`),new s(`Piedra del poder`),new s(`Piedra del espacio`)],filter:c.All},u=()=>{d(),console.log(`InitStore`)},d=()=>{if(!localStorage.getItem(`state`))return;let{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem(`state`));l.todos=e,l.filter=t},f=()=>{localStorage.setItem(`state`,JSON.stringify(l))},p={addTodo:e=>{if(!e)throw Error(`Description is required`);l.todos.push(new s(e)),f()},deleteCompleted:()=>{l.todos=l.todos.filter(e=>!e.done),f()},deleteTodo:e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},getCurrentFilter:()=>l.filter,getTodos:(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(e=>e.done);case c.Pending:return l.todos.filter(e=>!e.done);default:throw Error(`Option ${e} is not valid`)}},initStore:u,loadStore:d,setFilter:(e=c.All)=>{l.filter=e,f()},toggleTodo:e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()}},m=e=>{if(!e)throw Error(`A TODO object is required`);let{done:t,description:n,id:r}=e,i=`
    <div class="view">
      <input class="toggle" type="checkbox" ${t?`checked`:``}>
      <label>${n}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `,a=document.createElement(`li`);return a.innerHTML=i,a.setAttribute(`data-id`,r),t&&a.classList.add(`completed`),a},h,g=e=>{if(h||=document.querySelector(e),!h)throw Error(`Element ${e} not found`);h.innerHTML=p.getTodos(c.Pending).length},_,v=(e,t=[])=>{if(_||=document.querySelector(e),!_)throw Error(`Element ${e} not found`);_.innerHTML=``,t.forEach(e=>{_.append(m(e))})},y={TodoList:`.todo-list`,NewTodoInput:`#new-todo-input`,ClearCompleted:`.clear-completed`,TodoFilters:`.filtro`,PendingCountLabel:`#pending-count`};p.initStore(),(t=>{let n=()=>{let e=p.getTodos(p.getCurrentFilter());v(y.TodoList,e),r()},r=()=>{g(y.PendingCountLabel)};(()=>{let r=document.createElement(`div`);r.innerHTML=e,document.querySelector(t).append(r),n()})();let i=document.querySelector(y.NewTodoInput),a=document.querySelector(y.TodoList),o=document.querySelector(y.ClearCompleted),s=document.querySelectorAll(y.TodoFilters);i.addEventListener(`keyup`,e=>{e.keyCode===13&&e.target.value.trim().length!==0&&(p.addTodo(e.target.value),n(),e.target.value=``)}),a.addEventListener(`click`,e=>{let t=e.target.closest(`[data-id]`);p.toggleTodo(t.getAttribute(`data-id`)),n()}),a.addEventListener(`click`,e=>{let t=e.target.closest(`[data-id]`),r=e.target.className===`destroy`;!t||!r||(p.deleteTodo(t.getAttribute(`data-id`)),n())}),o.addEventListener(`click`,()=>{p.deleteCompleted(),n()}),s.forEach(e=>{e.addEventListener(`click`,e=>{switch(s.forEach(e=>e.classList.remove(`selected`)),e.target.classList.add(`selected`),e.target.text){case`Todos`:p.setFilter(c.All);break;case`Pendientes`:p.setFilter(c.Pending);break;case`Completados`:p.setFilter(c.Completed)}n()})})})(`#app`);