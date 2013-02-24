
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbTiposContrato
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbTiposContrato {

    private Integer getipoctrid;
    private SiClientes siClientes;
    private String getipoctrcod;
    private String getipoctrdescr;
    private String getipoctrstatus;
    private Date getipoctrinivig;
    private Date getipoctrfimvig;
    private Set<com.postgresdb.data.GeCaEmpContratos> geCaEmpContratoses = new HashSet<com.postgresdb.data.GeCaEmpContratos>();
    private Set<com.postgresdb.data.SiCliContratos> siCliContratoses = new HashSet<com.postgresdb.data.SiCliContratos>();

    public Integer getGetipoctrid() {
        return getipoctrid;
    }

    public void setGetipoctrid(Integer getipoctrid) {
        this.getipoctrid = getipoctrid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipoctrcod() {
        return getipoctrcod;
    }

    public void setGetipoctrcod(String getipoctrcod) {
        this.getipoctrcod = getipoctrcod;
    }

    public String getGetipoctrdescr() {
        return getipoctrdescr;
    }

    public void setGetipoctrdescr(String getipoctrdescr) {
        this.getipoctrdescr = getipoctrdescr;
    }

    public String getGetipoctrstatus() {
        return getipoctrstatus;
    }

    public void setGetipoctrstatus(String getipoctrstatus) {
        this.getipoctrstatus = getipoctrstatus;
    }

    public Date getGetipoctrinivig() {
        return getipoctrinivig;
    }

    public void setGetipoctrinivig(Date getipoctrinivig) {
        this.getipoctrinivig = getipoctrinivig;
    }

    public Date getGetipoctrfimvig() {
        return getipoctrfimvig;
    }

    public void setGetipoctrfimvig(Date getipoctrfimvig) {
        this.getipoctrfimvig = getipoctrfimvig;
    }

    public Set<com.postgresdb.data.GeCaEmpContratos> getGeCaEmpContratoses() {
        return geCaEmpContratoses;
    }

    public void setGeCaEmpContratoses(Set<com.postgresdb.data.GeCaEmpContratos> geCaEmpContratoses) {
        this.geCaEmpContratoses = geCaEmpContratoses;
    }

    public Set<com.postgresdb.data.SiCliContratos> getSiCliContratoses() {
        return siCliContratoses;
    }

    public void setSiCliContratoses(Set<com.postgresdb.data.SiCliContratos> siCliContratoses) {
        this.siCliContratoses = siCliContratoses;
    }

}
