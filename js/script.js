$(function(){
	$(".navButton").click(function(event) {
		$(this).toggleClass('active');
		$(".navList").slideToggle(300,function(){
			$(".navList>li").fadeToggle(400);
		});
	});
});
$(function(){
	$(window).scroll(function(event) {
		if($(window).scrollTop()>$("header").height()){
			$("nav.main").css({paddingTop:"10px",paddingBottom:"0px",borderBottom:"5px solid #0777d0"});
		}
		else{
			$("nav.main").css({paddingTop:"15px",paddingBottom:"5px",borderBottom:"none"});
		}
	});
});
$(function(){
	$(".submit").click(function(event) {
		$(this).parent().submit();
	});
});

