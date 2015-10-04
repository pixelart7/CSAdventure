var SpecificChoicesHandler = {
	
	data: {},
	
	instanceID: "",
	
	init: function(data){
		this.data = data;
		this.default();
		this.load();
		this.instanceID = "SpecificChoices_" + ((Math.random()+1).toString(36).substring(7));
	},
	
	default: function(){
		this.data.storySetting.between = this.data.storySetting.between || 0;
		this.data.storySetting.lockInput = this.data.storySetting.lockInput || false;
		this.data.storySetting.animate = this.data.storySetting.animate || true;
		this.data.storySetting.responseType = this.data.storySetting.responseType || "SAY";
	},
	
	load: function(){
		
		UserInterface.changeBackground(this.data.storySetting.background);
		
		if(!this.data.storySetting.lockInput){
			setTimeout(function(){ UserInterface.inputEnabled(true); SpecificChoicesHandler.data.story.length * SpecificChoicesHandler.data.storySetting.between * 1000});
		}
		
		for(var i = 0; i < this.data.story.length; i++){
			setTimeout(function(i){ 
				UserInterface.println(SpecificChoicesHandler.data.story[i].text, SpecificChoicesHandler.data.storySetting.animate); 
			}.bind(i, i), (i * SpecificChoicesHandler.data.storySetting.between * 1000));
		}
		
		for(var i = 0; i < this.data.choices.length; i++){
			setTimeout(function(i){ 
				var line = SpecificChoicesHandler.data.choices[i].activator + ") " + SpecificChoicesHandler.data.choices[i].text;
				UserInterface.println(line, SpecificChoicesHandler.data.storySetting.animate);
				var cmd = SpecificChoicesHandler.data.choices[i].activator;
				var group = SpecificChoicesHandler.instanceID;
				var mode = "KILL_GROUP";
				var quickInputEnable = true;
				var callback = SpecificChoicesHandler.callback;
				var callbackParam = {
					cmd: cmd	
				};
				Input.registerCommand(cmd, group, mode, quickInputEnable, callback, callbackParam);
			}.bind(i, i), (i * SpecificChoicesHandler.data.storySetting.between * 1000));
		}
		
	},
	
	callback: function(callbackParam, args){
		for( var i = 0; i < SpecificChoicesHandler.data.choices.length; i++){
			if(SpecificChoicesHandler.data.choices[i].activator == callbackParam.cmd){
				var choiceObj = SpecificChoicesHandler.data.choices[i];
			}
		}
		if(SpecificChoicesHandler.data.storySetting.responseType == "ACTION"){
			UserInterface.printAction(choiceObj.text);	
		}else if(SpecificChoicesHandler.data.storySetting.responseType == "SAY"){
			UserInterface.printYou(choiceObj.text);	
		}
		Story.loadStory(choiceObj.next);
	}
	
};