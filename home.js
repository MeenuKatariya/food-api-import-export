import navbar from  "./script/index.js";
let mainDiv=document.getElementById("main");
let navbarContainer=document.getElementById("navbar-container")

navbarContainer.innerHTML=navbar()


var userData=JSON.parse(localStorage.getItem("userData")) 

var data=JSON.parse(localStorage.getItem("userDetails"))



// console.log(data)
displayData(userData[data[0]]);
function displayData(element)
{
    // data.forEach(element=>{
      document.querySelector("#containers").innerHTML="";
       var card=document.createElement("div")
       card.setAttribute("class","cards")

       var name=document.createElement("p")
       name.innerText="Name : "+element.name;

       var email=document.createElement("p")
       email.innerText="Email : "+element.email;

       var password=document.createElement("p")
       password.innerText="Password : "+element.password;

       var mobile=document.createElement("p")
       mobile.innerText="Mobile :+"+ element.mobile;

     card.append(name,email,password,mobile)
     document.querySelector("#containers").append(card);

    // })
        
        
    }

