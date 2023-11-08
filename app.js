 const galery  = document.querySelector(".galery")
 let galeryDiv = document.createElement("div")

const generateImage = (imageIndex) =>{
    const galeryItemWrapper = document.createElement("span")
    const galeryItem = document.createElement("img")
    galeryItem.src = `assets/image${imageIndex + 1}.png`
    galeryItemWrapper.appendChild(galeryItem);
    galeryItemWrapper.addEventListener("click", ()=>{

    })
    galeryDiv.appendChild(galeryItemWrapper);

    if ((imageIndex + 1) % 3 === 0) {
        // Jeśli imageIndex jest wielokrotnością 3, dodaj galeryDiv do głównego diva
        galery.appendChild(galeryDiv);
        galeryDiv = document.createElement("div"); // Tworzenie nowego galeryDiv
    }
}
 Array.from({length: 18}).forEach((_, index) =>{
     generateImage(index)
 })


 galery.addEventListener("wheel", (event)=>{
      event.preventDefault()
     galery.scrollLeft += event.deltaY*2.6
     galery.style.scrollBehavior = "smooth"
 })