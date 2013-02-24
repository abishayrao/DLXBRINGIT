
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbTiposContato
 *  01/08/2013 14:21:12
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
    private Set<com.saasdb.data.GeCaEmpContatosHist> geCaEmpContatosHists = new HashSet<com.saasdb.data.GeCaEmpContatosHist>();
    private Set<com.saasdb.data.SiCliContatosHist> siCliContatosHists = new HashSet<com.saasdb.data.SiCliContatosHist>();

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

    public Set<com.saasdb.data.GeCaEmpContatosHist> getGeCaEmpContatosHists() {
        return geCaEmpContatosHists;
    }

    public void setGeCaEmpContatosHists(Set<com.saasdb.data.GeCaEmpContatosHist> geCaEmpContatosHists) {
        this.geCaEmpContatosHists = geCaEmpContatosHists;
    }

    public Set<com.saasdb.data.SiCliContatosHist> getSiCliContatosHists() {
        return siCliContatosHists;
    }

    public void setSiCliContatosHists(Set<com.saasdb.data.SiCliContatosHist> siCliContatosHists) {
        this.siCliContatosHists = siCliContatosHists;
    }

}
