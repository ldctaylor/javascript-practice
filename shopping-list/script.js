let shoppingListItems = ["milk", "eggs", "laundry detergent"];

updateItems()

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    updateItems();
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML="";
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
}
