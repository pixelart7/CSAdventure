var Story = {
	
	storiesCache: {},
	
	handlerMap: {
		"DIALOG": function(data){DialogHandler.init(data)},
		"SPECIFIC_CHOICES": function(data){SpecificChoicesHandler.init(data)}
	},
	
	storiesLocation: {
		"begin": "story/begin.json",
		"init": "story/init.json"
	},
	
	init: function(){
		
	},
	
	loadStory: function(key){
		var keyArray = this.keySplit(key);
		if( key === null || key == "" ){
			console.log("Error: Something Wrong.");
		}else if( this.storiesLocation[keyArray.namespace] != null && this.storiesCache[keyArray.namespace] == null){
			$.getJSON(this.storiesLocation[keyArray.namespace], function(data){
				Story.storiesCache[keyArray.namespace] = data;
				Story.displayStory(key);
			});
		}else{
			Story.displayStory(key);
		}
	},
	
	//private
	displayStory: function(key){
		var keyArray = this.keySplit(key);
		if( this.storiesCache[keyArray.namespace] != null ){
			if( this.storiesCache[keyArray.namespace].stories[keyArray.number] != null ){
				var thisStory = this.storiesCache[keyArray.namespace].stories[keyArray.number];
				this.handlerMap[thisStory.type](thisStory);
			}else{
				console.log("Error: Story doesn't cached.");	
			}
		}else{
			console.log("Error: Stories doesn't cached.");	
		}
	},
	
	keySplit: function(key){
		var keyArray = key.split(".");
		return {namespace: keyArray[0], number: keyArray[1]};
	}
	
};