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

function openCheckout() {
  window.open("https://pay.kiwify.com.br/fIVXeZd", "_blank").focus();
}
