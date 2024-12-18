//Lets start by storing the buttons in their own variable. 
const nextButton = document.getElementById('nextButton');

//We should also store the image sources in their variables. I should need to worry about those too often. 
const image1 = "./media/images/carousel/tallgrass.png";
const image2 = "./media/images/carousel/tallgrass2.png";
const image3 = "./media/images/carousel/tallgrass3.png";



let currentIndex = 0;
const imageArray = [image1, image2, image3];

const image = document.createElement('img');

//This is div container waiting to receive the image tag. Stored in the imageContainer variable.
var displayImage = document.getElementById('displayImage');

//These dynamicallt set the "img attributes" of the variable image. Image Id sets the ID. image.ClassName sets the class. and image.src sets the src. 
image.id = "imageCarousel";
image.className = "imageClass";
image.src = image1;
displayImage.appendChild(image);

//We need event listeners for those buttons.


nextButton.addEventListener('click', () => {
    clearBox(displayImage);
    //This creates a new image tag. It is stored in the variable image. 
    

    //Eventually we will need to set this dynamically.
    image.src = imageArray[currentIndex];
    displayImage.appendChild(image);
    iterateArray();
    updateDisplay();
});

function iterateArray() {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
}

function clearBox() {
    document.getElementById('displayImage').innerHTML = " ";
}

function updateDisplay() {
    console.log(currentIndex);
};




