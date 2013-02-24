
package com.postgresdb.data;

import java.util.Date;


/**
 *  postgresDB.GeCaEmpCnaeSec
 *  01/23/2013 09:59:14
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
