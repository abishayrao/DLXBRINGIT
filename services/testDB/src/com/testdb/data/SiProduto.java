
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiProduto
 *  02/23/2013 10:50:04
 * 
 */
public class SiProduto {

    private Integer siproid;
    private String siprocod;
    private String sipronome;
    private String siprodescr;
    private String siprodstatus;
    private Date siprodinivig;
    private Date siprodfimvig;
    private Set<com.testdb.data.SiSistema> siSistemas = new HashSet<com.testdb.data.SiSistema>();

    public Integer getSiproid() {
        return siproid;
    }

    public void setSiproid(Integer siproid) {
        this.siproid = siproid;
    }

    public String getSiprocod() {
        return siprocod;
    }

    public void setSiprocod(String siprocod) {
        this.siprocod = siprocod;
    }

    public String getSipronome() {
        return sipronome;
    }

    public void setSipronome(String sipronome) {
        this.sipronome = sipronome;
    }

    public String getSiprodescr() {
        return siprodescr;
    }

    public void setSiprodescr(String siprodescr) {
        this.siprodescr = siprodescr;
    }

    public String getSiprodstatus() {
        return siprodstatus;
    }

    public void setSiprodstatus(String siprodstatus) {
        this.siprodstatus = siprodstatus;
    }

    public Date getSiprodinivig() {
        return siprodinivig;
    }

    public void setSiprodinivig(Date siprodinivig) {
        this.siprodinivig = siprodinivig;
    }

    public Date getSiprodfimvig() {
        return siprodfimvig;
    }

    public void setSiprodfimvig(Date siprodfimvig) {
        this.siprodfimvig = siprodfimvig;
    }

    public Set<com.testdb.data.SiSistema> getSiSistemas() {
        return siSistemas;
    }

    public void setSiSistemas(Set<com.testdb.data.SiSistema> siSistemas) {
        this.siSistemas = siSistemas;
    }

}
