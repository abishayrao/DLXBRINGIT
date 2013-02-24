
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbNatJurClasse
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbNatJurClasse {

    private Integer genajucid;
    private SiClientes siClientes;
    private String genajuccod;
    private String genajucdescr;
    private String genajucstatus;
    private Date genajucinivig;
    private Date genajucfimvig;
    private Set<com.testdb.data.GeTbNatJuridica> geTbNatJuridicas = new HashSet<com.testdb.data.GeTbNatJuridica>();

    public Integer getGenajucid() {
        return genajucid;
    }

    public void setGenajucid(Integer genajucid) {
        this.genajucid = genajucid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGenajuccod() {
        return genajuccod;
    }

    public void setGenajuccod(String genajuccod) {
        this.genajuccod = genajuccod;
    }

    public String getGenajucdescr() {
        return genajucdescr;
    }

    public void setGenajucdescr(String genajucdescr) {
        this.genajucdescr = genajucdescr;
    }

    public String getGenajucstatus() {
        return genajucstatus;
    }

    public void setGenajucstatus(String genajucstatus) {
        this.genajucstatus = genajucstatus;
    }

    public Date getGenajucinivig() {
        return genajucinivig;
    }

    public void setGenajucinivig(Date genajucinivig) {
        this.genajucinivig = genajucinivig;
    }

    public Date getGenajucfimvig() {
        return genajucfimvig;
    }

    public void setGenajucfimvig(Date genajucfimvig) {
        this.genajucfimvig = genajucfimvig;
    }

    public Set<com.testdb.data.GeTbNatJuridica> getGeTbNatJuridicas() {
        return geTbNatJuridicas;
    }

    public void setGeTbNatJuridicas(Set<com.testdb.data.GeTbNatJuridica> geTbNatJuridicas) {
        this.geTbNatJuridicas = geTbNatJuridicas;
    }

}
