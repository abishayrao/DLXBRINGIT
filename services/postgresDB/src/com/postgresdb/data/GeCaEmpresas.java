
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeCaEmpresas
 *  01/23/2013 09:59:14
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
    private Set<com.postgresdb.data.GeCaEmpCentrocusto> geCaEmpCentrocustos = new HashSet<com.postgresdb.data.GeCaEmpCentrocusto>();
    private Set<com.postgresdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.postgresdb.data.GeCaEmpLotacao>();
    private Set<com.postgresdb.data.GeCaEmpContatos> geCaEmpContatoses = new HashSet<com.postgresdb.data.GeCaEmpContatos>();
    private Set<com.postgresdb.data.GeSgGruXEmpresa> geSgGruXEmpresas = new HashSet<com.postgresdb.data.GeSgGruXEmpresa>();
    private Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSocioses = new HashSet<com.postgresdb.data.GeCaEmpSocios>();
    private Set<com.postgresdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.postgresdb.data.GeCaEmpEnd>();
    private Set<com.postgresdb.data.GeCaEmpContratos> geCaEmpContratoses = new HashSet<com.postgresdb.data.GeCaEmpContratos>();
    private Set<com.postgresdb.data.GeCaEmpTel> geCaEmpTels = new HashSet<com.postgresdb.data.GeCaEmpTel>();
    private Set<com.postgresdb.data.GeCaEmpHisPgto> geCaEmpHisPgtos = new HashSet<com.postgresdb.data.GeCaEmpHisPgto>();
    private Set<com.postgresdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs = new HashSet<com.postgresdb.data.GeCaEmpCnaeSec>();
    private Set<com.postgresdb.data.GeCaEmpContas> geCaEmpContases = new HashSet<com.postgresdb.data.GeCaEmpContas>();
    private Set<com.postgresdb.data.GeCaEmpWeb> geCaEmpWebs = new HashSet<com.postgresdb.data.GeCaEmpWeb>();

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

    public Set<com.postgresdb.data.GeCaEmpCentrocusto> getGeCaEmpCentrocustos() {
        return geCaEmpCentrocustos;
    }

    public void setGeCaEmpCentrocustos(Set<com.postgresdb.data.GeCaEmpCentrocusto> geCaEmpCentrocustos) {
        this.geCaEmpCentrocustos = geCaEmpCentrocustos;
    }

    public Set<com.postgresdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.postgresdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.postgresdb.data.GeCaEmpContatos> getGeCaEmpContatoses() {
        return geCaEmpContatoses;
    }

    public void setGeCaEmpContatoses(Set<com.postgresdb.data.GeCaEmpContatos> geCaEmpContatoses) {
        this.geCaEmpContatoses = geCaEmpContatoses;
    }

    public Set<com.postgresdb.data.GeSgGruXEmpresa> getGeSgGruXEmpresas() {
        return geSgGruXEmpresas;
    }

    public void setGeSgGruXEmpresas(Set<com.postgresdb.data.GeSgGruXEmpresa> geSgGruXEmpresas) {
        this.geSgGruXEmpresas = geSgGruXEmpresas;
    }

    public Set<com.postgresdb.data.GeCaEmpSocios> getGeCaEmpSocioses() {
        return geCaEmpSocioses;
    }

    public void setGeCaEmpSocioses(Set<com.postgresdb.data.GeCaEmpSocios> geCaEmpSocioses) {
        this.geCaEmpSocioses = geCaEmpSocioses;
    }

    public Set<com.postgresdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.postgresdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

    public Set<com.postgresdb.data.GeCaEmpContratos> getGeCaEmpContratoses() {
        return geCaEmpContratoses;
    }

    public void setGeCaEmpContratoses(Set<com.postgresdb.data.GeCaEmpContratos> geCaEmpContratoses) {
        this.geCaEmpContratoses = geCaEmpContratoses;
    }

    public Set<com.postgresdb.data.GeCaEmpTel> getGeCaEmpTels() {
        return geCaEmpTels;
    }

    public void setGeCaEmpTels(Set<com.postgresdb.data.GeCaEmpTel> geCaEmpTels) {
        this.geCaEmpTels = geCaEmpTels;
    }

    public Set<com.postgresdb.data.GeCaEmpHisPgto> getGeCaEmpHisPgtos() {
        return geCaEmpHisPgtos;
    }

    public void setGeCaEmpHisPgtos(Set<com.postgresdb.data.GeCaEmpHisPgto> geCaEmpHisPgtos) {
        this.geCaEmpHisPgtos = geCaEmpHisPgtos;
    }

    public Set<com.postgresdb.data.GeCaEmpCnaeSec> getGeCaEmpCnaeSecs() {
        return geCaEmpCnaeSecs;
    }

    public void setGeCaEmpCnaeSecs(Set<com.postgresdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs) {
        this.geCaEmpCnaeSecs = geCaEmpCnaeSecs;
    }

    public Set<com.postgresdb.data.GeCaEmpContas> getGeCaEmpContases() {
        return geCaEmpContases;
    }

    public void setGeCaEmpContases(Set<com.postgresdb.data.GeCaEmpContas> geCaEmpContases) {
        this.geCaEmpContases = geCaEmpContases;
    }

    public Set<com.postgresdb.data.GeCaEmpWeb> getGeCaEmpWebs() {
        return geCaEmpWebs;
    }

    public void setGeCaEmpWebs(Set<com.postgresdb.data.GeCaEmpWeb> geCaEmpWebs) {
        this.geCaEmpWebs = geCaEmpWebs;
    }

}
