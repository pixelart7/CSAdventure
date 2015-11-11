var Input = {
	
	availableCommands: {},
	
	groups: {},
	
	init: function(){
		this.registerInputListener();
		this.registerQuickInputListener();
		Input.registerCommand("admin", "Special_admin", "STAY", false, AdminCommand.commandHandler, {});
	},
	
	registerCommand: function(command, group, mode, quickInputEnable, callback, callbackParam){
		this.availableCommands[command] = {};
		this.availableCommands[command].group = group;
		this.availableCommands[command].mode = mode;
		this.availableCommands[command].callback = callback;
		this.availableCommands[command].callbackParam = callbackParam;
		this.groups[group] = this.groups[group] || [];
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
				
				if(!UserInterface.isInputEnabled() || cmd == "admin"){

					if(Input.availableCommands[cmd] != null){
						Input.availableCommands[cmd].callback(Input.availableCommands[cmd].callbackParam, args);
						Input.commandLifeCycle(Input.availableCommands[cmd]);
					}else{
						UserInterface.printYou(plain);
						UserInterface.println(Dictionary.responseRandom("DONTKNOW"));
					}

					$(this).val("");
					
				}else{
					//Do nothing
				}
				
			}
		});
	},
	
	registerQuickInputListener: function(){
		$(".suggestion-item").click(function(){
			$("#prompt-input").val($(this).text());
			$("#prompt-input").focus();
		});
	},
	
	commandLifeCycle: function(cmdBlock){
		if(cmdBlock.mode == "KILL_GROUP"){
			var group = cmdBlock.group;
			for(var i = 0; i < this.groups[group].length; i++){
				this.quickInputRemove(this.groups[group][i]);
				this.removeCommand(this.groups[group][i]);
				delete this.availableCommands[this.groups[group][i]];
			}
			delete this.groups[group];
		}else if(cmdBlock.mode == "STAY"){
				
		}
	},
	
	removeCommand: function(cmd){
		delete this.availableCommands[cmd];
	},
	
	//private
	quickInputAdd: function(cmd, isMainCommand){
		isMainCommand = isMainCommand || true;
		var addTo = (isMainCommand)? $("#suggestion-items-main"): $("#suggestion-items-sub");
		addTo.append(
			"<div class='suggestion-item' id='suggestion-item-" + cmd + "'>" + cmd + "</div>"
		);
		this.registerQuickInputListener();
	},
	
	//private
	quickInputRemove: function(cmd){
		$("#suggestion-item-" + cmd).remove();
		this.registerQuickInputListener();
	}
	
};