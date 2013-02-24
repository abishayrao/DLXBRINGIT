
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbTiposEndereco
 *  01/08/2013 14:21:12
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
    private Set<com.saasdb.data.SiCliEnd> siCliEnds = new HashSet<com.saasdb.data.SiCliEnd>();
    private Set<com.saasdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.saasdb.data.GeCaEmpEnd>();

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

    public Set<com.saasdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.saasdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.saasdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.saasdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

}
