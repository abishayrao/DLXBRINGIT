
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeCaEmpresas
 *  02/23/2013 10:50:05
 * 
 */
public class GeCaEmpresas {

    private Integer gecaempid;
    private GeTbTiposEmpresas geTbTiposEmpresas;
    private SiClientes siClientes;
    private String gecaemppfpj;
    private String gecaempcod;
    private String gecaempnomegr;
    private String gecaempnomepq;
    private String gecaempstatus;
    private Date gecaempinivig;
    private Date gecaempfimvig;
    private String gecaempusafilial;
    private String gecaempusacc;
    private Set<com.testdb.data.GeSgGruXEmpresa> geSgGruXEmpresas = new HashSet<com.testdb.data.GeSgGruXEmpresa>();
    private Set<com.testdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.testdb.data.GeCaEmpContas>();
    private Set<com.testdb.data.GeCaFuncionario> geCaFuncionarios = new HashSet<com.testdb.data.GeCaFuncionario>();
    private Set<com.testdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs = new HashSet<com.testdb.data.GeCaEmpCnaeSec>();
    private Set<com.testdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.testdb.data.GeCaEmpLotacao>();
    private Set<com.testdb.data.GeCaEmpCentrocusto> geCaEmpCentrocustos = new HashSet<com.testdb.data.GeCaEmpCentrocusto>();
    private Set<com.testdb.data.GeCaEmpWeb> geCaEmpWebs = new HashSet<com.testdb.data.GeCaEmpWeb>();
    private Set<com.testdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.testdb.data.GeCaEmpEnd>();
    private Set<com.testdb.data.GeCaEmpDocsPf> geCaEmpDocsPfs = new HashSet<com.testdb.data.GeCaEmpDocsPf>();
    private Set<com.testdb.data.GeCaEmpSocios> geCaEmpSocioses = new HashSet<com.testdb.data.GeCaEmpSocios>();
    private Set<com.testdb.data.GeCaEmpContatos> geCaEmpContatoses = new HashSet<com.testdb.data.GeCaEmpContatos>();
    private Set<com.testdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs = new HashSet<com.testdb.data.GeCaEmpDocsPj>();
    private Set<com.testdb.data.GeCaEmpTel> geCaEmpTels = new HashSet<com.testdb.data.GeCaEmpTel>();
    private Set<com.testdb.data.GeCaEmpHisPgto> geCaEmpHisPgtos = new HashSet<com.testdb.data.GeCaEmpHisPgto>();

    public Integer getGecaempid() {
        return gecaempid;
    }

    public void setGecaempid(Integer gecaempid) {
        this.gecaempid = gecaempid;
    }

    public GeTbTiposEmpresas getGeTbTiposEmpresas() {
        return geTbTiposEmpresas;
    }

    public void setGeTbTiposEmpresas(GeTbTiposEmpresas geTbTiposEmpresas) {
        this.geTbTiposEmpresas = geTbTiposEmpresas;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGecaemppfpj() {
        return gecaemppfpj;
    }

    public void setGecaemppfpj(String gecaemppfpj) {
        this.gecaemppfpj = gecaemppfpj;
    }

    public String getGecaempcod() {
        return gecaempcod;
    }

    public void setGecaempcod(String gecaempcod) {
        this.gecaempcod = gecaempcod;
    }

    public String getGecaempnomegr() {
        return gecaempnomegr;
    }

    public void setGecaempnomegr(String gecaempnomegr) {
        this.gecaempnomegr = gecaempnomegr;
    }

    public String getGecaempnomepq() {
        return gecaempnomepq;
    }

    public void setGecaempnomepq(String gecaempnomepq) {
        this.gecaempnomepq = gecaempnomepq;
    }

    public String getGecaempstatus() {
        return gecaempstatus;
    }

    public void setGecaempstatus(String gecaempstatus) {
        this.gecaempstatus = gecaempstatus;
    }

    public Date getGecaempinivig() {
        return gecaempinivig;
    }

    public void setGecaempinivig(Date gecaempinivig) {
        this.gecaempinivig = gecaempinivig;
    }

    public Date getGecaempfimvig() {
        return gecaempfimvig;
    }

    public void setGecaempfimvig(Date gecaempfimvig) {
        this.gecaempfimvig = gecaempfimvig;
    }

    public String getGecaempusafilial() {
        return gecaempusafilial;
    }

    public void setGecaempusafilial(String gecaempusafilial) {
        this.gecaempusafilial = gecaempusafilial;
    }

    public String getGecaempusacc() {
        return gecaempusacc;
    }

    public void setGecaempusacc(String gecaempusacc) {
        this.gecaempusacc = gecaempusacc;
    }

    public Set<com.testdb.data.GeSgGruXEmpresa> getGeSgGruXEmpresas() {
        return geSgGruXEmpresas;
    }

    public void setGeSgGruXEmpresas(Set<com.testdb.data.GeSgGruXEmpresa> geSgGruXEmpresas) {
        this.geSgGruXEmpresas = geSgGruXEmpresas;
    }

    public Set<com.testdb.data.GeCaEmpContas> getGeCaEmpContases() {
        return geCaEmpContases;
    }

    public void setGeCaEmpContases(Set<com.testdb.data.GeCaEmpContas> geCaEmpContases) {
        this.geCaEmpContases = geCaEmpContases;
    }

    public Set<com.testdb.data.GeCaFuncionario> getGeCaFuncionarios() {
        return geCaFuncionarios;
    }

    public void setGeCaFuncionarios(Set<com.testdb.data.GeCaFuncionario> geCaFuncionarios) {
        this.geCaFuncionarios = geCaFuncionarios;
    }

    public Set<com.testdb.data.GeCaEmpCnaeSec> getGeCaEmpCnaeSecs() {
        return geCaEmpCnaeSecs;
    }

    public void setGeCaEmpCnaeSecs(Set<com.testdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs) {
        this.geCaEmpCnaeSecs = geCaEmpCnaeSecs;
    }

    public Set<com.testdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.testdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.testdb.data.GeCaEmpCentrocusto> getGeCaEmpCentrocustos() {
        return geCaEmpCentrocustos;
    }

    public void setGeCaEmpCentrocustos(Set<com.testdb.data.GeCaEmpCentrocusto> geCaEmpCentrocustos) {
        this.geCaEmpCentrocustos = geCaEmpCentrocustos;
    }

    public Set<com.testdb.data.GeCaEmpWeb> getGeCaEmpWebs() {
        return geCaEmpWebs;
    }

    public void setGeCaEmpWebs(Set<com.testdb.data.GeCaEmpWeb> geCaEmpWebs) {
        this.geCaEmpWebs = geCaEmpWebs;
    }

    public Set<com.testdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.testdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

    public Set<com.testdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfs() {
        return geCaEmpDocsPfs;
    }

    public void setGeCaEmpDocsPfs(Set<com.testdb.data.GeCaEmpDocsPf> geCaEmpDocsPfs) {
        this.geCaEmpDocsPfs = geCaEmpDocsPfs;
    }

    public Set<com.testdb.data.GeCaEmpSocios> getGeCaEmpSocioses() {
        return geCaEmpSocioses;
    }

    public void setGeCaEmpSocioses(Set<com.testdb.data.GeCaEmpSocios> geCaEmpSocioses) {
        this.geCaEmpSocioses = geCaEmpSocioses;
    }

    public Set<com.testdb.data.GeCaEmpContatos> getGeCaEmpContatoses() {
        return geCaEmpContatoses;
    }

    public void setGeCaEmpContatoses(Set<com.testdb.data.GeCaEmpContatos> geCaEmpContatoses) {
        this.geCaEmpContatoses = geCaEmpContatoses;
    }

    public Set<com.testdb.data.GeCaEmpDocsPj> getGeCaEmpDocsPjs() {
        return geCaEmpDocsPjs;
    }

    public void setGeCaEmpDocsPjs(Set<com.testdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs) {
        this.geCaEmpDocsPjs = geCaEmpDocsPjs;
    }

    public Set<com.testdb.data.GeCaEmpTel> getGeCaEmpTels() {
        return geCaEmpTels;
    }

    public void setGeCaEmpTels(Set<com.testdb.data.GeCaEmpTel> geCaEmpTels) {
        this.geCaEmpTels = geCaEmpTels;
    }

    public Set<com.testdb.data.GeCaEmpHisPgto> getGeCaEmpHisPgtos() {
        return geCaEmpHisPgtos;
    }

    public void setGeCaEmpHisPgtos(Set<com.testdb.data.GeCaEmpHisPgto> geCaEmpHisPgtos) {
        this.geCaEmpHisPgtos = geCaEmpHisPgtos;
    }

}
