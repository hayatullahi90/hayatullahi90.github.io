// alert('hiii');



function val() {
    var fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    passcode = document.getElementById('password').value;
    confirmPassword = document.getElementById('confirm-password').value;
    if (fname == ''){
        alert('please input your name');
    }
    else  if(email == ''){
        alert('please input your email')
    }
    else if (password == ''){
        alert('please input correct password');
    }
    
   else if (confirmPassword == '') {
    alert('incorrect-password');
   }
   else if ( confirmPassword !== password ){
    alert('incorrect password!')
   }
   else {
       alert('congratulations ' + fname);
   }
  
}