const sercetnumber=Math.trunc(Math.random()*50)+1;
let pavan=20;
document.querySelector('.check').addEventListener('click',function(){
  const heritage=Number(document.querySelector('.gmk').value);
  console.log(heritage,typeof heritage);

  if(!heritage){
    document.querySelector('.apollo').textContent='⛔WRONG NUMBER'
  }else if(heritage === sercetnumber){
    document.querySelector('.apollo').textContent='🎉Correct Number'
    document.querySelector('.box').textContent=sercetnumber;
    document.querySelector('html').style.backgroundColor='green'
  }else if(heritage>sercetnumber){
    document.querySelector('.apollo').textContent='📈Too High'
    pavan=pavan-1
    document.querySelector('.gvk').textContent=pavan;
  }else if(heritage<sercetnumber){
    document.querySelector('.apollo').textContent='📉Too Low'
     pavan=pavan-1
    document.querySelector('.gvk').textContent=pavan; 
  }
});

document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.box').textContent='?'
  document.querySelector('.apollo').textContent='start guessing'
  document.querySelector('.gvk').textContent=' score:20'
  document.querySelector('.gmk').textContent=''
  document.querySelector('html').style.backgroundColor='aliceblue'
})