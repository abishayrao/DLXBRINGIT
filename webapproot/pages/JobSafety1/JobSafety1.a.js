dojo.declare("JobSafety1", wm.Page, {
"i18n": true,
start: function() {
},
"preferredDevice": "desktop",
EnglishClick: function(inSender, inEvent) {
window.location.search = "dojo.locale=en";
},
PortugueseClick: function(inSender, inEvent) {
window.location.search = "dojo.locale=pt";
},
ResetButtonClick: function(inSender) {
this.Maintenance.resetData();
},
IaAdminSerVarSuccess: function(inSender, inDeprecated) {
if(this.IaAdminSerVar.data.dataValue===false)
this.dojoMenu1.setItemShowing("Maintenance", false);
app.forceReloadPage();
},
LocateButtonClick: function(inSender) {
},
_end: 0
});

JobSafety1.widgets = {
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"New\"","targetProperty":"pageName"}, {}]
}]
}]
}],
gesggruposLiveVariable2: ["wm.LiveVariable", {"inFlightBehavior":"executeAll","refireOnDbChange":true,"type":"com.testdb.data.GeSgGrupos"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"Situation_Active.groupValue","targetProperty":"filter.gesggrpStatus"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"By_Name.dataValue","targetProperty":"filter.gesggrpNome"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"By_Code.dataValue","targetProperty":"filter.gesggrpId"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.GeSgGrupos","related":["siClientes"],"view":[{"caption":"GesggrpId","sortable":true,"dataIndex":"gesggrpId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"GesggrpNome","sortable":true,"dataIndex":"gesggrpNome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"GesggrpStatus","sortable":true,"dataIndex":"gesggrpStatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"GesggrpIniVig","sortable":true,"dataIndex":"gesggrpIniVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"GesggrpFimVig","sortable":true,"dataIndex":"gesggrpFimVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Sicliid","sortable":true,"dataIndex":"siClientes.sicliid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Siclipfpj","sortable":true,"dataIndex":"siClientes.siclipfpj","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Siclicod","sortable":true,"dataIndex":"siClientes.siclicod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Siclinomegr","sortable":true,"dataIndex":"siClientes.siclinomegr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Siclinomepq","sortable":true,"dataIndex":"siClientes.siclinomepq","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Siclistatus","sortable":true,"dataIndex":"siClientes.siclistatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Sicliinivig","sortable":true,"dataIndex":"siClientes.sicliinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Siclifimvig","sortable":true,"dataIndex":"siClientes.siclifimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Sicliindicacao","sortable":true,"dataIndex":"siClientes.sicliindicacao","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Siclilingua","sortable":true,"dataIndex":"siClientes.siclilingua","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}]}, {}]
}],
selectionandordering: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","refireOnDbChange":true,"type":"com.testdb.data.Selectionandordering"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.Selectionandordering","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Preview","sortable":true,"dataIndex":"preview","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Filter","sortable":true,"dataIndex":"filter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
}],
gesgusuariosLiveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeAll","refireOnDbChange":true,"type":"com.testdb.data.GeSgUsuarios"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposDojoGrid.selectedItem","targetProperty":"filter.geSgGrupos"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.GeSgUsuarios","related":["geSgGrupos"],"view":[{"caption":"GesgusuId","sortable":true,"dataIndex":"gesgusuId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"GesgusuLogin","sortable":true,"dataIndex":"gesgusuLogin","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"GesgusuSenha","sortable":true,"dataIndex":"gesgusuSenha","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"GesgusuExpira","sortable":true,"dataIndex":"gesgusuExpira","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"GesgusuDtSenha","sortable":true,"dataIndex":"gesgusuDtSenha","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"GesgusuFunId","sortable":true,"dataIndex":"gesgusuFunId","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"GesgusuNome","sortable":true,"dataIndex":"gesgusuNome","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"GesgusuAdmin","sortable":true,"dataIndex":"gesgusuAdmin","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"GesgusuStatus","sortable":true,"dataIndex":"gesgusuStatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"GesgusuIniVig","sortable":true,"dataIndex":"gesgusuIniVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"GesgusuFimVig","sortable":true,"dataIndex":"gesgusuFimVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"GesggrpId","sortable":true,"dataIndex":"geSgGrupos.gesggrpId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"GesggrpNome","sortable":true,"dataIndex":"geSgGrupos.gesggrpNome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"GesggrpStatus","sortable":true,"dataIndex":"geSgGrupos.gesggrpStatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"GesggrpIniVig","sortable":true,"dataIndex":"geSgGrupos.gesggrpIniVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"GesggrpFimVig","sortable":true,"dataIndex":"geSgGrupos.gesggrpFimVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}]
}],
siclimoduloLiveVariable1: ["wm.LiveVariable", {"type":"com.testdb.data.SiCliModulo"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposDojoGrid.selectedItem.siClientes","targetProperty":"filter.siClientes"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.SiCliModulo","related":["siSisModulo","siClientes"],"view":[{"caption":"Sicxmid","sortable":true,"dataIndex":"sicxmid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Sicxmetapa","sortable":true,"dataIndex":"sicxmetapa","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Sicxmdatalimite","sortable":true,"dataIndex":"sicxmdatalimite","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Sicxmstatus","sortable":true,"dataIndex":"sicxmstatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Simodid","sortable":true,"dataIndex":"siSisModulo.simodid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Simodcod","sortable":true,"dataIndex":"siSisModulo.simodcod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Simodnome","sortable":true,"dataIndex":"siSisModulo.simodnome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Sicliid","sortable":true,"dataIndex":"siClientes.sicliid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Siclipfpj","sortable":true,"dataIndex":"siClientes.siclipfpj","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Siclicod","sortable":true,"dataIndex":"siClientes.siclicod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Siclinomegr","sortable":true,"dataIndex":"siClientes.siclinomegr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Siclinomepq","sortable":true,"dataIndex":"siClientes.siclinomepq","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Siclistatus","sortable":true,"dataIndex":"siClientes.siclistatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Sicliinivig","sortable":true,"dataIndex":"siClientes.sicliinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Siclifimvig","sortable":true,"dataIndex":"siClientes.siclifimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Sicliindicacao","sortable":true,"dataIndex":"siClientes.sicliindicacao","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Siclilingua","sortable":true,"dataIndex":"siClientes.siclilingua","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}]}, {}]
}],
gesggruxmodulosLiveVariable2: ["wm.LiveVariable", {"refireOnDbChange":true,"type":"com.testdb.data.GeSgGruXModulos"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposDojoGrid.selectedItem","targetProperty":"filter.geSgGrupos"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.GeSgGruXModulos","related":["geSgGrupos"],"view":[{"caption":"Gesggxmid","sortable":true,"dataIndex":"gesggxmid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Gesggxmidmod","sortable":true,"dataIndex":"gesggxmidmod","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"GesggrpId","sortable":true,"dataIndex":"geSgGrupos.gesggrpId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"GesggrpNome","sortable":true,"dataIndex":"geSgGrupos.gesggrpNome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"GesggrpStatus","sortable":true,"dataIndex":"geSgGrupos.gesggrpStatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"GesggrpIniVig","sortable":true,"dataIndex":"geSgGrupos.gesggrpIniVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"GesggrpFimVig","sortable":true,"dataIndex":"geSgGrupos.gesggrpFimVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}]
}],
gesggruxmodulosINSERT: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":undefined,"operation":"insert","startUpdate":false,"type":"com.testdb.data.GeSgGruXModulos"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposDojoGrid.selectedItem","targetProperty":"sourceData.geSgGrupos"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"siclimoduloDojoGrid.selectedItem.siSisModulo.simodid","targetProperty":"sourceData.gesggxmidmod"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.GeSgGruXModulos","related":["geSgGrupos"],"view":[{"caption":"Gesggxmid","sortable":true,"dataIndex":"gesggxmid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Gesggxmidmod","sortable":true,"dataIndex":"gesggxmidmod","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"GesggrpId","sortable":true,"dataIndex":"geSgGrupos.gesggrpId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},{"caption":"GesggrpNome","sortable":true,"dataIndex":"geSgGrupos.gesggrpNome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},{"caption":"GesggrpStatus","sortable":true,"dataIndex":"geSgGrupos.gesggrpStatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},{"caption":"GesggrpIniVig","sortable":true,"dataIndex":"geSgGrupos.gesggrpIniVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},{"caption":"GesggrpFimVig","sortable":true,"dataIndex":"geSgGrupos.gesggrpFimVig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2004,"subType":null,"widthUnits":"px"}]}, {}]
}],
gesggruxmodulosDELETE: ["wm.LiveVariable", {"autoUpdate":false,"operation":"delete","startUpdate":false,"type":"com.testdb.data.GeSgGruXModulos"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruxmodulosDojoGrid.selectedItem","targetProperty":"sourceData"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.GeSgGruXModulos","view":[{"caption":"Gesggxmid","sortable":true,"dataIndex":"gesggxmid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Gesggxmidmod","sortable":true,"dataIndex":"gesggxmidmod","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
PLUSCall: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"gesggruxmodulosINSERT"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Sure to grant access rights of \"+${siclimoduloDojoGrid.selectedItem.siSisModulo.simodnome}+\" to group \"+${gesggruposDojoGrid.selectedItem.gesggrpNome}+\" ?\"","targetProperty":"text"}, {}]
}]
}]
}],
MINUSCall: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"gesggruxmodulosDELETE"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Sure to revoke access rights of  group ID \"+${gesggruxmodulosDojoGrid.selectedItem.gesggxmid}+\" from \"+${gesggruxmodulosDojoGrid.selectedItem.geSgGrupos.gesggrpNome}+\" ?\"","targetProperty":"text"}, {}]
}]
}]
}],
gesgusuariosDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"390px","height":"390px","title":"gesgusuarios","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
gesgusuariosLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"320px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"gesgusuariosLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesgusuariosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
gesgusuIdEditor1: ["wm.Number", {"caption":"GesgusuId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"gesgusuId","height":"26px","required":true,"width":"100%"}, {}],
gesgusuLoginEditor1: ["wm.Text", {"caption":"GesgusuLogin","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesgusuLogin","height":"26px","required":true,"width":"100%"}, {}],
gesgusuSenhaEditor1: ["wm.Text", {"caption":"GesgusuSenha","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesgusuSenha","height":"26px","required":true,"width":"100%"}, {}],
gesgusuExpiraEditor1: ["wm.Text", {"caption":"GesgusuExpira","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesgusuExpira","height":"26px","width":"100%"}, {}],
gesgusuDtSenhaEditor1: ["wm.DateTime", {"caption":"GesgusuDtSenha","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"gesgusuDtSenha","height":"26px","width":"100%"}, {}],
gesgusuFunIdEditor1: ["wm.Number", {"caption":"GesgusuFunId","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"gesgusuFunId","height":"26px","width":"100%"}, {}],
gesgusuNomeEditor1: ["wm.Text", {"caption":"GesgusuNome","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesgusuNome","height":"26px","width":"100%"}, {}],
gesgusuAdminEditor1: ["wm.Text", {"caption":"GesgusuAdmin","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesgusuAdmin","height":"26px","width":"100%"}, {}],
gesgusuStatusEditor1: ["wm.Text", {"caption":"GesgusuStatus","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesgusuStatus","height":"26px","width":"100%"}, {}],
gesgusuIniVigEditor1: ["wm.DateTime", {"caption":"GesgusuIniVig","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"gesgusuIniVig","height":"26px","width":"100%"}, {}],
gesgusuFimVigEditor1: ["wm.DateTime", {"caption":"GesgusuFimVig","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"gesgusuFimVig","height":"26px","width":"100%"}, {}],
geSgGruposLookup1: ["wm.Lookup", {"caption":"GeSgGrupos","captionSize":"140px","dataType":"com.testdb.data.GeSgGrupos","dataValue":undefined,"displayField":"gesggrpNome","formField":"geSgGrupos","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
gesgusuariosSaveButton: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"gesgusuariosLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gesgusuariosLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
gesgusuariosCancelButton: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"gesgusuariosDialog.hide","onclick1":"gesgusuariosLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
MenuonSide: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"10%","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
picture1: ["wm.Picture", {"height":"65px","source":"resources/images/logos/dlx_logo_1.png","width":"135px"}, {}],
label3: ["wm.Label", {"align":"center","caption":"Workplace Safety Module","height":"35px","padding":"4","width":"222px"}, {}]
}],
panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"50%"}, {}, {
logoutButton1: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"app.navigationCall1"}]
}]
}],
panel3: ["wm.Panel", {"height":"85%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"15%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"Maintenance","separator":undefined,"defaultLabel":"Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Maintenance","children":[]},{"label":"Protective Equipment","separator":undefined,"defaultLabel":"Protective Equipment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"Accidents","separator":undefined,"defaultLabel":"Accidents","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"CIPA","separator":undefined,"defaultLabel":"CIPA","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"Fire Brigade","separator":undefined,"defaultLabel":"Fire Brigade","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"PPRA","separator":undefined,"defaultLabel":"PPRA","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCall1","children":[]},{"label":"Action Plan","separator":undefined,"defaultLabel":"Action Plan","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}],"height":"100%","localizationStructure":{},"padding":"20,0,0,0","transparent":false,"vertical":true}, {}]
}],
LayerPanel: ["wm.Layers", {"defaultLayer":0,"transition":"fade","width":"85%"}, {}, {
DefaultLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"center","themeStyleType":"","verticalAlign":"middle"}, {}, {
label4: ["wm.Label", {"caption":"Please select an option from the menu to proceed...","padding":"4","width":"360px"}, {}]
}],
Maintenance: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
UpperPanel: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
GroupsProfiles: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
testDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
gesggruposGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Groups"}, {}, {
gesggruposDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"gesggrpId","title":"GesggrpId","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"gesggrpNome","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"gesggrpStatus","title":"GesggrpStatus","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"gesggrpIniVig","title":"GesggrpIniVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"gesggrpFimVig","title":"GesggrpFimVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.sicliid","title":"Sicliid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclipfpj","title":"Siclipfpj","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclicod","title":"Siclicod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomegr","title":"Siclinomegr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomepq","title":"Siclinomepq","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclistatus","title":"Siclistatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.sicliinivig","title":"Sicliinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.siclifimvig","title":"Siclifimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.sicliindicacao","title":"Sicliindicacao","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclilingua","title":"Siclilingua","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${gesggrpNome} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.GeSgGrupos","height":"100%","localizationStructure":{},"margin":"4","selectFirstRow":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gesggruposLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
FilterAndLocation: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
spacer5: ["wm.Spacer", {"height":"5%","width":"100%"}, {}],
Situation_Panel: ["wm.Panel", {"height":"20%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
SituationLabel: ["wm.Label", {"caption":"Situation   ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel7: ["wm.Panel", {"height":"75%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Situation_Active: ["wm.RadioButton", {"caption":"Active","captionPosition":"right","checkedValue":"A","displayValue":"A","groupValue":"A","height":"100%","radioGroup":"situation","startChecked":true,"width":"86px"}, {"onchange":"serviceVariable1","onchange1":"Situation_ActiveChange1"}],
spacer1: ["wm.Spacer", {"height":"100%","width":"20%"}, {}],
Situation_InActive: ["wm.RadioButton", {"caption":"Inactive","captionPosition":"right","checkedValue":"N","dataType":undefined,"displayValue":false,"groupValue":"A","height":"100%","radioGroup":"situation","width":"94px"}, {"onchange":"serviceVariable2"}]
}]
}],
FilterOrLocationPanel: ["wm.Panel", {"disabled":true,"height":"20%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
FilterLocationLabel: ["wm.Label", {"caption":"Filter/Location  ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel8: ["wm.Panel", {"height":"75%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Filter: ["wm.RadioButton", {"caption":"Filter","captionPosition":"right","displayValue":"","height":"100%","radioGroup":"filterOrlocation","width":"86px"}, {}],
spacer2: ["wm.Spacer", {"height":"100%","width":"20%"}, {}],
Location: ["wm.RadioButton", {"caption":"Location","captionPosition":"right","dataType":undefined,"displayValue":false,"height":"100%","radioGroup":"filterOrlocation","width":"94px"}, {}]
}]
}],
FilterTypePanel: ["wm.Panel", {"height":"40%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
FilterTypeLabel: ["wm.Label", {"caption":"Filter Type  ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel4: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
By_Code: ["wm.Number", {"caption":"By Code","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}],
By_Name: ["wm.Text", {"caption":"By Name","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}]
}],
spacer3: ["wm.Spacer", {"height":"10px","width":"100px"}, {}],
panel13: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
By_CNPJ: ["wm.Number", {"caption":"By CNPJ","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}],
By_Date: ["wm.Date", {"caption":"By Date","captionSize":"80px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}]
}]
}],
ButtonPanel: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
ResetButton: ["wm.Button", {"caption":"Reset","desktopHeight":"35px","height":"35px","margin":"4","mobileHeight":"35%","width":"30%"}, {"onclick":"ResetButtonClick"}]
}]
}]
}],
MaintenanceTabs: ["wm.TabLayers", {"defaultLayer":0,"height":"50%","transition":"fade"}, {}, {
GroupsTab: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Groups","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
gesggruposDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"228px","title":"Details"}, {}, {
gesggruposLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"editorWidth":"90%","fitToContentHeight":true,"height":"196px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"gesggruposLiveVariable2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
gesggrpNomeEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"GIS","desktopHeight":"26px","emptyValue":"emptyString","formField":"gesggrpNome","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
radioSet1: ["wm.RadioSet", {"caption":"Situation","captionSize":"140px","dataField":"filter","dataType":"com.testdb.data.Selectionandordering","dataValue":"A","desktopHeight":"60px","displayField":"preview","editorBorder":false,"formField":"gesggrpStatus","height":"60px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectionandordering","targetProperty":"dataSet"}, {}]
}]
}],
gesggrpIniVigEditor1: ["wm.DateTime", {"caption":"Valid From","captionSize":"140px","dataValue":1361406600000,"dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"gesggrpIniVig","height":"26px","readonly":true,"width":"90%"}, {}],
gesggrpFimVigEditor1: ["wm.DateTime", {"caption":"Valid To","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"gesggrpFimVig","height":"26px","readonly":true,"width":"90%"}, {}],
siClientesLookup1: ["wm.Lookup", {"caption":"Client ID","captionSize":"140px","dataType":"com.testdb.data.SiClientes","dataValue":{"siclipfpj":"L","siclifimvig":null,"siclicod":"LEGAL","siclilingua":"EN","siclinomegr":"NOVARTIS","sicliindicacao":1,"siclistatus":"A","siclinomepq":"NV","sicliinivig":1361385000000,"sicliid":1},"defaultInsert":"NV","displayField":"siclinomepq","emptyValue":undefined,"formField":"siClientes","readonly":true,"required":true,"width":"90%"}, {}],
gesggruposLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"gesggruposLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"gesggruposLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"gesggruposLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"gesggruposLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"gesggruposLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"gesggruposLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesggruposLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
ModulesTab: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Modules","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"45%"}, {}, {
testDBLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
siclimoduloGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Active Modules"}, {}, {
siclimoduloDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"sicxmid","title":"Sicxmid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"sicxmetapa","title":"Sicxmetapa","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sicxmdatalimite","title":"Sicxmdatalimite","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sicxmstatus","title":"Sicxmstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"siSisModulo.simodid","title":"Module ID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"siSisModulo.simodcod","title":"Simodcod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"siSisModulo.simodnome","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"siClientes.sicliid","title":"Sicliid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclipfpj","title":"Siclipfpj","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclicod","title":"Siclicod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomegr","title":"Siclinomegr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomepq","title":"Siclinomepq","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclistatus","title":"Siclistatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.sicliinivig","title":"Sicliinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.siclifimvig","title":"Siclifimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.sicliindicacao","title":"Sicliindicacao","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclilingua","title":"Siclilingua","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Module ID: \" + ${siSisModulo.simodid} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${siSisModulo.simodnome} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.SiCliModulo","height":"100%","margin":"4","selectFirstRow":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"siclimoduloLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"10%"}, {}, {
button1: ["wm.Button", {"caption":"+","desktopHeight":"45px","height":"45px","margin":"4","width":"50px"}, {"onclick":"PLUSCall"}],
button2: ["wm.Button", {"caption":"-","desktopHeight":"45px","height":"45px","margin":"4","width":"50px"}, {"onclick":"MINUSCall"}]
}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"45%"}, {}, {
testDBLivePanel2: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
gesggruxmodulosGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Modules accessible by group"}, {}, {
gesggruxmodulosDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"gesggxmid","title":"Gesggxmid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"gesggxmidmod","title":"Module ID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpId","title":"GesggrpId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpNome","title":"GesggrpNome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpStatus","title":"GesggrpStatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpIniVig","title":"GesggrpIniVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpFimVig","title":"GesggrpFimVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Module ID: \" + ${gesggxmidmod} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.GeSgGruXModulos","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gesggruxmodulosLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}],
UsersTab: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Users","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
gesgusuariosLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gesgusuariosDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"gesgusuariosLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"gesgusuariosDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"gesgusuariosSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
gesgusuariosDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"gesgusuId","title":"ID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"gesgusuLogin","title":"GesgusuLogin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"gesgusuSenha","title":"GesgusuSenha","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"gesgusuExpira","title":"GesgusuExpira","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"gesgusuDtSenha","title":"GesgusuDtSenha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"gesgusuFunId","title":"GesgusuFunId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"gesgusuNome","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"gesgusuAdmin","title":"GesgusuAdmin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"gesgusuStatus","title":"GesgusuStatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"gesgusuIniVig","title":"GesgusuIniVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"gesgusuFimVig","title":"GesgusuFimVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpId","title":"GesggrpId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpNome","title":"GesggrpNome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpStatus","title":"GesggrpStatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpIniVig","title":"GesggrpIniVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"geSgGrupos.gesggrpFimVig","title":"GesggrpFimVig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>ID: \" + ${gesgusuId} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${gesgusuNome} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.GeSgUsuarios","height":"100%","margin":"4"}, {"onCellDblClick":"gesgusuariosLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"gesgusuariosLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
gesgusuariosGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
gesgusuariosNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"gesgusuariosLivePanel1.popupLivePanelInsert"}],
gesgusuariosUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"gesgusuariosLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gesgusuariosDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
gesgusuariosDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"gesgusuariosLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"gesgusuariosDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
Privacy_Policy: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Privacy Policy    |","height":"100%","padding":"4","width":"86px"}, {}],
TermsOfUse: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Terms of Use","height":"100%","padding":"4","width":"86px"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"© 2012 Datalynx AG","height":"100%","padding":"4","width":"100%"}, {}],
picture2: ["wm.Picture", {"height":"100%","source":"resources/images/logos/dlx_logo_footer.png","width":"40px"}, {}]
}]
}]
}]
}]
};

JobSafety1.prototype._cssText = '';
JobSafety1.prototype._htmlText = '';