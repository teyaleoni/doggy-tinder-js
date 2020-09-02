let doggyImages = [
  "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg",
  "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=980:*",
  "https://www.rd.com/wp-content/uploads/2020/05/GettyImages-1155030342.jpg",
  "https://barkpost.com/wp-content/uploads/2014/02/pPkyqKG.jpg",
  "https://www.rover.com/blog/wp-content/uploads/2019/05/51.jpg",
  "https://static.boredpanda.com/blog/wp-content/uploads/2020/01/5e255f1e8271d_pd5hwkax3gx31__700.jpg",
  "https://mymodernmet.com/wp/wp-content/uploads/2018/01/bailey-dog-meme-2.jpg",
  "https://besthqwallpapers.com/Uploads/21-6-2019/96336/thumb2-small-french-bulldog-funny-animals-dogs-puppy-pets.jpg",
  "https://i.redd.it/yp9hah44n6w11.jpg",
  "https://www.thelabradorsite.com/wp-content/uploads/2019/05/funny-dog-quotes-LS-long.jpg",
]
let doggyIndex = 0
let lastIndex = doggyImages.length - 1
let yesClicks = 0
let noClicks = 0
let doggyPicture = document.querySelector("#doggyPicture")

window.onload = function () {
  doggyPicture.src = doggyImages[doggyIndex]
}

function noMoreProfiles() {
  document.querySelector("#noMore").innerHTML = "No more profiles :("
  doggyPicture.style.display = "none"
}

function yesOnClick() {
  if (doggyIndex < lastIndex) {
    yesClicks++
    doggyIndex += 1
  } else {
    noMoreProfiles()
  }
  document.querySelector("#yesCount").innerHTML = yesClicks
  doggyPicture.src = doggyImages[doggyIndex]
}

function noOnClick() {
  if (doggyIndex < lastIndex) {
    doggyIndex += 1
    noClicks += 1
  } else {
    noMoreProfiles()
  }
  document.querySelector("#noCount").innerHTML = noClicks
  doggyPicture.src = doggyImages[doggyIndex]
}

document.querySelector("#yesBtn").addEventListener("click", yesOnClick)
document.querySelector("#noBtn").addEventListener("click", noOnClick)
