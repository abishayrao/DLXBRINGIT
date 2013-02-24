
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbTiposWeb
 *  01/08/2013 14:21:13
 * 
 */
public class GeTbTiposWeb {

    private Integer getipowebid;
    private SiClientes siClientes;
    private String getipowebcod;
    private String getipowebdescr;
    private String getipowebstatus;
    private Date getipowebinivig;
    private Date getipowebfimvig;
    private Set<com.saasdb.data.GeCaEmpWeb> geCaEmpWebs = new HashSet<com.saasdb.data.GeCaEmpWeb>();
    private Set<com.saasdb.data.SiCliWeb> siCliWebs = new HashSet<com.saasdb.data.SiCliWeb>();

    public Integer getGetipowebid() {
        return getipowebid;
    }

    public void setGetipowebid(Integer getipowebid) {
        this.getipowebid = getipowebid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipowebcod() {
        return getipowebcod;
    }

    public void setGetipowebcod(String getipowebcod) {
        this.getipowebcod = getipowebcod;
    }

    public String getGetipowebdescr() {
        return getipowebdescr;
    }

    public void setGetipowebdescr(String getipowebdescr) {
        this.getipowebdescr = getipowebdescr;
    }

    public String getGetipowebstatus() {
        return getipowebstatus;
    }

    public void setGetipowebstatus(String getipowebstatus) {
        this.getipowebstatus = getipowebstatus;
    }

    public Date getGetipowebinivig() {
        return getipowebinivig;
    }

    public void setGetipowebinivig(Date getipowebinivig) {
        this.getipowebinivig = getipowebinivig;
    }

    public Date getGetipowebfimvig() {
        return getipowebfimvig;
    }

    public void setGetipowebfimvig(Date getipowebfimvig) {
        this.getipowebfimvig = getipowebfimvig;
    }

    public Set<com.saasdb.data.GeCaEmpWeb> getGeCaEmpWebs() {
        return geCaEmpWebs;
    }

    public void setGeCaEmpWebs(Set<com.saasdb.data.GeCaEmpWeb> geCaEmpWebs) {
        this.geCaEmpWebs = geCaEmpWebs;
    }

    public Set<com.saasdb.data.SiCliWeb> getSiCliWebs() {
        return siCliWebs;
    }

    public void setSiCliWebs(Set<com.saasdb.data.SiCliWeb> siCliWebs) {
        this.siCliWebs = siCliWebs;
    }

}
