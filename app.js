const addForm = document.querySelector('.add');
const list = document.querySelector('.to-do');
const search = document.querySelector('.search input');
const reset = document.querySelector('.reset');

const generateLITemplate = todo => {

    const html = `<li class="list-group-item d-flex justify-content-between align-item-center">
        <span>${todo}</span>
        <i class="bi-trash delete"></i>
        </li>`;

    list.innerHTML += html;
};

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);

    if(todo.length){
        generateLITemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodoBy = term => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', (e) => {
    const term = search.value.trim().toLowerCase();
    filterTodoBy(term)
});

document.querySelector('.search').addEventListener('submit', (e) => {
    e.preventDefault();
});

reset.addEventListener('click', (e) => {
    console.log('reset');
    Array.from(list.children)
        .forEach((todo) => todo.classList.remove('filtered'));
});