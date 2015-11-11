var Config = {
	SAVE_NAMESPACE: "csadventure",
	URL_SEPERATOR: "/",
	
	IMG_LOCATION: "img",
	
	BACKGROUND_DIR: "backgrounds",
	ICON_DIR: "icons",
	
	TERMINAL: $("#text-area"),
	
	HANDLERMAP: {
		"DIALOG": function(data){DialogHandler.init(data)},
		"SPECIFIC_CHOICES": function(data){SpecificChoicesHandler.init(data)},
		"CUSTOM": function(data){CustomHandler.init(data)}
	},
	
	STORIESLOC: {
		"init": "story/init.json",
		"begin": "story/begin.json"
	}
	
};