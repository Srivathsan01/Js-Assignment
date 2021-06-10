import imageData from './imagedata.js'
console.log(imageData)

// Declaring Global Variables

var ImageList = document.querySelector(".ImageList")
var Display = document.querySelector(".Display")
var currentSelected = 0
var totalImages = imageData.length
    
function resetColour() {
    var thumbnails = document.querySelectorAll(".thumbnail")
    totalthumbnails = thumbnails.length

    for (var i = 0; i < totalthumbnails; i++) {
        thumbnails[i].style.backgroundColor = "white "
    }
}


function displayImage(listele) {

    // Restting the Background Colours
    console.log(listele)
    
    resetColour();

    // Applying Blue Background to the selected element
    listele.style.backgroundColor = "blue ";

    // Getting the details of the current image 
    let image_Id = listele.id
    currentSelected = image_Id
    
    // Changing the Displayed Image

    let currentImageSource = listele.getElementsByTagName('img')[0].currentSrc
    var ImageDisplay = document.getElementById("Disp")

    // Changing Captions
    let captionText = document.getElementById("CaptionText")
    ImageDisplay.src = currentImageSource;
    let newCaption = listele.getElementsByTagName('p')[0].innerHTML
    captionText.innerHTML = newCaption
        // event.stopPropogation()
} 

function createList(item, index) {
    
    // Main list 
    let listElement = document.createElement('li')
    listElement.classList.add("thumbnail")
    listElement.setAttribute('id',index)
    // Adding image and Caption
    let image = document.createElement("img")
    image.src = item["previewImage"]
    let caption = document.createElement("p")
    caption.innerHTML = item["title"]
    
    
    listElement.appendChild(image)
    listElement.appendChild(caption)
    
    // Event Listener for Clicking
    
    var thumbnailList = document.querySelector('.ThumbList')
    thumbnailList.appendChild(listElement)

}
// Creating a list 
var thumbnailList = document.createElement('ul')
thumbnailList.classList.add("ThumbList")

// Adding data to the list
ImageList.appendChild(thumbnailList)
imageData.forEach((item,index) => {
    createList(item,index)
})


var thumbnails = document.querySelectorAll(".thumbnail ")
var totalthumbnails = thumbnails.length

// Adding Event Listeners for Click
for (var i = 0; i < totalthumbnails; i++) {
    thumbnails[i].addEventListener('click', function(){displayImage(this)}, false);
}

// Adding Event Listener for Arrow Keys 

window.addEventListener("keydown", function(event) {
    const pressedKey = event.key;
    // Arrow Up
    if (pressedKey == "ArrowUp") {
        currentSelected = (currentSelected - 1 + totalImages) % totalImages;
    }
    // Arrow Down

    else if (pressedKey == "ArrowDown") {
        currentSelected = (currentSelected + 1) % totalImages;
    }

    // Ignore if Any other key is pressed 
    else {
        return;
    }
    // Reset Colour
    resetColour()
    let  thumbnail = document.getElementById(currentSelected)
    console.log("Errror " ,thumbnail)
    thumbnail.style.backgroundColor = "blue"

    // Change Background Colour of the Thumbnail pressed 
    let ImageDisplay = document.getElementById("Disp")
    let currentImageSource = thumbnail.getElementsByTagName('img')[0].currentSrc
    ImageDisplay.src = currentImageSource;

    // Changing Captions
    let captionText = document.getElementById("CaptionText")
    ImageDisplay.src = currentImageSource;
    let newCaption =  thumbnail.getElementsByTagName('p')[0].innerHTML
    captionText.innerHTML = newCaption

})
