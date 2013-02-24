dojo.declare("SecurityQuestions", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	UsernameSerVarResult: function() {
	if(this.res1.caption==1) 
      {
        this.AskQuestion1.update();
        this.Questionpanel1.setShowing(true);
      }
	},
	ReadAnswer1Result: function() {
	if(this.res2.caption==1) 
      {
        this.AskQuestion2.update();
        this.Questionpanel2.setShowing(true);		
      }
	},
	ReadAnswer2Result: function(inSender, inDeprecated) {
	if(this.res3.caption==1) 
      {
        this.MailSerVar.update();
        this.ConformationPanel.setShowing(true);
      }
	},
	_end: 0
});