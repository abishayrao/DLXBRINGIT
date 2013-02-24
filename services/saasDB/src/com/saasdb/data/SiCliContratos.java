
package com.saasdb.data;

import java.util.Date;


/**
 *  saasDB.SiCliContratos
 *  01/08/2013 14:21:13
 * 
 */
public class SiCliContratos {

    private Integer siclicrid;
    private GeTbTiposContrato geTbTiposContrato;
    private SiClientes siClientes;
    private byte[] siclicrdoc;
    private String siclicrstatus;
    private Date siclicrinivig;
    private Date siclicrfimvig;

    public Integer getSiclicrid() {
        return siclicrid;
    }

    public void setSiclicrid(Integer siclicrid) {
        this.siclicrid = siclicrid;
    }

    public GeTbTiposContrato getGeTbTiposContrato() {
        return geTbTiposContrato;
    }

    public void setGeTbTiposContrato(GeTbTiposContrato geTbTiposContrato) {
        this.geTbTiposContrato = geTbTiposContrato;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public byte[] getSiclicrdoc() {
        return siclicrdoc;
    }

    public void setSiclicrdoc(byte[] siclicrdoc) {
        this.siclicrdoc = siclicrdoc;
    }

    public String getSiclicrstatus() {
        return siclicrstatus;
    }

    public void setSiclicrstatus(String siclicrstatus) {
        this.siclicrstatus = siclicrstatus;
    }

    public Date getSiclicrinivig() {
        return siclicrinivig;
    }

    public void setSiclicrinivig(Date siclicrinivig) {
        this.siclicrinivig = siclicrinivig;
    }

    public Date getSiclicrfimvig() {
        return siclicrfimvig;
    }

    public void setSiclicrfimvig(Date siclicrfimvig) {
        this.siclicrfimvig = siclicrfimvig;
    }

}
