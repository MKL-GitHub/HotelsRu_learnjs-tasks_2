const galleryMain =  document.querySelector(".gallery__main");
const galleryList =  document.querySelector(".gallery__list");

galleryList.addEventListener("mouseup", handleImageClick);

function handleImageClick(e) {
    if (e.target.tagName !== "IMG") return;

    galleryMain.children[0].src = e.target.src;
}
