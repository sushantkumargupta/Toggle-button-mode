var flag=0;

var body=document.querySelector("body");
var h1=document.querySelector("h1");
var circle=document.querySelector('#circle');

document.querySelector("#Toggle").onclick = function(){
  if(!flag){
    h1.style.color='white';
    body.style.background='black';
    circle.style.marginLeft='100px';
    flag=1;
  }
  else{
    h1.style.color='black';
    body.style.background='white';
    circle.style.marginLeft='1px';
    flag=0;
  }
}