let die;
//row and div element where my dices will be appended to
let cont = document.getElementById("container-die");
// new dice button
let diebtn = document.getElementById("newdie");
// reroll dice button
let rrbtn = document.getElementById("reroll");
// sum of all dices button
let sumbtn = document.getElementById("sum");

class Dice {
  //this works on an indivdual level (works on the specific dice)
  constructor() {
    //return random dice valuw (1-6)
    this.value = this.roll();
    //creating individual dice
    this.div = document.createElement("div");
    this.div.classList.add(
      "text-center",
      "px-0",
      "mx-2",
      "mb-5",
      "col",
      "bg-white",
      "rounded"
    );
    //based on the specific dice value I can load an image dice face value w/in this div element; essentially my dice element
    this.div.innerHTML = `<img src="http://javascriptkit.com/complete/images/d${this.value}.gif"  alt="Responsive image">`;
    //when I click this image w/in the div element I essentially roll again and get a new value and upload a new corresponding image face value as well
    this.div.getElementsByTagName("img")[0].addEventListener("click", () => {
      this.div.getElementsByTagName(
        "img"
      )[0].src = `http://javascriptkit.com/complete/images/d${this.roll()}.gif`;
    });
    //double clicking an image will remove a div element (dice) all together
    this.div.getElementsByTagName("img")[0].addEventListener("dblclick", () => {
      cont.removeChild(this.div);
    });
    //div element (dice) appends to the 'dice contaniner'
    cont.append(this.div);
  }
  //generates random dice value
  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

/* The methods/functions below go affect all dices in the 'dice-container'*/

//clicking will create an instance of the Dice class and a new dice is appended to the 'dice-conatiner'
diebtn.addEventListener("click", () => {
  dice = new Dice();
});

//reroll dice button loops through each of the current dices and rerolls and updates their face image values based on reroll value
rrbtn.addEventListener("click", () => {
  let count = document.body.getElementsByTagName("img").length;
  if (count > 0) {
    for (let i = 0; i < count; i++)
      document.body.getElementsByTagName("img")[
        i
      ].src = `http://javascriptkit.com/complete/images/d${dice.roll()}.gif`;
  } else
    alert(
      "You currently do not have any dice on screen. You need to add at least one dice in order to use this feature."
    );
});

//takes the sum of all the dices displayed on the screen. loops through each dice and extracts and parses the integer value in the src of each image
sumbtn.addEventListener("click", () => {
  let count = document.body.getElementsByTagName("img").length;
  let total = 0;
  if (count > 0) {
    for (let j = 0; j < count; j++) {
      let src = document.body.getElementsByTagName("img")[j].src;
      total += parseInt(src.substring(src.indexOf("d") + 1, src.indexOf(".g")));
    }
    alert(`The sum of all the dice values is ${total}.`);
  } else alert(`The sum of all the dice values is 0.`);
});
