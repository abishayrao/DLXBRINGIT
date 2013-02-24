wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "shiftDeserializedProperties",
		"operationType": null,
		"parameters": [{
			"name": "index",
			"type": "int"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['waveMakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "hostToDomain",
		"operationType": null,
		"parameters": [{
			"name": "host",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}, {
		"name": "proxyCheck",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}],
		"returnType": null
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.testdb.data.DiHlHelpUsu": {
			"fields": {
				"dihlhludescr": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dihlhluid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geSgUsuarios": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgUsuarios"
				},
				"siSisModComponentes": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModComponentes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpCentrocusto": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geempccucodigo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempccuid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempccunome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempccunomeabre": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempccustatus": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempccuvigate": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempccuvigdesde": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpCnaeSec": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbCnaeSubclasse": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeSubclasse"
				},
				"geempcnsid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempcnsstatus": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempcnsvigate": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempcnsvigdesde": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpContas": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbBancos": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbBancos"
				},
				"geTbTiposConta": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposConta"
				},
				"geempctsagdv": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempctsagencia": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempctsconta": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempctsctdv": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempctsfimvig": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempctsgeremail": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempctsgerente": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempctsid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempctsinivig": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempctsstatus": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpContatos": {
			"fields": {
				"geCaEmpContatosHists": {
					"exclude": [],
					"fieldOrder": 31,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContatosHist"
				},
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 29,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbTiposTelefoneByGeempcontelatpid": {
					"exclude": [],
					"fieldOrder": 28,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"geTbTiposTelefoneByGeempcontelbtpid": {
					"exclude": [],
					"fieldOrder": 30,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"geempconcargo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempcondtnasc": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempconemail": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconfimvig": {
					"exclude": [],
					"fieldOrder": 27,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempconid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempconinivig": {
					"exclude": [],
					"fieldOrder": 26,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempconnomea": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempconresa": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresb": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresc": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresd": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconrese": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresf": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresg": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresh": {
					"exclude": [],
					"fieldOrder": 17,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresi": {
					"exclude": [],
					"fieldOrder": 18,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresj": {
					"exclude": [],
					"fieldOrder": 19,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresk": {
					"exclude": [],
					"fieldOrder": 20,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresl": {
					"exclude": [],
					"fieldOrder": 21,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresm": {
					"exclude": [],
					"fieldOrder": 22,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconresn": {
					"exclude": [],
					"fieldOrder": 23,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconreso": {
					"exclude": [],
					"fieldOrder": 24,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconsexo": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempconstatus": {
					"exclude": [],
					"fieldOrder": 25,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempconteladdd": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempcontelano": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempcontelbddd": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempcontelbno": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpContatosHist": {
			"fields": {
				"geCaEmpContatos": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpContatos"
				},
				"geTbTiposContato": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposContato"
				},
				"geemphcatendente": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemphcdata": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"geemphchistorico": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemphchora": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"geemphcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geemphcstatus": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpDocsPf": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbUfByGeempdpfregprofuf": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"geTbUfByGeempdpfrguf": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"geempdpfcpf": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempdpfempresaid": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempdpfregprof": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempdpfrg": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempdpfrgorgao": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpDocsPj": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbCnaeSubclasse": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeSubclasse"
				},
				"geempdpjdoc": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempdpjempresaid": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempdpjie": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempdpjiedata": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempdpjim": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempdpjimdata": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempdpjtipodoc": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpEnd": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbTiposEndereco": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposEndereco"
				},
				"geTbUf": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"geempendbairro": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempendcep": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempendcompl": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempendid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempendlogra": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempendmunic": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempendno": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpHisPgto": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geemphpcartorio": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemphpdesctipo": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemphpdescval": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"geemphpdtpgto": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geemphpdtvenc": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"geemphpid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geemphpimpostos": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"geemphpmultatipo": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemphpmultaval": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"geemphpnodoc": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemphpobs": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemphpparcela": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemphpstatus": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemphptipocobr": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemphpvalapagar": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"geemphpvalpago": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpLotacao": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 23,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbCnaeSubclasse": {
					"exclude": [],
					"fieldOrder": 24,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeSubclasse"
				},
				"geTbUf": {
					"exclude": [],
					"fieldOrder": 22,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"geemplotbairro": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotcep": {
					"exclude": [],
					"fieldOrder": 18,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotcodigo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemplotcompl": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotdoc": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemplotid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geemplotie": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotiedata": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geemplotim": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotimdata": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geemplotlogra": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotmunic": {
					"exclude": [],
					"fieldOrder": 17,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotnatjurid": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotnivelHie": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotno": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotnome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemplotnomeabre": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemplotstatus": {
					"exclude": [],
					"fieldOrder": 19,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemplottipo": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemplottipodoc": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemplotvigate": {
					"exclude": [],
					"fieldOrder": 21,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geemplotvigdesde": {
					"exclude": [],
					"fieldOrder": 20,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpSocios": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 30,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbQualificacaoSoc": {
					"exclude": [],
					"fieldOrder": 29,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbQualificacaoSoc"
				},
				"geTbUfByGeempsorguf": {
					"exclude": [],
					"fieldOrder": 28,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"geTbUfByGeempsouf": {
					"exclude": [],
					"fieldOrder": 27,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"geempsoanochega": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"geempsoassina": {
					"exclude": [],
					"fieldOrder": 22,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempsobairro": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsocep": {
					"exclude": [],
					"fieldOrder": 18,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsocompl": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsocpf": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempsodtnasc": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempsoemail": {
					"exclude": [],
					"fieldOrder": 21,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsoestciv": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsofuncao": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsoid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempsologra": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsomunic": {
					"exclude": [],
					"fieldOrder": 17,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsonacional": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsonit": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsono": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsonome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempsoobs": {
					"exclude": [],
					"fieldOrder": 26,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsopartic": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"geempsorg": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsorgorgao": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsosexo": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsostatus": {
					"exclude": [],
					"fieldOrder": 23,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geempsotelddd": {
					"exclude": [],
					"fieldOrder": 19,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsotelno": {
					"exclude": [],
					"fieldOrder": 20,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geempsovigate": {
					"exclude": [],
					"fieldOrder": 25,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geempsovigdesde": {
					"exclude": [],
					"fieldOrder": 24,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpTel": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbTiposTelefone": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"geemptelddd": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geemptelid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geemptelno": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geemptelramal": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpWeb": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geTbTiposWeb": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposWeb"
				},
				"geempwebid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geempwebtxt": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaEmpresas": {
			"fields": {
				"geCaEmpCentrocustos": {
					"exclude": [],
					"fieldOrder": 17,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpCentrocusto"
				},
				"geCaEmpCnaeSecs": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpCnaeSec"
				},
				"geCaEmpContases": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContas"
				},
				"geCaEmpContatoses": {
					"exclude": [],
					"fieldOrder": 22,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContatos"
				},
				"geCaEmpDocsPfs": {
					"exclude": [],
					"fieldOrder": 20,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpDocsPf"
				},
				"geCaEmpDocsPjs": {
					"exclude": [],
					"fieldOrder": 23,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpDocsPj"
				},
				"geCaEmpEnds": {
					"exclude": [],
					"fieldOrder": 19,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpEnd"
				},
				"geCaEmpHisPgtos": {
					"exclude": [],
					"fieldOrder": 25,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpHisPgto"
				},
				"geCaEmpLotacaos": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpLotacao"
				},
				"geCaEmpSocioses": {
					"exclude": [],
					"fieldOrder": 21,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpSocios"
				},
				"geCaEmpTels": {
					"exclude": [],
					"fieldOrder": 24,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpTel"
				},
				"geCaEmpWebs": {
					"exclude": [],
					"fieldOrder": 18,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpWeb"
				},
				"geCaFuncionarios": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaFuncionario"
				},
				"geSgGruXEmpresas": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgGruXEmpresa"
				},
				"geTbTiposEmpresas": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposEmpresas"
				},
				"gecaempcod": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gecaempfimvig": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gecaempid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gecaempinivig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gecaempnomegr": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gecaempnomepq": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gecaemppfpj": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gecaempstatus": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gecaempusacc": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gecaempusafilial": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeCaFuncionario": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"gefuncialteradomes": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gefuncidigito": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"gefunciid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gefunciidmestre": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gefuncimatricula": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gefuncinome": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gefuncinomecomplet": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gefuncistatus": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgAuditoria": {
			"fields": {
				"geSgUsuarios": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgUsuarios"
				},
				"gesgaudAcao": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesgaudChave": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gesgaudCompoId": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesgaudData": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesgaudId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesgaudInformacao": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgGruXCampo": {
			"fields": {
				"geSgGrupos": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgGrupos"
				},
				"gesggxahabilit": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxaid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesggxaidcampo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesggxaobrig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxatrilha": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxavisib": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgGruXCompo": {
			"fields": {
				"geSgGrupos": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgGrupos"
				},
				"gesggxcacessa": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxcaltera": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxcexclui": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesggxcidcompo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesggxcinclui": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggxctemCampos": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgGruXEmpresa": {
			"fields": {
				"geCaEmpresas": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geSgGrupos": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgGrupos"
				},
				"gesggxeid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgGruXModulos": {
			"fields": {
				"geSgGrupos": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgGrupos"
				},
				"gesggxmid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesggxmidmod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgGrupos": {
			"fields": {
				"geSgGruXCampos": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgGruXCampo"
				},
				"geSgGruXCompos": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgGruXCompo"
				},
				"geSgGruXEmpresas": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgGruXEmpresa"
				},
				"geSgGruXModuloses": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgGruXModulos"
				},
				"geSgUsuarioses": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgUsuarios"
				},
				"gesggrpFimVig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gesggrpId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesggrpIniVig": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gesggrpNome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesggrpStatus": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgHistSenhas": {
			"fields": {
				"geSgUsuarios": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgUsuarios"
				},
				"gesghsenhaId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesghsenhaSenha": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesgusuAte": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gesgusuDe": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeSgUsuarios": {
			"fields": {
				"diHlHelpUsus": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.DiHlHelpUsu"
				},
				"geSgAuditorias": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgAuditoria"
				},
				"geSgGrupos": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeSgGrupos"
				},
				"geSgHistSenhases": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgHistSenhas"
				},
				"gesgusuAdmin": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gesgusuDtSenha": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gesgusuExpira": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gesgusuFimVig": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gesgusuFunId": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"gesgusuId": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gesgusuIniVig": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gesgusuLogin": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesgusuNome": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gesgusuSenha": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gesgusuStatus": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbBancos": {
			"fields": {
				"geCaEmpContases": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContas"
				},
				"geTbBcAgenciases": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbBcAgencias"
				},
				"gebancocod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gebancofimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gebancoid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gebancoinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gebanconome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gebancostatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliContases": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContas"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbBcAgencias": {
			"fields": {
				"geTbBancos": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbBancos"
				},
				"geagcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geagdv": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geagfimvig": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geaggeremail": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geaggerente": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geaggertelddd": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geaggertelno": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"geagid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geaginivig": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geagnome": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geagstatus": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbCnaeClasse": {
			"fields": {
				"geTbCnaeGrupo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbCnaeGrupo"
				},
				"geTbCnaeSubclasses": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeSubclasse"
				},
				"gecnaedcod": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gecnaednome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbCnaeDivisao": {
			"fields": {
				"geTbCnaeGrupos": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeGrupo"
				},
				"geTbCnaeSecao": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbCnaeSecao"
				},
				"gecnaebcod": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gecnaebnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbCnaeGrupo": {
			"fields": {
				"geTbCnaeClasses": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeClasse"
				},
				"geTbCnaeDivisao": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbCnaeDivisao"
				},
				"gecnaeccod": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gecnaecnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbCnaeSecao": {
			"fields": {
				"geTbCnaeDivisaos": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbCnaeDivisao"
				},
				"gecnaeacod": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gecnaeanome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbCnaeSubclasse": {
			"fields": {
				"geCaEmpCnaeSecs": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpCnaeSec"
				},
				"geCaEmpDocsPjs": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpDocsPj"
				},
				"geCaEmpLotacaos": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpLotacao"
				},
				"geTbCnaeClasse": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbCnaeClasse"
				},
				"gecnaeecod": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gecnaeenome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbIndex": {
			"fields": {
				"geTbIndexCotas": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbIndexCota"
				},
				"geindexcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geindexdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geindexfimvig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geindexid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geindexinivig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geindexperiodo": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geindexstatus": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbIndexCota": {
			"fields": {
				"geTbIndex": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbIndex"
				},
				"geindctfimvig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geindctid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geindctinivig": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geindctstatus": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geindctvalor": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbMeiosConhecimento": {
			"fields": {
				"gemeioconcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gemeioconcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gemeiocondescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClienteses": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbMunicipios": {
			"fields": {
				"geTbUf": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbUf"
				},
				"gemuniccod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gemunicfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gemunicid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gemunicinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gemunicnome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gemunicstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbNatJurClasse": {
			"fields": {
				"geTbNatJuridicas": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbNatJuridica"
				},
				"genajuccod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"genajucdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"genajucfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"genajucid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"genajucinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"genajucstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbNatJuridica": {
			"fields": {
				"geTbNatJurClasse": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbNatJurClasse"
				},
				"genajucfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"genajucinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"genajucstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"genatjucod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"genatjudescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"genatjuid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbQualificacaoSoc": {
			"fields": {
				"geCaEmpSocioses": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpSocios"
				},
				"gequalsoccod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gequalsocdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"gequalsocfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gequalsocid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gequalsocinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gequalsocstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposConta": {
			"fields": {
				"geCaEmpContases": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContas"
				},
				"getipoconcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipocondescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoconfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoconid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipoconinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoconstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliContases": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContas"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposContato": {
			"fields": {
				"geCaEmpContatosHists": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContatosHist"
				},
				"getipoctocod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoctodescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoctofimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoctoid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipoctoinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoctostatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliContatosHists": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContatosHist"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposContrato": {
			"fields": {
				"getipoctrcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoctrdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoctrfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoctrid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipoctrinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoctrstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposDoc": {
			"fields": {
				"getipodoccod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipodocdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipodocfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipodocid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipodocinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipodocstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposEmpresas": {
			"fields": {
				"geCaEmpresases": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"getipoempcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoempdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoempfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoempid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipoempinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoempstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposEndereco": {
			"fields": {
				"geCaEmpEnds": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpEnd"
				},
				"getipoendcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoenddescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoendfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoendid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipoendinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipoendstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliEnds": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliEnd"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"stEpFabricEnds": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricEnd"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposTelefone": {
			"fields": {
				"geCaEmpContatosesForGeempcontelatpid": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContatos"
				},
				"geCaEmpContatosesForGeempcontelbtpid": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpContatos"
				},
				"geCaEmpTels": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpTel"
				},
				"getipotelcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipoteldescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipotelfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipotelid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipotelinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipotelstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliContatosesForSiclicontelatpid": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContatos"
				},
				"siCliContatosesForSiclicontelbtpid": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContatos"
				},
				"siCliTels": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliTel"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"stEpFabricContatosesForStfacontelatpid": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricContatos"
				},
				"stEpFabricContatosesForStfacontelbtpid": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricContatos"
				},
				"stEpFabricTels": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricTel"
				},
				"stEpFabricWebs": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricWeb"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbTiposWeb": {
			"fields": {
				"geCaEmpWebs": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpWeb"
				},
				"getipowebcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipowebdescr": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"getipowebfimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipowebid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"getipowebinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"getipowebstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliWebs": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliWeb"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.GeTbUf": {
			"fields": {
				"geCaEmpDocsPfsForGeempdpfregprofuf": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpDocsPf"
				},
				"geCaEmpDocsPfsForGeempdpfrguf": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpDocsPf"
				},
				"geCaEmpEnds": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpEnd"
				},
				"geCaEmpLotacaos": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpLotacao"
				},
				"geCaEmpSociosesForGeempsorguf": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpSocios"
				},
				"geCaEmpSociosesForGeempsouf": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpSocios"
				},
				"geTbMunicipioses": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbMunicipios"
				},
				"geufcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"geufcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geuffimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geufinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"geufnome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"geufstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siCliDocsPfs": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliDocsPf"
				},
				"siCliEnds": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliEnd"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"stEpFabricEnds": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricEnd"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.Selectionandordering": {
			"fields": {
				"filter": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"preview": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliContas": {
			"fields": {
				"geTbBancos": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbBancos"
				},
				"geTbTiposConta": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposConta"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"siclictsagdv": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclictsagencia": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclictsconta": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclictsctdv": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclictsfimvig": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"siclictsid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"siclictsinivig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"siclictsstatus": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliContatos": {
			"fields": {
				"geTbTiposTelefoneBySiclicontelatpid": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"geTbTiposTelefoneBySiclicontelbtpid": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"siCliContatosHists": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContatosHist"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"sicliconcargo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclicondtnasc": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sicliconemail": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sicliconid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sicliconnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sicliconteladdd": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclicontelano": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclicontelbddd": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclicontelbno": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliContatosHist": {
			"fields": {
				"geTbTiposContato": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposContato"
				},
				"siCliContatos": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiCliContatos"
				},
				"siclihcatendente": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclihcdata": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"siclihchistorico": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclihchora": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"siclihcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliDocsPf": {
			"fields": {
				"geTbUf": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"siclidpfclienteid": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"siclidpfcpf": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclidpfregprof": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclidpfrg": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclidpfrgorgao": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliDocsPj": {
			"fields": {
				"siClientes": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"siclidpjclienteid": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"siclidpjcnpj": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclidpjie": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclidpjiedata": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"siclidpjim": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliEnd": {
			"fields": {
				"geTbTiposEndereco": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposEndereco"
				},
				"geTbUf": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"sicliendbairro": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sicliendcep": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sicliendcompl": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sicliendid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sicliendlogra": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sicliendmunic": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sicliendno": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliHisPgto": {
			"fields": {
				"siClientes": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"sichpdtpgto": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sichpdtvenc": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"sichpid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sichpprotesto": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sichpstatus": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sichpvalapagar": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"sichpvaldesconto": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"sichpvalmulta": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"sichpvalpago": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliModulo": {
			"fields": {
				"siClientes": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"siSisModulo": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModulo"
				},
				"sicxmdatalimite": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sicxmetapa": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sicxmid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sicxmstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliTel": {
			"fields": {
				"geTbTiposTelefone": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"siclitelddd": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclitelid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"siclitelno": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclitelramal": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliValores": {
			"fields": {
				"siClientes": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"sicvafimvig": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sicvaid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sicvainivig": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sicvanoempgrp": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sicvanofundep": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sicvanousuarios": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sicvastatus": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sicvatipocli": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sicvatipocobranc": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sicvavalor": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiCliWeb": {
			"fields": {
				"geTbTiposWeb": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposWeb"
				},
				"siClientes": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"sicliwebid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sicliwebtxt": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiClientes": {
			"fields": {
				"geCaEmpresases": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeCaEmpresas"
				},
				"geSgGruposes": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeSgGrupos"
				},
				"geTbBancoses": {
					"exclude": [],
					"fieldOrder": 25,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbBancos"
				},
				"geTbIndexes": {
					"exclude": [],
					"fieldOrder": 22,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbIndex"
				},
				"geTbMeiosConhecimento": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbMeiosConhecimento"
				},
				"geTbMunicipioses": {
					"exclude": [],
					"fieldOrder": 19,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbMunicipios"
				},
				"geTbNatJurClasses": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbNatJurClasse"
				},
				"geTbQualificacaoSocs": {
					"exclude": [],
					"fieldOrder": 23,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbQualificacaoSoc"
				},
				"geTbTiposContas": {
					"exclude": [],
					"fieldOrder": 21,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposConta"
				},
				"geTbTiposContatos": {
					"exclude": [],
					"fieldOrder": 29,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposContato"
				},
				"geTbTiposContratos": {
					"exclude": [],
					"fieldOrder": 32,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposContrato"
				},
				"geTbTiposDocs": {
					"exclude": [],
					"fieldOrder": 33,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposDoc"
				},
				"geTbTiposEmpresases": {
					"exclude": [],
					"fieldOrder": 28,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposEmpresas"
				},
				"geTbTiposEnderecos": {
					"exclude": [],
					"fieldOrder": 30,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposEndereco"
				},
				"geTbTiposTelefones": {
					"exclude": [],
					"fieldOrder": 18,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"geTbTiposWebs": {
					"exclude": [],
					"fieldOrder": 34,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposWeb"
				},
				"geTbUfs": {
					"exclude": [],
					"fieldOrder": 35,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"siCliContases": {
					"exclude": [],
					"fieldOrder": 24,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContas"
				},
				"siCliContatoses": {
					"exclude": [],
					"fieldOrder": 37,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliContatos"
				},
				"siCliDocsPfs": {
					"exclude": [],
					"fieldOrder": 20,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliDocsPf"
				},
				"siCliDocsPjs": {
					"exclude": [],
					"fieldOrder": 26,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliDocsPj"
				},
				"siCliEnds": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliEnd"
				},
				"siCliHisPgtos": {
					"exclude": [],
					"fieldOrder": 31,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliHisPgto"
				},
				"siCliModulos": {
					"exclude": [],
					"fieldOrder": 27,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliModulo"
				},
				"siCliTels": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliTel"
				},
				"siCliValoreses": {
					"exclude": [],
					"fieldOrder": 38,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliValores"
				},
				"siCliWebs": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliWeb"
				},
				"siclicod": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclifimvig": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sicliid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sicliindicacao": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sicliinivig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"siclilingua": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclinomegr": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclinomepq": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siclipfpj": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siclistatus": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stEpCategFabrs": {
					"exclude": [],
					"fieldOrder": 36,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpCategFabr"
				},
				"stEpFabricanteses": {
					"exclude": [],
					"fieldOrder": 17,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricantes"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiProduto": {
			"fields": {
				"siSistemas": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSistema"
				},
				"siprocod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siprodescr": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"siprodfimvig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"siprodinivig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"siprodstatus": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"siproid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sipronome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModCampoHelp": {
			"fields": {
				"siSisModCompCampos": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModCompCampos"
				},
				"simcahdescricao": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"simcahid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"simcahlingua": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModCompCampos": {
			"fields": {
				"siSisModCampoHelps": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModCampoHelp"
				},
				"siSisModComponentes": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModComponentes"
				},
				"sismccdescricao": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismccid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sismccnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismccseqtela": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModCompoHelp": {
			"fields": {
				"siSisModComponentes": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModComponentes"
				},
				"simcohdescricao": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"simcohid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"simcohlingua": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModComponentes": {
			"fields": {
				"diHlHelpUsus": {
					"exclude": [],
					"fieldOrder": 26,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.DiHlHelpUsu"
				},
				"siSisModCompCamposes": {
					"exclude": [],
					"fieldOrder": 27,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModCompCampos"
				},
				"siSisModCompoHelps": {
					"exclude": [],
					"fieldOrder": 29,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModCompoHelp"
				},
				"siSisModulo": {
					"exclude": [],
					"fieldOrder": 25,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModulo"
				},
				"siSisVerComponenteses": {
					"exclude": [],
					"fieldOrder": 28,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisVerComponentes"
				},
				"sismcdatadvlfim": {
					"exclude": [],
					"fieldOrder": 23,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sismcdatadvlini": {
					"exclude": [],
					"fieldOrder": 22,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sismcdescricao": {
					"exclude": [],
					"fieldOrder": 24,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sismcmenu": {
					"exclude": [],
					"fieldOrder": 15,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sismcmenuseq": {
					"exclude": [],
					"fieldOrder": 16,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sismcnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcnomemenu": {
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismcopcdirdvl": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcdireitos": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcempresa": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcesubtask": {
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopchelp": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopchelpusu": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcobrig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopctrilha": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcultregi": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcvalida": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcopcvisib": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismcstatus": {
					"exclude": [],
					"fieldOrder": 18,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismctabelaprinc": {
					"exclude": [],
					"fieldOrder": 17,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismctempodvlfim": {
					"exclude": [],
					"fieldOrder": 21,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sismctempodvlini": {
					"exclude": [],
					"fieldOrder": 20,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sismctempodvlpre": {
					"exclude": [],
					"fieldOrder": 19,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sismctipo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModDescrDet": {
			"fields": {
				"siSisModulo": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModulo"
				},
				"simodddescrdet": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"simoddid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"simoddnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModTabCampos": {
			"fields": {
				"siSisModTabelas": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModTabelas"
				},
				"sismtcatributo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismtcdescricao": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismtcfk": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtcid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sismtcnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtcnulo": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtcpk": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtctipo": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtcuk": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModTabIndex": {
			"fields": {
				"siSisModTabelas": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModTabelas"
				},
				"sismtidescricao": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismtiid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sismtinome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModTabelas": {
			"fields": {
				"siSisModTabCamposes": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModTabCampos"
				},
				"siSisModTabIndexes": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModTabIndex"
				},
				"siSisModulo": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModulo"
				},
				"sismtclasse": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismtclienteUsa": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtdadosIni": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtdescricao": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismtdimens": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismtid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sismtnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtpublicname": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sismttemid": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sismtvolinicial": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisModulo": {
			"fields": {
				"siCliModulos": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiCliModulo"
				},
				"siSisModComponenteses": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModComponentes"
				},
				"siSisModDescrDets": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModDescrDet"
				},
				"siSisModTabelases": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModTabelas"
				},
				"siSistema": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSistema"
				},
				"simodcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"simodid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"simodnome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisVerComponentes": {
			"fields": {
				"siSisModComponentes": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSisModComponentes"
				},
				"simvecomdescricao": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"simvecomid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"simvecomtipo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSisVersao": {
			"fields": {
				"siSistema": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiSistema"
				},
				"simvecod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"simvedescricao": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"simvefimvig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"simveid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"simveinivig": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"simvestatus": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.SiSistema": {
			"fields": {
				"siProduto": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiProduto"
				},
				"siSisModulos": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisModulo"
				},
				"siSisVersaos": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.SiSisVersao"
				},
				"sisisdescricao": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sisisfimvig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sisisid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sisisinivig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"sisisnome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sisissigla": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sisisstatus": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.StEpCategFabr": {
			"fields": {
				"siClientes": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"stEpFabricanteses": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricantes"
				},
				"stepcfcod": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stepcffimvig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"stepcfid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"stepcfinivig": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"stepcfnome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stepcfstatus": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.StEpFabricContatos": {
			"fields": {
				"geTbTiposTelefoneByStfacontelatpid": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"geTbTiposTelefoneByStfacontelbtpid": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"stEpFabricantes": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.StEpFabricantes"
				},
				"stfaconcargo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfacondtnasc": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"stfaconemail": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfaconid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"stfaconnome": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stfaconteladdd": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfacontelano": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfacontelbddd": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfacontelbno": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.StEpFabricEnd": {
			"fields": {
				"geTbTiposEndereco": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposEndereco"
				},
				"geTbUf": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.GeTbUf"
				},
				"stEpFabricantes": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.StEpFabricantes"
				},
				"stfaendbairro": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfaendcep": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfaendcompl": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfaendid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"stfaendlogra": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfaendmunic": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfaendno": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.StEpFabricTel": {
			"fields": {
				"geTbTiposTelefone": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"stEpFabricantes": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.StEpFabricantes"
				},
				"stfatelddd": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stfatelid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"stfatelno": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stfatelramal": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.StEpFabricWeb": {
			"fields": {
				"geTbTiposTelefone": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.GeTbTiposTelefone"
				},
				"stEpFabricantes": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.StEpFabricantes"
				},
				"stfawebid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"stfawebtxt": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"com.testdb.data.StEpFabricantes": {
			"fields": {
				"siClientes": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.SiClientes"
				},
				"stEpCategFabr": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.testdb.data.StEpCategFabr"
				},
				"stEpFabricContatoses": {
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricContatos"
				},
				"stEpFabricEnds": {
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricEnd"
				},
				"stEpFabricTels": {
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricTel"
				},
				"stEpFabricWebs": {
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.testdb.data.StEpFabricWeb"
				},
				"stepfadoc": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stepfafimvig": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"stepfaid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"stepfainivig": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"stepfanome": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"stepfaobs": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"stepfastatus": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "testDB"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Connection": {
			"fields": {
				"autoCommit": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "boolean"
				},
				"catalog": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"clientInfo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Properties"
				},
				"holdability": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "int"
				},
				"metaData": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.sql.DatabaseMetaData"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "PostGREAuthorization"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['New_HR_Host'] = {"wm.ToggleButton":{"border":"1","borderColor":"#333333"},"wm.ToggleButtonPanel":{"border":"1","borderColor":"#333333"},"wm.Button":{"border":"1","borderColor":"#333333","height":"32px"},"wm.Layout":{"border":"0","borderColor":"#333333"},"wm.Bevel":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.Splitter":{"bevelSize":"4","border":"1","borderColor":"#333333"},"wm.AccordionDecorator":{"captionBorder":"1","captionBorderColor":"#333333"},"wm.AccordionLayers":{"border":"0","borderColor":"#333333","captionBorder":"2","layerBorder":"1","captionHeight":"30"},"wm.FancyPanel":{"margin":"2","border":"0","borderColor":"#999999","innerBorder":"2","labelHeight":"24"},"wm.TabLayers":{"layersType":"Tabs","margin":"0,2,0,2","clientBorder":"1","border":"0","clientBorderColor":"#999999","headerHeight":"29px","borderColor":"#999999","mobileHeaderHeight":"38px"},"wm.WizardLayers":{"margin":"0,2,0,2","border":"0","clientBorder":"1","clientBorderColor":"#333333"},"wm.Layer":{},"wm.Dialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","containerClass":"Document","titlebarHeight":"22"},"wm.GenericDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.RichTextDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"Document"},"wm.PageDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","noBevel":true,"containerClass":"MainContent"},"wm.DesignableDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.DojoMenu":{"padding":"0","border":"0","borderColor":"#333333"},"wm.List":{"margin":"0,2,0,2","border":"2","borderColor":"#333333"},"wm.dijit.ProgressBar":{"border":"0","borderColor":"#333333"},"wm.RichText":{"border":"0","borderColor":"#333333"},"wm.RoundedButton":{"border":"0","borderColor":"#333333"},"wm.DataGrid":{"border":"2","borderColor":"#333333"},"wm.Label":{},"wm.Picture":{},"wm.Spacer":{},"wm.Layers":{"border":"0"},"wm.PageContainer":{},"wm.Panel":{"borderColor":"#333333","border":"0"},"wm.CheckBoxEditor":{},"wm.CurrencyEditor":{},"wm.Text":{"border":"0"},"wm.SelectMenu":{"border":"0"},"wm.dijit.Calendar":{},"wm.DojoGrid":{"border":"1","borderColor":"#999999"},"wm.Control":{"borderColor":"#333333"},"wm.BusyButton":{"border":"1","borderColor":"#333333"},"wm.Checkbox":{"border":"0"},"wm.ColorPicker":{"border":"0"},"wm.Currency":{"border":"0"},"wm.Date":{"border":"0"},"wm.Number":{"border":"0"},"wm.RadioButton":{"border":"0"},"wm.Slider":{"border":"0"},"wm.LargeTextArea":{"border":"0"},"wm.Time":{"border":"0"},"wm.WidgetsJsDialog":{"containerClass":"Document","border":"1","borderColor":"#333333"},"wm.FileUploadDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.MainContentPanel":{"border":"1","borderColor":"#ffffff"},"wm.HeaderContentPanel":{"border":"1","borderColor":"#888888"},"wm.EmphasizedContentPanel":{"border":"1","borderColor":"#333333"},"wm.WidgetList":{},"wm.PopupMenuButton":{}};
dojo.declare("DLX_Workiing1", wm.Application, {
	"currencyLocale": "USD", 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": true, 
	"isSecurityEnabled": false, 
	"main": "JobSafety1", 
	"manageHistory": false, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "PhoneMain", 
	"projectSubVersion": "Alpha35", 
	"projectVersion": 1, 
	"promptChromeFrame": "http://google.com/chrome", 
	"studioVersion": "6.5.2.Release", 
	"tabletMain": "TabletMain", 
	"theme": "New_HR_Host", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}]
	},
	_end: 0
});

DLX_Workiing1.extend({



	_end: 0
});
DLX_Workiing1.prototype._css = '';
