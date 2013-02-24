
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbQualificacaoSoc
 *  02/23/2013 10:50:05
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
    private Set<com.testdb.data.GeCaEmpSocios> geCaEmpSocioses = new HashSet<com.testdb.data.GeCaEmpSocios>();

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

    public Set<com.testdb.data.GeCaEmpSocios> getGeCaEmpSocioses() {
        return geCaEmpSocioses;
    }

    public void setGeCaEmpSocioses(Set<com.testdb.data.GeCaEmpSocios> geCaEmpSocioses) {
        this.geCaEmpSocioses = geCaEmpSocioses;
    }

}
