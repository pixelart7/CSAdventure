//Require Store.js
var Save = {
	
	saveTemplate: {
		version: 1,
		state: "A1",
		substate: "",
		name: ""
	},
	
	currentSave: {},
	
	init: function(){
		
	},
	
	loadSave: function(){
		this.currentSave = store.get(CONFIG.SAVE_NAMESPACE);
	},
	
	updateSave: function(){
		store.set(CONFIG.SAVE_NAMESPACE, this.currentSave);
	},
	
	storeTemplate: function(){
		store.set(CONFIG.SAVE_NAMESPACE, this.saveTemplate);
	},
	
	hasSave: function(){
		if( store.get(CONFIG.SAVE_NAMESPACE) === null ){
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