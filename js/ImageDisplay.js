import imageData from './imagedata.js'

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
        thumbnails[i].getElementsByTagName('p')[0].style.color = 'black'
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
    listele.getElementsByTagName('p')[0].style.color="white";
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

    let finalText = item["title"]
    caption.classList.add("ImageCaption")
    caption.setAttribute('data-extension' , finalText)
    
    //  CAPTION
    let caption_length = finalText.length
    caption.textContent = finalText
    
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

// TRUNCATING THE CAPTIONS
const truncateCaptions = () => {
  document.querySelectorAll(".ImageCaption").forEach((item) => {
    let caption = item.getAttribute("data-extension")
    let caption_length = caption.length
    item.textContent = caption
    if (item.clientWidth < item.scrollWidth) {
      let charwidth = Math.floor(item.scrollWidth/caption_length) // Width of a character
      let totalChars = Math.floor(item.clientWidth/charwidth) // Total number of characters

      totalChars = totalChars - 3 // Length of  Ellipsis to be subtracted
      
      let middlePos = totalChars/2-1 // Splitting the string into two parts

      let front  = caption.slice(0, middlePos)
      let last = caption.slice(caption_length - middlePos)
      item.textContent = front + "..." + last
    }
});
}

truncateCaptions()
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
    thumbnail.getElementsByTagName('p')[0].style.color="white";
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
