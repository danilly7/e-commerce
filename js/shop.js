// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

var cart = [];
var total = 0;

//--------------------------------------------------------- ** Nivell I ** --------------------------------------------------------- Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array

const buscarProducts = (valor) => products.findIndex(products => products.id === valor);
const buscarCart = (valor) => cart.findIndex(cart => cart.id === valor);

function buy(id) {
    let positionProducts = buscarProducts(id);
    let positionCart = buscarCart(id);
    let newItem = 0;

    if (positionProducts < 0) {
        return;
    } else {
        if (positionCart < 0) {
            newItem = products[positionProducts];
            newItem.quantity = 1;
            cart.push(newItem);
        } else {
            cart[positionCart].quantity += 1;
        }
    }
    printCart();
}

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 2

function cleanCart() {
    cart.splice(0, cart.length);
    printCart();
}

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 3
// Calculate total price of the cart using the "cartList" array, bucle.

function calculateSubtotal() { //MODIFICADO NOMBRE DE CALCULATETOTAL A CALCULATESUBTOTAL.
    let subtotalItem = 0;
    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        subtotalItem = cart[i].subtotal;
        subtotal += subtotalItem;
    }

    console.log("subtotal:", subtotal);
    return subtotal;
}

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 4
// Apply promotions to each item in the array "cart"

function applyPromotionsCart() {
    let offerOil = 0.80;
    let offerCupcake = 0.70;
    let discounted = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].discount = offerOil;
            discounted = true;
        } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
            cart[i].discount = offerCupcake;
            discounted = true;
        } else {
            cart[i].discount = 1;
        }
    }
    return discounted;
}

function calculateFinalTotal() {
    calculateSubtotal();

    let discountApplied = applyPromotionsCart();
    console.log("Are discounts being applied?", discountApplied);

    let totalItem = 0;
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        cart[i].total = parseFloat((cart[i].price * cart[i].quantity * cart[i].discount).toFixed(2));
        totalItem = cart[i].total;
        total += totalItem;
    }

    if (discountApplied === true) {
        console.log("Total with discounts applied:", total);
    } else {
        console.log("Total with NO discounts applied:", total);
    }

    return total;
}

//---------------------------------------------------------------------------------------------------------------------------------- Exercise 5
// Fill the shopping cart modal manipulating the shopping cart dom

function printCart() {
    let countProduct = document.getElementById("count_product");
    let count = 0;
    for (let z = 0; z < cart.length; z++) {
        count += cart[z].quantity;
    }
    countProduct.innerHTML = count;

    let cartList = document.getElementById("cart_list");
    cartList.innerHTML = "";

    let totalPrice = document.getElementById("total_price");
    totalPrice.innerHTML = calculateFinalTotal();

    for (let i = 0; i < cart.length; i++) {
        let row = `
            <tr>
                <th scope="row">${cart[i].name}</th>
                <td>$${cart[i].price}</td>
                <td>${cart[i].quantity}</td>
                <td>$${cart[i].total}</td>
                <td><button onclick="removeFromCart(${cart[i].id})" class="btn btn-primary btn-sm">-</button></td>
                <td><button onclick="buy(${cart[i].id})" class="btn btn-primary btn-sm">+</button></td>
            </tr>
        `;
        cartList.innerHTML += row;
    }
}

//-------------------------------------------------------- ** Nivell II ** --------------------------------------------------------- Exercise 7

function removeFromCart(id) {
    let positionCart = buscarCart(id);
    
    if (positionCart < 0) {
        return;
    }

    if (cart[positionCart].quantity > 1) {
        cart[positionCart].quantity -= 1;
    } else if (cart[positionCart].quantity === 1) {
        cart.splice(positionCart, 1);
    }

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity < 3) {
            cart[i].discount = 1;
        } else if (cart[i].id === 3 && cart[i].quantity < 10) {
            cart[i].discount = 1;
        }
    }

    calculateFinalTotal();
    printCart();
}

function open_modal() {
    printCart();
}