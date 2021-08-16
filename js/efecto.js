 var txtMezclar = $("#txtMezclar");

 var mensajes =['Bienvenido a mi pagina web', 
 'en este espacio conoceras mas sobre mi y mi trabajo', 
 'Espero vernos pronto trabajando juntos.'];
 var actual = 0;

 txtMezclar.text(mensajes[0]);

 // txtMezclar.shuffleLetters();

 setInterval(function(){
  actual++;

  if (actual >= mensajes.length) {
   actual = 0;
 }  

 txtMezclar.shuffleLetters({
   "text": mensajes[actual]
 });    



},4200);

// when the DOM is ready
$(document).ready(function() {
  // get the anchor link buttons
  const menuBtn = $('.navbar-link');
  // when each button is clicked
  menuBtn.click(()=>{	
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 5); // 5 millisecond timeout in this case
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});


$(window).scroll(function() {
  if ($("#menu").offset().top > 56) {
    $("#menu").addClass("bg-cambio");
  } else {
    $("#menu").removeClass("bg-cambio");
  }
});
 $(document).ready(function(){
        $('a ').click(function(){
          $('a ').each(function(){
           //Recorremos todos los "li" para quitarles los fondos
            $(this).css('color', 'white');
          });
          //Se lo añadimos al que se le hace el click
          $(this).css('color', '#00f69b');
        });
      });

