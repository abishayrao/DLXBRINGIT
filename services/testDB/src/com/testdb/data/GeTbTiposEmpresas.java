
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbTiposEmpresas
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbTiposEmpresas {

    private Integer getipoempid;
    private SiClientes siClientes;
    private String getipoempcod;
    private String getipoempdescr;
    private String getipoempstatus;
    private Date getipoempinivig;
    private Date getipoempfimvig;
    private Set<com.testdb.data.GeCaEmpresas> geCaEmpresases = new HashSet<com.testdb.data.GeCaEmpresas>();

    public Integer getGetipoempid() {
        return getipoempid;
    }

    public void setGetipoempid(Integer getipoempid) {
        this.getipoempid = getipoempid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipoempcod() {
        return getipoempcod;
    }

    public void setGetipoempcod(String getipoempcod) {
        this.getipoempcod = getipoempcod;
    }

    public String getGetipoempdescr() {
        return getipoempdescr;
    }

    public void setGetipoempdescr(String getipoempdescr) {
        this.getipoempdescr = getipoempdescr;
    }

    public String getGetipoempstatus() {
        return getipoempstatus;
    }

    public void setGetipoempstatus(String getipoempstatus) {
        this.getipoempstatus = getipoempstatus;
    }

    public Date getGetipoempinivig() {
        return getipoempinivig;
    }

    public void setGetipoempinivig(Date getipoempinivig) {
        this.getipoempinivig = getipoempinivig;
    }

    public Date getGetipoempfimvig() {
        return getipoempfimvig;
    }

    public void setGetipoempfimvig(Date getipoempfimvig) {
        this.getipoempfimvig = getipoempfimvig;
    }

    public Set<com.testdb.data.GeCaEmpresas> getGeCaEmpresases() {
        return geCaEmpresases;
    }

    public void setGeCaEmpresases(Set<com.testdb.data.GeCaEmpresas> geCaEmpresases) {
        this.geCaEmpresases = geCaEmpresases;
    }

}
