var DialogHandler = {
	
	data: {},
	
	init: function(data){
		this.data = data;
		this.default();
		this.load();
	},
	
	default: function(){
		this.data.storySetting.between = this.data.storySetting.between || 0;
		this.data.storySetting.lockInput = this.data.storySetting.lockInput || true;
		this.data.storySetting.animate = this.data.storySetting.animate || true;
	},
	
	load: function(){
		
		UserInterface.changeBackground(this.data.storySetting.background);
		
		if(this.data.storySetting.lockInput){
			UserInterface.inputEnabled(false);	
		}
		
		for(var i = 0; i < this.data.story.length; i++){
			setTimeout(function(i){ 
				UserInterface.println(DialogHandler.data.story[i], DialogHandler.data.storySetting.animate); 
			}.bind(i, i), (i * this.data.storySetting.between * 1000));
		}
		
		setTimeout(function(){Story.loadStory(DialogHandler.data.next)}, (this.data.story.length * this.data.storySetting.between * 1000));
		
	}
	
};