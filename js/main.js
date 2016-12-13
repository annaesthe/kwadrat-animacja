$(function() {
    
    $(".buttons").click(function(kliknij) {
        
        var aniKwad = $("#kwadrat")
        
        aniKwad.animate({right: '100px', height: '100px', width: '100px'}, 3000, function() {
        aniKwad.css({backgroundColor: 'cadetblue'}, 5000);
        var tekst = $("<h2></h2>").text("Gratulacje, animacja zakończona."); 
        $(aniKwad).append(tekst);
            
        });
        
    });
  
});
