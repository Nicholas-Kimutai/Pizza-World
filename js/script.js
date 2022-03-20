var pizzas =[{name: "Veggie",
              id: "veggie-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:900},{name:"large",price:1300}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:150},{name:"gluten",price:250}],
              toppings:[{name:"mushroom",price:100},{name:"bacon",price:200},{name:"broccoli",price:150}]},
              
              {name: "Cheese",
              id: "cheese-btn",
              sizes:[{name:"small",price:800},{name:"medium",price:1000},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mushroom",price:100},{name:"bacon",price:150},{name:"broccoli",price:50}]},
              
              {name: "BBQ Chicken",
              id: "bbq-btn",
              sizes:[{name:"small",price:500},{name:"medium",price:800},{name:"large",price:1000}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mushroom",price:100},{name:"bacon",price:150},{name:"broccoli",price:50}]},
              
              {name: "Meat Deluxe",
              id: "meatDeluxe-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:800},{name:"large",price:1000}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mushroom",price:100},{name:"bacon",price:150},{name:"broccoli",price:50}]},
              
              {name: "Pepperoni",
              id: "pepperoni-btn",
              sizes:[{name:"small",price:800},{name:"medium",price:1400},{name:"large",price:1600}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mushroom",price:100},{name:"bacon",price:150},{name:"broccoli",price:50}]},
              
              {name: "Hawaiian",
              id: "hawaiian-btn",
              sizes:[{name:"small",price:1000},{name:"medium",price:1500},{name:"large",price:1800}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mushroom",price:100},{name:"bacon",price:150},{name:"broccoli",price:50}]}  
            ];

//Create a Pizza constructor

function Pizza(name,size,crust,toppings,total){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}
Pizza.prototype.pizzaTopp = function(){
    let top = "";
    this.toppings.forEach(function(topping){
        top = topping.name;
    });
}
$(document).ready(function(){
    var total = 0;
    var sizeInput = 0;
    var toppingInput = 0;
    var netTotal = 0;
    pizzas.forEach(function(pizza){
        $("button").click(function(){
            if(this.id === pizza.id){
                $("#orderName").text(pizza.name);

                var pizzaSize = "";
                var pizzaCrust = "";
                var pizzaToppings = [];

                $("#myOrders").click(function() {
                    pizza.sizes.forEach(function(size){
                        var isChecked = $("#"+size.name).is(':checked');
                        if(isChecked){
                            $("#"+size.name+"-"+"price").text(size.price);
                            sizeInput = size.price;
                            pizzaSize = size.name;
                        }
                    });
                    pizza.crusts.forEach(function(crust){
                        var isChecked = $("#"+crust.name).is(':checked');
                        if(isChecked){
                            $("#"+crust.name+"-"+"price").text(crust.price);
                            crustInput = crust.price;
                            pizzaCrust = crust.name;
                        }
                    });
                    pizza.toppings.forEach(function(topping){
                        var isChecked = $("#"+topping.name).is(':checked');
                        if(isChecked){
                            $("#"+topping.name+"-"+"price").text(topping.price);
                            toppingInput = topping.price;
                            if(!pizzaToppings.includes(topping.name)){
                                pizzaToppings.push(topping.name);
                            }
                        }
                    })
                    total = sizeInput + crustInput+ toppingInput;
                   
                   
                    $("#totalPrice").text( "Ksh."+ total); 
                });

                $("form#myOrders").submit(function(event){
                    
                    event.preventDefault();
                    netTotal += total;
                    console.log(netTotal)
                    var pizzaChoice = new Pizza(pizza.name,pizzaSize,pizzaCrust,pizzaToppings,total);

                    $("#nameOrder").text( pizzaChoice.name); 
                    $("#priceOrder").text( "Ksh." + pizzaChoice.total); 
                    $("#notordered").hide();
                    $(".table").show();
                    $("#total-orders").append('<tr><td id="pizzaname">'+pizzaChoice.name +'</td><td id="pizzasize">' + pizzaChoice.size + '</td><td id="pizzacrust">'+pizzaChoice.crust + '</td><td id="pizzatopping">'+pizzaChoice.toppings+'</td><td id="pizzaprice">'+pizzaChoice.total+'</td></tr>');
                    $("#pizzatotalprice").text("Your total order amount is: " + netTotal);

                    $('input[name="size"]').prop('checked', false);
                    $('input[name="crust"]').prop('checked', false);
                    $('input[name="topping"]').prop('checked', false);
                    $(".order-btn").show()
                }); 
            }
        })
    });

    $("button#proceedbtn").click(function(){
        $(".checkout").show();
        $("form#checkoutfrm").submit(function(event){
            event.preventDefault();
            var nameInput = $("input#username").val();
            var locationInput = $("input#location").val();
            var phoneInput = $("input#phone").val();
            
            console.log(nameInput)
            console.log(locationInput)
            console.log(phoneInput)
            if(nameInput !== "" && locationInput !== "" && phoneInput !== ""){
                alert("Hi "+ nameInput+ ","+" We have received your order and our rider will be delivering it to: " + locationInput);
            }
            $("input#username").val("");
            $("input#location").val("");
            $("input#phone").val("");
        });
    })
});

//Form submission function
function formSub(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if((name=="")||(name==null)){
        alert("Please enter your name")
    }
    else if((email=="")||(email==null)||(!validMail(email))){
        alert("Please enter a valid email")
    }
    else if((message=="")||(message==null)){
        alert("Please enter your message")
    }
    else{
        alert(name + " we have received your message. Thank you for reaching out to us.")
    }
 }

 //Email validation
function validMail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }


