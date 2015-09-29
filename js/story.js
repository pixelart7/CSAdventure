function storyjs() {
	
	if(isAtState("A1.1") || isAtState("A1.2")){
		setState("A1");	
	}
	
	if(isAtState("A1")){
		prl("CS Adventure? What is that?");	
		prl("Do you know what this is?");
	}
	
	if(isAtState("A2")){
		setUsernameDisplay("");
		inputLock(true);
		prl("You walking in the woods.");
		prlD("There is nothing around you.", 1);
		prlD("You walk... ", 1.5);
		prD("walk... ", 2);
		prD("and walk.", 2.5);
		prlD("You feel pain in your head and your stomach.", 3.5);
		prlD("You heard someone shout in a distance...", 4.5);
		prlD("[Someone]: You shall not leave this woods... you shall not move by your own body. You are cursed!", 5.5);
		prlD("Suddenly, your head starting to spin... you fall down to the ground.", 6.5);
		prlD("[Someone]: You will go to this place, no matter what... you will live there for the next 4 years!", 8);
		prlD("You faint...", 8.5);
		prlD("", 12);
		prlD("You woke up in some different place, you don't know why and how did you get here", 13);
		prlD("You barely hear someone talking about you but you can't understand.", 13);
		prlD("[Women]: What is your name?..", 15);
		inputLockD(false, 15.5);
		setState("A1.1");
	}
	
	if(isAtState("A3")){
		prl("[Women]: So... you are " + getName() + "...");
		prl("[\"Nick\" - Women]: My name is Nick, I'm your advisor here. Nice to meet you though. Was it hard for you to get in this faculty?");
		prl("");
		prl("You says...");
		prl("1) Hi.. P'Nick.. Do I know you?");
		prl("2) Advisor? Wait what? I just enter this game!");
		prl("3) Gotta go, bye!");
	}
	
	if(isAtState("A4")){
		prl("[\"Nick\"]: Anyway... I thought you just passed the test.");
		prl("[\"Nick\"]: Entrance examination.");
		prl("[\"Nick\"]: Can't you remember?");	
	}
}