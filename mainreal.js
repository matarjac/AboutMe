let modesButton = document.getElementById('dark-mode-btn');
let isDarkModeEnabled = false;
let headerElement = document.querySelector('header');
let photoOfMe = document.getElementById('color-photo');
console.log(photoOfMe)


modesButton.addEventListener("click" ,function () {
  switcModes();
});

function switcModes() {

    isDarkModeEnabled = !isDarkModeEnabled;
    if (isDarkModeEnabled) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        headerElement.style.backgroundColor='rgb(37, 37, 37)';
        photoOfMe.classList.add('fade');
        // photoOfMe.style.transition = 'opacity 1s 1s';
        // photoOfMe.style.opacity = 0;



      } else {
        document.body.style.backgroundColor = "blanchedalmond";
        document.body.style.color = "black";
        headerElement.style.backgroundColor='bisque';
        photoOfMe.classList.remove('fade');
      }

}

const imagesArray = [{description: {name: 'Sunset', text:'sunset I captured'}, image:'Assets/Sunset.jpeg'},
    {description: {name: 'Keshet', text:'My nephew and me'}, image:'Assets/Keshet.jpeg'},
    {description: {name: 'Balu and Nala', text:'My dogs'}, image:'Assets/Balu&Nala.jpeg'}
  ]
 

//   put images inside the div "gallery" class

let imagesGalleryDiv = document.getElementById('gallery');
console.log(imagesGalleryDiv);

for(let i=0;i<imagesArray.length; i++){
    let newImageDescDiv = document.createElement('div');
    let newImage = document.createElement('img');
    let imageDesc = document.createElement('span');
    newImage.src = imagesArray[i].image;
    imageDesc.innerHTML = imagesArray[i].description.text;
    imageDesc.className = 'desc-span';
    newImageDescDiv.appendChild(newImage);
    newImageDescDiv.appendChild(imageDesc);
    newImageDescDiv.className = 'image-desc-pair'
    imagesGalleryDiv.appendChild(newImageDescDiv);
}
console.log(imagesGalleryDiv);