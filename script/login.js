document.getElementById('login-btn').addEventListener('click',function(){
    const ContactNum = document.getElementById('number');
    const matchNum = ContactNum.value;
    const Pin = document.getElementById('pin-code');
    const PinV = Pin.value;

    if(matchNum == '01759662540' && PinV == '2233'){
        alert('login succesful');

     window.location.assign("/home.html");
    }
    else{
        alert('login fail');
       return;
    }
})