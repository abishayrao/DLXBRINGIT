dojo.declare("PhoneMain", wm.Page, {
"i18n": true,
start: function() {
},
"preferredDevice": "phone",
JDBCSerVarResult: function(){
if(this.label2.caption=="Authenticated")
this.navigationCall2.update();
},
label3Click: function(inSender, inEvent) {
window.location.search="dojo.locale=ptr";
},
label4Click: function(inSender, inEvent) {
window.location.search="dojo.locale=en";
},
_end: 0
});

PhoneMain.widgets = {
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
layoutBox1: ["wm.Layout", {"deviceSizes":["450","300"],"horizontalAlign":"center","styles":{"backgroundImage":"resources/images/bg/w1-4px.jpg","backgroundRepeat":"repeat"},"verticalAlign":"middle"}, {}, {
panel3: ["wm.Panel", {"deviceSizes":["450"],"height":"50px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
label5: ["wm.Label", {"align":"center","caption":"This app is not supported in Landscape mode at the moment.","padding":"4","styles":{"color":"#ffffff","fontWeight":"","fontSize":"","fontStyle":"italic","fontFamily":"","opacity":0.9},"width":"100%"}, {}],
label6: ["wm.Label", {"align":"center","caption":"Tip: Lock your mobile phone's screen orientation to \"Portrait\" mode!","padding":"4","styles":{"color":"#ffffff"},"width":"100%"}, {}]
}],
panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
panel1Panel: ["wm.Panel", {"height":"15%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
panel1: ["wm.Panel", {"deviceSizes":["300"],"deviceType":["phone"],"height":"33px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label4: ["wm.Label", {"caption":"en   |","padding":"4","styles":{"color":"#ffffff","fontSize":"14px"},"width":"34px"}, {"onclick":"label4Click"}],
label3: ["wm.Label", {"caption":"pt","padding":"4","styles":{"color":"#ffffff","fontSize":"14px"},"width":"28px"}, {"onclick":"label3Click"}]
}]
}],
formPanel1: ["wm.FormPanel", {"deviceSizes":["300"],"deviceType":["phone"],"height":"85%","horizontalAlign":"right","verticalAlign":"middle","width":"75%"}, {}, {
picture1Panel: ["wm.Panel", {"height":"30%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"90%"}, {}, {
picture1: ["wm.Picture", {"aspect":"v","deviceSizes":["300"],"deviceType":["phone"],"disabled":true,"enableTouchHeight":true,"height":"100%","imageList":"app.silkIconList","source":"resources/images/logos/dlx_logo_main.png","width":"100%"}, {}]
}],
label1: ["wm.Label", {"align":"center","caption":"Please login to continue...","deviceSizes":["300"],"deviceType":["phone"],"height":"14%","padding":"4","styles":{"fontSize":"14px","color":"#ffffff"},"width":"100%"}, {}],
text1: ["wm.Text", {"autoSizeWidth":true,"caption":"Username","captionSize":"30%","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"10%","maxHeight":0,"padding":"0","required":true,"styles":{"color":"#ffffff"},"width":"354px"}, {}],
text2: ["wm.Text", {"autoSizeWidth":true,"caption":"Password","captionSize":"30%","dataValue":undefined,"displayValue":"","height":"10%","maxHeight":0,"padding":"0","password":true,"required":true,"styles":{"color":"#ffffff"},"width":"354px"}, {"onEnterKeyPress":"JDBCSerVar"}],
button1: ["wm.Button", {"caption":"Access","height":"10%","margin":"4","width":"45%"}, {"onclick":"JDBCSerVar"}],
label2: ["wm.Label", {"align":"center","height":"10%","padding":"4","styles":{"color":"#ffffff","fontSize":"14px"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"JDBCSerVar.dataValue","targetProperty":"caption"}, {}]
}]
}],
FP: ["wm.Label", {"align":"center","caption":"Forgot Password?","height":"10%","padding":"4","styles":{"fontSize":"14px","backgroundColor":"","color":"#ffffff"},"width":"60%"}, {"onclick":"navigationCall3"}]
}]
}]
};

PhoneMain.prototype._cssText = '';
PhoneMain.prototype._htmlText = '';