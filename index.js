document.addEventListener("DOMContentLoaded",() =>{
 ham();
})

function ham(){
    const ham = document.querySelector(".ham");
    const overlay = document.querySelector(".overlay");
    const remove = document.querySelector(".close");
    const hammer = document.querySelector(".hammer");

    ham.addEventListener("click", () => {
        // overlay.classList.toggle("yep");
        // hammer.classList.toggle("yep");

        overlay.style.display = "flex";
        hammer.style.display = "flex";
    });

    remove.addEventListener("click", () => {
        // hammer.classList.toggle("nop");
        //  overlay.classList.toggle("nop");

         overlay.style.display = "none";
        hammer.style.display = "none";
    })
    

}