function saiaKalk(){
    let vastus=document.getElementById("vastus");
    let saiatyyp=document.getElementById("saiatyyp");
    const juustu=2.00;
    const mooni=1.50;
    const pontsik=3.00;
    const kaneeli=1.30;
    let kogus=document.getElementById("kogus");
    let pilt=document.getElementById("pilt");

    //if valikud selectedIndex
    //1.rida selectedIndex=0
    if(saiatyyp.selectedIndex===0){
        vastus.innerHTML="palun vali saia tüüp!";
        vastus.style.color="red";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDq_gC8V5DJDY2FvEk3Mg97fP8RUMbFzXX6faK_zNpBA&s=10";
    }
    if(saiatyyp.selectedIndex===1){
        //toFixed(2) - ümardab 2 kohta peale komat
        vastus.innerHTML=
            "Sa valisid "+ saiatyyp.value + '<br>'+
            "Valitud kogus on "+ kogus.value +"tk"+'<br>'+
            "Kokku hind on "+(mooni*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQVkMfxTjX09ouWXG8iXmp1AUnVaO7qiKIZT9oEGjCw&s=10";
    }
    if(saiatyyp.selectedIndex===2){
        vastus.innerHTML=(juustu*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
    }
    if(saiatyyp.selectedIndex===3){
        vastus.innerHTML=(pontsik*kogus.value).toFixed(2)+" €";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6ic6_w0IRwrz77B79wphT1w8uY2FlRIj18G6uNu_g&s=10";
    }
    if(saiatyyp.selectedIndex===4){
        vastus.innerHTML=kaneeli*kogus.value+"€";
        vastus.style.color="blue";
    }
}