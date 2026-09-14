// const { createElement } = require("react");

document.getElementById("add-money-btn").addEventListener("click",function(){
    const bankAccount =getElFormInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please Select a Bank");
        return;
    }
    
    const bankAddMoney = getElFormInput("bank-number");
    if(bankAddMoney.length !=11){
       alert('invalid number');
       return;
    }

    const bankAmmount =getElFormInput('bank-amount');
    const currentBalance = getBalance() + Number(bankAmmount);

    const bankPin = getElFormInput('bank-pin')
    if(bankPin === '2233'){
        alert("Succesful");
        setBalance(currentBalance)
        const history = document.getElementById("history-container");
        const NewEl = document.createElement('div')
        NewEl.innerHTML = `
          <div class=" rounded-xl ">
        <div class ="  grid grid-cols-2 gap-2 space-y-3 bg-base-200 bg-base-500">
        <h2 class= " text-neutral-800 "> Add Money</h2>
        <p class = " text-neutral-800 ">Bank <br>  ${bankAccount}</p>
        <p class = " text-neutral-800 ">Account <br>  ${bankAddMoney }</p>
        <h2 class =" text-neutral-800 "> Ammount <br>  ${bankAmmount} Tk</h2>
        <p class = "text-neutral-800">Time <br>  ${new Date().toLocaleString()}</p>
        </div>   
        </div>`
        history.append(NewEl)
        
    } 
    else{
        alert("Invalid Pin")
        return;
    }
    console.log(currentBalance)

   
})