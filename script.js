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

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    
    // console.log(li)
    // console.log('success');

    
}






// Event Listener
itemForm.addEventListener('submit',addItem);
