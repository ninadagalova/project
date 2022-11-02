function sumAndProduct(input){

    let n = Number(input[0]);
    let isFound = false;

    for(let a = 1; a<=9; a++){
        for(let b=9; b>=a; b--){
            for(let c=0; c<=9; c++){
                for(let d = 9; d>=c; d--){
                    let sum = a + b + c + d;
                    let mult = a*b*c*d;
                    let ostatuk = n%10;
                    let razd = mult/sum;
                    let ost = n%3;
                    if( sum === mult && ostatuk == 5){
                        printLine =`${a}${b}${c}${d} `;
                        console.log(printLine);
                        isFound = true;
                        break;
                    }else if(Math.floor(razd) === 3 && ost === 0){
                        printLine =`${d}${c}${b}${a} `;
                        console.log(printLine);
                        isFound = true;
                        break;
                    }
                    if(isFound){
                        break;
                    }

                }
                if(isFound){
                    break;
                }

            }
            if(isFound){
                break;
            }
        }
        if(isFound){
            break;
        }

    }
    if(!isFound){
            console.log("Nothing found");       
    }
    
}
sumAndProduct(["123"]);