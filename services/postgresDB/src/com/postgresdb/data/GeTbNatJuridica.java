
package com.postgresdb.data;

import java.util.Date;


/**
 *  postgresDB.GeTbNatJuridica
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbNatJuridica {

    private Integer genatjuid;
    private GeTbNatJurClasse geTbNatJurClasse;
    private String genatjucod;
    private String genatjudescr;
    private String genajucstatus;
    private Date genajucinivig;
    private Date genajucfimvig;

    public Integer getGenatjuid() {
        return genatjuid;
    }

    public void setGenatjuid(Integer genatjuid) {
        this.genatjuid = genatjuid;
    }

    public GeTbNatJurClasse getGeTbNatJurClasse() {
        return geTbNatJurClasse;
    }

    public void setGeTbNatJurClasse(GeTbNatJurClasse geTbNatJurClasse) {
        this.geTbNatJurClasse = geTbNatJurClasse;
    }

    public String getGenatjucod() {
        return genatjucod;
    }

    public void setGenatjucod(String genatjucod) {
        this.genatjucod = genatjucod;
    }

    public String getGenatjudescr() {
        return genatjudescr;
    }

    public void setGenatjudescr(String genatjudescr) {
        this.genatjudescr = genatjudescr;
    }

    public String getGenajucstatus() {
        return genajucstatus;
    }

    public void setGenajucstatus(String genajucstatus) {
        this.genajucstatus = genajucstatus;
    }

    public Date getGenajucinivig() {
        return genajucinivig;
    }

    public void setGenajucinivig(Date genajucinivig) {
        this.genajucinivig = genajucinivig;
    }

    public Date getGenajucfimvig() {
        return genajucfimvig;
    }

    public void setGenajucfimvig(Date genajucfimvig) {
        this.genajucfimvig = genajucfimvig;
    }

}
