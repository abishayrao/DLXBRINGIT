
package com.postgresdb.data;

import java.util.Date;


/**
 *  postgresDB.GeTbTiposDoc
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbTiposDoc {

    private Integer getipodocid;
    private SiClientes siClientes;
    private String getipodoccod;
    private String getipodocdescr;
    private String getipodocstatus;
    private Date getipodocinivig;
    private Date getipodocfimvig;

    public Integer getGetipodocid() {
        return getipodocid;
    }

    public void setGetipodocid(Integer getipodocid) {
        this.getipodocid = getipodocid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipodoccod() {
        return getipodoccod;
    }

    public void setGetipodoccod(String getipodoccod) {
        this.getipodoccod = getipodoccod;
    }

    public String getGetipodocdescr() {
        return getipodocdescr;
    }

    public void setGetipodocdescr(String getipodocdescr) {
        this.getipodocdescr = getipodocdescr;
    }

    public String getGetipodocstatus() {
        return getipodocstatus;
    }

    public void setGetipodocstatus(String getipodocstatus) {
        this.getipodocstatus = getipodocstatus;
    }

    public Date getGetipodocinivig() {
        return getipodocinivig;
    }

    public void setGetipodocinivig(Date getipodocinivig) {
        this.getipodocinivig = getipodocinivig;
    }

    public Date getGetipodocfimvig() {
        return getipodocfimvig;
    }

    public void setGetipodocfimvig(Date getipodocfimvig) {
        this.getipodocfimvig = getipodocfimvig;
    }

}
