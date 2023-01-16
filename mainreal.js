let modesButton = document.getElementById('dark-mode-btn');
let isDarkModeEnabled = false;
let headerElement = document.querySelector('header');
let footerElement = document.querySelector('footer');
let photoOfMe = document.getElementById('color-photo');
console.log(photoOfMe)

let footerDate = document.getElementById('date-footer')
dateRelevant = new Date();
footerDate.innerHTML = `${dateRelevant.getUTCDate()}th, ${ convertToMonthWord(dateRelevant.getMonth()+1)}, ${dateRelevant.getUTCFullYear()}`;
console.log(convertToMonthWord(4));
function convertToMonthWord(monthNum){
  let monthInWord;
  switch(monthNum){
    case 1:
      monthInWord = "January";
      return monthInWord;
    case 2:
      monthInWord = "February";
      return monthInWord;
    case 3:
      monthInWord = "March";
      return monthInWord;
    case 4:
      monthInWord = "April";
      return monthInWord;
    case 5:
      monthInWord = "May";
      return monthInWord;
    case 6:
      monthInWord = "June";
      return monthInWord;
    case 7:
      monthInWord = "July";
      return monthInWord;
    case 8:
      monthInWord = "August";
      return monthInWord;
    case 9:
      monthInWord = "September";
      return monthInWord;
    case 10:
      monthInWord = "October";
      return monthInWord;
    case 11:
      monthInWord = "November";
      return monthInWord;
    case 12:
      monthInWord = "December";
      return monthInWord;

  return monthInWord;
  }
}

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
        footerElement.style.backgroundColor='rgb(37, 37, 37)';
        // photoOfMe.style.transition = 'opacity 1s 1s';
        // photoOfMe.style.opacity = 0;



      } else {
        document.body.style.backgroundColor = "blanchedalmond";
        document.body.style.color = "black";
        headerElement.style.backgroundColor='bisque';
        footerElement.style.backgroundColor='bisque';
        photoOfMe.classList.remove('fade');
      }

}

const imagesArray = [{description: {name: 'Sunset', text:'sunset I captured'}, image:'Assets/Sunset.jpeg'},
    {description: {name: 'Keshet', text:'My nephew and me'}, image:'Assets/Keshet.jpeg'},
    {description: {name: 'Balu and Nala', text:'My dogs'}, image:'Assets/Balu&Nala.jpeg'},
    {description: {name: 'galaxy', text: 'The milky way'}, image:'Assets/Galaxy.jpg'},
    {description: {name: 'creation', text: 'The creation'}, image:'Assets/creation.jpeg'},
    {description: {name: 'trees', text: 'trees I captures'}, image:'Assets/trees.jpeg'}
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
    // newImageDescDiv.appendChild(imageDesc);
    newImageDescDiv.className = 'image-desc-pair'
    imagesGalleryDiv.appendChild(newImageDescDiv);
}
console.log(imagesGalleryDiv);
