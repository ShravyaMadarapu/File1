/*const myFun = () => {
    //console.log("hello");
    let display = document.getElementById("display")
    display.innerHTML = display.innerHTML == "Hello" ? "Bye" : "Hello"
    /*if(display)
    {
        display.innerHTML = "Bye"
    }
    else{
        console.log("Hello");
    }*/

    //display.style.color = display.innerHTML === "Hello" ? "blue" : "red"
//}
let isShow = true
const myFun = () => {

    let display = document.getElementById("display")

    if(isShow){
        display.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLn77P1T_bjhytVmUGu3TK6DS479gDxC9iQ&s";
        isShow = !isShow
    } else {
        display.src = "https://images.stockcake.com/public/a/b/a/abaa60ef-5cae-48be-aa9e-a6f56c28aab0_large/elegant-blue-flowers-stockcake.jpg";
        isShow = !isShow
    }
}