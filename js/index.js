var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();
function OnLoad(){
	if(window.innerWidth >= 480){
		$('body').css("padding-top",hdr);
	}
	else{
		$('body').css("padding-top",hdr + $('.fb').height());
	}
}
$(window).scroll(function() {
  if(window.innerWidth < 480){
		$('body').css("padding-top",hdr + $('.fb').height());
	 	
	 	if( $(this).scrollTop() > (hdr + $('.fb').height())) {
	    	mn.addClass(mns);
	 	} 
	 	else {
			mn.removeClass(mns);
	  	}
	}
	else{
		$('body').css("padding-top",hdr);
		
		if( $(this).scrollTop() > hdr ) {
		    mn.addClass(mns);
		  } 
		  else {
		    mn.removeClass(mns);
		  }
	}
});
$(window).resize(function() {
	if(window.innerWidth < 480){
		$('body').css("padding-top",hdr + $('.fb').height());
	 	
	 	if( $(this).scrollTop() > (hdr + $('.fb').height())) {
	    	mn.addClass(mns);
	 	} 
	 	else {
			mn.removeClass(mns);
	  	}
	}
	else{
		$('body').css("padding-top",hdr);
		
		if( $(this).scrollTop() > hdr ) {
		    mn.addClass(mns);
		  } 
		  else {
		    mn.removeClass(mns);
		  }
	}
});