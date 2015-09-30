var template = 	{
					storageVersion: 1,
					state: "A1",
					substate: "",
					name: ""
			 	};

if(store.get("csadventure") === null){
	saveTemplate();
}

var current = store.get("csadventure");

function saveTemplate(){
	store.set("csadventure", template);
}

function save(){
	store.set("csadventure", current);
}

function getState(){
	return current.state;
}

function getName(){
	return current.name;
}

function setState(s){
	current.state = s;
	save();
}

function setName(s){
	current.name = s;
	save();
}