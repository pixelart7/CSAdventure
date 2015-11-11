var AdminCommand = {
	
	noobPrevention: true,
	
	init: function(){
		
	},
	
	commandHandler: function(callbackParam, args){
		if( args.length == 0 ){
			UserInterface.println("Access denied.");
		}else{
			if( args[0] == "state" ) AdminCommand.stateCmd(args);
		}
	},
	
	stateCmd: function(args){
		if( args.length == 1 ){
			UserInterface.println("admin state: get, set [state], reset");	
		}else{
			if( args[1] == "get" ){
				UserInterface.println(Save.getState());
			}
			if( args[1] == "set" ){
				args[2] = args[2] || "init.init";
				UserInterface.println(Save.setState(args[2]));
			}
			if( args[1] == "reset" ){
				UserInterface.println(Save.setState("init.init"));
			}
		}
	}
	
}