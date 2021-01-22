
            //Code Link: https://github.com/mohammadkamrulhasan/assignment3
            //1. kilometerToMeter Function 

function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        var errorMsg = "Enter a valid distance"; 
        return errorMsg;                          // Return Error message 
    }
    else {
        var meter = kilometer * 1000;  //we know, 1 Kilometer=1000 Meter.
        return meter;               //return distance in Meter unit.
    }

}
var distance = kilometerToMeter(2);
console.log(distance);

            //2. budgetCalculator Function 

function budgetCalculator(watch, phone, laptop){             //assign multiple parameter function
    var watchPrice=50;
    var phonePrice=100;
    var laptopPrice=500;
    var budgetAmount=((watchPrice*watch)+(phonePrice*phone)+(laptopPrice*laptop));
    if(watch<0  || phone<0  || laptop<0){
        var errorMsg="Enter valid number!";                 // Return Error message 
        return errorMsg;
    }else {
        return budgetAmount;                        //return Budget Amount
    }

}
var budgetCount=budgetCalculator(8,5,3);
console.log(budgetCount);

            //3. hotelCost Function 

function hotelCost(totalDay) {
    if (totalDay < 0) {
        var errorMsg = "Enter valid day";
        return errorMsg;                            // Return Error message
    } else {
        if (totalDay <= 10) {
            var firstPackagePrice = 100;
            var totalCost = firstPackagePrice * totalDay;
            return totalCost;                               //Return First package price
        } else if (totalDay <= 20) {
            var firstPackagePrice = 100 * 10;
            var remainDay = totalDay - 10;
            var secondPackagePrice = remainDay * 80;
            totalCost = firstPackagePrice + secondPackagePrice;
            return totalCost;                               //Return Second package price
        } else {
            var firstPackagePrice = 100 * 10;
            var secondPackagePrice = 80 * 10;
            var remainDay = totalDay - 20;
            var thirdPackagePrice = remainDay * 50;
            totalCost = firstPackagePrice + secondPackagePrice + thirdPackagePrice;
            return totalCost;                                                           //Return Third package price
        }

    }

}
var cost = hotelCost(8);                                            //Return hotel cost
console.log(cost);

                //4. megaFriend Function 

var friendName = ["kamaluddin", "rahim", "salmanKhan", "abuRowshanMohammadMustafaKamal"];
function megaFriend(friendName) {
    var largeName = friendName[0];
    for (var i = 0; i < friendName.length; i++) {
        if (friendName[i].length > largeName.length) {          //compare length of the string.
            largeName = friendName[i];
        }
    }
    return largeName;                                               //return Largest Name.
}

console.log(megaFriend(friendName));

                                                //assignment Finish Line----

