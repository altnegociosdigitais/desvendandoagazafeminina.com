const socialProofSrc = [
  "./assets/d01.png",
  "./assets/d02.png",
  "./assets/d03.png",
  "./assets/d04.png",
  "./assets/d05.png",
  "./assets/d06.png",
  "./assets/d07.png",
  "./assets/d08.png",
  "./assets/d09.png",
  "./assets/d10.png",
];
var currentSocialProofIndex = 0;

function toggle(elementId) {
  document.getElementById(elementId).classList.toggle("show");
  document.getElementById(`${elementId}_arrow`).classList.toggle("active");
}

function nextSocialProof() {
  let previousIndex = this.currentSocialProofIndex;
  this.currentSocialProofIndex =
    this.currentSocialProofIndex === socialProofSrc.length - 1
      ? 0
      : this.currentSocialProofIndex + 1;

  document.getElementById("social-proof-image-id").src =
    socialProofSrc[this.currentSocialProofIndex];

  const balls = document.querySelectorAll(".ball-sp");
  balls.item(previousIndex).classList.remove("active");
  balls.item(currentSocialProofIndex).classList.add("active");
}

function previousSocialProof() {
  let previousIndex = this.currentSocialProofIndex;
  this.currentSocialProofIndex =
    this.currentSocialProofIndex === 0
      ? socialProofSrc.length - 1
      : this.currentSocialProofIndex - 1;

  document.getElementById("social-proof-image-id").src =
    socialProofSrc[this.currentSocialProofIndex];

  const balls = document.querySelectorAll(".ball-sp");
  balls.item(previousIndex).classList.remove("active");
  balls.item(currentSocialProofIndex).classList.add("active");
}

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      // Swipe left
      nextSocialProof();
    } else {
      // Swipe right
      previousSocialProof();
    }
  }

  // Reset values
  xDown = null;
  yDown = null;
}

function handleTouchEnd(evt) {
  // Reset values
  xDown = null;
  yDown = null;
}

function openCheckout() {
  window.open("https://go.perfectpay.com.br/PPU38CO88FR", "_blank").focus();
}
