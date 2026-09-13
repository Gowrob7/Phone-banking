document.getElementById("get-bonus-btn").addEventListener("click",function(){
    const get_bonus = getElFormInput("coupon");
    
    if(get_bonus === "welcome20"){
        const addBonus = getBalance() + 40;
        setBalance(addBonus)
        alert("Congrats! You got a bonus")
    }else{
        alert('incorrect coupon')
        
    }
})