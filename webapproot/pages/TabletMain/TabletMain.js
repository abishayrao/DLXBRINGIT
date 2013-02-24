dojo.declare("TabletMain", wm.Page, {
	"i18n": true,
	start: function() {
		
	},
	"preferredDevice": "tablet",

	JDBCSerVarResult: function(){
        if(this.label2.caption=="Authenticated")
        this.navigationCall2.update();
        },
	label3Click: function(inSender, inEvent) {
		window.location.search="dojo.locale=pt";
	},
	label4Click: function(inSender, inEvent) {
		window.location.search="dojo.locale=en";
	},
	_end: 0
});