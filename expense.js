const ul = document.querySelector('.expense-list');

export function handleFormSubmit(event){
        const amount= event.target.amount.value;
        const description= event.target.description.value;
        const category= event.target.category.value;
    event.preventDefault();
    let myobj = {
        amount: amount,
        description: description,
        category: category
    }

    let myobj_serialised = JSON.stringify(myobj);
    localStorage.setItem(myobj.description, myobj_serialised);
    event.target.amount.value = "";
    event.target.description.value = "";
    event.target.category.value = "Choose Category";
    displayDetails(myobj);
}

function displayDetails(myobj) {
const newLi = document.createElement('li');
newLi.id = myobj.description;
newLi.textContent = myobj.amount+'-'+myobj.category+'-'+myobj.description;
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete Expense';
    deleteButton.onclick = () => {
     localStorage.removeItem(newLi.id);
     ul.removeChild(newLi); 
    }
//newLi.innerHTML = `${myobj.amount} - ${myobj.category} - ${myobj.description} <button class = "delete-button">Delete Expense</button> <button class = "edit-button">Edit Expense</button>`;
const editButton = document.createElement('input');
editButton.type = 'button';
editButton.value = 'Edit Expense';
editButton.onclick = () => {
    amount.value = myobj.amount;
    description.value = myobj.description;
    category.value = myobj.category;
 localStorage.removeItem(newLi.id);
 ul.removeChild(newLi); 
}
newLi.appendChild(deleteButton);
newLi.appendChild(editButton);
ul.appendChild(newLi);
}

//export {handleFormSubmit, displayDetails};