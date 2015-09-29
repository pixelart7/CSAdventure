var lastLineNumber = 0;
var debug = true;

function prl(s){
	if( s == "" || s == " " ){
		$("#text-area").append("<p id='entry-" + ++lastLineNumber + "' class='text-entry'>&nbsp;</p>");
	}else{
		$("#text-area").append("<p id='entry-" + ++lastLineNumber + "' class='text-entry tempEnter' style='position:relative;left:16px;'>" + s + "</p>");
		$(".tempEnter").animate({"left": "0px"}, function(){
			$(".tempEnter").css("position", "static");	
			$(".tempEnter").removeClass("tempEnter");
		});
	}
	var height = $("#text-area")[0].scrollHeight;
	$("#text-area").scrollTop(height);
}

function pr(s){
	$("#entry-" + lastLineNumber).append("<span class='tempEnterPr' style='margin-left:16px;'>" + s + "</span>");
	$(".tempEnterPr").animate({"margin-left": "0px"}, function(){	
		$(".tempEnterPr").removeClass("tempEnter");
	});
}

function contains(s, array){
	if(array.indexOf(s.toLowerCase()) != -1){
		return true;
	}else{
		return false;	
	}
}

function isAtState(s){
	if( getState() == s ){
		return true;	
	}else{
		return false;	
	}
}

function prlD(s, sec){
	if(debug) sec = 0;
	setTimeout(function(){ prl(s); }, sec * 1000);
}

function prD(s, sec){
	if(debug) sec = 0;
	setTimeout(function(){ pr(s); }, sec * 1000);
}

function you(s){
	if(getName() == ""){
		prl("[\"You\"]: " + s);
	}else{
		prl("[\"" + getName() + "\"]: " + s);	
	}
}

function setUsernameDisplay(s){
	if( s == "" ){
		$("#user-seperator").css("display", "none");
		$(".username-displayer").text("");
	}else{
		$("#user-seperator").css("display", "inline-block");
		$(".username-displayer").text(s);
	}
}

function inputLock(b){
	if(b){
		$("#prompt-input").prop("disabled", true);
	}else{
		$("#prompt-input").prop("disabled", false);
		$("#prompt-input").addClass("animated flash");
		$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$("#prompt-input").removeClass("animated flash");});
		$("#prompt-input").focus();
	}
}

function inputLockD(b, sec){
	if(debug) sec = 0;
	setTimeout(function(){ inputLock(b); }, sec * 1000);
}

function storyjsD(sec){
	if(debug) sec = 0;
	setTimeout(function(){ storyjs(); }, sec * 1000);
}

function randomOne(array){
	return array[Math.floor((Math.random() * array.length) + 0)];
}