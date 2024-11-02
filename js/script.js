document.querySelector("#read-more").addEventListener("click", function(event) {
    event.preventDefault();
    var extraText = document.getElementById("extra-text");
    
    if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "block";
        this.textContent = "Leer menos";
    } else {
        extraText.style.display = "none";
        this.textContent = "Leer más";
    }


});

var typed = new Typed('#element', {
    strings: ['<i>FERRARI</i> .', 'MERCEDES.', 'PORSCHE.'],
    typeSpeed: 100,
    loop: true,
});

