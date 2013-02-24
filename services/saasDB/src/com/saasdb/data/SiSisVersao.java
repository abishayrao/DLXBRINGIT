
package com.saasdb.data;

import java.util.Date;


/**
 *  saasDB.SiSisVersao
 *  01/08/2013 14:21:12
 * 
 */
public class SiSisVersao {

    private Integer simveid;
    private SiSistema siSistema;
    private String simvecod;
    private String simvestatus;
    private Date simveinivig;
    private Date simvefimvig;
    private String simvedescricao;

    public Integer getSimveid() {
        return simveid;
    }

    public void setSimveid(Integer simveid) {
        this.simveid = simveid;
    }

    public SiSistema getSiSistema() {
        return siSistema;
    }

    public void setSiSistema(SiSistema siSistema) {
        this.siSistema = siSistema;
    }

    public String getSimvecod() {
        return simvecod;
    }

    public void setSimvecod(String simvecod) {
        this.simvecod = simvecod;
    }

    public String getSimvestatus() {
        return simvestatus;
    }

    public void setSimvestatus(String simvestatus) {
        this.simvestatus = simvestatus;
    }

    public Date getSimveinivig() {
        return simveinivig;
    }

    public void setSimveinivig(Date simveinivig) {
        this.simveinivig = simveinivig;
    }

    public Date getSimvefimvig() {
        return simvefimvig;
    }

    public void setSimvefimvig(Date simvefimvig) {
        this.simvefimvig = simvefimvig;
    }

    public String getSimvedescricao() {
        return simvedescricao;
    }

    public void setSimvedescricao(String simvedescricao) {
        this.simvedescricao = simvedescricao;
    }

}
