
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiClientes
 *  02/23/2013 10:50:04
 * 
 */
public class SiClientes {

    private Integer sicliid;
    private GeTbMeiosConhecimento geTbMeiosConhecimento;
    private String siclipfpj;
    private String siclicod;
    private String siclinomegr;
    private String siclinomepq;
    private String siclistatus;
    private Date sicliinivig;
    private Date siclifimvig;
    private Integer sicliindicacao;
    private String siclilingua;
    private Set<com.testdb.data.GeSgGrupos> geSgGruposes = new HashSet<com.testdb.data.GeSgGrupos>();
    private Set<com.testdb.data.GeCaEmpresas> geCaEmpresases = new HashSet<com.testdb.data.GeCaEmpresas>();
    private Set<com.testdb.data.SiCliTel> siCliTels = new HashSet<com.testdb.data.SiCliTel>();
    private Set<com.testdb.data.SiCliEnd> siCliEnds = new HashSet<com.testdb.data.SiCliEnd>();
    private Set<com.testdb.data.SiCliWeb> siCliWebs = new HashSet<com.testdb.data.SiCliWeb>();
    private Set<com.testdb.data.GeTbNatJurClasse> geTbNatJurClasses = new HashSet<com.testdb.data.GeTbNatJurClasse>();
    private Set<com.testdb.data.StEpFabricantes> stEpFabricanteses = new HashSet<com.testdb.data.StEpFabricantes>();
    private Set<com.testdb.data.GeTbTiposTelefone> geTbTiposTelefones = new HashSet<com.testdb.data.GeTbTiposTelefone>();
    private Set<com.testdb.data.GeTbMunicipios> geTbMunicipioses = new HashSet<com.testdb.data.GeTbMunicipios>();
    private Set<com.testdb.data.SiCliDocsPf> siCliDocsPfs = new HashSet<com.testdb.data.SiCliDocsPf>();
    private Set<com.testdb.data.GeTbTiposConta> geTbTiposContas = new HashSet<com.testdb.data.GeTbTiposConta>();
    private Set<com.testdb.data.GeTbIndex> geTbIndexes = new HashSet<com.testdb.data.GeTbIndex>();
    private Set<com.testdb.data.GeTbQualificacaoSoc> geTbQualificacaoSocs = new HashSet<com.testdb.data.GeTbQualificacaoSoc>();
    private Set<com.testdb.data.SiCliContas> siCliContases = new HashSet<com.testdb.data.SiCliContas>();
    private Set<com.testdb.data.GeTbBancos> geTbBancoses = new HashSet<com.testdb.data.GeTbBancos>();
    private Set<com.testdb.data.SiCliDocsPj> siCliDocsPjs = new HashSet<com.testdb.data.SiCliDocsPj>();
    private Set<com.testdb.data.SiCliModulo> siCliModulos = new HashSet<com.testdb.data.SiCliModulo>();
    private Set<com.testdb.data.GeTbTiposEmpresas> geTbTiposEmpresases = new HashSet<com.testdb.data.GeTbTiposEmpresas>();
    private Set<com.testdb.data.GeTbTiposContato> geTbTiposContatos = new HashSet<com.testdb.data.GeTbTiposContato>();
    private Set<com.testdb.data.GeTbTiposEndereco> geTbTiposEnderecos = new HashSet<com.testdb.data.GeTbTiposEndereco>();
    private Set<com.testdb.data.SiCliHisPgto> siCliHisPgtos = new HashSet<com.testdb.data.SiCliHisPgto>();
    private Set<com.testdb.data.GeTbTiposContrato> geTbTiposContratos = new HashSet<com.testdb.data.GeTbTiposContrato>();
    private Set<com.testdb.data.GeTbTiposDoc> geTbTiposDocs = new HashSet<com.testdb.data.GeTbTiposDoc>();
    private Set<com.testdb.data.GeTbTiposWeb> geTbTiposWebs = new HashSet<com.testdb.data.GeTbTiposWeb>();
    private Set<com.testdb.data.GeTbUf> geTbUfs = new HashSet<com.testdb.data.GeTbUf>();
    private Set<com.testdb.data.StEpCategFabr> stEpCategFabrs = new HashSet<com.testdb.data.StEpCategFabr>();
    private Set<com.testdb.data.SiCliContatos> siCliContatoses = new HashSet<com.testdb.data.SiCliContatos>();
    private Set<com.testdb.data.SiCliValores> siCliValoreses = new HashSet<com.testdb.data.SiCliValores>();

    public Integer getSicliid() {
        return sicliid;
    }

    public void setSicliid(Integer sicliid) {
        this.sicliid = sicliid;
    }

    public GeTbMeiosConhecimento getGeTbMeiosConhecimento() {
        return geTbMeiosConhecimento;
    }

    public void setGeTbMeiosConhecimento(GeTbMeiosConhecimento geTbMeiosConhecimento) {
        this.geTbMeiosConhecimento = geTbMeiosConhecimento;
    }

    public String getSiclipfpj() {
        return siclipfpj;
    }

    public void setSiclipfpj(String siclipfpj) {
        this.siclipfpj = siclipfpj;
    }

    public String getSiclicod() {
        return siclicod;
    }

    public void setSiclicod(String siclicod) {
        this.siclicod = siclicod;
    }

    public String getSiclinomegr() {
        return siclinomegr;
    }

    public void setSiclinomegr(String siclinomegr) {
        this.siclinomegr = siclinomegr;
    }

    public String getSiclinomepq() {
        return siclinomepq;
    }

    public void setSiclinomepq(String siclinomepq) {
        this.siclinomepq = siclinomepq;
    }

    public String getSiclistatus() {
        return siclistatus;
    }

    public void setSiclistatus(String siclistatus) {
        this.siclistatus = siclistatus;
    }

    public Date getSicliinivig() {
        return sicliinivig;
    }

    public void setSicliinivig(Date sicliinivig) {
        this.sicliinivig = sicliinivig;
    }

    public Date getSiclifimvig() {
        return siclifimvig;
    }

    public void setSiclifimvig(Date siclifimvig) {
        this.siclifimvig = siclifimvig;
    }

    public Integer getSicliindicacao() {
        return sicliindicacao;
    }

    public void setSicliindicacao(Integer sicliindicacao) {
        this.sicliindicacao = sicliindicacao;
    }

    public String getSiclilingua() {
        return siclilingua;
    }

    public void setSiclilingua(String siclilingua) {
        this.siclilingua = siclilingua;
    }

    public Set<com.testdb.data.GeSgGrupos> getGeSgGruposes() {
        return geSgGruposes;
    }

    public void setGeSgGruposes(Set<com.testdb.data.GeSgGrupos> geSgGruposes) {
        this.geSgGruposes = geSgGruposes;
    }

    public Set<com.testdb.data.GeCaEmpresas> getGeCaEmpresases() {
        return geCaEmpresases;
    }

    public void setGeCaEmpresases(Set<com.testdb.data.GeCaEmpresas> geCaEmpresases) {
        this.geCaEmpresases = geCaEmpresases;
    }

    public Set<com.testdb.data.SiCliTel> getSiCliTels() {
        return siCliTels;
    }

    public void setSiCliTels(Set<com.testdb.data.SiCliTel> siCliTels) {
        this.siCliTels = siCliTels;
    }

    public Set<com.testdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.testdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.testdb.data.SiCliWeb> getSiCliWebs() {
        return siCliWebs;
    }

    public void setSiCliWebs(Set<com.testdb.data.SiCliWeb> siCliWebs) {
        this.siCliWebs = siCliWebs;
    }

    public Set<com.testdb.data.GeTbNatJurClasse> getGeTbNatJurClasses() {
        return geTbNatJurClasses;
    }

    public void setGeTbNatJurClasses(Set<com.testdb.data.GeTbNatJurClasse> geTbNatJurClasses) {
        this.geTbNatJurClasses = geTbNatJurClasses;
    }

    public Set<com.testdb.data.StEpFabricantes> getStEpFabricanteses() {
        return stEpFabricanteses;
    }

    public void setStEpFabricanteses(Set<com.testdb.data.StEpFabricantes> stEpFabricanteses) {
        this.stEpFabricanteses = stEpFabricanteses;
    }

    public Set<com.testdb.data.GeTbTiposTelefone> getGeTbTiposTelefones() {
        return geTbTiposTelefones;
    }

    public void setGeTbTiposTelefones(Set<com.testdb.data.GeTbTiposTelefone> geTbTiposTelefones) {
        this.geTbTiposTelefones = geTbTiposTelefones;
    }

    public Set<com.testdb.data.GeTbMunicipios> getGeTbMunicipioses() {
        return geTbMunicipioses;
    }

    public void setGeTbMunicipioses(Set<com.testdb.data.GeTbMunicipios> geTbMunicipioses) {
        this.geTbMunicipioses = geTbMunicipioses;
    }

    public Set<com.testdb.data.SiCliDocsPf> getSiCliDocsPfs() {
        return siCliDocsPfs;
    }

    public void setSiCliDocsPfs(Set<com.testdb.data.SiCliDocsPf> siCliDocsPfs) {
        this.siCliDocsPfs = siCliDocsPfs;
    }

    public Set<com.testdb.data.GeTbTiposConta> getGeTbTiposContas() {
        return geTbTiposContas;
    }

    public void setGeTbTiposContas(Set<com.testdb.data.GeTbTiposConta> geTbTiposContas) {
        this.geTbTiposContas = geTbTiposContas;
    }

    public Set<com.testdb.data.GeTbIndex> getGeTbIndexes() {
        return geTbIndexes;
    }

    public void setGeTbIndexes(Set<com.testdb.data.GeTbIndex> geTbIndexes) {
        this.geTbIndexes = geTbIndexes;
    }

    public Set<com.testdb.data.GeTbQualificacaoSoc> getGeTbQualificacaoSocs() {
        return geTbQualificacaoSocs;
    }

    public void setGeTbQualificacaoSocs(Set<com.testdb.data.GeTbQualificacaoSoc> geTbQualificacaoSocs) {
        this.geTbQualificacaoSocs = geTbQualificacaoSocs;
    }

    public Set<com.testdb.data.SiCliContas> getSiCliContases() {
        return siCliContases;
    }

    public void setSiCliContases(Set<com.testdb.data.SiCliContas> siCliContases) {
        this.siCliContases = siCliContases;
    }

    public Set<com.testdb.data.GeTbBancos> getGeTbBancoses() {
        return geTbBancoses;
    }

    public void setGeTbBancoses(Set<com.testdb.data.GeTbBancos> geTbBancoses) {
        this.geTbBancoses = geTbBancoses;
    }

    public Set<com.testdb.data.SiCliDocsPj> getSiCliDocsPjs() {
        return siCliDocsPjs;
    }

    public void setSiCliDocsPjs(Set<com.testdb.data.SiCliDocsPj> siCliDocsPjs) {
        this.siCliDocsPjs = siCliDocsPjs;
    }

    public Set<com.testdb.data.SiCliModulo> getSiCliModulos() {
        return siCliModulos;
    }

    public void setSiCliModulos(Set<com.testdb.data.SiCliModulo> siCliModulos) {
        this.siCliModulos = siCliModulos;
    }

    public Set<com.testdb.data.GeTbTiposEmpresas> getGeTbTiposEmpresases() {
        return geTbTiposEmpresases;
    }

    public void setGeTbTiposEmpresases(Set<com.testdb.data.GeTbTiposEmpresas> geTbTiposEmpresases) {
        this.geTbTiposEmpresases = geTbTiposEmpresases;
    }

    public Set<com.testdb.data.GeTbTiposContato> getGeTbTiposContatos() {
        return geTbTiposContatos;
    }

    public void setGeTbTiposContatos(Set<com.testdb.data.GeTbTiposContato> geTbTiposContatos) {
        this.geTbTiposContatos = geTbTiposContatos;
    }

    public Set<com.testdb.data.GeTbTiposEndereco> getGeTbTiposEnderecos() {
        return geTbTiposEnderecos;
    }

    public void setGeTbTiposEnderecos(Set<com.testdb.data.GeTbTiposEndereco> geTbTiposEnderecos) {
        this.geTbTiposEnderecos = geTbTiposEnderecos;
    }

    public Set<com.testdb.data.SiCliHisPgto> getSiCliHisPgtos() {
        return siCliHisPgtos;
    }

    public void setSiCliHisPgtos(Set<com.testdb.data.SiCliHisPgto> siCliHisPgtos) {
        this.siCliHisPgtos = siCliHisPgtos;
    }

    public Set<com.testdb.data.GeTbTiposContrato> getGeTbTiposContratos() {
        return geTbTiposContratos;
    }

    public void setGeTbTiposContratos(Set<com.testdb.data.GeTbTiposContrato> geTbTiposContratos) {
        this.geTbTiposContratos = geTbTiposContratos;
    }

    public Set<com.testdb.data.GeTbTiposDoc> getGeTbTiposDocs() {
        return geTbTiposDocs;
    }

    public void setGeTbTiposDocs(Set<com.testdb.data.GeTbTiposDoc> geTbTiposDocs) {
        this.geTbTiposDocs = geTbTiposDocs;
    }

    public Set<com.testdb.data.GeTbTiposWeb> getGeTbTiposWebs() {
        return geTbTiposWebs;
    }

    public void setGeTbTiposWebs(Set<com.testdb.data.GeTbTiposWeb> geTbTiposWebs) {
        this.geTbTiposWebs = geTbTiposWebs;
    }

    public Set<com.testdb.data.GeTbUf> getGeTbUfs() {
        return geTbUfs;
    }

    public void setGeTbUfs(Set<com.testdb.data.GeTbUf> geTbUfs) {
        this.geTbUfs = geTbUfs;
    }

    public Set<com.testdb.data.StEpCategFabr> getStEpCategFabrs() {
        return stEpCategFabrs;
    }

    public void setStEpCategFabrs(Set<com.testdb.data.StEpCategFabr> stEpCategFabrs) {
        this.stEpCategFabrs = stEpCategFabrs;
    }

    public Set<com.testdb.data.SiCliContatos> getSiCliContatoses() {
        return siCliContatoses;
    }

    public void setSiCliContatoses(Set<com.testdb.data.SiCliContatos> siCliContatoses) {
        this.siCliContatoses = siCliContatoses;
    }

    public Set<com.testdb.data.SiCliValores> getSiCliValoreses() {
        return siCliValoreses;
    }

    public void setSiCliValoreses(Set<com.testdb.data.SiCliValores> siCliValoreses) {
        this.siCliValoreses = siCliValoreses;
    }

}
