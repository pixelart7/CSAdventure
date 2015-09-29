function iojs(){
	
	$("#prompt-input").keydown(function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			
			var plain = $(this).val().trim();
			var plainArr = plain.split(" ");
			var args = plainArr;
			var cmd = args.shift();
			
			typed.push(plain);
			historyPointer = typed.length;
			typeCurrent = "";
			
			$(this).val("");
			
			you(plain);
			
			if( cmd == "sudo"){
				if( args[0] == "clearsave" ){
					saveTemplate();
					prl("Cleared.");
				}
				if( args[0] == "state" ){
					prl(getState());
					if(args[1] != null) {
						setState(args[1]);	
						prl("Set.");
					}
				}
				return;
			}
			
			if( isAtState("A1") ){
				if(true){
					prlD("", 1);
					prlD("You felt something came through your head...", 1.5);
					prlD("", 2);
					prlD("-----", 2.5);
					prlD("", 3);
					setState("A2");
					storyjsD(3.5);
				}
				return;
			}
			
			if( isAtState("A1.1") ){
				console.log(args);
				if( args.length != 0 ){
					prl("[Women]: Can you say only your name? Without lastname, I meant.");
				}else{
					prl("[Women]: Hmm... interesting...");	
					prl("[Women]: Should I call you '" + plain + "' from now on?");
					globalTemp[0] = plain;
					setState("A1.2");
				}
				return;
			}
			
			
			if( isAtState("A1.2") ){
				if( contains(cmd, agree) ){
					setName(globalTemp[0]);
					setUsernameDisplay(getName());
					setState("A3");
					storyjs();
				}else if( contains(cmd, disAgree) ){
					prl("[Women]: So... what should I call you?");
					setState("A1.1");
				}else{
					prl("[Women]: " + randomOne(dontUnderstand));	
				}
				return;
			}
			
			if( isAtState("A3") ){
				if( cmd == "1" ){
					prl("[\"Nick\"]: Obviously not!");
					prl("[\"Nick\"]: How should you know me. You just came into my office, speeaking nothing, and faint.");
					setState("A4");
					storyjs();
				}else if( cmd == "2" ){
					prl("[\"Nick\"]: Game? What game!?");
					setState("A4");
					storyjs();
				}else if( cmd == "3" ){
					prl("[\"Nick\"]: Wait.. where are you going? Do you even know where this is?");
					setState("A4");
					storyjs();
				}else{
					prl("[Women]: " + randomOne(dontUnderstand));
				}
				return;
			}
			
		}
		
		//up arrow
		if ( e.which == 38 ) {
			if(historyPointer == typed.length) typeCurrent = $(this).val();
			if(historyPointer != 0){
				historyPointer--;
			}
			$(this).val(typed[historyPointer]);
		}
		
		//down arrow
		if ( e.which == 40 ) {
			if(historyPointer < typed.length){
				$(this).val(typed[historyPointer++]);
			}else{
				if(historyPointer == typed.length){
					$(this).val(typeCurrent);
				}
			}
		}
	});
}