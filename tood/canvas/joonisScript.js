//sirge joon
function sirgeJoon() {
    //määra tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle = "red";
        t.lineWidth = 2;
        t.moveTo(50,0); //alguspunkt
        t.lineTo(150,200); //lõppunkt

        t.stroke();
    }
}
function puhasta() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0, 0, 300, 400);
    }
}
//kolmnurk
function kolmnurk() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle = "red";
        t.fillStyle="green";
        t.lineWidth = 2;
        t.moveTo(50, 50);
        t.lineTo(150,200);
        t.lineTo(50, 200);
        t.lineTo(50,50);
        t.stroke();
        t.fill();
    }
}
function ristkylik() {
    const tahvel = document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "olive";
        t.fillRect(100, 50,laius.value, korgus.value);
    }
}
function ring(){
    const tahvel = document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv = document.getElementById("varv");

    if (tahvel.getContext) {
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = varv.value;
        t.arc(100, 150, r.value, 0, 2 * Math.PI, true);
        t.fill();
    }
}
function korvad() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.strokeStyle = "black";
        t.lineWidth = 2;

        t.beginPath();
        t.moveTo(30, 80);
        t.lineTo(80, 80);
        t.lineTo(80, 150);
        t.lineTo(30, 150);
        t.lineTo(30, 80);
        t.stroke();

        t.beginPath();
        t.moveTo(220, 80);
        t.lineTo(270, 80);
        t.lineTo(270, 150);
        t.lineTo(220, 150);
        t.lineTo(220, 80);
        t.stroke();
    }
}
function pea() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.strokeStyle = "black";
        t.lineWidth = 2;

        t.beginPath();
        t.arc(150, 135, 70, 0, 2 * Math.PI, true);
        t.stroke();
    }
}
function silmad() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.strokeStyle = "black";
        t.lineWidth = 1;

        t.beginPath();
        t.ellipse(120, 120, 20, 20, 0, 0, 2 * Math.PI);
        t.stroke();

        t.beginPath();
        t.ellipse(180, 120, 20, 20, 0, 0, 2 * Math.PI);
        t.stroke();

        t.fillStyle = "black";
        t.beginPath();
        t.arc(120, 120, 1.5, 0, 2 * Math.PI, true);
        t.fill();
        t.beginPath();
        t.arc(180, 120, 1.5, 0, 2 * Math.PI, true);
        t.fill();
    }
}
function nina() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.strokeStyle = "black";
        t.lineWidth = 2;

        t.beginPath();
        t.moveTo(140, 140);
        t.lineTo(160, 140);
        t.lineTo(160, 170);
        t.lineTo(140, 170);
        t.lineTo(140, 140);
        t.stroke();
    }
}
function suu() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.strokeStyle = "black";
        t.lineWidth = 2;

        t.beginPath();
        t.moveTo(110, 180);
        t.lineTo(180, 180);
        t.stroke();
    }
}
//pilt failist //draw
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        const fail=new Image()
        fail.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKV-Cv8Y4NDrqQI3BZZZgRXmLDVL6EIMOpwW9nChj1jHkpme9kHwWG-tydeO01mZ55pvNtmJwsCrGlu0wJJoa2Q1WVRkRh6lZ8IfH_oBiZQ&s=10";
        fail.onload=()=>{
            t.drawImage(fail, 100, 100, 100, 100);
        }
    }
}


