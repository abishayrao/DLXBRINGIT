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

Reset_Password.widgets = {
Passwordcheck: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"PassChk","service":"PostGREAuthorization","startUpdate":true}, {"onResult":"PasswordcheckResult"}, {
input: ["wm.ServiceInput", {"type":"PassChkInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentpassword.dataValue","targetProperty":"in"}, {}]
}]
}]
}],
resetservice: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"resetpassword","service":"SecurityQuestions"}, {}, {
input: ["wm.ServiceInput", {"type":"resetpasswordInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentpassword.dataValue","targetProperty":"epass"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"confirmpassword.dataValue","targetProperty":"npass"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"middle"}, {}, {
panel1: ["wm.Panel", {"height":"462px","horizontalAlign":"center","verticalAlign":"middle","width":"700px"}, {}, {
label1: ["wm.Label", {"align":"center","caption":"Reset your password here!","height":"55px","padding":"4","width":"412px"}, {}],
currentpassword: ["wm.Text", {"caption":"Current Password","captionSize":"140px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","password":true,"width":"349px"}, {}],
validuser: ["wm.Label", {"align":"center","height":"35px","padding":"4","showing":false,"width":"348px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"Passwordcheck.dataValue","targetProperty":"caption"}, {}]
}]
}],
resetpanel: ["wm.Panel", {"height":"116px","horizontalAlign":"center","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
newpassword: ["wm.Text", {"caption":"New Password","captionSize":"140px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","password":true,"width":"349px"}, {}],
confirmpassword: ["wm.Text", {"caption":"Confirm Password","captionSize":"140px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","password":true,"width":"349px"}, {"onEnterKeyPress":"resetservice"}],
Reset: ["wm.Button", {"caption":"Reset","margin":"4"}, {"onclick":"resetservice"}]
}],
Result: ["wm.Label", {"align":"center","height":"77px","padding":"4","width":"362px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"resetservice.dataValue","targetProperty":"caption"}, {}]
}]
}]
}]
}]
};

Reset_Password.prototype._cssText = '';
Reset_Password.prototype._htmlText = '';