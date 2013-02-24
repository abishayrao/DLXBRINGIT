
package com.postgresdb.data;

import java.util.Date;


/**
 *  postgresDB.SiCliContatosHist
 *  01/23/2013 09:59:14
 * 
 */
public class SiCliContatosHist {

    private Integer siclihcid;
    private SiCliContatos siCliContatos;
    private GeTbTiposContato geTbTiposContato;
    private Date siclihcdata;
    private Integer siclihchora;
    private String siclihcatendente;
    private String siclihchistorico;

    public Integer getSiclihcid() {
        return siclihcid;
    }

    public void setSiclihcid(Integer siclihcid) {
        this.siclihcid = siclihcid;
    }

    public SiCliContatos getSiCliContatos() {
        return siCliContatos;
    }

    public void setSiCliContatos(SiCliContatos siCliContatos) {
        this.siCliContatos = siCliContatos;
    }

    public GeTbTiposContato getGeTbTiposContato() {
        return geTbTiposContato;
    }

    public void setGeTbTiposContato(GeTbTiposContato geTbTiposContato) {
        this.geTbTiposContato = geTbTiposContato;
    }

    public Date getSiclihcdata() {
        return siclihcdata;
    }

    public void setSiclihcdata(Date siclihcdata) {
        this.siclihcdata = siclihcdata;
    }

    public Integer getSiclihchora() {
        return siclihchora;
    }

    public void setSiclihchora(Integer siclihchora) {
        this.siclihchora = siclihchora;
    }

    public String getSiclihcatendente() {
        return siclihcatendente;
    }

    public void setSiclihcatendente(String siclihcatendente) {
        this.siclihcatendente = siclihcatendente;
    }

    public String getSiclihchistorico() {
        return siclihchistorico;
    }

    public void setSiclihchistorico(String siclihchistorico) {
        this.siclihchistorico = siclihchistorico;
    }

}
