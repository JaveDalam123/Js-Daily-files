// let x=5;
// if(x>10)
// {
//     console.log('x is greater then  10');
// }
// else
// console.log('x is less than or equal 10');
//If remainder is 0 , print the statement true;
// let num=13 ;
// let num2=2;
// if(num%num2==0)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }
// Prompt
// let num=prompt("Enter your number");
// if(num%2==0)
// {
//     console.log(true);   
// }
// else{
//     console.log(false);
// }
//switch Casemarks=30;
 const marks=30;
 let grade;
 switch(true)
 {
    case marks>=41 && marks<=50:
        grade='A';
        break;
    case marks>=31 && marks<=40:
            grade='B';
            break; 
    case marks>=21 && marks<=30:
                grade='C';
                break;   
    case marks>=11 && marks<=20:
                    grade='D';
                    break;
    case marks>=0 && marks<=10:
                   grade='E';
                        break;
     default:
                 grade="invaild Marks"
 }
 console.log(grade);
// Print the Days of weel..
// let day;
// const choice=2;
// switch(choice)
// {
// case 1:
//     day="Sunday";
//     break;
//   case 2:
//     day="Monday";
//     break;
//     case 3:
//     day="Tuesday";
//     break;
//     case 4:
//     day="Wendnesday";
//     break;
//     case 5:
//     day="thursday";
//     break;
//     case 6:
//     day="Friday";
//     break;
//     case 7:
//     day="Surtaday";
//         break;
//     default:
//         day="Wrong choice";
// }
// console.log(day);