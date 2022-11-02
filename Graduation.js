function graduation(input){
    let nameStudent = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;

    while(grades <= 12){
       index++;
       let grade = Number(input[index]);
       if(grade < 4.00){
        if(excluded >= 1){
            console.log(`${nameStudent} has been excluded at ${grades} grade`)
        break;
        }
        excluded++;
        continue;
       }
       sum = sum+grade;
       grades++;
      }
      let average = sum/12;

      if(grades == 13){
        console.log(`${nameStudent} graduated. Average grade: ${average.toFixed(2)}`);
      }
    
}
graduation(["Mimi","5","6","5","6","5","6","6","","3"]);