$(document).ready(function() {
	var mx = 0;
	var my = 0;
	var ox = -200;
	var oy = -50;
	var vX = document.getElementById("xray");
	var vM = document.getElementById("main_XL");
	var xOffset = $(".overlay_x").width() / 2;
	var yOffset = $(".overlay_x").height() / 2;
	$(".wrapper_L").mousemove(function (event) {
		mx = event.pageX - xOffset;
		my = event.pageY - yOffset;
		$(".overlay_x").css("left",mx)
		$(".overlay_x").css("top",my)
		$("#xray").css("transform","translateY("+(-1*(my+oy))+"px) translateX("+(-1*(mx+ox))+"px)")
	});
	
	$(".wrapper_L").mouseenter(function() {
		$(".overlay_x").css("display","initial");
		vX.currentTime = vM.currentTime;
		vM.currentTime = vX.currentTime;
		setTimeout(function() {
			vX.currentTime = vM.currentTime;
			vM.currentTime = vX.currentTime;
		},500);
	});
	
	$(".wrapper_L").mouseleave(function() {
		$(".overlay_x").css("display","none");
	})
});