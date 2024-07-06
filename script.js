document.getElementById('myform').addEventListener('submit',
function(event){
    event.preventDefault();
    let emailerror= '';
    let phoneerror='';
    let passworderror='';

//validate email
const email= document.getElementById('email').value;
const emailpattern =/^([A-Za-z0-9\.-]+)@([a-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
if(!emailpattern.test(email)){
    emailerror ='please Enter a valid Email address';
}
//validate phone Number
const phone = document.getElementById('phone').value;
const phonepattern =/^\d{10}$/;
if (! phonepattern.test(phone)){
    phoneerror ="please Enter a 10 digit phone number"
}
//validate password
const password = document.getElementById('password').value;
if(password.length <6){
    passworderror = " password should be atleast 6 characters long"
}
//password error messages
document.getElementById('emailerror').textContent=emailerror ;
document.getElementById('phoneerror').textContent=phoneerror ;
document.getElementById('passworderror').textContent=passworderror ;

//submit form if no errors
if (!emailerror  && !phoneerror && !passworderror ){
    alert ('form submitted successfully')
}
});
 