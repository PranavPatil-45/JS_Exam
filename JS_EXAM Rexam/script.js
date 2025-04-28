const Title = document.getElementById("Title");
const addInput = document.getElementById("addInput");
const headingBtn = document.getElementById("headingBtn");
const recipeBtn = document.getElementById("recipeBtn");
const recipeList = document.getElementById("recipeList");
const outHead = document.getElementById("outHead");

let recipes = [];


// function readRecipes() {

    function AddRcp(){
        const InputValue = addInput.value;


        if(InputValue==null || InputValue== ""){
            alert("Add your recpies");
        }else{
            let list = document.createElement("p");
            list.textContent=InputValue;
            recipeList.appendChild(list);
            console.log(InputValue);
            let delBtn = document.createElement("button");
        }
    
    }


    
     function callHead(){
        const headValue = Title.value;
        if(headValue==null || headValue == ""){
            alert("First Enter the Heading");
        
          }else{
            let head = document.createElement("h1")
            
            head.textContent=headValue;
            recipeList.appendChild(head );
            console.log(headValue);
          }
        
    //  }

}
headingBtn.addEventListener("click", ()=> {
  callHead();
})
recipeBtn.addEventListener("click", ()=>{
    AddRcp();
})
readRecipes();