$(document).ready(function(){
    $(".hoverMe").hover (function(){
      console.log ("you clicked on #me");
      var div = $(".hoverMe");  
      div.animate({left: '1px'}, "slow");
      div.animate({fontSize: '0.9em'}, "slow");
    });
  });
  