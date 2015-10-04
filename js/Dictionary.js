var Dictionary = {
	
	dictionary: {
		AGREE: ["yes", "sure", "indeed", "ok", "yep"],
		DISAGREE: ["no", "don't"],
		HUMANDONTKNOW: ["Sorry, I don't understand...", "I'm not sure what you mean.", "What is it, again?"],
		DONTKNOW: ["Looks like there is no command for that.", "Sorry, there is no one awaiting for your response."]
	},
	
	init: function(){
		
	},
	
	responseRandom: function(string){
		var array = this.dictionary[string];
		return array[Math.floor((Math.random() * array.length) + 0)];
	}
	
};