//0
function nimiLugemine(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere, "+nimi.value;
    vastus.style.color="red";
    return nimi.value;
}
//1
function muusikValik(){
    let vastus1=document.getElementById("vastus1");
    let metallica=document.getElementById("metallica");
    let queen=document.getElementById("queen");
    let coldplay=document.getElementById("coldplay");
    let edsheeran=document.getElementById("edsheeran");
    let beatles=document.getElementById("beatles");

    let valik="";
    if(metallica.checked){
        valik+=metallica.value+', ';
    }
    if(queen.checked){
        valik+=queen.value+', ';
    }
    if(coldplay.checked){
        valik+=coldplay.value+', ';
    }
    if(edsheeran.checked){
        valik+=edsheeran.value+', ';
    }
    if(beatles.checked){
        valik+=beatles.value+', ';
    }
    if(valik==""){
        valik="ühtegi ei ole valitud";
    }
    vastus1.innerHTML="Sinu valitud muusikud: "+valik;
    vastus1.style.color="green";
    return valik;
}
//2
function arvamusLugemine(){
    let arvamus=document.getElementById("arvamus");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus: "+arvamus.value;
    vastus2.style.color="blue";
    return arvamus.value;
}
//3
function tunnidLugemine(){
    let tunnid=document.getElementById("tunnid");
    let vastus3=document.getElementById("vastus3");

    vastus3.innerHTML="Sa kuulad muusikat "+tunnid.value+" tundi päevas";
    vastus3.style.color="red";
    return tunnid.value;
}
//4
function raadioValik(){
    let vastus4=document.getElementById("vastus4");
    let smaili=document.getElementById("smaili");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    let raadio;
    if(jah.checked){
        raadio="jah";
        smaili.src=jah.value;
        smaili.style.display="block";
    } else if(ei.checked){
        raadio="ei";
        smaili.src=ei.value;
        smaili.style.display="block";
    } else {
        raadio="palun vali";
        smaili.style.display="none";
    }
    vastus4.innerHTML="Raadio kuulamine: "+raadio;
    vastus4.style.color="purple";
    return raadio;
}
//5
function jaamadLugemine(){
    let jaamad=document.getElementById("jaamad");
    let vastus5=document.getElementById("vastus5");

    vastus5.innerHTML="Sinu nimetatud jaamad: "+jaamad.value;
    vastus5.style.color="orange";
    return jaamad.value;
}
//6
function stiilValik(){
    let stiil=document.getElementById("stiil");
    let vastus6=document.getElementById("vastus6");

    let valik=stiil.value;
    if(valik==""){
        valik="palun vali stiil";
    }
    vastus6.innerHTML="Sinu vastus: "+valik;
    vastus6.style.color="green";
    return valik;
}
//7
function saada(){
    let kokkuvote=document.getElementById("kokkuvote");
    let nimi=nimiLugemine();
    let muusikud=muusikValik();
    let arvamus=arvamusLugemine();
    let tunnid=tunnidLugemine();
    let raadio=raadioValik();
    let jaamad=jaamadLugemine();
    let stiil=stiilValik();

    kokkuvote.innerHTML='Nimi: '+nimi+'<br>'
        +'Muusikud: '+muusikud+'<br>'
        +'Arvamus koolis muusika kuulamisest: '+arvamus+'<br>'
        +'Kuulan muusikat '+tunnid+' tundi päevas<br>'
        +'Raadio kuulamine: '+raadio+'<br>'
        +'Raadiojaamad: '+jaamad+'<br>'
        +'Lemmikstiil: '+stiil;
}
//8
function puhasta(){
    vastus.innerHTML="";
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    kokkuvote.innerHTML="";
    smaili.style.display="none";
}