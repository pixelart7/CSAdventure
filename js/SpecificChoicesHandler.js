var SpecificChoicesHandler = {
	
	data: {},
	
	init: function(data){
		this.data = data;
		this.default();
		this.load();
	},
	
	default: function(){
		this.data.storySetting.between = this.data.storySetting.between || 0;
		this.data.storySetting.lockInput = this.data.storySetting.lockInput || false;
		this.data.storySetting.animate = this.data.storySetting.animate || true;
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
			}.bind(i, i), (i * SpecificChoicesHandler.data.storySetting.between * 1000));
		}
		
	}
	
};