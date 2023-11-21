// Variables

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


// Function

const addItem = (e) =>{
    e.preventDefault();
    
    const newItem = itemInput.value;

    if(itemInput.value == ''){
        alert("Please enter an item");
        return;
    }

    // Create a list
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = '';

    // console.log(itemList)
    // console.log(button)
    // console.log(li)
    // console.log('success');
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




// Event Listener
itemForm.addEventListener('submit',addItem);
