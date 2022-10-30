


//kilometerToMeter convert function declare

function kilometerToMeter(kilometer)  
{
 
    if(kilometer>=0)

    {
        var meter = (kilometer*1000);  // 1 kilometer = 1000 meter

        return meter;
    }

    //unexpected messege

    else if(kilometer<0)
    {
       return "Sorry! Distance can not be negative";
    }
     

}

var result = kilometerToMeter(3);
console.log(result);




//budgetCalculator function declare

function budgetCalculator(watch,phone,laptop) 
{
     
    if(watch>=0 && phone>=0 && laptop>=0)
    {
        var watch_price = 50*watch;   //as 1 watch price is = 50$

        var phone_price = 100*phone;   // as 1 phone price is = 100$

        var laptop_price = 500*laptop;  // as 1 laptop price is = 500 $

        var total_price = (watch_price + phone_price + laptop_price);
        return total_price;
    }
    //unexpected messege
    else if(watch<0 || phone<0 || laptop<0)
    {
        return "Sorry!We can not buy any negative tools";
    }
     
}

var cost=budgetCalculator(1,1,-3);
console.log(cost);




//hotelCost function declare

function hotelCost(dayNumber){
    var totalCost=0;
    //unExpected messege
    if(dayNumber<0)
    {
         return "Sorry! The dayNumber can not be negative";

    }
    else if(dayNumber<=10 && dayNumber>=0){
        totalCost = dayNumber*100 //as 1-10 day cost will be 100$  
    }
    else if(dayNumber<=20){
        var firstCost = 10*100 //as 1-10 day cost will be 100$
        var remaining=dayNumber - 10;
        var secondCost=remaining * 80  //as 11-20 day cost will be 80$
        totalCost = firstCost + secondCost;
    }
    
    

    else {
        var firstCost = 10*100;
        var secondCost = 10*80;
        var remaining = dayNumber - 20;
        var thirdCost = remaining * 50; //as the dayNumber is gater than 20 the cost will be 50$
        totalCost=firstCost + secondCost + thirdCost;
    
    }
    return totalCost;
    
       
}

var cost = hotelCost(-3);
console.log(cost);





 //megaFriend function declare

 function megaFriend(friendsName){

    var longName = friendsName[0]; //initialize the firstPosition is longName
    for(var i=0;i<friendsName.length;i++){
        if(friendName[i].length > longName.length) {
            longName = friendsName[i];
        }
        //unexpected messege
        else if(friendsName.length<0)
        {
            return "Array length can not be negative";
        }
    }
    return longName;
 }

 var friendName = ['Sajid','Dipu','Sajadul','Himel','Emdadul','monirulislam','shahriar'];
 var largerName = megaFriend(friendName);
 console.log(largerName);