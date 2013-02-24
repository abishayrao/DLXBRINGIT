
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeSgUsuarios
 *  01/08/2013 14:21:13
 * 
 */
public class GeSgUsuarios {

    private Integer gesgusuid;
    private GeSgGrupos geSgGrupos;
    private String gesgusulogin;
    private String gesgususenha;
    private String gesgusuexpira;
    private Date gesgusudtsenha;
    private Integer gesgusufunid;
    private String gesgusunome;
    private String gesgusuadmin;
    private String gesgusustatus;
    private Date gesgusuinivig;
    private Date gesgusufimvig;
    private Set<com.saasdb.data.GeSgAuditoria> geSgAuditorias = new HashSet<com.saasdb.data.GeSgAuditoria>();
    private Set<com.saasdb.data.DiHlHelpUsu> diHlHelpUsus = new HashSet<com.saasdb.data.DiHlHelpUsu>();
    private Set<com.saasdb.data.GeSgHistSenhas> geSgHistSenhases = new HashSet<com.saasdb.data.GeSgHistSenhas>();

    public Integer getGesgusuid() {
        return gesgusuid;
    }

    public void setGesgusuid(Integer gesgusuid) {
        this.gesgusuid = gesgusuid;
    }

    public GeSgGrupos getGeSgGrupos() {
        return geSgGrupos;
    }

    public void setGeSgGrupos(GeSgGrupos geSgGrupos) {
        this.geSgGrupos = geSgGrupos;
    }

    public String getGesgusulogin() {
        return gesgusulogin;
    }

    public void setGesgusulogin(String gesgusulogin) {
        this.gesgusulogin = gesgusulogin;
    }

    public String getGesgususenha() {
        return gesgususenha;
    }

    public void setGesgususenha(String gesgususenha) {
        this.gesgususenha = gesgususenha;
    }

    public String getGesgusuexpira() {
        return gesgusuexpira;
    }

    public void setGesgusuexpira(String gesgusuexpira) {
        this.gesgusuexpira = gesgusuexpira;
    }

    public Date getGesgusudtsenha() {
        return gesgusudtsenha;
    }

    public void setGesgusudtsenha(Date gesgusudtsenha) {
        this.gesgusudtsenha = gesgusudtsenha;
    }

    public Integer getGesgusufunid() {
        return gesgusufunid;
    }

    public void setGesgusufunid(Integer gesgusufunid) {
        this.gesgusufunid = gesgusufunid;
    }

    public String getGesgusunome() {
        return gesgusunome;
    }

    public void setGesgusunome(String gesgusunome) {
        this.gesgusunome = gesgusunome;
    }

    public String getGesgusuadmin() {
        return gesgusuadmin;
    }

    public void setGesgusuadmin(String gesgusuadmin) {
        this.gesgusuadmin = gesgusuadmin;
    }

    public String getGesgusustatus() {
        return gesgusustatus;
    }

    public void setGesgusustatus(String gesgusustatus) {
        this.gesgusustatus = gesgusustatus;
    }

    public Date getGesgusuinivig() {
        return gesgusuinivig;
    }

    public void setGesgusuinivig(Date gesgusuinivig) {
        this.gesgusuinivig = gesgusuinivig;
    }

    public Date getGesgusufimvig() {
        return gesgusufimvig;
    }

    public void setGesgusufimvig(Date gesgusufimvig) {
        this.gesgusufimvig = gesgusufimvig;
    }

    public Set<com.saasdb.data.GeSgAuditoria> getGeSgAuditorias() {
        return geSgAuditorias;
    }

    public void setGeSgAuditorias(Set<com.saasdb.data.GeSgAuditoria> geSgAuditorias) {
        this.geSgAuditorias = geSgAuditorias;
    }

    public Set<com.saasdb.data.DiHlHelpUsu> getDiHlHelpUsus() {
        return diHlHelpUsus;
    }

    public void setDiHlHelpUsus(Set<com.saasdb.data.DiHlHelpUsu> diHlHelpUsus) {
        this.diHlHelpUsus = diHlHelpUsus;
    }

    public Set<com.saasdb.data.GeSgHistSenhas> getGeSgHistSenhases() {
        return geSgHistSenhases;
    }

    public void setGeSgHistSenhases(Set<com.saasdb.data.GeSgHistSenhas> geSgHistSenhases) {
        this.geSgHistSenhases = geSgHistSenhases;
    }

}
