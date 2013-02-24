
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.GeCaEmpCnaeSec
 *  02/23/2013 10:50:04
 * 
 */
public class GeCaEmpCnaeSec {

    private Integer geempcnsid;
    private GeTbCnaeSubclasse geTbCnaeSubclasse;
    private GeCaEmpresas geCaEmpresas;
    private String geempcnsstatus;
    private Date geempcnsvigdesde;
    private Date geempcnsvigate;

    public Integer getGeempcnsid() {
        return geempcnsid;
    }

    public void setGeempcnsid(Integer geempcnsid) {
        this.geempcnsid = geempcnsid;
    }

    public GeTbCnaeSubclasse getGeTbCnaeSubclasse() {
        return geTbCnaeSubclasse;
    }

    public void setGeTbCnaeSubclasse(GeTbCnaeSubclasse geTbCnaeSubclasse) {
        this.geTbCnaeSubclasse = geTbCnaeSubclasse;
    }

    public GeCaEmpresas getGeCaEmpresas() {
        return geCaEmpresas;
    }

    public void setGeCaEmpresas(GeCaEmpresas geCaEmpresas) {
        this.geCaEmpresas = geCaEmpresas;
    }

    public String getGeempcnsstatus() {
        return geempcnsstatus;
    }

    public void setGeempcnsstatus(String geempcnsstatus) {
        this.geempcnsstatus = geempcnsstatus;
    }

    public Date getGeempcnsvigdesde() {
        return geempcnsvigdesde;
    }

    public void setGeempcnsvigdesde(Date geempcnsvigdesde) {
        this.geempcnsvigdesde = geempcnsvigdesde;
    }

    public Date getGeempcnsvigate() {
        return geempcnsvigate;
    }

    public void setGeempcnsvigate(Date geempcnsvigate) {
        this.geempcnsvigate = geempcnsvigate;
    }

}
