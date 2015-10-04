//Require Store.js
var Save = {
	
	saveTemplate: {
		version: 1,
		state: "init.init",
		substate: "",
		name: ""
	},
	
	currentSave: {},
	
	init: function(){
		if(!(this.hasSave)){
			this.storeTemplate();
		}else{
			this.loadSave();
			Story.loadStory(this.getState());
			if(this.currentSave.version < this.saveTemplate.version){
				//Update Code	
			}
		}
	},
	
	loadSave: function(){
		this.currentSave = store.get(Config.SAVE_NAMESPACE);
	},
	
	updateSave: function(){
		store.set(Config.SAVE_NAMESPACE, this.currentSave);
	},
	
	storeTemplate: function(){
		store.set(Config.SAVE_NAMESPACE, this.saveTemplate);
	},
	
	hasSave: function(){
		if( store.get(Config.SAVE_NAMESPACE) === null ){
			return false;	
		}else{
			return true;	
		}
	},
	
	setState: function(state){
		this.currentSave.state = state;
		this.updateSave();
	},
	
	getState: function(){
		return this.currentSave.state;	
	},
	
	setName: function(name){
		this.currentSave.name = name;
		this.updateSave();
	},
	
	getName: function(){
		return this.currentSave.name;	
	}
	
};