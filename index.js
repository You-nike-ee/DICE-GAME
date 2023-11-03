const randomNumber1 = Math.floor(Math.random() * 6) +1;
const randomDiceImg = `dice${randomNumber1}.png`;
const randomImgSrc = `images/${randomDiceImg}`;
const diceImg1 = document.querySelectorAll("img")[0];
diceImg1.setAttribute("src", randomImgSrc);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImgSrc2 = `images/dice${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

let heading = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
heading.innerHTML = "Player 1 won! 🎉"
}else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 won! 🎉"
}else{
    heading.innerHTML = "There is a tie!"
}