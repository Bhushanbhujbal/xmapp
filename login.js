console.log("mee");

/*
function store(){
const Name=document.getElementById('name').value;
const name=localStorage.setItem('Name',Name);

const Lcation=document.getElementById('location').value;
const location=localStorage.setItem('Name', Lcation);

const Email=document.getElementById('email').value;
const email=localStorage.setItem('Name',Email);

const Password=document.getElementById('password').value;
const password=localStorage.setItem('Name',Password);

}
*/

function myfunction(){
    var user=document.getElementById("name").value;
    let sto=localStorage.setItem("UserName",user);

    var email=document.getElementById("email").value;
    let stor=localStorage.setItem("UserEmail",email);

    var Mobile=document.getElementById("location").value;
    let store=localStorage.setItem("UserMbNo",Mobile);

    var Password=document.getElementById("password").value;
    let store1=localStorage.setItem("UserPassword",Password);

}