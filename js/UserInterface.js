//Require foggy.js
var UserInterface = {
	
	lastLineNumber: 0,
	
	init: function(){
		this.setBackground("login.jpg");
		this.blurState(true);
	},
	
	setBackground: function(imgname){
		$("#background").css("background-image", "url('" + Config.IMG_LOCATION + "/" + Config.BACKGROUND_DIR + "/" + imgname + "')");
	},
	
	blurState: function(bool){
		if(bool){
			$("#background").foggy({blurRadius: 12});	
		}else{
			$("#background").foggy(false);		
		}
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
		
		//Scroll Bottom.
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