const btn = document.querySelector('#b1');

btn.addEventListener('click', function () {
    alert("Congrats! You have submitted")
})

const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
});

// const arrfname= new Array();
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
// } above code will insert the elements to an array only when the onclick
// attribute is assigned to savedata() function.

const details = []

function getdetails() {
    // e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const desc = document.getElementById('desc');

    const detail = { name: name.value, email: email.value, phonenumber: phone.value, description: desc.value }

    details.push(detail);

    console.log(details);

}

// function displayData(){
// const content=`Data entered by the user: ${details()}`
// document.getElementById('display').innerText = content;
// }




