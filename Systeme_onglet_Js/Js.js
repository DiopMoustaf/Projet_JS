function openOnglet(evt , name){
    var i , Num1 , Awa;
    Num1 = document.getElementsByClassName('Num1');
    for(i= 0; i <Num1.length ; i++){
        Num1[i].style.display = 'none';
    }

    Awa = document.getElementsByClassName('Awa');
    for(i= 0; i <Awa.length ; i++){
        Awa[i].className = Awa[i].className.replace
        ("active","");
    }

    document.getElementById(name).style.display = "block" ;
    evt.currentTarget.className += "active"
}