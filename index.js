 function helper(ans){
    if (ans<0){
        document.getElementById("output").style.color="red"
     ;}
     else{
        document.getElementById("output").style.color="black"

     ;}
 }

 function doAdd(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let ans=Number(first)+Number(second);
    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
 }
  function doSub(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let ans=Number(first)-Number(second);
    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
 }
  function doMul(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let ans=Number(first)*Number(second);
    helper(ans);
    document.getElementById("output").innerHTML=String(ans);
 }
  function doDiv(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    const a = Number(first);
    const b = Number(second);
    if (b === 0) {
        helper("Error"); 
        document.getElementById("output").innerHTML = "Error: divide by 0";
        return;
    }
    let ans = a / b;
    helper(ans);
    document.getElementById("output").innerHTML = String(ans);
}
function power() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  const base = Number(first);
  const exp = parseInt(second, 10); 

  if (isNaN(base) || isNaN(exp)) {
    helper("Error");
    document.getElementById("output").innerHTML = "Error: enter numbers";
    return;
  }

  if (exp < 0) {
    helper("Error");
    document.getElementById("output").innerHTML = "Error: exponent must be ≥ 0";
    return;
  }

  let ans = 1;
  for (let i = 0; i < exp; i++) {
    ans *= base;
  }

  helper(ans);
  document.getElementById("output").innerHTML = String(ans);
}

function clearCalc() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").style.color = "black";
}

