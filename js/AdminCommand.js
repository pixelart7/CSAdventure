var AdminCommand = {
	
	noobPrevention: true,
	
	init: function(){
		
	},
	
	commandHandler: function(callbackParam, args){
		if( args.length == 0 ){
			UserInterface.println("Access denied.");
		}
	}
	
}