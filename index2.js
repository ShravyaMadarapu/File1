function changecolor() {

    let c = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let color = "#";

    for(let i=0;i<6;i++) {
        let r = Math.floor(Math.random() * 16);
        color += c[r];
    }
     let col = document.getElementById("colorInput").value;
    document.getElementById("body").style.backgroundColor = col;
}