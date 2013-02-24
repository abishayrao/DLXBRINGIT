
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeSgUsuarios
 *  02/23/2013 10:50:05
 * 
 */
public class GeSgUsuarios {

    private Integer gesgusuId;
    private GeSgGrupos geSgGrupos;
    private String gesgusuLogin;
    private String gesgusuSenha;
    private String gesgusuExpira;
    private Date gesgusuDtSenha;
    private Integer gesgusuFunId;
    private String gesgusuNome;
    private String gesgusuAdmin;
    private String gesgusuStatus;
    private Date gesgusuIniVig;
    private Date gesgusuFimVig;
    private Set<com.testdb.data.DiHlHelpUsu> diHlHelpUsus = new HashSet<com.testdb.data.DiHlHelpUsu>();
    private Set<com.testdb.data.GeSgAuditoria> geSgAuditorias = new HashSet<com.testdb.data.GeSgAuditoria>();
    private Set<com.testdb.data.GeSgHistSenhas> geSgHistSenhases = new HashSet<com.testdb.data.GeSgHistSenhas>();

    public Integer getGesgusuId() {
        return gesgusuId;
    }

    public void setGesgusuId(Integer gesgusuId) {
        this.gesgusuId = gesgusuId;
    }

    public GeSgGrupos getGeSgGrupos() {
        return geSgGrupos;
    }

    public void setGeSgGrupos(GeSgGrupos geSgGrupos) {
        this.geSgGrupos = geSgGrupos;
    }

    public String getGesgusuLogin() {
        return gesgusuLogin;
    }

    public void setGesgusuLogin(String gesgusuLogin) {
        this.gesgusuLogin = gesgusuLogin;
    }

    public String getGesgusuSenha() {
        return gesgusuSenha;
    }

    public void setGesgusuSenha(String gesgusuSenha) {
        this.gesgusuSenha = gesgusuSenha;
    }

    public String getGesgusuExpira() {
        return gesgusuExpira;
    }

    public void setGesgusuExpira(String gesgusuExpira) {
        this.gesgusuExpira = gesgusuExpira;
    }

    public Date getGesgusuDtSenha() {
        return gesgusuDtSenha;
    }

    public void setGesgusuDtSenha(Date gesgusuDtSenha) {
        this.gesgusuDtSenha = gesgusuDtSenha;
    }

    public Integer getGesgusuFunId() {
        return gesgusuFunId;
    }

    public void setGesgusuFunId(Integer gesgusuFunId) {
        this.gesgusuFunId = gesgusuFunId;
    }

    public String getGesgusuNome() {
        return gesgusuNome;
    }

    public void setGesgusuNome(String gesgusuNome) {
        this.gesgusuNome = gesgusuNome;
    }

    public String getGesgusuAdmin() {
        return gesgusuAdmin;
    }

    public void setGesgusuAdmin(String gesgusuAdmin) {
        this.gesgusuAdmin = gesgusuAdmin;
    }

    public String getGesgusuStatus() {
        return gesgusuStatus;
    }

    public void setGesgusuStatus(String gesgusuStatus) {
        this.gesgusuStatus = gesgusuStatus;
    }

    public Date getGesgusuIniVig() {
        return gesgusuIniVig;
    }

    public void setGesgusuIniVig(Date gesgusuIniVig) {
        this.gesgusuIniVig = gesgusuIniVig;
    }

    public Date getGesgusuFimVig() {
        return gesgusuFimVig;
    }

    public void setGesgusuFimVig(Date gesgusuFimVig) {
        this.gesgusuFimVig = gesgusuFimVig;
    }

    public Set<com.testdb.data.DiHlHelpUsu> getDiHlHelpUsus() {
        return diHlHelpUsus;
    }

    public void setDiHlHelpUsus(Set<com.testdb.data.DiHlHelpUsu> diHlHelpUsus) {
        this.diHlHelpUsus = diHlHelpUsus;
    }

    public Set<com.testdb.data.GeSgAuditoria> getGeSgAuditorias() {
        return geSgAuditorias;
    }

    public void setGeSgAuditorias(Set<com.testdb.data.GeSgAuditoria> geSgAuditorias) {
        this.geSgAuditorias = geSgAuditorias;
    }

    public Set<com.testdb.data.GeSgHistSenhas> getGeSgHistSenhases() {
        return geSgHistSenhases;
    }

    public void setGeSgHistSenhases(Set<com.testdb.data.GeSgHistSenhas> geSgHistSenhases) {
        this.geSgHistSenhases = geSgHistSenhases;
    }

}
