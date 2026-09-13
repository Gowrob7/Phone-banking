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
        
    } 
    else{
        alert("Invalid Pin")
        return;
    }
    console.log(currentBalance)

   
})