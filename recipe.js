
import navbar from  "./script/index.js";
let mainDiv=document.getElementById("main");
let navbarContainer=document.getElementById("navbar-container")

navbarContainer.innerHTML=navbar()


async function fetchsData()
   {
       try {
        
           let result =await fetch (`https://www.themealdb.com/api/json/v1/1/random.php`)
           let output=await result.json()
           console.log(output)
        displayData(output)
       } catch (error) {
           console.log(error)
           
       }
   }
   fetchsData();

   function displayData(data)
   {
    data.meals.forEach(element => {
        var card=document.createElement("div");
       card.setAttribute="class","card";

       var meal=document.createElement("p");
       meal.innerText= "Meal : "+element.strMeal
      
       var category=document.createElement("p");
       category.innerText= "Category : "+element.strCategory

       var instruction=document.createElement("p");
       instruction.innerText= "Area :"+element.strArea;

       var tags=document.createElement("p");
       tags.innerText= " id : "+element.idMeal

       card.append(tags,meal,category,instruction)
       document.querySelector("#cont").append(card);
       
   }
   )} 



