
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbTiposEndereco
 *  01/23/2013 09:59:13
 * 
 */
public class GeTbTiposEndereco {

    private Integer getipoendid;
    private SiClientes siClientes;
    private String getipoendcod;
    private String getipoenddescr;
    private String getipoendstatus;
    private Date getipoendinivig;
    private Date getipoendfimvig;
    private Set<com.postgresdb.data.SiCliEnd> siCliEnds = new HashSet<com.postgresdb.data.SiCliEnd>();
    private Set<com.postgresdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.postgresdb.data.GeCaEmpEnd>();

    public Integer getGetipoendid() {
        return getipoendid;
    }

    public void setGetipoendid(Integer getipoendid) {
        this.getipoendid = getipoendid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipoendcod() {
        return getipoendcod;
    }

    public void setGetipoendcod(String getipoendcod) {
        this.getipoendcod = getipoendcod;
    }

    public String getGetipoenddescr() {
        return getipoenddescr;
    }

    public void setGetipoenddescr(String getipoenddescr) {
        this.getipoenddescr = getipoenddescr;
    }

    public String getGetipoendstatus() {
        return getipoendstatus;
    }

    public void setGetipoendstatus(String getipoendstatus) {
        this.getipoendstatus = getipoendstatus;
    }

    public Date getGetipoendinivig() {
        return getipoendinivig;
    }

    public void setGetipoendinivig(Date getipoendinivig) {
        this.getipoendinivig = getipoendinivig;
    }

    public Date getGetipoendfimvig() {
        return getipoendfimvig;
    }

    public void setGetipoendfimvig(Date getipoendfimvig) {
        this.getipoendfimvig = getipoendfimvig;
    }

    public Set<com.postgresdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.postgresdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.postgresdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.postgresdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

}
