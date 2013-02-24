SecurityQuestions.widgets = {
	UsernameSerVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"uname","service":"SecurityQuestions"}, {"onResult":"UsernameSerVarResult"}, {
		input: ["wm.ServiceInput", {"type":"unameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"Username.dataValue","targetProperty":"in"}, {}]
			}]
		}]
	}],
	AskQuestion1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"Sq1","service":"SecurityQuestions"}, {}, {
		input: ["wm.ServiceInput", {"type":"Sq1Inputs"}, {}]
	}],
	ReadAnswer1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"Sa1","service":"SecurityQuestions"}, {"onResult":"ReadAnswer1Result"}, {
		input: ["wm.ServiceInput", {"type":"Sa1Inputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"Question1.dataValue","targetProperty":"in"}, {}]
			}]
		}]
	}],
	AskQuestion2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"Sq2","service":"SecurityQuestions"}, {}, {
		input: ["wm.ServiceInput", {"type":"Sq2Inputs"}, {}]
	}],
	ReadAnswer2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"Sa2","service":"SecurityQuestions"}, {"onResult":"ReadAnswer2Result"}, {
		input: ["wm.ServiceInput", {"type":"Sa2Inputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"Question2.dataValue","targetProperty":"in"}, {}]
			}]
		}]
	}],
	MailSerVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendEmail","service":"SecurityQuestions"}, {}, {
		input: ["wm.ServiceInput", {"type":"sendEmailInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"middle"}, {}, {
		UsenamePanel: ["wm.Panel", {"height":"25%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
			Welcome: ["wm.Label", {"caption":"Welcome to Password Reset","padding":"4"}, {}],
			spacer1: ["wm.Spacer", {"height":"5px","width":"5px"}, {}],
			Username: ["wm.Text", {"caption":"Please enter your username here : ","captionSize":"60%","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","mobileHeight":"30%","required":true,"width":"55%"}, {}],
			Submit1: ["wm.Button", {"caption":"Submit","margin":"4"}, {"onclick":"UsernameSerVar"}],
			res1: ["wm.Label", {"padding":"4","showing":false,"width":"48px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"UsernameSerVar.dataValue","targetProperty":"caption"}, {}]
				}]
			}]
		}],
		Questionpanel1: ["wm.Panel", {"height":"25%","horizontalAlign":"center","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
			Q1: ["wm.Label", {"align":"center","caption":"Security Question 1","padding":"4"}, {}],
			spacer2: ["wm.Spacer", {"height":"5px","width":"5px"}, {}],
			Question1: ["wm.Text", {"autoSizeWidth":true,"captionSize":"60%","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","mobileHeight":"30%","required":true,"width":"497.2px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"AskQuestion1.dataValue","targetProperty":"caption"}, {}]
				}]
			}],
			Submit2: ["wm.Button", {"caption":"Submit","margin":"4"}, {"onclick":"ReadAnswer1"}],
			res2: ["wm.Label", {"padding":"4","showing":false,"width":"48px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"ReadAnswer1.dataValue","targetProperty":"caption"}, {}]
				}]
			}]
		}],
		Questionpanel2: ["wm.Panel", {"height":"25%","horizontalAlign":"center","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
			Q2: ["wm.Label", {"align":"center","caption":"Security Question 2","padding":"4"}, {}],
			spacer3: ["wm.Spacer", {"height":"5px","width":"5px"}, {}],
			Question2: ["wm.Text", {"autoSizeWidth":true,"captionSize":"60%","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","mobileHeight":"30%","required":true,"width":"497.2px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"AskQuestion2.dataValue","targetProperty":"caption"}, {}]
				}]
			}],
			Submit3: ["wm.Button", {"caption":"Submit","margin":"4"}, {"onclick":"ReadAnswer2"}],
			res3: ["wm.Label", {"padding":"4","showing":false,"width":"48px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"ReadAnswer2.dataValue","targetProperty":"caption"}, {}]
				}]
			}]
		}],
		ConformationPanel: ["wm.Panel", {"height":"25%","horizontalAlign":"center","showing":false,"verticalAlign":"middle","width":"100%"}, {}, {
			res4: ["wm.Label", {"height":"58px","padding":"4","width":"426px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"MailSerVar.dataValue","targetProperty":"caption"}, {}]
				}]
			}],
			Thankyou: ["wm.Label", {"align":"center","caption":"Thank you for using this service! ","padding":"4","width":"327px"}, {}],
			spacer4: ["wm.Spacer", {"height":"5px","width":"5px"}, {}],
			Home: ["wm.Button", {"caption":"Home","margin":"4"}, {"onclick":"app.navigationCall1"}]
		}]
	}]
}