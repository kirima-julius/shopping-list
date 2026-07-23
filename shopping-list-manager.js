//Initial shopping list
let shoppingList  = ["Milk", "Bread" , "Eggs" , "Rice" , "Soap"]

//Dom Element


const newItemInput = document.getElementById("newItemInput");
const searchInput = document.getElementById("searchInput");

const removeBtn = document.getElementById("removeBtn");
const addBtn = document.getElementById("addBtn");
const searchBtn = document.getElementById("searchBtn");
const countBtn = document.getElementById("countBtn");

const itemCounts = document.getElementById("itemCounts")

const itemListContainer = document.getElementById("itemListContainer")

const itemList = document.querySelector(".itemList");

//Task one   

//Display all initial items 

function displayItems() {
    itemList.innerHTML = "";
    
    shoppingList.forEach( (item) => {
        const li = document.createElement("li");
        li.className = "item";
        li.textContent = item
        itemList.appendChild(li)


        const removeBtn1 = document.createElement("button");
        removeBtn1.innerHTML = "<i class='fa-solid fa-times'></i>"
        removeBtn1.className = "removeBtn1"

        
        removeBtn1.addEventListener("click" , () => {
            removeItem(item)
        })
        

        
        li.appendChild(removeBtn1)
    });
}

displayItems();

//ADDING ITEM

function addItem(item) {
    if (item === "") {
        alert("Item cant be empty")
        return;
    }

    shoppingList.push(item)
    displayItems();
    //countItems();

    newItemInput.value = "";
}

addBtn.addEventListener('click', () => {
    addItem(newItemInput.value.trim())
});

addItem();

//REMOVING ITEM 

function removeItem(item) {

    let index = shoppingList.indexOf(item);

    if (index !== -1) {
        shoppingList.splice(index, 1);


        displayItems();
        //countItems();

    }
}

removeBtn.addEventListener("click", () => {
    removeItem(searchInput.value.trim());
});




function searchItem(item) {
    if (item === "") {
        return;
    }

    if (shoppingList.includes(item)) {
        itemList.innerHTML = "";

        const li = document.createElement("li");

        li.textContent = item

        itemList.appendChild(li)
    }else {
        alert(item + " Item not found!")
    }
}

searchBtn.addEventListener("click" , () => {
    const item = searchInput.value.trim();

    searchItem(item)
})



//COUNT ITEMS

function countItems() {
    const totalItems = shoppingList.length
    itemCounts.textContent = `Total items: ${totalItems}`
    
}

countBtn.addEventListener("click", () => {
    countItems()
})
