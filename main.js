function makeOrder()
{
    var coffeeId = parseInt(document.getElementById("coffee-id").value);
    var coffeeWeight = document.getElementById("coffee-weight").value;
    var price = 0;
        
    switch(coffeeId)
    {
        case 1:
            price = 5;
            break;
        case 2:
            price = 6;
            break;
        case 3:
            price = 7;
            break;
    }

    price *= coffeeWeight;

    document.getElementById("order").innerHTML = "Koszt zamówienia wynosi " + price + " zł";
}