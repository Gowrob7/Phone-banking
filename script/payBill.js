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

          const history = document.getElementById("history-container");
        const NewEl = document.createElement('div')
        NewEl.innerHTML = `
            <div class=" rounded-xl bg-base-100 w-full shadow p-6">
        <div class ="  grid grid-cols-2 gap-2 space-y-3 bg-base-200 bg-base-500">
        <h2 class= " text-neutral-800 font-bold "> Payment</h2>
        <p class = " text-neutral-800 font-bold ">Bank <br> ${payBill}</p>
        <p class =" text-neutral-800  font-bold"> Account  <br> ${payment_number}</p>
        <p class =" text-neutral-800 font-bold"> Account <br> ${payCall} Tk</p>
        <p class = "text-neutral-800 font-bold" >Time<br> ${new Date().toLocaleString()}</p>
        </div>   
        </div>`
        history.append(NewEl)
    }else{
        alert("Invalid Pin");
        return;
    }
})