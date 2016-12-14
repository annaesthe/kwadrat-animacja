$(function() {
    
    $(".buttons").click(function(kliknij) {
        
        var aniKwad = $("#kwadrat")
        
        aniKwad.animate({right: '100px', height: '100px', width: '100px'}, 3000, function() {
        aniKwad.html({backgroundColor: "#FCFCD8"}).animate({ backgroundColor: "lightblue" }, 5000, function() {
            
        var tekst = $("<h2></h2>").text("Gratulacje, animacja zakończona."); 
        $(aniKwad).append(tekst);
            
        });
        
     });
  
   });

});