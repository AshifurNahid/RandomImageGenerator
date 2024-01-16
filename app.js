let imgarr = [
    './image/183967.jpg',
    './image/324027.jpg',
    './image/929970.jpg',
    './image/Social-16-9_(2).png'

]; 
let imgarr2=[
    './image/ap22364795346345-2c6120b6fd7a4e91f1b49c8bafa1d3b9ae28e482.jpg',
    './image/cristiano-ronaldo-pictures-bc9xghd8s9yni3r6.jpg',
    './image/depositphotos_136733840-stock-photo-portuguese-footballer-cristiano-ronaldo.jpg',
    './image/ronaldo-6130591_1280.jpg'
];


const buttonMessi = document.getElementById("button1");
const buttonRonaldo = document.getElementById("button2");
const random_img = document.getElementById("random_img");

function changeImage(imgArray, event) {
    event.preventDefault();
    
    let rn = Math.floor(Math.random() * 4);
   const existingImage = random_img.querySelector('img');
   if (existingImage) {
       random_img.removeChild(existingImage);
   }
    const newimg = document.createElement("img");
    newimg.src = imgArray[rn];
    random_img.appendChild(newimg);
}

buttonMessi.addEventListener("click", function(event) {
    changeImage(imgarr, event);
});

buttonRonaldo.addEventListener("click", function(event) {
    changeImage(imgarr2, event);
});