// Hud constants
exports.HIDE_EVENT = "OVERLAY:HUD:HIDE";

// Private variables
var messageWin, messageLabel;



// Init function
exports.load = function(message){
	message = message || "Loading...";
	
	messageWin = Titanium.UI.createWindow({});
	
	messageView = Titanium.UI.createView({
		height: 150,
		width: 150,
		borderRadius: 10,
		backgroundColor: '#000',
		opacity: 0.7
	});
	
	messageLabel = Titanium.UI.createLabel({
		text: message,
		color: '#ddd',
		width: 150,
		height: 'auto',
		font: {fontSize: 20, fontWeight: 'bold'},
		textAlign:'center'
	});
	
	
	// Attach everything to window
	messageWin.add(messageView);
	messageWin.add(messageLabel);
	
	
	return exports;
};



// Displays the overlay HUD to the user
exports.show = function(message){
	//Allow changing of message on per case basis
	if(message){
		messageLabel.text = message;
	}
	
	//fade in the window using Alloy built-ins animations
	var animation = require('alloy/animation');
	animation.fadeIn(messageWin, 500, function(){});
	
	messageWin.open();
	
	return exports;
};



// Hides the overlay HUD from the user
exports.hide = function(){
	//fade out the window using Alloy built-ins animations and close it on animation complete
	var animation = require('alloy/animation');
	animation.fadeOut(messageWin, 200, function(){messageWin.close();});
	
	// Return the whole thing so we can change this methods
	return exports;
};


// In case we want to hide this HUD via an event lsitener
Ti.App.addEventListener(exports.HIDE_EVENT, function(){
	exports.hide();
});