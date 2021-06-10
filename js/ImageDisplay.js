var ImageUrls = [
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 ",
    "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 ",
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 ",
    "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 ",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80 "
]

var ImageNames = [
    "cat.jpeg",
    "cooking couple shoot portofilio(1).jpg",
    "bali-kelingking-beach-plastic-removal-drive.key",
    "NextByk Investor Pitch 2021.ppt",
    "interns-performance-report-june-2021.key"

]
var currentSelected = 0
var totalImages = 5

function resetColour() {
    var thumbnails = document.querySelectorAll(".thumbnail ")
    totalthumbnails = thumbnails.length

    for (var i = 0; i < totalthumbnails; i++) {
        thumbnails[i].style.backgroundColor = "white "
    }
}

function displayImage(event) {

    // Restting the Background Colours

    resetColour();

    // Applying Blue Background to the selected element
    event.target.style.backgroundColor = "blue ";

    // Getting the details of the current image 
    image_Id = event.target.id
    currentSelected = image_Id
        // Changing the Displayed Image

    currentImageSource = ImageUrls[image_Id]
    ImageDisplay = document.getElementById("Disp")

    // Changing Captions
    captionText = document.getElementById("CaptionText")
    ImageDisplay.src = currentImageSource;
    newCaption = ImageNames[currentSelected]
    captionText.innerHTML = newCaption
        // event.stopPropogation()
}

window.addEventListener("keydown", function(event) {
    const pressedKey = event.key;
    if (pressedKey == "ArrowUp") {
        currentSelected = (currentSelected - 1 + totalImages) % totalImages;
    }

    if (pressedKey == "ArrowDown") {
        currentSelected = (currentSelected + 1) % totalImages;
    }

    // Reset Colour
    resetColour()
    thumbnail = document.getElementById(currentSelected)
    thumbnail.style.backgroundColor = "blue"

    // Change Background Colour of the Thumbnail pressed 
    ImageDisplay = document.getElementById("Disp")
    currentImageSource = ImageUrls[currentSelected]
    ImageDisplay.src = currentImageSource;

    // Changing Captions
    captionText = document.getElementById("CaptionText")
    ImageDisplay.src = currentImageSource;
    newCaption = ImageNames[currentSelected]
    captionText.innerHTML = newCaption

})

var thumbnails = document.querySelectorAll(".thumbnail ")
totalthumbnails = thumbnails.length

for (var i = 0; i < totalthumbnails; i++) {
    thumbnails[i].addEventListener('click', displayImage, false);
}