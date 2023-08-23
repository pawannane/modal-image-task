const imageLists = document.querySelectorAll(".image");
const modalImage = document.querySelector(".modal-image");

const closeIcon = document.querySelector(".close");

const imageContainer = document.querySelector(".images-list");

const image = document.querySelectorAll(".img");
const imgCaption = document.querySelectorAll(".img-caption");

const modalImg = document.querySelector(".modal-image .img");
const modalCaption= document.querySelector(".modal-image .img-caption");

const html = document.querySelector("html");

const handleModal = (idx) => {
  const imgSrc = image[idx].getAttribute("src");
  const imgAlt = image[idx].getAttribute("alt");
  const caption = imgCaption[idx].innerHTML;

  modalImg.setAttribute("src", imgSrc);
  modalImg.setAttribute("alt", imgAlt);
  modalCaption.innerHTML = caption;

  openModal();
}

function openModal(){
  imageContainer.classList.add("modal-active");
  html.classList.add("html-scroll");
}

function closeModal(){
  imageContainer.classList.remove("modal-active");
  html.classList.remove("html-scroll");
}

window.addEventListener("click", (e) => {
  if(e.target == modalImage)
    closeModal();
});

imageLists.forEach((image, idx) => {
  image.addEventListener("click", () => { handleModal(idx);} );
});

closeIcon.addEventListener("click", closeModal);