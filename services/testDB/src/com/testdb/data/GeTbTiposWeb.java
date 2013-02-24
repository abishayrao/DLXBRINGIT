
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbTiposWeb
 *  02/23/2013 10:50:04
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
    private Set<com.testdb.data.GeCaEmpWeb> geCaEmpWebs = new HashSet<com.testdb.data.GeCaEmpWeb>();
    private Set<com.testdb.data.SiCliWeb> siCliWebs = new HashSet<com.testdb.data.SiCliWeb>();

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

    public Set<com.testdb.data.GeCaEmpWeb> getGeCaEmpWebs() {
        return geCaEmpWebs;
    }

    public void setGeCaEmpWebs(Set<com.testdb.data.GeCaEmpWeb> geCaEmpWebs) {
        this.geCaEmpWebs = geCaEmpWebs;
    }

    public Set<com.testdb.data.SiCliWeb> getSiCliWebs() {
        return siCliWebs;
    }

    public void setSiCliWebs(Set<com.testdb.data.SiCliWeb> siCliWebs) {
        this.siCliWebs = siCliWebs;
    }

}
