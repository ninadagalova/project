function vacation(input){
    let moneyForVacation = Number(input[0]);
    let myMoney = Number(input[1]);
    let day = 0;
    let spendDays = 0;
    let index = 2;
    let currentInput = input[index];

    while(myMoney < moneyForVacation){
        day++;
        index++;
       if(currentInput === "spend"){
        spendDays++;
        if(spendDays === 5){
            console.log(`You can't save the money.`);
          console.log(day);
          break;
        }
        let moneyToSpend = Number(input[index]);
        myMoney = myMoney - moneyToSpend;
        if(myMoney < 0){
            myMoney = 0;
        }
        }else if(currentInput === "save"){
           spendDays = 0;
           let moneyToSave = Number(input[index]);
           myMoney = myMoney + moneyToSave;
        
        }
        
        index++;
        currentInput = input[index];
      }
      if(myMoney >= moneyForVacation){
        console.log(`You saved the money for ${day} days.`);
      }  
}
vacation(["2000","1000","spend","1200","save","2000"]);