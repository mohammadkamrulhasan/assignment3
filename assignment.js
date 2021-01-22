function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        var errorMsg = "Enter a valid distance"; // Error message 
        return errorMsg;
    }
    else {
        var meter = kilometer * 1000;  //we know, 1 Kilometer=1000 Meter.
        return meter;
    }

}
var distance = kilometerToMeter(2);
console.log(distance);


function budgetCalculator(watch, phone, laptop){
    var watchPrice=50;
    var phonePrice=100;
    var laptopPrice=500;
    var budgetAmount=((watchPrice*watch)+(phonePrice*phone)+(laptopPrice*laptop));
    if(watch<0  || phone<0  || laptop<0){
        var errorMsg="Enter valid number!";
        return errorMsg;
    }else {
        return budgetAmount;
    }

}
var budgetCount=budgetCalculator(8,5,3);
console.log(budgetCount);


function hotelCost(totalDay) {
    if (totalDay < 0) {
        var errorMsg = "Enter valid day";
        return errorMsg;
    } else {
        if (totalDay <= 10) {
            var firstPackagePrice = 100;
            var totalCost = firstPackagePrice * totalDay;
            return totalCost;
        } else if (totalDay <= 20) {
            var firstPackagePrice = 100 * 10;
            var remainDay = totalDay - 10;
            var secondPackagePrice = remainDay * 80;
            totalCost = firstPackagePrice + secondPackagePrice;
            return totalCost;
        } else {
            var firstPackagePrice = 100 * 10;
            var secondPackagePrice = 80 * 10;
            var remainDay = totalDay - 20;
            var thirdPackagePrice = remainDay * 50;
            totalCost = firstPackagePrice + secondPackagePrice + thirdPackagePrice;
            return totalCost;
        }

    }

}
var cost = hotelCost(8);
console.log(cost);



var friendName = ["kamaluddin", "rahim", "salmanKhan", "abuRowshanMohammadMustafaKamal"];
function megaFriend(friendName) {
    var largeName = friendName[0];
    for (var i = 0; i < friendName.length; i++) {
        if (friendName[i].length > largeName.length) {
            largeName = friendName[i];
        }
    }
    return largeName;
}

console.log(megaFriend(friendName));

