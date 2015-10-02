//Require foggy.js
var UserInterface = {
	
	lastLineNumber: 0,
	currentBackground: "",
	
	init: function(){
		this.setBackground("login.jpg");
		this.blurState(true);
	},
	
	changeBackground: function(imgname){
		if(this.currentBackground != imgname && (imgname != "" || imgname === null)){
			$("#background").animate({"opacity": 0}, function(){
				UserInterface.setBackground(imgname);
				$("#background").animate({"opacity": 0.8});
			});
		}
	},
	
	setBackground: function(imgname){
		this.currentBackground = imgname;
		$("#background").css("background-image", "url('" + Config.IMG_LOCATION + "/" + Config.BACKGROUND_DIR + "/" + imgname + "')");
	},
	
	blurState: function(bool){
		if(bool){
			$("#background").foggy({blurRadius: 12});	
		}else{
			$("#background").foggy(false);		
		}
	},
	
	inputEnabled: function(bool){
		if(!bool){
			$("#prompt-input").prop("disabled", true);
		}else{
			$("#prompt-input").prop("disabled", false);
			$("#prompt-input").addClass("animated flash");
			$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$("#prompt-input").removeClass("animated flash");});
			$("#prompt-input").focus();
		}
	},
	
	blurAnimate: function(start, stop){
		$({b: start}).animate({b: stop}, {
        	duration: 500,
        	easing: 'swing',
        	step: function() {
            	$('#background').foggy({"blurRadius": this.b});
        	}
    	});
	},
	
	printYou: function(str, animate){
		str = str || "...";
		animate = animate || true;
		this.println("[You]: " + str, animate);
	},
	
	println: function(str, animate){
		str = str || "";
		animate = animate || true;
		
		if( str == "" ){
			Config.TERMINAL.append("<p id='entry-" + ++this.lastLineNumber + "' class='text-entry'>&nbsp;</p>");
		}else{
			if(animate){
				Config.TERMINAL.append("<p id='entry-" + ++this.lastLineNumber + "' class='text-entry tempEnter' style='position:relative;left:16px;'>" + str + "</p>");
				$(".tempEnter").animate({"left": "0px"}, function(){
					$(".tempEnter").css("position", "static");	
					$(".tempEnter").removeClass("tempEnter");
				});
			}else{
				Config.TERMINAL.append("<p id='entry-" + ++this.lastLineNumber + "' class='text-entry'>" + str + "</p>");	
			}
	
		}
		var height = Config.TERMINAL[0].scrollHeight;
		Config.TERMINAL.scrollTop(height);		
	},
	
	print: function(str, animate){
		str = str || "";
		animate = animate || true;
		
		if(animate){
			$("#entry-" + this.lastLineNumber).append("<span class='tempEnterPr' style='margin-left:16px;'>" + str + "</span>");
			$(".tempEnterPr").animate({"margin-left": "0px"}, function(){	
				$(".tempEnterPr").removeClass("tempEnterPr");
			});
		}else{
			$("#entry-" + this.lastLineNumber).append("<span>" + str + "</span>");
		}	
	}
	
};