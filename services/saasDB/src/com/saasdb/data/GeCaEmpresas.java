
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeCaEmpresas
 *  01/08/2013 14:21:12
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
    private Set<com.saasdb.data.GeCaEmpCentrocusto> geCaEmpCentrocustos = new HashSet<com.saasdb.data.GeCaEmpCentrocusto>();
    private Set<com.saasdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.saasdb.data.GeCaEmpLotacao>();
    private Set<com.saasdb.data.GeCaEmpContatos> geCaEmpContatoses = new HashSet<com.saasdb.data.GeCaEmpContatos>();
    private Set<com.saasdb.data.GeSgGruXEmpresa> geSgGruXEmpresas = new HashSet<com.saasdb.data.GeSgGruXEmpresa>();
    private Set<com.saasdb.data.GeCaEmpSocios> geCaEmpSocioses = new HashSet<com.saasdb.data.GeCaEmpSocios>();
    private Set<com.saasdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.saasdb.data.GeCaEmpEnd>();
    private Set<com.saasdb.data.GeCaEmpContratos> geCaEmpContratoses = new HashSet<com.saasdb.data.GeCaEmpContratos>();
    private Set<com.saasdb.data.GeCaEmpTel> geCaEmpTels = new HashSet<com.saasdb.data.GeCaEmpTel>();
    private Set<com.saasdb.data.GeCaEmpHisPgto> geCaEmpHisPgtos = new HashSet<com.saasdb.data.GeCaEmpHisPgto>();
    private Set<com.saasdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs = new HashSet<com.saasdb.data.GeCaEmpCnaeSec>();
    private Set<com.saasdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.saasdb.data.GeCaEmpContas>();
    private Set<com.saasdb.data.GeCaEmpWeb> geCaEmpWebs = new HashSet<com.saasdb.data.GeCaEmpWeb>();

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

    public Set<com.saasdb.data.GeCaEmpCentrocusto> getGeCaEmpCentrocustos() {
        return geCaEmpCentrocustos;
    }

    public void setGeCaEmpCentrocustos(Set<com.saasdb.data.GeCaEmpCentrocusto> geCaEmpCentrocustos) {
        this.geCaEmpCentrocustos = geCaEmpCentrocustos;
    }

    public Set<com.saasdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.saasdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.saasdb.data.GeCaEmpContatos> getGeCaEmpContatoses() {
        return geCaEmpContatoses;
    }

    public void setGeCaEmpContatoses(Set<com.saasdb.data.GeCaEmpContatos> geCaEmpContatoses) {
        this.geCaEmpContatoses = geCaEmpContatoses;
    }

    public Set<com.saasdb.data.GeSgGruXEmpresa> getGeSgGruXEmpresas() {
        return geSgGruXEmpresas;
    }

    public void setGeSgGruXEmpresas(Set<com.saasdb.data.GeSgGruXEmpresa> geSgGruXEmpresas) {
        this.geSgGruXEmpresas = geSgGruXEmpresas;
    }

    public Set<com.saasdb.data.GeCaEmpSocios> getGeCaEmpSocioses() {
        return geCaEmpSocioses;
    }

    public void setGeCaEmpSocioses(Set<com.saasdb.data.GeCaEmpSocios> geCaEmpSocioses) {
        this.geCaEmpSocioses = geCaEmpSocioses;
    }

    public Set<com.saasdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.saasdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

    public Set<com.saasdb.data.GeCaEmpContratos> getGeCaEmpContratoses() {
        return geCaEmpContratoses;
    }

    public void setGeCaEmpContratoses(Set<com.saasdb.data.GeCaEmpContratos> geCaEmpContratoses) {
        this.geCaEmpContratoses = geCaEmpContratoses;
    }

    public Set<com.saasdb.data.GeCaEmpTel> getGeCaEmpTels() {
        return geCaEmpTels;
    }

    public void setGeCaEmpTels(Set<com.saasdb.data.GeCaEmpTel> geCaEmpTels) {
        this.geCaEmpTels = geCaEmpTels;
    }

    public Set<com.saasdb.data.GeCaEmpHisPgto> getGeCaEmpHisPgtos() {
        return geCaEmpHisPgtos;
    }

    public void setGeCaEmpHisPgtos(Set<com.saasdb.data.GeCaEmpHisPgto> geCaEmpHisPgtos) {
        this.geCaEmpHisPgtos = geCaEmpHisPgtos;
    }

    public Set<com.saasdb.data.GeCaEmpCnaeSec> getGeCaEmpCnaeSecs() {
        return geCaEmpCnaeSecs;
    }

    public void setGeCaEmpCnaeSecs(Set<com.saasdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs) {
        this.geCaEmpCnaeSecs = geCaEmpCnaeSecs;
    }

    public Set<com.saasdb.data.GeCaEmpContas> getGeCaEmpContases() {
        return geCaEmpContases;
    }

    public void setGeCaEmpContases(Set<com.saasdb.data.GeCaEmpContas> geCaEmpContases) {
        this.geCaEmpContases = geCaEmpContases;
    }

    public Set<com.saasdb.data.GeCaEmpWeb> getGeCaEmpWebs() {
        return geCaEmpWebs;
    }

    public void setGeCaEmpWebs(Set<com.saasdb.data.GeCaEmpWeb> geCaEmpWebs) {
        this.geCaEmpWebs = geCaEmpWebs;
    }

}
