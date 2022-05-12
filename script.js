/*const message = "Merci pour votre message. Nous vous répondrons rapidement.";

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){
  event.preventDefault();
    alert(message);
}); */

        //****notif burger au click envoyer du formulaire****
//je sélectionne et stocke la div container-notifications
const ctn = document.querySelector(".container-notifications");
//console.log(ctn);
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event){
    //console.log("bouton cliqué");
    event.preventDefault(); //stop le rafraichissemment de la page
    //je crée un élément
const notification = document.createElement("div");
//console.log(notification);
//je donne un style à la div
notification.classList.add("toast");
//j'insère du contenu texte
notification.innerText = "Votre Mail est envoyé !"
//console.log(notification);
//j'accroche notification à l'élément ctn
ctn.appendChild(notification);
    //A la fin du chrono, je retire la notification du dom
    setTimeout(function(){
    notification.remove();
}, 2000); 
}); //fermeture de btn.addEventListener  */
                 //****modal****  
  // Get the modal
const modal = document.getElementById('myModal');
// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        event.preventDefault();
    }
} 