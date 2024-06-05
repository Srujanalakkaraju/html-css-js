let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: "Sugar Cookie Iced Latte",
        image: '1.jpg',
        price: 340
    },
    {
        id: 2,
        name: "Iced lavender cream oatmilk matcha",
        image: "2.jpg",
        price: 380
    },
    {
        id: 3,
        name: " Mortadella burrata and pistachio pesto SW",
        image: "3.jpg",
        price: 330
    },
    {
        id: 4,
        name: "Strawberry Acai Refresher",
        image: "4.jpg",
        price: 220
    },
    {
        id: 5,
        name: "Iced Cinnamon Dolce Latte",
        image: "5.jpg",
        price: 210
    },
    {
        id: 6,
        name: "French Almond Croissants ",
        image: "6.jpg",
        price: 250
    },
    {
        id: 7,
        name: "Double choco chip frappuccino",
        image: "7.jpg",
        price: 130
    },
    {
        id: 8,
        name: " Iced white chocolate mocha",
        image: "8.jpg",
        price: 200
    },
    {
        id: 9,
        name: "Matcha Green Tea Latte",
        image: "9.jpg",
        price: 200
    },
    {
        id: 10,
        name: "Cranberry orange scone",
        image: "10.jpg",
        price: 120
    },
    {
        id: 11,
        name: "Cheese Danish",
        image: "11.jpg",
        price: 150
    },
    {
        id: 12,
        name: "Blueberry Muffin",
        image: "12.jpg",
        price: 120
    },
    {
        id: 13,
        name: "Chocolate Chip Cookie",
        image: "13.jpg",
        price: 100
    },
    {
        id: 14,
        name: "Banana Bread",
        image: "14.jpg",
        price: 140
    },
    {
        id: 15,
        name: "Almond Biscotti",
        image: "15.jpg",
        price: 160
    },
    {
        id: 16,
        name: "Turkey pesto Sandwich",
        image: "16.jpg",
        price: 270
    },
    {
        id: 17,
        name: "Egg white spinach Wrap",
        image: "17.jpg",
        price: 230
    },
    {
        id: 18,
        name: "Spinach feta wrap",
        image: "18.jpg",
        price: 260
    },
    {
        id: 19,
        name: "Oatmeal with Berries",
        image: "19.jpg",
        price: 160
    },
    {
        id: 20,
        name: "Egg Bites (assorted flavors)",
        image: "20.jpg",
        price: 190
    },
    {
        id: 21,
        name: "Skinny Vanilla Latte",
        image: "21.jpg",
        price: 170
    },
    {
        id: 22,
        name: "Iced Caffe Mocha",
        image: "22.jpg",
        price: 230
    },
    {
        id: 23,
        name: "Mango Dragonfruit Refresher",
        image: "23.jpg",
        price: 190
    },
    {
        id: 24,
        name: "Breakfast sandwich",
        image: "24.jpg",
        price: 230
    },
    {
        id: 25,
        name: "Grilled cheese Sandwich",
        image: "25.jpg",
        price: 310
    },
    {
        id: 26,
        name: "Chocolate Croissant",
        image: "26.jpg",
        price: 180
    },
    {
        id: 27,
        name: "Lemon Loaf",
        image: "27.jpg",
        price: 130
    },
    {
        id: 28,
        name: "Bueberry scone",
        image: "28.jpg",
        price: 110
    },
    {
        id: 29,
        name: "Iced Hazelnut Latte",
        image: "29.jpg",
        price: 250
    },
    {
        id: 30,
        name: "Chai latte",
        image: "30.jpg",
        price: 200
    },
    {
        id: 31,
        name: "choclate pops",
        image: "31.jpg",
        price: 160
    },
    {
        id: 32,
        name: "Peach Green Tea Lemonade",
        image: "32.jpg",
        price: 210
    },
    {
        id: 33,
        name: "Pumpkin spice latte",
        image: "33.jpg",
        price: 220
    },
    {
        id: 34,
        name: "lime coconut bar",
        image: "34.jpg",
        price: "110"
    },
    {
        id: 35,
        name: "Peppermint Mocha (seasonal)",
        image: "35.jpg",
        price: "240"
    },
    {
        id: 36,
        name: "morning bun",
        image: "36.jpg",
        price: "130"
    },
    {
        id: 37,
        name: "Pumpkin cream cheese muffins",
        image: "37.jpg",
        price: "120"
    },
    {
        id: 38,
        name: "Iced honey almond flat white",
        image: "38.jpg",
        price: 470
    },
    {
        id: 39,
        name: "Brownie",
        image: "39.jpg",
        price: 350
    },
    {
        id: 40,
        name: "avocado spread",
        image: "40.jpg",
        price: 80
    }
];
let listCards = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledProducts = shuffleArray([...products]);

function initApp(){
    for (const key in shuffledProducts) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        value = shuffledProducts[key]
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₹${value.price.toLocaleString()}</div>
            <button id="b${value.id}" onclick="addToCart(${value.id - 1})">Add To Cart</button>`;
        list.append(newDiv);
    }
}

initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₹${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = parseInt(quantity) * parseInt(products[key].price);
    }
    reloadCard();
}