// Variables

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter =  document.getElementById('filter');



// Function

const onAddItemSubmit = (e) =>{
    e.preventDefault();
    
    const newItem = itemInput.value;

    if(itemInput.value == ''){
        alert("Please enter an item");
        return;
    }

    // Items to DOM
    addItemToDOM(newItem);

    // Items to LocalStorage

    addItemToStorage(newItem); 

    checkUI();
}

// Local storage to DOM

const addItemToDOM = (item) =>{
    
    // Create a list
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    
    // Add li to the DOM
    
    itemList.appendChild(li);
    itemInput.value = '';
    
    // console.log(button)
    // console.log(itemList)
    // console.log('success');
    // console.log(li)
}


// Items to localStorage function

const addItemToStorage = (item) =>{
    let itemsFromStorage;

    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    // ADD new item
    itemsFromStorage.push(item);

    // Convert to JSON storage and set it to localstorage

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

// Fetch items from local storage

const fetchItemsFromStorage = () =>{
    let itemsFromStorage;

    if(localStorage.getItem('items')=== null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemsFromStorage.forEach(item =>{
        addItemToDOM(item);
        checkUI();
    });
}




// Secondary Function

const createButton = (classes) =>{
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;

    // console.log(button)

}



// Third Function
const createIcon = (classes) =>{
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


// Remove Item
const removeItem = (e) =>{
    if(e.target.parentElement.classList.contains('remove-item')){
      if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();
    } 
    }

    checkUI();
}


// Clear Button

const clearItems = () =>{

    if(confirm("Do You Want To Remove All?")){
        while(itemList.firstChild){
            itemList.removeChild(itemList.firstChild);
            checkUI();
        }
    }
}

// Filter Items 

const filterItems = (e) =>{
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item =>{
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }
    });

    // console.log(text, items);
}


// Check UI everytime
const checkUI = () =>{

    const items = itemList.querySelectorAll('li');

    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
} 

// Event Listener
itemForm.addEventListener('submit',onAddItemSubmit);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
window.addEventListener('load',fetchItemsFromStorage);

checkUI();