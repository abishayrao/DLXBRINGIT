
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbTiposWeb
 *  01/23/2013 09:59:13
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
    private Set<com.postgresdb.data.GeCaEmpWeb> geCaEmpWebs = new HashSet<com.postgresdb.data.GeCaEmpWeb>();
    private Set<com.postgresdb.data.SiCliWeb> siCliWebs = new HashSet<com.postgresdb.data.SiCliWeb>();

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

    public Set<com.postgresdb.data.GeCaEmpWeb> getGeCaEmpWebs() {
        return geCaEmpWebs;
    }

    public void setGeCaEmpWebs(Set<com.postgresdb.data.GeCaEmpWeb> geCaEmpWebs) {
        this.geCaEmpWebs = geCaEmpWebs;
    }

    public Set<com.postgresdb.data.SiCliWeb> getSiCliWebs() {
        return siCliWebs;
    }

    public void setSiCliWebs(Set<com.postgresdb.data.SiCliWeb> siCliWebs) {
        this.siCliWebs = siCliWebs;
    }

}
