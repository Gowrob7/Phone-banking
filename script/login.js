document.getElementById('login-btn').addEventListener('click',function(){
    const ContactNum = document.getElementById('number');
    const matchNum = ContactNum.value;
    const Pin = document.getElementById('pin-code');
    const PinV = Pin.value;

    if( PinV == '2233'){
        alert('Login Succesful');

     window.location.href ="./home.html";
    }
    else{
        alert('Invalid Pin');
       return;
    }
})
