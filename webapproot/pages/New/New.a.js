dojo.declare("New", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

New.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
varTemplateLogout1: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
navigationCallMainMenu: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"JobSafety1\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"15%"}, {}, {
label1: ["wm.Label", {"align":"center","caption":"Menu PPRA","height":"5%","padding":"4","styles":{"fontSize":"16px","fontWeight":"bold"},"width":"100%"}, {}],
dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"Basics","separator":undefined,"defaultLabel":"Basics","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"Units of Measurements","separator":undefined,"defaultLabel":"Units of Measurements","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Units_of_Measurements","children":[]},{"label":"Equipment Manufacturers","separator":undefined,"defaultLabel":"Equipment Manufacturers","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Equipment_Manufacturers","children":[]},{"label":"Measuring Equipment","separator":undefined,"defaultLabel":"Measuring Equipment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Measuring_Equipment","children":[]},{"label":"Equipment Groups","separator":undefined,"defaultLabel":"Equipment Groups","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Equipment_Groups","children":[]},{"label":"Protective Equipment","separator":undefined,"defaultLabel":"Protective Equipment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Protective_Equipment","children":[]},{"label":"Technical Evaluation","separator":undefined,"defaultLabel":"Technical Evaluation","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Technical_Evaluation","children":[]}]},{"label":"PPRA","separator":undefined,"defaultLabel":"PPRA","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"Risk Categories","separator":undefined,"defaultLabel":"Risk Categories","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Risk_Categories","children":[]},{"label":"Environmental Risks","separator":undefined,"defaultLabel":"Environmental Risks","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Environmental_Risks","children":[]},{"label":"Agents Risks","separator":undefined,"defaultLabel":"Agents Risks","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Agents_Risk","children":[]},{"label":"Back to Main Menu","separator":undefined,"defaultLabel":"Back to Main Menu","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCallMainMenu","children":[]}]}],"height":"95%","localizationStructure":{},"margin":"10","padding":"10","styles":{"fontSize":"18px","fontWeight":"bold","textAlign":"center"},"transparent":false,"vertical":true}, {}]
}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"85%"}, {}, {
panel54: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label2: ["wm.Label", {"align":"center","caption":"Menu PPRA","height":"5%","padding":"4","styles":{"fontSize":"16px","fontWeight":"bold"},"width":"80%"}, {}],
Logout: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"app.navigationCall1"}]
}],
layers1: ["wm.Layers", {}, {}, {
Menu_PPRA: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"center","themeStyleType":"","verticalAlign":"middle"}, {}],
Units_of_Measurements: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
noname3: ["wm.Panel", {"borderColor":"","height":"100%","horizontalAlign":"center","margin":"10","themeStyleType":"","verticalAlign":"middle","width":"100%"}, {}, {
noname14: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A4: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label15: ["wm.Label", {"align":"center","caption":"Units of measurement","height":"15%","padding":"4","width":"100%"}, {}]
}],
B4: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label20: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
Preview: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
Selection_and_ordering: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text26: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
Locate: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname24: ["wm.Panel", {"height":"25%","horizontalAlign":"center","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
Units_of_measurement: ["wm.Label", {"align":"center","caption":"Units of measurement","height":"25%","padding":"4","width":"100%"}, {}],
Code: ["wm.Text", {"caption":"Code","captionSize":"30%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}],
Description: ["wm.Text", {"caption":"Description","captionSize":"30%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}]
}],
panel13: ["wm.Panel", {"height":"25%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"30%"}, {}, {
Period_of_Validity: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
Active: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
" Date_of_Creation": ["wm.Text", {"caption":" Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"100%"}, {}],
spacer5: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
Date_of_extinction: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"100%"}, {}]
}],
noname47: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include4: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude4: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm4: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel4: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit4: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help4: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Equipment_Manufacturers: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
noname1: ["wm.Panel", {"borderColor":"","height":"100%","horizontalAlign":"left","margin":"10","themeStyleType":"","verticalAlign":"top","width":"100%"}, {}, {
noname11: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A1: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label7: ["wm.Label", {"align":"center","caption":"Equipment Manufacturers","height":"15%","padding":"4","width":"100%"}, {}]
}],
B1: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label8: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text4: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text9: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text10: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button2: ["wm.Button", {"caption":"Search","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname22: ["wm.Panel", {"height":"25%","horizontalAlign":"center","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
label9: ["wm.Label", {"align":"center","caption":"Equipment Manufacturers","height":"25%","padding":"4","width":"100%"}, {}],
text11: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}],
text12: ["wm.Text", {"caption":"Name","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}],
text15: ["wm.Text", {"caption":"Category","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}]
}],
noname33: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel3: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"70%"}, {}, {
label14: ["wm.Label", {"align":"center","caption":"Observations","height":"20%","padding":"4","width":"100%"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"30%"}, {}, {
label11: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox3: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text16: ["wm.Text", {"caption":"Date of Creation","captionSize":"70%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}],
spacer4: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text17: ["wm.Text", {"caption":"Date of extinction","captionSize":"70%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}]
}]
}],
noname44: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include1: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude1: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm1: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel1: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit1: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help1: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Measuring_Equipment: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
noname2: ["wm.Panel", {"borderColor":"","height":"100%","horizontalAlign":"left","margin":"10","themeStyleType":"","verticalAlign":"top","width":"100%"}, {}, {
noname12: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A2: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label10: ["wm.Label", {"align":"center","caption":"Measuring Equipment","height":"15%","padding":"4","width":"100%"}, {}]
}],
B2: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label12: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text13: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text14: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text18: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button3: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname23: ["wm.Panel", {"height":"25%","horizontalAlign":"center","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
label13: ["wm.Label", {"align":"center","caption":"Measuring Equipment","height":"25%","padding":"4","width":"100%"}, {}],
text21: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"28%","width":"60%"}, {}],
Name: ["wm.Text", {"caption":"Name","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"28%","width":"60%"}, {}],
panel7: ["wm.Panel", {"height":"30%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Manufacturer: ["wm.Text", {"caption":"Manufacturer","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"100%","width":"50%"}, {}],
Mark: ["wm.Text", {"caption":"Mark","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"100%","width":"50%"}, {}]
}]
}],
noname34: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel5: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"70%"}, {}, {
Observations: ["wm.Label", {"align":"center","caption":"Observations","height":"20%","padding":"4","width":"100%"}, {}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"30%"}, {}, {
label22: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox5: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
Date_of_Creation: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}],
spacer3: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text3: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}]
}]
}],
noname45: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include2: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude2: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm2: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel2: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit2: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help2: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Equipment_Groups: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"","verticalAlign":"top"}, {}, {
panel8: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","margin":"10","verticalAlign":"bottom","width":"30%"}, {}, {
B5: ["wm.Panel", {"height":"60%","horizontalAlign":"center","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
label19: ["wm.Label", {"align":"center","caption":"Device groups","height":"10%","padding":"4","width":"100%"}, {}]
}],
B11: ["wm.Panel", {"height":"40%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
label21: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text36: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text37: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text87: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button15: ["wm.Button", {"caption":"Search","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"70%"}, {}, {
noname13: ["wm.Panel", {"height":"35%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A3: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label16: ["wm.Label", {"align":"center","caption":"Protective Equipment","height":"15%","padding":"4","width":"100%"}, {}]
}],
B3: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label17: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text27: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text28: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text29: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button4: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname25: ["wm.Panel", {"height":"25%","horizontalAlign":"center","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
label18: ["wm.Label", {"align":"center","caption":"Protective Equipment","height":"25%","padding":"4","width":"100%"}, {}],
text30: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"28%","width":"60%"}, {}],
text31: ["wm.Text", {"caption":" Name","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"28%","width":"60%"}, {}],
text34: ["wm.Text", {"caption":"Type","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"28%","width":"60%"}, {}],
panel10: ["wm.Panel", {"height":"30%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
text32: ["wm.Text", {"caption":"Manufacturer","captionSize":"35%","dataValue":undefined,"displayValue":"","height":"100%","width":"50%"}, {}],
text33: ["wm.Text", {"caption":"Mark","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"100%","width":"50%"}, {}]
}]
}],
noname56: ["wm.Panel", {"border":"1","height":"10%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
label48: ["wm.Label", {"align":"center","caption":"Finality","height":"50%","padding":"4","width":"20%"}, {}]
}],
noname35: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"60%"}, {}, {
panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"80%"}, {}, {
label24: ["wm.Label", {"align":"center","caption":"Certificate of Approval","height":"25%","padding":"0","width":"100%"}, {}],
text43: ["wm.Text", {"caption":"Number","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}],
spacer1: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text44: ["wm.Text", {"caption":"Validity","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}]
}]
}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label23: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox7: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text40: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}],
spacer2: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text41: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}]
}]
}],
noname46: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include3: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude3: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm3: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel3: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit3: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help3: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Protective_Equipment: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}],
Technical_Evaluation: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
noname4: ["wm.Panel", {"borderColor":"","height":"100%","horizontalAlign":"left","margin":"10","themeStyleType":"","verticalAlign":"top","width":"100%"}, {}, {
noname15: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A5: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label25: ["wm.Label", {"align":"center","caption":"Technical Evaluation of","height":"15%","padding":"4","width":"100%"}, {}]
}],
B6: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label26: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text6: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text45: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text46: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button7: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname26: ["wm.Panel", {"height":"25%","horizontalAlign":"center","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
label27: ["wm.Label", {"align":"center","caption":"Grading Techniques","height":"25%","padding":"4","width":"100%"}, {}],
text47: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}],
text48: ["wm.Text", {"caption":"Name","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}]
}],
noname36: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel15: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"70%"}, {}, {
label49: ["wm.Label", {"align":"left","caption":"Detailed description","height":"25%","padding":"4","width":"100%"}, {}]
}],
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"30%"}, {}, {
label28: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox6: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text50: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer6: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text51: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}],
noname48: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include5: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude5: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm5: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel5: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit5: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help5: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Risk_Categories: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
noname5: ["wm.Panel", {"borderColor":"","height":"100%","horizontalAlign":"left","margin":"10","themeStyleType":"","verticalAlign":"top","width":"100%"}, {}, {
noname16: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A6: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label29: ["wm.Label", {"align":"center","caption":"Risk Category","height":"15%","padding":"4","width":"100%"}, {}]
}],
B7: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label30: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text7: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text49: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text52: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button8: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname37: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel17: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"70%"}, {}, {
label31: ["wm.Label", {"align":"center","caption":"Risk Category","height":"25%","padding":"4","width":"100%"}, {}],
text53: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}],
text54: ["wm.Text", {"caption":"Description","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}]
}],
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"30%"}, {}, {
label32: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox8: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text55: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer7: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text56: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}],
noname27: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
panel19: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"50%"}, {}, {
label50: ["wm.Label", {"align":"center","caption":"Monitored Situations","height":"25%","padding":"4","width":"100%"}, {}]
}],
panel20: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"50%"}, {}, {
label51: ["wm.Label", {"align":"center","caption":"Non-Monitored Situations","height":"25%","padding":"4","width":"100%"}, {}]
}]
}],
noname49: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include6: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude6: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm6: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel6: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit6: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help6: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Environmental_Risks: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
noname6: ["wm.Panel", {"borderColor":"","height":"100%","horizontalAlign":"center","margin":"10","themeStyleType":"","verticalAlign":"middle","width":"100%"}, {}, {
noname17: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A7: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label33: ["wm.Label", {"align":"center","caption":"Risks","height":"15%","padding":"4","width":"100%"}, {}]
}],
B8: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label34: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text8: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text57: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text58: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button9: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
noname28: ["wm.Panel", {"height":"25%","horizontalAlign":"center","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
label35: ["wm.Label", {"align":"center","caption":"Risk","height":"25%","padding":"4","width":"100%"}, {}],
text59: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}],
text60: ["wm.Text", {"caption":"Description","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"30%","width":"60%"}, {}]
}],
panel21: ["wm.Panel", {"height":"25%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"30%"}, {}, {
label36: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox9: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text61: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer8: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text62: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}],
noname50: ["wm.Panel", {"height":"7%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include7: ["wm.Button", {"caption":"Include","height":"85%","margin":"4","width":"15%"}, {}],
Exclude7: ["wm.Button", {"caption":"Exclude","height":"85%","margin":"4","width":"15%"}, {}],
Confirm7: ["wm.Button", {"caption":"Confirm","height":"85%","margin":"4","width":"15%"}, {}],
Cancel7: ["wm.Button", {"caption":"Cancel","height":"85%","margin":"4","width":"15%"}, {}],
Exit7: ["wm.Button", {"caption":"Exit","height":"85%","margin":"4","width":"15%"}, {}],
Help7: ["wm.Button", {"caption":"Help","height":"85%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Agents_Risk: ["wm.Layer", {"borderColor":"","caption":undefined,"horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"","verticalAlign":"top"}, {}, {
panel22: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","margin":"10","verticalAlign":"bottom","width":"30%"}, {}, {
B9: ["wm.Panel", {"height":"60%","horizontalAlign":"center","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
label37: ["wm.Label", {"align":"center","caption":"Environmental Risks","height":"10%","padding":"4","width":"100%"}, {}]
}],
B12: ["wm.Panel", {"height":"40%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
label52: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text90: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text91: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text92: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button16: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
panel23: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"70%"}, {}, {
noname18: ["wm.Panel", {"height":"45%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
A8: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
label38: ["wm.Label", {"align":"center","caption":"Agents Risk","height":"15%","padding":"4","width":"100%"}, {}]
}],
B10: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"40%"}, {}, {
label39: ["wm.Label", {"align":"center","caption":"Selection Options","height":"15%","padding":"4","width":"100%"}, {}],
text66: ["wm.Text", {"caption":"Preview","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text67: ["wm.Text", {"caption":"Selection and ordering","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text68: ["wm.Text", {"caption":".","captionAlign":"left","captionPosition":"top","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
button11: ["wm.Button", {"caption":"Locate","height":"15%","margin":"4","width":"30%"}, {}]
}]
}],
panel24: ["wm.Panel", {"height":"60%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"2","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
Agent: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Agent","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel26: ["wm.Panel", {"height":"35%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
label3: ["wm.Label", {"align":"center","caption":"Agent","padding":"4"}, {}],
spacer16: ["wm.Spacer", {"height":"10%","width":"96%"}, {}],
text69: ["wm.Text", {"caption":"Code","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}],
text70: ["wm.Text", {"caption":"Name","captionSize":"40%","dataValue":undefined,"displayValue":"","height":"25%","width":"85%"}, {}]
}],
panel25: ["wm.Panel", {"height":"55%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
noname38: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel27: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"70%"}, {}, {
label53: ["wm.Label", {"align":"center","caption":"Supplementary Data","height":"20%","padding":"4","width":"100%"}, {}],
panel50: ["wm.Panel", {"height":"90%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
panel28: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"80%"}, {}, {
text71: ["wm.Text", {"caption":"Level of Action","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}],
spacer9: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text72: ["wm.Text", {"caption":"Gauging Unit","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}]
}],
panel49: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"80%"}, {}, {
text93: ["wm.Text", {"caption":"Tolerance Min","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}],
spacer17: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text94: ["wm.Text", {"caption":"Tolerance Max","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"90%"}, {}]
}]
}]
}],
panel29: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"45%"}, {}, {
label41: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox10: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text73: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer10: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text74: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}]
}],
noname51: ["wm.Panel", {"height":"10%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Include8: ["wm.Button", {"caption":"Include","height":"100%","margin":"4","width":"15%"}, {}],
Exclude8: ["wm.Button", {"caption":"Exclude","height":"100%","margin":"4","width":"15%"}, {}],
Confirm8: ["wm.Button", {"caption":"Confirm","height":"100%","margin":"4","width":"15%"}, {}],
Cancel8: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4","width":"15%"}, {}],
Exit8: ["wm.Button", {"caption":"Exit","height":"100%","margin":"4","width":"15%"}, {}],
Help8: ["wm.Button", {"caption":"Help","height":"100%","margin":"4","width":"15%"}, {}]
}]
}],
Measurement_Equipment: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Measurement Equipment","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
layer6: ["wm.Panel", {"borderColor":"#999999","height":"100%","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top","width":"100%"}, {}, {
noname39: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
panel33: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"bottom","width":"45%"}, {}, {
panel51: ["wm.Panel", {"height":"90%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
"MeasuringEquipment(Table": ["wm.Label", {"align":"center","caption":"Measuring Equipment (Table)","height":"15%","padding":"4","width":"100%"}, {}]
}],
text75: ["wm.Text", {"caption":undefined,"captionPosition":"top","captionSize":"28px","dataValue":undefined,"displayValue":"","height":"15%","padding":"0","width":"100%"}, {}]
}],
panel32: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"8%"}, {}, {
button1: ["wm.Button", {"caption":"+","height":"20%","margin":"4","width":"80%"}, {}],
button12: ["wm.Button", {"caption":"-","height":"20%","margin":"4","width":"80%"}, {}]
}],
panel34: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"45%"}, {}, {
"Equipment*Agent": ["wm.Label", {"align":"center","caption":"Equipment * Agent","height":"15%","padding":"4","width":"100%"}, {}]
}]
}]
}],
noname52: ["wm.Panel", {"height":"10%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Exit9: ["wm.Button", {"caption":"Exit","height":"100%","margin":"4","width":"15%"}, {}],
Help9: ["wm.Button", {"caption":"Help","height":"100%","margin":"4","width":"15%"}, {}]
}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Protective Equipment","horizontalAlign":"left","padding":"5","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
text77: ["wm.Text", {"caption":"Group","dataValue":undefined,"displayValue":"","height":"10%","width":"45%"}, {}],
layer7: ["wm.Panel", {"borderColor":"#999999","height":"80%","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"bottom","width":"100%"}, {}, {
noname40: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"bottom","width":"100%"}, {}, {
panel38: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"bottom","width":"45%"}, {}, {
label42: ["wm.Label", {"align":"center","caption":"Protective Equipment (Table)","height":"10%","padding":"0","width":"100%"}, {}],
panel35: ["wm.Panel", {"border":"1","height":"90%","horizontalAlign":"center","verticalAlign":"bottom","width":"100%"}, {}, {
text76: ["wm.Text", {"caption":undefined,"captionPosition":"top","captionSize":"28px","dataValue":undefined,"displayValue":"","height":"15%","padding":"0","width":"100%"}, {}]
}]
}],
panel36: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"8%"}, {}, {
button13: ["wm.Button", {"caption":"+","height":"20%","margin":"4","width":"80%"}, {}],
button14: ["wm.Button", {"caption":"-","height":"20%","margin":"4","width":"80%"}, {}]
}],
panel37: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"45%"}, {}, {
label43: ["wm.Label", {"align":"center","caption":"Equipment * Agent","height":"15%","padding":"4","width":"100%"}, {}]
}]
}]
}],
noname53: ["wm.Panel", {"height":"10%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Exit10: ["wm.Button", {"caption":"Exit","height":"100%","margin":"4","width":"15%"}, {}],
Help10: ["wm.Button", {"caption":"Help","height":"100%","margin":"4","width":"15%"}, {}]
}]
}],
Sources: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Sources","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
layer8: ["wm.Panel", {"border":"1","borderColor":"#999999","height":"100%","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top","width":"100%"}, {}, {
panel39: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
panel40: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"bottom","width":"45%"}, {}, {
panel52: ["wm.Panel", {"height":"90%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
label54: ["wm.Label", {"align":"center","caption":"Agents Risk","height":"15%","padding":"4","width":"100%"}, {}]
}],
text78: ["wm.Text", {"caption":undefined,"captionPosition":"top","captionSize":"28px","dataValue":undefined,"displayValue":"","height":"15%","padding":"0","width":"100%"}, {}]
}],
panel41: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"55%"}, {}, {
panel30: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
panel31: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
label44: ["wm.Label", {"align":"center","caption":"Source","height":"25%","padding":"0","width":"100%"}, {}],
text79: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer11: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text80: ["wm.Text", {"caption":"Name","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer15: ["wm.Spacer", {"height":"4%","width":"96%"}, {}],
text83: ["wm.Text", {"caption":"Note","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}],
panel42: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
label45: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox11: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text81: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer12: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text82: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}]
}],
noname54: ["wm.Panel", {"height":"10%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Exit11: ["wm.Button", {"caption":"Exit","height":"100%","margin":"4","width":"15%"}, {}],
Help11: ["wm.Button", {"caption":"Help","height":"100%","margin":"4","width":"15%"}, {}]
}]
}]
}],
Damages: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Damages","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
layer9: ["wm.Panel", {"border":"1","borderColor":"#999999","height":"100%","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top","width":"100%"}, {}, {
panel43: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
panel44: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"bottom","width":"45%"}, {}, {
panel53: ["wm.Panel", {"height":"90%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label40: ["wm.Label", {"align":"center","caption":"Possible Damage","height":"15%","padding":"4","width":"100%"}, {}]
}],
text84: ["wm.Text", {"caption":undefined,"captionPosition":"top","captionSize":"28px","dataValue":undefined,"displayValue":"","height":"15%","padding":"0","width":"100%"}, {}]
}],
panel45: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"55%"}, {}, {
panel46: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
panel47: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
label46: ["wm.Label", {"align":"center","caption":"Damage","height":"25%","padding":"0","width":"100%"}, {}],
text85: ["wm.Text", {"caption":"Code","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer13: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text86: ["wm.Text", {"caption":"Name","captionSize":"25%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}],
panel48: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
label47: ["wm.Label", {"align":"center","caption":"Period of Validity","height":"25%","padding":"0","width":"100%"}, {}],
checkbox12: ["wm.Checkbox", {"caption":"Active","displayValue":false,"height":"20%","padding":"0","width":"40%"}, {}],
text88: ["wm.Text", {"caption":"Date of Creation","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}],
spacer14: ["wm.Spacer", {"height":"5px","width":"5undefined"}, {}],
text89: ["wm.Text", {"caption":"Date of extinction","captionSize":"60%","dataValue":undefined,"displayValue":"","height":"20%","padding":"0","width":"80%"}, {}]
}]
}]
}],
noname55: ["wm.Panel", {"height":"10%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Exit12: ["wm.Button", {"caption":"Exit","height":"100%","margin":"4","width":"15%"}, {}],
Help12: ["wm.Button", {"caption":"Help","height":"100%","margin":"4","width":"15%"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

New.prototype._cssText = '';
New.prototype._htmlText = '';