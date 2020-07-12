
let die;
let cont = document.getElementById("container-die");
class Dice{
    constructor(){
        this.value = this.roll();
        this.div = document.createElement("div");
       this.div.classList.add("text-center", "px-0", "mx-2", "mb-5", "col", "bg-white", "rounded"); 
       this.div.innerHTML = `<img src="http://javascriptkit.com/complete/images/d${this.value}.gif"  alt="Responsive image">`;
    (this.div.getElementsByTagName("img")[0]).addEventListener("click", () =>{
           this.div.getElementsByTagName("img")[0].src = `http://javascriptkit.com/complete/images/d${this.roll()}.gif`;
        });
        (this.div.getElementsByTagName("img")[0]).addEventListener('dblclick', () =>{
            cont.removeChild(this.div);
        });
       
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
    let count = (document.body.getElementsByTagName("img")).length;
    if(count > 0){
        for(let i = 0; i < count; i++){
            let src = document.body.getElementsByTagName("img")[i].src;
            document.body.getElementsByTagName("img")[i].src= `http://javascriptkit.com/complete/images/d${dice.roll()}.gif`;
        }
    }
    else
        alert("You currently do not have any dice on screen. You need to add at least one dice in order to use this feature.");
       
     } );
sumbtn.addEventListener("click",() =>{
       let count = (document.body.getElementsByTagName("img")).length;
    let total = 0;
    if(count > 0){
        for(let j = 0; j < count; j++){
              let src = document.body.getElementsByTagName("img")[j].src;
            total += parseInt(src.substring((src).indexOf('d') + 1, (src).indexOf('.g'))); 
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
