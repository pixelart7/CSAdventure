$(document).ready(function(){
	
	Save.init();
	UserInterface.init();
	Story.init();
	Input.init();
	Dictionary.init();
	
	AdminCommand.init();
	
	Input.registerCommand("admin", "Special_admin", "STAY", false, AdminCommand.commandHandler, {});
	
});