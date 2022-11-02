function vacation(input){
    let countSea = Number(input[0]);
    let countMountain = Number(input[0]);
    let index = 1;
    let nextIndex = input[index];
    let win = 0;

    while(nextIndex !== "Stop"){
        index++;
        nextIndex = input[index];
        if(nextIndex === "sea"){
            if(countSea <= 0){
                continue;
             }
         win = win + 680;
         countSea--;
         }else if(nextIndex === "mountain"){
            if(countMountain <= 0){
                continue;
             }
           win = win+ 499;
           countMountain--;
         }
         if(countMountain<=0 &&countSea<=0){
            console.log("Good job! Everything is sold.");
            break;
         }

       }
       console.log(`Profit: ${win} leva.`);

}
vacation(["2","2","sea","mountain","sea","sea","mountain"]);