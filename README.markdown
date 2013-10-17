# What is it?:

Overlay HUD is a Appcelerator Titanium module created by Raul Riera which displays basic messages toast style messages on the screen to the user.
  
This is an enhanced version based on Raul's work and contains some features/modifications which I find more useful in practical scenarios.
  


It contains following enhancements/modifications  

	1. One of the main problems I found were related to blocking of UI which is really required in most scenarios.
	2. Another enhancement is that I am using Alloy Built in animations which reduces the required code by a lot.
	3. Message can be customized for individual HUD instances/scenarios
	4. Block UI interaction while HUD is shown (please be really careful to handle errors properly and hide the HUD, else you'll end up locking the user out)

# Installation:

This module is pretty simple to use, you just need to import the library like so

	var overlay = require("overlayHUD");

And that is it, now you can use the following functions to show or hide your HUD

# Example

For the simplest example, follow this

	// inits the module and displays it to the user right away
	var overlay = require("overlayHUD");
	overlay.load().show();	


	//Single instance behavior usage
	var overlay = require("overlayHUD");
	var OVERLAY = overlay.load();
	OVERLAY.show();
	OVERLAY.hide();


	//Showing Overlay with custom message
	OVERLAY.show('custom message...');
	
# Docs

Below is simple documention of the HUD methods. I have listed the enhancements over the original HUD by Raul.

## load(message)

Init function, takes 1 optional argument: the message you want to display, default is "Loading...". This message becomes the default message for the overlay object.
  
Optional styles have been removed.

## show(message)

Shows the HUD with fade in animation (alloy animation built-ins) HUD.
  
Takes 1 optional argument: the message you want to display, this is to override the default message for per case scenarios.

## hide()

Animates (fade out) the HUD and hides it from the user. Another way to hide the HUD is by firing an app wide event called `OVERLAY:HUD:HIDE` (this can be customized)

# About:

Enhancements by neeks, http://newagelingo.com  
Original HUD Created by Raul Riera, http://raulriera.com