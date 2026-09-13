document.getElementById("Pay-bill-btn").addEventListener("click",function(){
    const payBill =getElFormInput("pay-billbank");
    if(payBill === 'Select Payment Method'){
        alert("are buka chuda agge payment method select kor")
        return;
    }
    const payment_number = getElFormInput("Pay-bill-number");
    if(payment_number.length !=11){
        alert("Invalid Number")
        return;
    }
    const payCall = getElFormInput("Pay-billamount");
    const current_balance = getBalance();
    const pay_bill = current_balance - Number(payCall)
    if(pay_bill < 0){
        alert("insufficient balance")
        return;
    }

    const payPin =getElFormInput("Pay-bill-pin");
    if(payPin === "2233"){
        alert("Payment Succesful")
        setBalance(pay_bill)
    }else{
        alert("Invalid Pin");
        return;
    }
})