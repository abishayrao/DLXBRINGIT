
package com.saasdb.data;

import java.util.Date;


/**
 *  saasDB.GeCaEmpContratos
 *  01/08/2013 14:21:13
 * 
 */
public class GeCaEmpContratos {

    private Integer geempcrid;
    private GeTbTiposContrato geTbTiposContrato;
    private GeCaEmpresas geCaEmpresas;
    private byte[] geempcrdoc;
    private String geempcrstatus;
    private Date geempcrinivig;
    private Date geempcrfimvig;

    public Integer getGeempcrid() {
        return geempcrid;
    }

    public void setGeempcrid(Integer geempcrid) {
        this.geempcrid = geempcrid;
    }

    public GeTbTiposContrato getGeTbTiposContrato() {
        return geTbTiposContrato;
    }

    public void setGeTbTiposContrato(GeTbTiposContrato geTbTiposContrato) {
        this.geTbTiposContrato = geTbTiposContrato;
    }

    public GeCaEmpresas getGeCaEmpresas() {
        return geCaEmpresas;
    }

    public void setGeCaEmpresas(GeCaEmpresas geCaEmpresas) {
        this.geCaEmpresas = geCaEmpresas;
    }

    public byte[] getGeempcrdoc() {
        return geempcrdoc;
    }

    public void setGeempcrdoc(byte[] geempcrdoc) {
        this.geempcrdoc = geempcrdoc;
    }

    public String getGeempcrstatus() {
        return geempcrstatus;
    }

    public void setGeempcrstatus(String geempcrstatus) {
        this.geempcrstatus = geempcrstatus;
    }

    public Date getGeempcrinivig() {
        return geempcrinivig;
    }

    public void setGeempcrinivig(Date geempcrinivig) {
        this.geempcrinivig = geempcrinivig;
    }

    public Date getGeempcrfimvig() {
        return geempcrfimvig;
    }

    public void setGeempcrfimvig(Date geempcrfimvig) {
        this.geempcrfimvig = geempcrfimvig;
    }

}
