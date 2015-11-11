var CustomHandler = {
	
	data: {},
	
	init: function(data){
		this.data = data;
		this.subType[data.subType]();
	},
	
	subType: {
		
		NAME_SETTER: function(){
			
		}
		
	}
	
};