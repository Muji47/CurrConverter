var mySelectFrom = document.getElementById("curr_from");
var mySelectTo = document.getElementById("curr_to");
var mySelectToSec = document.getElementById("curr_to_sec");
var optionalSelect = document.getElementById("optional_dropdown");
let optional_amount=document.getElementById("optional_amount")
async function fetchDataWithErrors() {
  try {
    const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=cd24bc83a444456e9966b810fc9ce7ca');
    // const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=cd24bc83a4gdfsg44456e9966b810fc9ce7ca');
    if (!response.ok) {
      console.log(response.ok)
      throw new Error('Request failed with status ' + response.status + "Please add check your link" );
    }
    const data = await response.json();
    

for (let x in data.rates) {
var opt = document.createElement('option');
      opt.value = data.rates[x];
      opt.innerHTML = x;
      mySelectFrom.appendChild(opt);
}
for (let x in data.rates) {
var opt = document.createElement('option');
      opt.value = data.rates[x];
      opt.innerHTML = x;
      mySelectTo.appendChild(opt);
}
for (let x in data.rates) {
var opt = document.createElement('option');
      opt.value = data.rates[x];
      opt.innerHTML = x;
      mySelectToSec.appendChild(opt);
}
  } catch (error) {
    document.getElementById("body").innerText =error.message;
  }
}

fetchDataWithErrors();
let no_Conversion=document.querySelectorAll("input[name='select_conver']")
let selected_one;
no_Conversion.forEach(selected=>
  selected.addEventListener("change",()=>{
    selected_one=document.querySelector("input[name='select_conver']:checked")
    if(selected_one.value==="multiple"){
        optionalSelect.style.display="block"

    }
    else{
      optionalSelect.style.display="none"
      optional_amount.style.display="none"
    }
  }
  ))
const handleChangeAmount=()=>{
  let currAmount=document.getElementById("amountcon")
  let amount=document.getElementById("aamount")

  let validateText=document.getElementById("validateText")
  if(!currAmount.value||!mySelectFrom.value||!mySelectTo.value){
    validateText.style.display="block"
    setTimeout(() => 
    validateText.style.display="none"
    ,2000)
  }
  else{
    let from,to,more;
    Object.values(mySelectFrom.options).forEach(function (option) {
        if(option.value===mySelectFrom.value)
              from= option.text;
      });
    Object.values(mySelectTo.options).forEach(function (option) {
        if(option.value===mySelectTo.value)
              to= option.text;
      });
    Object.values(mySelectToSec.options).forEach(function (option) {
        if(option.value===mySelectToSec.value)
              more= option.text;
      });
      
  amount.innerText=`${from} to ${to} ${(currAmount.value*mySelectTo.value)/mySelectFrom.value}`
  if(selected_one.value==="multiple"){
    optional_amount.style.display="block"
  optional_amount.innerText=`${from} to ${more} ${(currAmount.value*mySelectToSec.value)/mySelectFrom.value}`
  
}
  currAmount.innerText="";
}}


