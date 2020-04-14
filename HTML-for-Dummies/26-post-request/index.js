var url = 'http://localhost:9999/todo';
axios.get(url).then(function(res) {
    var items = res.data;
    render(items);
});

var htmlList = document.getElementById('todo-list');
var btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', addItem);
htmlList.addEventListener('click', onClicked);

function onClicked(event) {
    var button = event.target;
    var i = parseInt(button.dataset.id);
    todoList.splice(i, 1);
    render();
}

function addItem() {
    /**
    - get value in newItem
    - push in array
    - re-render
    - clear input
    */
    var input = document.getElementById('newItem');
    var newItem = { content: input.value };
    axios.post(url, newItem).then(function(item) {
        console.log(item);
    });
    input.value = '';
    axios.get(url).then(function(res) {
        var items = res.data;
        render(items);
    });
}

function render(items) {
    var content = items.map(function(item, i) {
        return '<li>' + item.content + ' <button data-id="' + i + '">Delete</button></li>';
    });
    htmlList.innerHTML = content.join('');
};