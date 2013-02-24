
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbBancos
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbBancos {

    private Integer gebancoid;
    private SiClientes siClientes;
    private String gebancocod;
    private String gebanconome;
    private String gebancostatus;
    private Date gebancoinivig;
    private Date gebancofimvig;
    private Set<com.postgresdb.data.GeTbBcAgencias> geTbBcAgenciases = new HashSet<com.postgresdb.data.GeTbBcAgencias>();
    private Set<com.postgresdb.data.SiCliContas> siCliContases = new HashSet<com.postgresdb.data.SiCliContas>();
    private Set<com.postgresdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.postgresdb.data.GeCaEmpContas>();

    public Integer getGebancoid() {
        return gebancoid;
    }

    public void setGebancoid(Integer gebancoid) {
        this.gebancoid = gebancoid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGebancocod() {
        return gebancocod;
    }

    public void setGebancocod(String gebancocod) {
        this.gebancocod = gebancocod;
    }

    public String getGebanconome() {
        return gebanconome;
    }

    public void setGebanconome(String gebanconome) {
        this.gebanconome = gebanconome;
    }

    public String getGebancostatus() {
        return gebancostatus;
    }

    public void setGebancostatus(String gebancostatus) {
        this.gebancostatus = gebancostatus;
    }

    public Date getGebancoinivig() {
        return gebancoinivig;
    }

    public void setGebancoinivig(Date gebancoinivig) {
        this.gebancoinivig = gebancoinivig;
    }

    public Date getGebancofimvig() {
        return gebancofimvig;
    }

    public void setGebancofimvig(Date gebancofimvig) {
        this.gebancofimvig = gebancofimvig;
    }

    public Set<com.postgresdb.data.GeTbBcAgencias> getGeTbBcAgenciases() {
        return geTbBcAgenciases;
    }

    public void setGeTbBcAgenciases(Set<com.postgresdb.data.GeTbBcAgencias> geTbBcAgenciases) {
        this.geTbBcAgenciases = geTbBcAgenciases;
    }

    public Set<com.postgresdb.data.SiCliContas> getSiCliContases() {
        return siCliContases;
    }

    public void setSiCliContases(Set<com.postgresdb.data.SiCliContas> siCliContases) {
        this.siCliContases = siCliContases;
    }

    public Set<com.postgresdb.data.GeCaEmpContas> getGeCaEmpContases() {
        return geCaEmpContases;
    }

    public void setGeCaEmpContases(Set<com.postgresdb.data.GeCaEmpContas> geCaEmpContases) {
        this.geCaEmpContases = geCaEmpContases;
    }

}
