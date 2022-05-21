import navbar from  "./script/index.js";
let mainDiv=document.getElementById("main");
let navbarContainer=document.getElementById("navbar-container")

navbarContainer.innerHTML=navbar()

  document.querySelector("#searchInputData").addEventListener("input",()=>{
      debounce(fetchData,1000)
  })
   async function fetchData()
   {
       try {
        let inputData=document.querySelector("#searchInputData").value;
           let result =await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
           let output=await result.json()
           console.log(output)
        display(output)
       } catch (error) {
           console.log(error)
           
       }
   }
   
   let timerid;
   function debounce(func,wait)
   {
       if(timerid)
       {
           clearTimeout(timerid);
       }
       timerid=setTimeout(func,wait)
   }

   function display(data)
   {
    document.querySelector("#conta").innerHTML="";
       data.meals.forEach(element => {
        var card=document.createElement("div");
       card.setAttribute="class","card";

       var meal=document.createElement("p");
       meal.innerText=element.strMeal
      
       var category=document.createElement("p");
       category.innerText=element.strCategory

       var instruction=document.createElement("p");
       instruction.innerText=element.strInstructions;

       var tags=document.createElement("p");
       tags.innerText=element.strTags

       card.append(meal,category,instruction,tags)
       document.querySelector("#conta").append(card);
       

       });
     
   }