//there are 3 ways to create a function
//1. regular function
function a (a,b){
    let d=a+b;
    console.log("a",a,b,d);
    
}
//2. arrow fun
const b=()=>{
    console.log("b");
}
// fun expression
const c= function()
{
    console.log("c");
}
a(20,50);
b();
c();
function showMessage(){
    alert("Hello world");
}
showMessage();
const str="Hi Prepbyts";
let res=str.slice(2,-1);
console.log(res);

let arr=[1,2,3,4]
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
    
}
console.log(sum);
let arr1=[1,2,3,4]
let sum2=1;
for(let i=0;i<arr.length;i++)
{
    sum2=arr[i]*arr[i];
    
}
console.log(sum2);