// Находим поля для ввода новой задачи и список задач
let form = document.getElementById('addForm');
let list = document.getElementById('items');
let filter = document.getElementById('filter');

// Запрещаем перезагрузку страницы при нажатии кнопки 'Добавить'
form.addEventListener('submit', addItems);

function addItems(e) {
    e.preventDefault();
    // Определяем значение в поле ввода 
    let newItemInput = document.getElementById('newItemText');
    let newItemText = newItemInput.value;
    
    // Создаем новый элемент в список задач и добавляем ему класс
    let newList = document.createElement('li');
    newList.className = 'list-group-item';
    
    // Добавляем текст нового элемента в список
    let newTextNode = document.createTextNode(newItemText);
    newList.appendChild(newTextNode);
    
    // Создаем кнопку 'Удалить' и добавляем ей класс и дата атрибут
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Удалить'));
    deleteBtn.className = 'btn btn-light btn-sm float-right';
    deleteBtn.dataset.action = 'delete';
    
    // Добавляем кнопку в элемент списка
    newList.appendChild(deleteBtn);
    
    // Добавляем новый элемент в список
    list.prepend(newList);

    // Очищаем поле ввода после добавления новой задачи
    newItemInput.value = '';
}

// Обработчик клика по кнопке 'Удалить' в списке
list.addEventListener('click', removeItems);

function removeItems(e) {
    if (
        e.target.dataset.action === 'delete'
    ) {
        if (confirm('Удалить задачу?')) {
            e.target.parentNode.remove();
        }
    }
}

// Отслеживаем нажатие на клавиши клавиатуры в поле 'поиск по списку'
filter.addEventListener('keyup', filterItems);


function filterItems(e) {
    let valueText = e.target.value.toLowerCase();
    let items = list.querySelectorAll('li');

    items.forEach(function(item) {
        let itemText = item.textContent.toLowerCase();
        if (itemText.indexOf(valueText) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
