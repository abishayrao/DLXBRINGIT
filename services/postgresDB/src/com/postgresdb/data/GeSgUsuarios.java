
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeSgUsuarios
 *  01/23/2013 09:59:13
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
    private String email;
    private String sq1;
    private String sq1a;
    private String sq2;
    private String sq2a;
    private Set<com.postgresdb.data.GeSgAuditoria> geSgAuditorias = new HashSet<com.postgresdb.data.GeSgAuditoria>();
    private Set<com.postgresdb.data.DiHlHelpUsu> diHlHelpUsus = new HashSet<com.postgresdb.data.DiHlHelpUsu>();
    private Set<com.postgresdb.data.GeSgHistSenhas> geSgHistSenhases = new HashSet<com.postgresdb.data.GeSgHistSenhas>();

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSq1() {
        return sq1;
    }

    public void setSq1(String sq1) {
        this.sq1 = sq1;
    }

    public String getSq1a() {
        return sq1a;
    }

    public void setSq1a(String sq1a) {
        this.sq1a = sq1a;
    }

    public String getSq2() {
        return sq2;
    }

    public void setSq2(String sq2) {
        this.sq2 = sq2;
    }

    public String getSq2a() {
        return sq2a;
    }

    public void setSq2a(String sq2a) {
        this.sq2a = sq2a;
    }

    public Set<com.postgresdb.data.GeSgAuditoria> getGeSgAuditorias() {
        return geSgAuditorias;
    }

    public void setGeSgAuditorias(Set<com.postgresdb.data.GeSgAuditoria> geSgAuditorias) {
        this.geSgAuditorias = geSgAuditorias;
    }

    public Set<com.postgresdb.data.DiHlHelpUsu> getDiHlHelpUsus() {
        return diHlHelpUsus;
    }

    public void setDiHlHelpUsus(Set<com.postgresdb.data.DiHlHelpUsu> diHlHelpUsus) {
        this.diHlHelpUsus = diHlHelpUsus;
    }

    public Set<com.postgresdb.data.GeSgHistSenhas> getGeSgHistSenhases() {
        return geSgHistSenhases;
    }

    public void setGeSgHistSenhases(Set<com.postgresdb.data.GeSgHistSenhas> geSgHistSenhases) {
        this.geSgHistSenhases = geSgHistSenhases;
    }

}
