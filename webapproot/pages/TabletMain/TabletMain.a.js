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

TabletMain.widgets = {
JDBCSerVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"Authorized","service":"PostGREAuthorization"}, {"onResult":"JDBCSerVarResult"}, {
input: ["wm.ServiceInput", {"type":"AuthorizedInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"uname"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"pass"}, {}]
}]
}]
}],
appI18n: ["wm.Property", {"bindSource":undefined,"bindTarget":undefined,"property":"app.i18n","type":"boolean"}, {}],
appCurrencyLocale: ["wm.Property", {"bindSource":undefined,"bindTarget":undefined,"property":"app.currencyLocale","type":"string"}, {}],
onAppPageChanged: ["wm.Property", {"isEvent":true,"property":"app.onPageChanged","type":"string"}, {}],
onAppSessionExpiration: ["wm.Property", {"isEvent":true,"property":"app.onSessionExpiration","type":"string"}, {}],
navigationCall2: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Landing\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCall3: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"SecurityQuestions\"","targetProperty":"pageName"}, {}]
}]
}]
}],
PassCheckSerVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"PassChk","service":"PostGREAuthorization","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"PassChkInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"plaintext"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"in"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{"backgroundImage":"resources/images/bg/w1-4px.jpg","backgroundRepeat":"repeat"},"verticalAlign":"middle"}, {}, {
panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
panel1: ["wm.Panel", {"height":"33px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label4: ["wm.Label", {"caption":"en     |","deviceType":["desktop","tablet"],"padding":"4","styles":{"color":"#ffffff","fontSize":"16px"},"width":"43px"}, {"onclick":"label4Click"}],
label3: ["wm.Label", {"caption":"pt","deviceType":["tablet"],"padding":"4","styles":{"color":"#ffffff","fontSize":"16px"},"width":"26px"}, {"onclick":"label3Click"}]
}],
formPanel1: ["wm.FormPanel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"50%"}, {}, {
picture1Panel: ["wm.Panel", {"height":"25%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50%","imageList":"app.silkIconList","source":"resources/images/logos/dlx_logo_main.png","width":"100%"}, {}]
}],
label1: ["wm.Label", {"align":"center","caption":"Please login to continue...","height":"10%","padding":"4","styles":{"fontSize":"14px","color":"#ffffff"},"width":"100%"}, {}],
text1: ["wm.Text", {"autoSizeWidth":true,"caption":"Username","captionSize":"120px","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"5%","maxHeight":0,"padding":"0","required":true,"styles":{"color":"#ffffff"},"width":"354px"}, {}],
text2: ["wm.Text", {"autoSizeWidth":true,"caption":"Password","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"5%","maxHeight":0,"padding":"0","password":true,"required":true,"styles":{"color":"#ffffff"},"width":"354px"}, {"onEnterKeyPress":"JDBCSerVar"}],
button1: ["wm.Button", {"caption":"Access","height":"6%","margin":"4","width":"25%"}, {"onclick":"JDBCSerVar"}],
label2: ["wm.Label", {"align":"center","height":"10%","padding":"4","styles":{"color":"#ffffff","fontSize":"14px"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"JDBCSerVar.dataValue","targetProperty":"caption"}, {}]
}]
}],
FP: ["wm.Label", {"align":"center","caption":"Forgot Password?","height":"5%","padding":"4","styles":{"fontSize":"14px","backgroundColor":"","color":"#ffffff"},"width":"35%"}, {"onclick":"navigationCall3"}]
}]
}]
};

TabletMain.prototype._cssText = '';
TabletMain.prototype._htmlText = '';