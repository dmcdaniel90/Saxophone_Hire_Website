const gallery = document.getElementById('media-gallery')
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

// An array of image URLs
const imageUrls = [
  'assets/images/clubsax1.jpg',
  'assets/images/IMG_0084.JPG',
  'assets/images/IMG_0097.JPG',
  'assets/images/IMG_0244.JPG',
  'assets/images/IMG_0260.JPG',
  'assets/images/IMG_0274.JPG',
  'assets/images/IMG_0365.JPG',
  'assets/images/IMG_2096.JPG',
  'assets/images/IMG_2099.JPG',
  'assets/images/IMG_2103.JPG',
  'assets/images/IMG_2328.JPG',
  'assets/images/outside_wedding.jpg',
  'assets/images/sax-vid1.mp4',
  'assets/images/sax-vid2.mp4',
  'assets/images/sax-vid3.mp4',
  'assets/images/saxandperc.jpg',
  'assets/images/wedding.jpeg',
  'assets/images/wrdeup.jpg',
]

// Loop through the image URLs and create image elements
imageUrls.map((imageUrl) => {
  //Create a link element for each image
  const item = document.createElement('a')
  item.href = imageUrl
  
  // Create an image element for each image
  const img = document.createElement('img')
  img.src = imageUrl

  // Add the image to the link
  item.appendChild(img)

  // Add the link to the gallery
  gallery.appendChild(item)

  // Add an event listener to each link to open the lightbox when clicked
  item.addEventListener('click', (e) => {
    e.preventDefault()

    // Add the active class to the lightbox
    lightbox.classList.add('active')

    // Create an image element for the lightbox
    const img = document.createElement('img')
    img.src = item.href

    // Remove all the child elements from the lightbox
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }

    // Add the image to the lightbox
    lightbox.appendChild(img)
  })
})

// Add an event listener to the lightbox to close it when clicked
lightbox.addEventListener('click', (e) => {
  // Check if the clicked element is the lightbox
  if (e.target !== e.currentTarget) return

  // Remove the active class from the lightbox
  lightbox.classList.remove('active')
})

// Add an event listener to the lightbox to close it when the escape key is pressed
document.addEventListener('keydown', (e) => {
  // Check if the escape key is pressed
  if (e.key === 'Escape') {
    // Remove the active class from the lightbox
    lightbox.classList.remove('active')
  }
})


