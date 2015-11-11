var Story = {
	
	storiesCache: {},
	
	handlerMap: Config.HANDLERMAP,
	
	storiesLocation: Config.STORIESLOC,
	
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
			UserInterface.println("");
		}
	},
	
	//private
	displayStory: function(key){
		var keyArray = this.keySplit(key);
		if( this.storiesCache[keyArray.namespace] != null ){
			if( this.storiesCache[keyArray.namespace].stories[keyArray.number] != null ){
				var thisStory = this.storiesCache[keyArray.namespace].stories[keyArray.number];
				this.handlerMap[thisStory.type](thisStory);
				Save.setState(key);
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