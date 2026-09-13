 document.getElementById("cashout-btn").addEventListener("click",function(){
    // Agent number
    const cashout_Number = getElFormInput('agent-number');
    if(cashout_Number.length !=11 ){
        
        alert("Invalid Number");
        return;
        
    }
    // ammount 
    const cashout_Amount = getElFormInput("cashout-amount")
    if(cashout_Amount === ""){
        alert("Enter the amount ")
        return;

    }

    // balanece

    const current_balance = getBalance()

    const New_Balance = current_balance - Number(cashout_Amount)
    console.log(New_Balance)
    if(New_Balance < 0){
        alert("Invalid Balance");
        return;

    }
    // Pin code

    const CashOut_Pin =getElFormInput("cashout-pin");
    if(CashOut_Pin =='2233'){
        alert("CashOut Succesfull");
        setBalance(New_Balance);
    }
    else{
        alert("Invalid Pin");
        return;
    }
   })




// document.getElementById("cashout-btn").addEventListener("click",function(){
//     const AgentNumberInput =document.getElementById('agent-number');
//     const AgentNumber = AgentNumberInput.value;
//     if(AgentNumber.length != 11){
//         alert("Invalid Number");
//         return;
//     }


//     const Cashout_Amount = document.getElementById('cashout-amount');
//     const cashout_value =Cashout_Amount.value;
//     console.log(cashout_value)
//     if (cashout_value === ""){
//         alert("Enter the amount")
//     }
//     else if(cashout_value < 0){
//         alert('enter amount greater than zero')
//     }
  
//     const Main_Balance = document.getElementById("balence");
//     const Balance_Value = Main_Balance.innerText;

//     let Cashout = Number(Balance_Value) - Number(cashout_value);
//     console.log(Cashout);
//     if(Cashout < 0){
//         console.log(Cashout)
       
//     }

//     const CashOut_Pin =document.getElementById("cashout-pin");
//     let cashout_pin =CashOut_Pin.value;
    
//     if(cashout_pin === '2233'){
//         alert("CashOut Succesfull")
//         Main_Balance.innerText =Cashout
//         console.log(cashout_pin)
//     }else{
//         alert("Invalid Pin")
//         return;
//     }
// })