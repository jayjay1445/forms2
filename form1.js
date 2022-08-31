function validateform(){
    var password=document.getElementById('password').value;

    if (password.length<=6){
        alert('password must be longer than 6 characters')
    }
}