console.log('hemonto');
const h2List=document.getElementsByTagName('h2');
console.log(h2List);
for (const h2 of h2List) {
    h2.style.backgroundColor='lightblue';
}

const backPack=document.getElementById('backpack');
backPack.style.backgroundColor='tomato';

const cardList=document.getElementsByClassName('card');
for (const card of cardList) {
    card.style.borderRadius='30px'; 
}

const buttonUpdate=document.getElementById('btn-more1');
buttonUpdate.addEventListener('click',function(){
    console.log('you have clicked');
})

document.getElementById('btn-more1').addEventListener('click',function(){
    console.log('button clicked');
})