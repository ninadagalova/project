function examPreparation(input){
    let gradeCount = Number(input[0]);
    let goodGrade = 0;
    let badGrade = 0;
    let sum = 0;
    let lastProblems = " ";
    let index = 1;
    let sumProblems = 0;


    while(badGrade < gradeCount){
       let nameProblems = input[index];

       lastProblems = input[index-2];
       sumProblems++;
       if(nameProblems === "Enough"){
        console.log(`Average score: ${(sum/(sumProblems-1)).toFixed(2)}`);
        console.log(`Number of problems: ${sumProblems - 1}`);
        console.log(`Last problem: ${lastProblems}`);
        break;
        }
        let grade = Number(input[index+1]);
       sum +=grade;
       if(grade <=4 ){
        badGrade++;
       }else {
        goodGrade++;
       }

        index +=2;
    
      }
      if(badGrade == gradeCount){
        console.log(`You need a break, ${gradeCount} poor grades.`);
      }  
}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);