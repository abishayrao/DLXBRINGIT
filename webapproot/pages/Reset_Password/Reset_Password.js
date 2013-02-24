dojo.declare("Reset_Password", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	PasswordcheckResult: function(inSender, inDeprecated) {
		if(this.validuser.caption==1)
        this.resetpanel.setShowing(true);
},
	_end: 0
});