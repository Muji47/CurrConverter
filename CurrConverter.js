
const handleChangeAmount=()=>{
  let currAmount=document.getElementById("amountcon")
  let amountTo=document.getElementById("curr_to").value
  let amountFrom=document.getElementById("curr_from").value
  let amount=document.getElementById("amount")
  amount.innerText=(currAmount.value*amountTo)/amountFrom
  currAmount.innerText="";
}
async function fetchDataWithErrors() {
    try {
      const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=cd24bc83a444456e9966b810fc9ce7ca');
      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }
      const data = await response.json();
      var mySelectFrom = document.getElementById("curr_from");
      var mySelectTo = document.getElementById("curr_to");

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
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchDataWithErrors();
