let json = {
    "menu": {
        "slice of pizza": "2.00",
        "toppings": {
            "pepperoni": ".25",
            "meatballs": ".35",
            "mushrooms": ".40",
            "olives": ".20"
        },
        "sides": {
            "potato salad": "1.25",
            "hummus": "2.50",
            "caesar salad": "3.50",
            "garden salad": "2.25"
        },
        "drinks": {
            "soda": {
                "small": "1.95",
                "medium": "2.20",
                "large": "2.50"
            },
            "juice": "2.00",
            "water": "1.25"
        }
    }
};

//Variables to loop through and display menu items
let menu = json.menu;
let pizzaName = "slice of pizza";
let pizzaPrice = menu["slice of pizza"];
let toppingsText = '';
let sidesText = '';
let drinksText = '';

//loop through menu
for (i in menu) {
    //loop through toppings to display
    if (i == "toppings") {
        for (j in menu[i]) {
        toppingsText += j + " $" + menu[i][j] + "<br>";
        }
    }
    //loop through sides to display
    if (i == "sides") {
        for (j in menu[i]) {
            sidesText += j + " $" + menu[i][j] + "<br>";
        }
    }
    //loop through drinks to display
    if (i == "drinks") {
        for (j in menu[i]) {
            if (j == "soda") {
                drinksText += j + "<br>";
            } else {
                drinksText += j + " $" + menu[i][j] + "<br>";
            }
            //loop through soda sizes to display
            for (k in menu[i][j]) {
                if (j == "soda") {
                    drinksText += k + " $" + menu[i][j][k] + "<br>";
                }
                
            }
        }
    }
}

//Add variables with menu items to HTML
document.getElementById("pizza").innerHTML = pizzaName + ' $' + pizzaPrice;
document.getElementById("toppings").innerHTML = toppingsText;
document.getElementById("sides").innerHTML = sidesText;
document.getElementById("drinks").innerHTML = drinksText;

//Start of code to get user choices from form and send to object

//Object variable to store user's choices
let order = new Object;

//Initialize jQuery at document ready for functions for rest of menu items
//and using local storage
$(function() {
let pizzaArr = [];
let toppArr = [];
let sidesArr = [];
let drinkArr = [];

//Get pizza slice selection
$('.pizza-check').on('click', function() {
    if($(this).is(":checked")) {
        pizzaArr.push($(this).val());
        console.log(pizzaArr);
    } else {
        var x = pizzaArr.indexOf($(this).val());
        pizzaArr.splice(x,1);
    };
})

//Get selections for pizza toppings
$('.topping-check').on('click', function() {
    if($(this).is(":checked")) {
        toppArr.push($(this).val());
        console.log(toppArr);
    }  else {
        var x = toppArr.indexOf($(this).val());
        toppArr.splice(x,1);
    };
});

//Gets selections for sides
$('.sides-check').on('click', function() {
    if($(this).is(":checked")) {
        sidesArr.push($(this).val());
        console.log(sidesArr);
    } else {
        var x = sidesArr.indexOf($(this).val());
        sidesArr.splice(x,1);
    };
});

//Get selections for drinks
$('.drink-check').on('click', function() {
    if($(this).is(":checked")) {
        drinkArr.push($(this).val());
        console.log(drinkArr);
    } else {
        var x = drinkArr.indexOf($(this).val());
        drinkArr.splice(x,1);
    };
});

//User clicks submit button and sends order object to local storage
$("input:submit[name=submit]").on('click', function() {
    order.pizza = pizzaArr;
    order.toppings = toppArr;
    order.sides = sidesArr;
    order.drinks = drinkArr;

    localStorage.setItem('userOrder', JSON.stringify(order));
    alert("Thank you for your order!");
});

//User clicks See Your Order button, order retrieved from local storage
//Order is displayed
$('#display-order').on('click', function() {
    let storedOrder = JSON.parse(localStorage.getItem('userOrder'));
    let orderContent = "";
    let pizzaOrder = "";
    console.log(storedOrder);

    //Loop through and display order
    for (i in storedOrder) {
        if (i == "pizza") {
            for (j in storedOrder[i]) {
                pizzaOrder = storedOrder[i];
            }
        } else {
            orderContent += i + " : " + storedOrder[i] + " <br>";
        }
    }

    document.getElementById("user-order").innerHTML = "You have ordered the following: <br>" + pizzaOrder + "<br>" + orderContent;
});

});//End jQuery initialization




