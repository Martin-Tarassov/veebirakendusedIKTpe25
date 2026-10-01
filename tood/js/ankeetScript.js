function nimiLugemine(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
     //innerHTML -dünaamiliselt genereerib teksti html'ina
        vastus.innerHTML="Tere hommikust, "+nimi.value;
        vastus.style.color="red";
}
//radionupude valikud
function suguValik(){
    let vastus2=document.getElementById("vastus2");
    let naine=document.getElementById("naine");
    let mees=document.getElementById("mees");
    let muu=document.getElementById("muu");

    //radio valikud
    let sugu;
    if(naine.checked){
        sugu=naine.value;}
        else if(mees.checked){
             sugu=mees.value;
        }   else if(muu.checked){
                sugu=muu.value;
        }else {
             sugu="palun vali sugu";
    }
        vastus2.innerHTML="Valitud sugu on " +sugu;
        vastus2.style.color="green";
        return sugu;
}
//checkbox'i valik
function sportValik(){
    let vastus3=document.getElementById("vastus3");
    let ujumine= document.getElementById("ujumine");
    let poks=document.getElementById("poks");
    let suusatamine=document.getElementById("suusatamine");
    let uisutamine=document.getElementById("uisutamine");
    let jooksmine=document.getElementById("jooksmine");


    let sport="";
    if(ujumine.checked){
        sport += ujumine.value + ', ';
    }
    if(poks.checked){
        sport+=poks.value+', ';
    }
    if(suusatamine.checked){
        sport+=suusatamine.value+', ';
    }
    if(jooksmine.checked){
        sport+=jooksmine.value+', ';
    }
    if(uisutamine.checked){
        sport+=uisutamine.value+', ';
    }
    if(sport==""){
        sport="sa ei tee sporti";
    }
    vastus3.innerHTML=sport;
    return sport;
}
function klubiValik(){
    let vastus=document.getElementById("vastus5");
    let klubi=document.getElementById("klubi");

    //1.rida loendis - see on 0.rida
    if(klubi.selectIndex!==0){
       vastus5.innerHTML="Valitud spordi klub on " +klubi.value;
       vastus.style.color="red";
    }
    return klubi.value;
}
function kuupaevValik(){
    let vastus6=document.getElementById("vastus6");
    let kuupaev=document.getElementById("kuupaev");

    vastus6.innerHTML="Valitud kuupaev on " +kuupaev.value;
}
function rangeValik(){
    let vastus7=document.getElementById("vastus7");
    let kogemus=document.getElementById("kogemus");

    vastus7.innerHTML="S valisid" +kogemus.value+" aastat"
    vastus7.style.color="red";

    return vastus7.value;
}

function tervitus(){
    let vastus4=document.getElementById("vastus4");
    let nimi=nimiLugemine();
    let sugu=suguValik();
    let spordiala=sportValik();
    let klubi=klubiValik();
    let kuupaev=kuupaevValik();


    vastus4.innerHTML='Sisestatud nimi on '+nimi+'<br>'
        +'Valitud sugu on '+sugu+'<br>'
        +'Valitud spordialad: '+spordiala+'<br>'
        +'Valitud klubi: '+klubi+'<br>'
        +'Valitud kuupaev:'+kuupaev;
    vastus4.style.backgroundColor="yellow";
}
function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}