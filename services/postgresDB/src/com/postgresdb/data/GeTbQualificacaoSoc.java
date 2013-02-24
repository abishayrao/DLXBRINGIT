
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbQualificacaoSoc
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbQualificacaoSoc {

    private Integer gequalsocid;
    private SiClientes siClientes;
    private String gequalsoccod;
    private String gequalsocdescr;
    private String gequalsocstatus;
    private Date gequalsocinivig;
    private Date gequalsocfimvig;
    private Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSocioses = new HashSet<com.postgresdb.data.GeCaEmpSocios>();

    public Integer getGequalsocid() {
        return gequalsocid;
    }

    public void setGequalsocid(Integer gequalsocid) {
        this.gequalsocid = gequalsocid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGequalsoccod() {
        return gequalsoccod;
    }

    public void setGequalsoccod(String gequalsoccod) {
        this.gequalsoccod = gequalsoccod;
    }

    public String getGequalsocdescr() {
        return gequalsocdescr;
    }

    public void setGequalsocdescr(String gequalsocdescr) {
        this.gequalsocdescr = gequalsocdescr;
    }

    public String getGequalsocstatus() {
        return gequalsocstatus;
    }

    public void setGequalsocstatus(String gequalsocstatus) {
        this.gequalsocstatus = gequalsocstatus;
    }

    public Date getGequalsocinivig() {
        return gequalsocinivig;
    }

    public void setGequalsocinivig(Date gequalsocinivig) {
        this.gequalsocinivig = gequalsocinivig;
    }

    public Date getGequalsocfimvig() {
        return gequalsocfimvig;
    }

    public void setGequalsocfimvig(Date gequalsocfimvig) {
        this.gequalsocfimvig = gequalsocfimvig;
    }

    public Set<com.postgresdb.data.GeCaEmpSocios> getGeCaEmpSocioses() {
        return geCaEmpSocioses;
    }

    public void setGeCaEmpSocioses(Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSocioses) {
        this.geCaEmpSocioses = geCaEmpSocioses;
    }

}
