
function getElFormInput(id){
  const Input =document.getElementById(id);
  const Value = Input.value;
//   console.log(id,Value);
  return Value;
}

function getBalance(){
  const BalanceEl =document.getElementById("balence");
  const balance = BalanceEl.innerText;
  return Number(balance);
}

function setBalance(value){
  const BalanceEl =document.getElementById("balence");
  BalanceEl.innerText = value;
}

function showOnly(id){
  const addmoney = document.getElementById('add-money');
  const cashOut = document.getElementById('cashout');
  const transferBalance = document.getElementById("transfer-money");
  const payment =document.getElementById("payment")
  const Bonus = document.getElementById("bonus");

  cashOut.classList.add("hidden");
  addmoney.classList.add("hidden");
  transferBalance.classList.add("hidden");
  payment.classList.add("hidden");
  Bonus.classList.add("hidden");
  

  const slected = document.getElementById(id);
  slected.classList.remove("hidden");
  
}