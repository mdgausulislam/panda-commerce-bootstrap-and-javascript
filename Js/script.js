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
document.getElementById('btn-more1').addEventListener('click',function(){
    const cardItem=document.getElementsByClassName('card');
    console.log(cardItem);
    cardItem.style.display='none';
})
document.getElementById('btn3').addEventListener('click',function(){
    const remove=document.getElementById('backpack');
    remove.style.display='none';
})


document.getElementById('write-text').addEventListener('keyup',function(events){
    const text=events.target.value;
    const buttonDelete=document.getElementById('btn3');

    if (text=='email'){
        buttonDelete.removeAttribute('disabled');
    }else{
        buttonDelete.setAttribute('disabled',true);
    }

})

// const image = document.getElementById("myImage");
// function changeImage() {
//     image.src = "images/banner-images/tv.png";
// }
// image.addEventListener("mouseover", changeImage);

// function changeImageOnMouseOut() {
//     image.src = "images/banner-images/xbox.png";
// }
// image.addEventListener("mouseout", changeImage);


// const image1 = document.getElementById("myImage1");
// function changeImage1() {
//     image.src = "images/banner-images/xbox.png";
// }
// image.addEventListener("mouseout", changeImage1);



