//1 :first i should catch out transfer btn
document.getElementById("money-transfer-btn").addEventListener('click',function(){
    //2 : now i need to get it user account number and cheack the number length
    const transferMoney = getElFormInput("money-transfer-number");
    if(transferMoney.length != 11){
        alert("invalid number");
        return;
    }
    
    //2.1 : get it the user ammount 
    const call = getElFormInput("money-transfer-amount")
    const current_balance = getBalance()
    const transferBalance = current_balance - Number(call);
    console.log(transferBalance)
    if(transferBalance < 0){
        alert('not enough balance')
        return;
    }
    
    //3 : get the pin code 
    const getPinTrans = getElFormInput('money-transfer-pin')
    if(getPinTrans == '2233'){
        alert("succesful transfer")
        setBalance(transferBalance)

          const history = document.getElementById("history-container");
        const NewEl = document.createElement('div')
        NewEl.innerHTML = `
           <div class=" rounded-xl bg-base-100 w-full shadow p-6">
        <div class ="  grid grid-cols-2 gap-2 space-y-3 ">
        <h2 class= " text-neutral-800 font-bold "> Money Transfer</h2>
        <p class = " text-neutral-800 font-bold ">Account  <br> ${transferMoney}</p>
        <h2 class =" text-neutral-800 font-bold"> Ammount <br>  ${call } Tk</h2>
        <p class = "text-neutral-800 font-bold">Time <br> ${new Date().toLocaleString()}</p>
        </div>   
        </div>`
        history.append(NewEl)
    }else{
        alert("invalid pin")
        return;
    }
});