$(function() {
    var protocol = (window.location.protocol === "https:") ? "https:" : "http:";
    protocol = "https:";
    $.ajax({
	      url: protocol + '//localhost:3131/'+window.location.hostname.replace(/^www\./, '')+'.js',
	      success: function(d){
	          $(function(){ eval(d); });
	      },
	      error: function(){
	          console.log('no dotjs server found at localhost:3131');
	      }
    });
});
