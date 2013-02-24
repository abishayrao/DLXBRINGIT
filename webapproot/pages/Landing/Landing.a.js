dojo.declare("Landing", wm.Page, {
start: function() {
},	"preferredDevice": "desktop",
_end: 0
});

Landing.widgets = {
GreetSerVar: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"Greet","service":"PostGREAuthorization","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"GreetInputs"}, {}]
}],
navigationCall2: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"JobSafety1\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Reset_Password\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{"backgroundImage":"resources/images/bg/w1.jpg","color":"","backgroundGradient":""},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
button1: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"app.navigationCall1"}]
}],
label1: ["wm.Label", {"align":"center","height":"41px","padding":"4","styles":{"color":"#ffffff"},"width":"404px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"GreetSerVar.dataValue","targetProperty":"caption"}, {}]
}]
}],
label2: ["wm.Label", {"align":"center","caption":"Main Menu","height":"33px","padding":"4","styles":{"color":"#ffffff"}}, {}],
label3: ["wm.Label", {"align":"center","caption":"","height":"72px","padding":"4"}, {}],
panel2: ["wm.Panel", {"height":"182px","horizontalAlign":"center","styles":{"color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"desktopHeight":"100px","enableTouchHeight":true,"fullStructure":[{"label":"Module 1","separator":undefined,"defaultLabel":"Module 1","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":undefined,"separator":true,"defaultLabel":"Separator","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":undefined,"onClick":undefined,"children":[]}]},{"label":"Job Safety","separator":undefined,"defaultLabel":"Job Safety","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCall2","children":[]}],"height":"100px","localizationStructure":{},"mobileHeight":"100%","openOnHover":true,"styles":{"color":"#ffffff","backgroundColor":"#0c0a0a","fontWeight":"","opacity":"","fontSize":"","backgroundGradient":""},"transparent":false,"vertical":true,"width":"157px"}, {}]
}],
resetpassword: ["wm.Button", {"caption":"Reset Password","margin":"4","width":"173px"}, {"onclick":"navigationCall1"}]
}]
};

Landing.prototype._cssText = '';
Landing.prototype._htmlText = '';