//le début de popup//
(function(){
  
    const modal = document.getElementById("dg-popup-modal");
    const modalContent = document.querySelectorAll("#dg-popup-modal .modal-content");  
    const btnOpen = document.getElementById("dg-popup-btn");
  const btnClose = document.querySelectorAll("#dg-popup-modal .close")[0];
    let exitCounter = 0;
    
    // options generique  
    // taille max de la popup
    const popupMaxWith = "800px"; 
    
    // options mobile
    // délay de déclenchement de la popup sur mobile
    const delayMobile = "15000" // millisecondes
    
    modalContent[0].style.maxWidth = popupMaxWith;
    
   
    btnClose.onclick = function() {
      modal.style.display = "none";
    }
    
    if (window.matchMedia("(min-width: 768px)").matches) {
  
    document.addEventListener("mouseleave", function(event){
      if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        if(exitCounter < 2) {
          exitCounter++;
        }     
        if(exitCounter == 1) {
          dgOpenPopup();
        }
      }
    });
      
    }
    else {    
      // faire ouverture de popup x secondes
      setTimeout(function() {
         dgOpenPopup();      
      }, delayMobile);
      
    }
   
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    function dgOpenPopup() {
      modal.style.display = "block";
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
    }
  })();
  //la fin de popup//



function maFonction(){
var bob = document.querySelector("#boba");

System.out.println ("ma")
}






const texte = document.querySelector ("span");
texte.innerHTML= "mayen";


let $selects = document.querySelectorAll('.linked-select')
$selects.forEach(function ($select) {
  new LinkedSelect($select)
})



var byby = document.getElementById("byby");
alert(byby.innerHTML)








document.getElementById("open-popup-btnn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
  
  document.getElementById("dismiss-popup-btnn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });













