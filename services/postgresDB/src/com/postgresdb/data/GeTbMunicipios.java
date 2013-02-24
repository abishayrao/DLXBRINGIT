
package com.postgresdb.data;

import java.util.Date;


/**
 *  postgresDB.GeTbMunicipios
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbMunicipios {

    private Integer gemunicid;
    private SiClientes siClientes;
    private GeTbUf geTbUf;
    private String gemuniccod;
    private String gemunicnome;
    private String gemunicstatus;
    private Date gemunicinivig;
    private Date gemunicfimvig;

    public Integer getGemunicid() {
        return gemunicid;
    }

    public void setGemunicid(Integer gemunicid) {
        this.gemunicid = gemunicid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public GeTbUf getGeTbUf() {
        return geTbUf;
    }

    public void setGeTbUf(GeTbUf geTbUf) {
        this.geTbUf = geTbUf;
    }

    public String getGemuniccod() {
        return gemuniccod;
    }

    public void setGemuniccod(String gemuniccod) {
        this.gemuniccod = gemuniccod;
    }

    public String getGemunicnome() {
        return gemunicnome;
    }

    public void setGemunicnome(String gemunicnome) {
        this.gemunicnome = gemunicnome;
    }

    public String getGemunicstatus() {
        return gemunicstatus;
    }

    public void setGemunicstatus(String gemunicstatus) {
        this.gemunicstatus = gemunicstatus;
    }

    public Date getGemunicinivig() {
        return gemunicinivig;
    }

    public void setGemunicinivig(Date gemunicinivig) {
        this.gemunicinivig = gemunicinivig;
    }

    public Date getGemunicfimvig() {
        return gemunicfimvig;
    }

    public void setGemunicfimvig(Date gemunicfimvig) {
        this.gemunicfimvig = gemunicfimvig;
    }

}
