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
	
	registerCommand: function(command, group, mode, visibility, callback){
		this.availableCommands[command].group = group;
		this.availableCommands[command].mode = mode;
		this.availableCommands[command].callback = callback;
		this.groups[group].push(command);
	},
	
	registerInputListener: function(){
		$("#prompt-input").keydown(function(e){
			if ( e.which == 13 ){
				e.preventDefault();

				var plain = $(this).val().trim();
				var plainArr = plain.split(" ");
				var args = plainArr;
				var cmd = args.shift();

				$(this).val("");
			}
		}
	}
	
};