var total = 0;
var shoppingCart = [];
var txt = "";

$(document).ready(function() {
    var existingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    if (existingCart != null) {
        shoppingCart = existingCart;
        updateShoppingCartText();
    }
    updateTotal();
});

function increaseQuantity(obj, id) {
    var value = document.getElementById(id).value;
    if (value < 20) {
        $(document.getElementById(id)).val(parseInt($(document.getElementById(id)).val()) + 1);
    } else {
        window.alert("Cannot choose more than 20 items")
    }
}

function decreaseQuantity(obj, id) {
    var value = document.getElementById(id).value;
    if (value > 0) {
        $(document.getElementById(id)).val(parseInt($(document.getElementById(id)).val()) - 1);
    }
}

//Combos
function addLargeComboToOrder(id) {

    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var combo = {
            id: shoppingCart.length,
            size: "Large Combo",
            image: "Images/comboImg.jpg",
            price: 22.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(combo);
        }
        if (value > 1) {
            alert("You've added " + i + " " + combo.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + combo.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addMedComboToOrder(id) {

    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var combo = {
            id: shoppingCart.length,
            size: "Medium Combo",
            image: "Images/comboImg.jpg",
            price: 18.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(combo);
        }
        if (value > 1) {
            alert("You've added " + i + " " + combo.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + combo.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart");
        } else {
            alert("Please enter only positive numbers")
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addSmallComboToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var combo = {
            id: shoppingCart.length,
            size: "Small Combo",
            image: "Images/comboImg.jpg",
            price: 16.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(combo);
        }
        if (value > 1) {
            alert("You've added " + i + " " + combo.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + combo.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

//Drinks

function addLargeDrinkToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var drink = {
            id: shoppingCart.length,
            size: "Large Drink",
            image: "Images/drink.png",
            price: 6.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(drink);
        }
        if (value > 1) {
            alert("You've added " + i + " " + drink.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + drink.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addMedDrinkToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var drink = {
            id: shoppingCart.length,
            size: "Medium Drink",
            image: "Images/drink.png",
            price: 5.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(drink);
        }
        if (value > 1) {
            alert("You've added " + i + " " + drink.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + drink.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addSmallDrinkToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var drink = {
            id: shoppingCart.length,
            size: "Small Drink",
            image: "Images/drink.png",
            price: 4.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(drink);
        }
        if (value > 1) {
            alert("You've added " + i + " " + drink.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + drink.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

//Popcorn

function addLargePopCornToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var popcorn = {
            id: shoppingCart.length,
            size: "Large Popcorn",
            image: "Images/popcorn.png",
            price: 8.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(popcorn);
        }
        if (value > 1) {
            alert("You've added " + i + " " + popcorn.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + popcorn.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addMedPopCornToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var popcorn = {
            id: shoppingCart.length,
            size: "Medium Popcorn",
            image: "Images/popcorn.png",
            price: 7.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(popcorn);
        }
        if (value > 1) {
            alert("You've added " + i + " " + popcorn.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + popcorn.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addSmallPopCornToOrder(id) {
    var value = document.getElementById(id).value;
    if (shoppingCart.length < 50 && ((shoppingCart.length + value <= 50) || (shoppingCart.length + 20 <= 50))) {
        var popcorn = {
            id: shoppingCart.length,
            size: "Small Popcorn",
            image: "Images/popcorn.png",
            price: 6.00
        };
        var i;
        for (i = 0; i < value && i < 20; i++) {
            addToList(popcorn);
        }
        if (value > 1) {
            alert("You've added " + i + " " + popcorn.size + "s!");
        } else if (value == 1) {
            alert("You've added a " + popcorn.size + "!");
        } else if (value == 0) {
            alert("No items were added to your cart.");
        }
        $(document.getElementById(id)).val(0);
        updateShoppingCartText();
    } else {
        alert("The maximum cart capacity is 50 items, you are currently at " + shoppingCart.length + " items.\nPlease checkout or remove items from your cart.");
    }
}

function addToList(item) {
    shoppingCart.push(item);
    sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

function addToTotal(value) {
    total = total + value.price;
}

function proceedToCheckout() {
    total = 0;
    shoppingCart.forEach(addToTotal);

    if (total == 0) {
        alert("It appears your cart is empty! Select tickets or food before purchase!\n");
    } else {
        $('#checkOutModal').modal('hide');
        $('#purchasingSummaryModal').modal('show');
        updateShoppingCartText();
        updateTotal();
    }
}

function hideCheckout(url) {
    $('#checkOutModal').modal('hide');
    window.location.href = url;
}

function backToCart() {
    $('#checkOutModal').modal('show');
    $('#purchasingSummaryModal').modal('hide');
}

function removeItemFromMenu(id) {
    var value = shoppingCart[id];

    shoppingCart.splice(id, 1);
    updateShoppingCartIds();
    sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    updateShoppingCartText();
    updateTotal();

    if (value.size == undefined) {
        var txt = value.name + " " + value.time + value.theatre + " " + value.seat;
        console.log(txt);
        sessionStorage.removeItem(txt);
    }
}

function updateShoppingCartText() {
    txt = "";
    shoppingCart.forEach(parseShoppingCart);
    if ($('#shoppingCart') != null) {
        $('#shoppingCart')[0].innerHTML = txt;
    }

    if ($('#shoppingCartPurchase') != null) {
        $('#shoppingCartPurchase')[0].innerHTML = txt;
    }

    updateTotal();
}

function completePurchase() {
    var alertText = "";
    if ($('#card')[0].value.length == 19 && $('#name')[0].value.length > 0 && shoppingCart.length > 0) {
        shoppingCart = [];
        alertText = alertText + ("Your order has been completed!\nThank you for ordering with Movie Master!");
        $('#purchasingSummaryModal').modal('hide');
        sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        updateShoppingCartText();
    } else {

        if ($('#card')[0].value.length == 0) {
            alertText = alertText + ("It appears you have not entered a credit card number.\n");
        } else if ($('#card')[0].value.length != 19) {
            alertText = alertText + ("It appears you have not entered a credit card, you have entered " + $('#card')[0].value.length + " numbers but this field requires 19.\n");
        }

        if ($('#name')[0].value.length == 0) {
            alertText = alertText + "It appears the name field is empty.\n";
        }

        if (shoppingCart.length == 0) {
            alertText = alertText + "It appears your shopping cart is empty.";
        }
    }

    alert(alertText);
}

function updateTotal() {
    total = 0;
    shoppingCart.forEach(addToTotal);
    if ($('#total') != null) {
        $('#total')[0].innerHTML = "Total: $" + total;
    }

    if ($('#purchaseTotal') != null) {
        $('#purchaseTotal')[0].innerHTML = "Total: $" + total;
    }
}

function parseShoppingCart(value) {
    txt = txt + "<div class=\"scrollmenuItem checkoutModal\"><img src=" + value.image + "><button onclick=\"removeItemFromMenu(" + value.id + ")\">X</button><br>Price: $" + value.price;
    if (value.size != undefined) {
        txt = txt + "<br>" + value.size;
    }
    txt = txt + "</div>";
}

function updateShoppingCartIds() {
    for (var id = 0; id < shoppingCart.length; id++) {
        shoppingCart[id].id = id;
    }
}
