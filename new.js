//document.querySelector('#b1').addEventListener('click',data1);


console.log('heyyya its new');


var cou='0';
function clearing(){
    document.getElementById('t1').value=" ";
    document.getElementById('a1').value=" ";
    document.getElementById('i1').value=" ";
}
 
function d1(){
    console.log('hey');
    banner();
    let title=document.getElementById('t1').value;
    let author=document.getElementById('a1').value;
    let isbn=document.getElementById('i1').value;

    clearing();

    //alert(name);
    let main=document.getElementById('c3').getElementsByClassName('contain')[0];
    console.log('hey');
    let newdiv=document.createElement('div');
    let newp1=document.createElement('p');
    let newp2=document.createElement('p');
    let newp3=document.createElement('p');
    let newb1=document.createElement('button');
    newb1.innerText="close";
    newb1.style.width="20%";
    newb1.style.padding="10px";
    let str="but("+cou + ")";
    //console.log(str);
    newb1.setAttribute('onclick',str);
    newdiv.setAttribute('class','box');
    
    newdiv.setAttribute('id','box'+cou);
    let xc=parseInt(cou);
    xc++;
    cou=xc.toString();
    newdiv.style.boxShadow="none";
    newdiv.style.backgroundColor="lightgrey";
    newp1.innerText=title;
    newp2.innerText=author;
    newp3.innerText=isbn;
    newp1.style.fontWeight="400";
    newp2.style.fontWeight="400";
    newp3.style.fontWeight="400";
    newdiv.appendChild(newp1);
    newdiv.appendChild(newp2);
    newdiv.appendChild(newp3);
    newdiv.appendChild(newb1);
    main.appendChild(newdiv);
    console.log(newdiv);
    //alert('hey');
    
    
}




function time1(){
    let x=document.getElementById('alert1');
    x.style.padding="10px";
    x.style.backgroundColor="green";
    x.style.textAlign="center";
    let y=document.createElement('p');
    
    y.setAttribute('id','pp')
    y.style.color="white";

    y.innerText="new added";
    x.appendChild(y);
}

function time2(){
    x.style.padding="10px";
    x.style.backgroundColor="green";
    x.style.textAlign="center";
    let y=document.createElement('p');
    
    y.setAttribute('id','pp')
    y.style.color="white";

    y.innerText="removal";
    x.appendChild(y);
}



function removal(){
    x=document.getElementById('alert1');
    x.style="none";
    document.getElementById('pp').remove();
}

function banner(){
    time1();
    setTimeout('removal()',3000);
}

function banner2(){
    time2();
    setTimeout('removal()',3000);
}


function but(xc){
    document.getElementById('box'+xc).remove();
    banner2();
}