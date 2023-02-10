var month = 4;
var startDay = 1;
var days = 0;
var daycounter = 1;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
}

console.log("| Mo | Di | Mi | Do | Fr | Sa | So |");
process.stdout.write("| ");


for(let i = 0; i < Math.ceil((days + startDay-1)/7); i++){

    for(let j = 0; j < 7; j++){
        if(startDay-1 > 0){
            process.stdout.write("   | ");
            startDay--;
        }else{
            if(days+1 > daycounter){
                if(daycounter < 10){
                    process.stdout.write(" "+daycounter + " | ");
                }else{
                    process.stdout.write(daycounter + " | ");
                }
                daycounter++;
            }else{
                process.stdout.write("   | ");
            }
        }
    }
    console.log("");
    if(days+1 > daycounter){
        process.stdout.write("| ");
    }
}