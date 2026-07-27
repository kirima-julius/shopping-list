//Initial shopping list
let shoppingList = ["Milk", "Bread", "Eggs", "Rice", "Soap"]

//Dom Element

const newItemInput = document.getElementById("newItemInput");
const searchInput = document.getElementById("searchInput");

const addBtn = document.getElementById("addBtn");
const searchBtn = document.getElementById("searchBtn");
const countBtn = document.getElementById("countBtn");
const priorityBtn = document.getElementById("priorityBtn");

const priorityListElement = document.getElementById("priorityList");
const clearPriorityBtn = document.getElementById("clearPriorityBtn");

const itemCounts = document.getElementById("itemCounts");

const itemList = document.querySelector(".itemList");

//Task one

//Display all initial items

function displayItems() {
    itemList.innerHTML = "";

    shoppingList.forEach((item) => {

        const li = document.createElement("li");
        li.className = "item";
        li.textContent = item;

        const removeBtn1 = document.createElement("button");
        removeBtn1.innerHTML = "<i class='fa-solid fa-times'></i>";
        removeBtn1.className = "removeBtn1";

        removeBtn1.addEventListener("click", () => {
            removeItem(item);
        });

        li.appendChild(removeBtn1);

        itemList.appendChild(li);

    });
}

displayItems();

//ADDING ITEM

function addItem(item) {

    if (item === "") {
        alert("Item can't be empty");
        return;
    }

    shoppingList.push(item);

    displayItems();
    countItems();
    createPriorityList();

    newItemInput.value = "";

}

addBtn.addEventListener("click", () => {

    addItem(newItemInput.value.trim());

});

//REMOVING ITEM

function removeItem(item) {

    let index = shoppingList.indexOf(item);

    if (index !== -1) {

        shoppingList.splice(index, 1);

        displayItems();
        countItems();
        createPriorityList();

    }

}

//SEARCH ITEM

function searchItem(item) {

    if (item === "") {
        displayItems();
        return;
    }

    itemList.innerHTML = "";

    let found = false;

    shoppingList.forEach((currentItem) => {

        if (currentItem.toLowerCase().includes(item.toLowerCase())) {

            found = true;

            const li = document.createElement("li");
            li.className = "item";
            li.textContent = currentItem;

            const removeBtn1 = document.createElement("button");
            removeBtn1.innerHTML = "<i class='fa-solid fa-times'></i>";
            removeBtn1.className = "removeBtn1";

            removeBtn1.addEventListener("click", () => {
                removeItem(currentItem);
            });

            li.appendChild(removeBtn1);

            itemList.appendChild(li);

        }

    });

    if (!found) {

        alert(item + " Item not found!");
        displayItems();

    }

}

searchBtn.addEventListener("click", () => {

    const item = searchInput.value.trim();

    searchItem(item);

});

//COUNT ITEMS

function countItems() {

    const totalItems = shoppingList.length;

    itemCounts.textContent = `Total items: ${totalItems}`;

}

countBtn.addEventListener("click", () => {

    countItems();

});

//PRIORITY LIST

function createPriorityList() {

    priorityListElement.innerHTML = "";

    const priorityList = shoppingList.slice(0, 3);

    priorityList.forEach((item) => {

        const li = document.createElement("li");

        li.textContent = item;

        priorityListElement.appendChild(li);

    });

}

priorityBtn.addEventListener("click", () => {

    createPriorityList();

});

//CLEAR PRIORITY LIST

clearPriorityBtn.addEventListener("click", () => {

    priorityListElement.innerHTML = "";

});

countItems();
