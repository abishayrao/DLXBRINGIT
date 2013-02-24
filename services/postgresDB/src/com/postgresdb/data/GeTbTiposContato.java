
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbTiposContato
 *  01/23/2013 09:59:13
 * 
 */
public class GeTbTiposContato {

    private Integer getipoctoid;
    private SiClientes siClientes;
    private String getipoctocod;
    private String getipoctodescr;
    private String getipoctostatus;
    private Date getipoctoinivig;
    private Date getipoctofimvig;
    private Set<com.postgresdb.data.GeCaEmpContatosHist> geCaEmpContatosHists = new HashSet<com.postgresdb.data.GeCaEmpContatosHist>();
    private Set<com.postgresdb.data.SiCliContatosHist> siCliContatosHists = new HashSet<com.postgresdb.data.SiCliContatosHist>();

    public Integer getGetipoctoid() {
        return getipoctoid;
    }

    public void setGetipoctoid(Integer getipoctoid) {
        this.getipoctoid = getipoctoid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipoctocod() {
        return getipoctocod;
    }

    public void setGetipoctocod(String getipoctocod) {
        this.getipoctocod = getipoctocod;
    }

    public String getGetipoctodescr() {
        return getipoctodescr;
    }

    public void setGetipoctodescr(String getipoctodescr) {
        this.getipoctodescr = getipoctodescr;
    }

    public String getGetipoctostatus() {
        return getipoctostatus;
    }

    public void setGetipoctostatus(String getipoctostatus) {
        this.getipoctostatus = getipoctostatus;
    }

    public Date getGetipoctoinivig() {
        return getipoctoinivig;
    }

    public void setGetipoctoinivig(Date getipoctoinivig) {
        this.getipoctoinivig = getipoctoinivig;
    }

    public Date getGetipoctofimvig() {
        return getipoctofimvig;
    }

    public void setGetipoctofimvig(Date getipoctofimvig) {
        this.getipoctofimvig = getipoctofimvig;
    }

    public Set<com.postgresdb.data.GeCaEmpContatosHist> getGeCaEmpContatosHists() {
        return geCaEmpContatosHists;
    }

    public void setGeCaEmpContatosHists(Set<com.postgresdb.data.GeCaEmpContatosHist> geCaEmpContatosHists) {
        this.geCaEmpContatosHists = geCaEmpContatosHists;
    }

    public Set<com.postgresdb.data.SiCliContatosHist> getSiCliContatosHists() {
        return siCliContatosHists;
    }

    public void setSiCliContatosHists(Set<com.postgresdb.data.SiCliContatosHist> siCliContatosHists) {
        this.siCliContatosHists = siCliContatosHists;
    }

}
