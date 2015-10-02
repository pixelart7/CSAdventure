var Input = {
	
	availableCommands: {
		"walk": {
			group: "begin.A2",
			mode: "KILL_GROUP",
			callback: function(){}
		},
		"stay": {
			group: "begin.A2", 
			mode: "KILL_GROUP", 
			callback: function(){}
		}
	},
	
	groups: {
		"begin.A2": ["walk", "stay"]
	},
	
	init: function(){
		this.registerInputListener();
	},
	
	registerCommand: function(command, group, mode, quickInputEnable, callback){
		this.availableCommands[command].group = group;
		this.availableCommands[command].mode = mode;
		this.availableCommands[command].callback = callback;
		this.groups[group].push(command);
		if(quickInputEnable){
			this.quickInputAdd(command);
		}
	},
	
	registerInputListener: function(){
		$("#prompt-input").keydown(function(e){
			if ( e.which == 13 ){
				e.preventDefault();

				var plain = $(this).val().trim();
				var plainArr = plain.split(" ");
				var args = plainArr;
				var cmd = args.shift();

				if(Input.availableCommands[cmd] != null){
					Input.availableCommands[cmd].callback();
					this.commandLifeCycle(Input.availableCommands[cmd]);
				}else{
					UserInterface.printYou(plain);
					Dictionary.responseRandom("DONTKNOW");
				}
				
				$(this).val("");
				
			}
		});
	},
	
	commandLifeCycle: function(cmdBlock){
		if(cmdBlock.mode == "KILL_GROUP"){
			var group = cmdBlock.group;
			for(var i = 0; i < this.groups[group].length; i++){
				this.quickInputRemove(this.groups[i]);
				delete this.availableCommands[this.groups[i]];
			}
			delete this.groups[group];
		}
	},
	
	quickInputAdd: function(command){
		
	},
	
	quickInputRemove: function(command){
		
	}
	
};