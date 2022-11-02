function accountBalance(input){
    let deposit = input[0];
    let sum = 0;
    let index = 1;

    while(deposit !== "NoMoreMoney"){
      let currentnum = Number(deposit);
      if(currentnum<0){
        console.log("Invalid operation!")
        break;
      }
      sum +=currentnum;
      console.log(`Increase: ${currentnum.toFixed(2)}`);
      deposit = input[index];
      index++;
      }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51","69.42","100","NoMoreMoney"]);