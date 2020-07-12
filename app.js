const SIZE = "150px";
let die;
let cont = document.getElementById("container-die");
class Dice{
    constructor(){
        this.value = this.roll();
        this.div = document.createElement("div");
       this.div.classList.add("text-center", "px-0", "mx-2", "mb-5", "col", "border", "border-dark", "rounded"); 
       this.div.innerHTML += `<span class="row  align-content-center my-auto h-100"><span class="col-12"></span><span class="col-12"><h1 class="h-100 m-0">${this.value}</h1></span><span class="col-12"></span></span>`;
    (this.div.getElementsByClassName("row")[0]).addEventListener("click", () =>{
            
            this.div.getElementsByTagName("h1")[0].innerHTML = this.roll();
        });
        (this.div.getElementsByClassName("row")[0]).addEventListener('dblclick', () =>{
            cont.removeChild(this.div);
        });
        this.div.style.width = SIZE;
        this.div.style.height = SIZE;
        cont.append(this.div);
    }
    roll(){
      
         return Math.floor(Math.random()*(6)) + 1;
    }
}

let diebtn = document.getElementById("newdie");
let rrbtn = document.getElementById("reroll");
let sumbtn = document.getElementById("sum");
diebtn.addEventListener("click",() =>{dice = new Dice();} );


rrbtn.addEventListener("click",() =>{ 
    let count = (document.body.getElementsByTagName("h1")).length;
    if(count > 0){
        for(let i = 0; i < count; i++){
            document.body.getElementsByTagName("h1")[i].innerHTML = dice.roll();
        }
    }
    else
        alert("You currently do not have any dice on screen. You need to add at least one dice in order to use this feature.");
       
     } );
sumbtn.addEventListener("click",() =>{
       let count = (document.body.getElementsByTagName("h1")).length;
    let total = 0;
    if(count > 0){
        for(let j = 0; j < count; j++){
            total += parseInt(document.body.getElementsByTagName("h1")[j].innerHTML); 
        }
        alert(`The sum of all the dice values is ${total}.`);
    }
    else
        alert(`The sum of all the dice values is 0.`);
} );









/*const MAX = 800;
let cont = document.getElementById("square-container");
class Square{
    constructor(x, y, size){
        this.div = document.createElement("div");
        this.div.classList.add("square");
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width =`${size}px`;
        this.div.style.height = `${size}px`;
        this.div.addEventListener("click", () =>{
           this.updateLoc();
           this.updateColor();
        });
        this.updateColor();
        cont.appendChild(this.div);
        
    }
    updateLoc(){
        this.div.style.left = `${randomVal(0, MAX)}px`;
        this.div.style.top = `${randomVal(0, MAX)}px`;
    }
    updateColor() {
    let randColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randColor;
}                           


}



let sqbtn = document.getElementById("sq-button");
sqbtn.addEventListener("click", insertSquare);
function insertSquare () {
    let sq = new Square (randomVal(0, MAX), randomVal(0, MAX), randomVal(25, 100));
}                           

function randomVal(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}
*/