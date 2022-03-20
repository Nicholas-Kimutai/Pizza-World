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
                            pizzaCrust = crust.name;
                        }
                    });

