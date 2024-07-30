let inputs = document.querySelectorAll("input");
let submitbutton = document.querySelector(".submit")
let table = document.querySelector("table");
let showinfos = document.querySelector(".show")

let array =[], userdatas=[];
let count= 0;
let inputValues=[];


submitbutton.addEventListener("click", (event)=>{
    event.preventDefault();
    userdatas = [...inputs].map(input => input.value);

    let allFilled = userdatas.every(value => value !== "");
    if (!allFilled) {
        alert("Please, fill the options correctly...");
        
    }
  else{
    count += 1;
    array[count] = userdatas;
    console.log(array);


    inputs.forEach(input => input.value = "");

    
    let tr = document.createElement("tr");
    userdatas.forEach(data => {
        let td = document.createElement("td");
        td.textContent = data;
        tr.appendChild(td);
    });

    
    table.appendChild(tr);
  }
   
})


showinfos.addEventListener("click", ()=>{

table.style.visibility="visible";

})
