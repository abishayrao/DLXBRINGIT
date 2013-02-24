
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.GeCaEmpContatosHist
 *  02/23/2013 10:50:06
 * 
 */
public class GeCaEmpContatosHist {

    private Integer geemphcid;
    private GeTbTiposContato geTbTiposContato;
    private GeCaEmpContatos geCaEmpContatos;
    private Date geemphcdata;
    private Date geemphchora;
    private String geemphcatendente;
    private String geemphchistorico;
    private String geemphcstatus;

    public Integer getGeemphcid() {
        return geemphcid;
    }

    public void setGeemphcid(Integer geemphcid) {
        this.geemphcid = geemphcid;
    }

    public GeTbTiposContato getGeTbTiposContato() {
        return geTbTiposContato;
    }

    public void setGeTbTiposContato(GeTbTiposContato geTbTiposContato) {
        this.geTbTiposContato = geTbTiposContato;
    }

    public GeCaEmpContatos getGeCaEmpContatos() {
        return geCaEmpContatos;
    }

    public void setGeCaEmpContatos(GeCaEmpContatos geCaEmpContatos) {
        this.geCaEmpContatos = geCaEmpContatos;
    }

    public Date getGeemphcdata() {
        return geemphcdata;
    }

    public void setGeemphcdata(Date geemphcdata) {
        this.geemphcdata = geemphcdata;
    }

    public Date getGeemphchora() {
        return geemphchora;
    }

    public void setGeemphchora(Date geemphchora) {
        this.geemphchora = geemphchora;
    }

    public String getGeemphcatendente() {
        return geemphcatendente;
    }

    public void setGeemphcatendente(String geemphcatendente) {
        this.geemphcatendente = geemphcatendente;
    }

    public String getGeemphchistorico() {
        return geemphchistorico;
    }

    public void setGeemphchistorico(String geemphchistorico) {
        this.geemphchistorico = geemphchistorico;
    }

    public String getGeemphcstatus() {
        return geemphcstatus;
    }

    public void setGeemphcstatus(String geemphcstatus) {
        this.geemphcstatus = geemphcstatus;
    }

}
