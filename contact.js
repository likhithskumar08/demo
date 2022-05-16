// const btn = document.querySelector('#b1');

// btn.addEventListener('click', function () {
//     alert("Congrats! You have submitted")
// })


// const arrname= new Array();
// const arremail= new Array();
// const arrphone= new Array();
// const arrdesc= new Array();

// function savedata(){
//     let name= document.getElementById('name').value;
//     let email= document.getElementById('email').value;
//     let phone= document.getElementById('phone').value;
//     let desc= document.getElementById('desc').value;

//     arrname[arrname.length]=name
//     arremail[arremail.length]=email
//     arrphone[arrphone.length]=phone
//     arrdesc[arrdesc.length]=desc
// } above code will insert the elements to an array only when the  savedata() function is assigned to onclick
// attribute.

// const details = []

// function getdetails() {
//     // e.preventDefault();
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const phone = document.getElementById('phone');
//     const desc = document.getElementById('desc');

//     const detail = { name: name.value, email: email.value, phonenumber: phone.value, description: desc.value }

//     details.push(detail);

//     console.log(details);

// }

// function displayData(){
// const content=`Data entered by the user: ${details()}`
// document.getElementById('display').innerText = content;
// }

const flname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const desc = document.getElementById('desc');


let username = []
let useremail = []
let userphone = []
let userdesc = []

let myD = [];

const button = document.querySelector('.btnSubmit')

button.addEventListener('click', function () {

    if (flname.value == '') {
        alert('enter the valid user-name!');
    } else if (email.value == '') {
        alert('enter a valid user-email!');
    } else if (phone.value == '') {
        alert('enter a valid user phone number!')
    } else if (desc.value == '') {
        alert('enter a valid description!')
    } else {
        username.push(flname.value)
        useremail.push(email.value)
        userphone.push(phone.value)
        userdesc.push(desc.value)
    }
})

function a(i) {
    myD.push(username[i])
    myD.push(useremail[i])
    myD.push(userphone[i])
    myD.push(userdesc[i])
    console.log(myD);
    myD = [];
}

