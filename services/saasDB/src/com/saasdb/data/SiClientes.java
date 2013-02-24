
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.SiClientes
 *  01/08/2013 14:21:13
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
    private Set<com.saasdb.data.SiCliContatos> siCliContatoses = new HashSet<com.saasdb.data.SiCliContatos>();
    private Set<com.saasdb.data.GeTbMunicipios> geTbMunicipioses = new HashSet<com.saasdb.data.GeTbMunicipios>();
    private Set<com.saasdb.data.GeSgGrupos> geSgGruposes = new HashSet<com.saasdb.data.GeSgGrupos>();
    private Set<com.saasdb.data.GeTbNatJurClasse> geTbNatJurClasses = new HashSet<com.saasdb.data.GeTbNatJurClasse>();
    private Set<com.saasdb.data.SiCliEnd> siCliEnds = new HashSet<com.saasdb.data.SiCliEnd>();
    private Set<com.saasdb.data.GeTbTiposDoc> geTbTiposDocs = new HashSet<com.saasdb.data.GeTbTiposDoc>();
    private Set<com.saasdb.data.SiCliTel> siCliTels = new HashSet<com.saasdb.data.SiCliTel>();
    private Set<com.saasdb.data.SiCliValores> siCliValoreses = new HashSet<com.saasdb.data.SiCliValores>();
    private Set<com.saasdb.data.GeTbTiposWeb> geTbTiposWebs = new HashSet<com.saasdb.data.GeTbTiposWeb>();
    private Set<com.saasdb.data.SiCliWeb> siCliWebs = new HashSet<com.saasdb.data.SiCliWeb>();
    private Set<com.saasdb.data.GeTbTiposEndereco> geTbTiposEnderecos = new HashSet<com.saasdb.data.GeTbTiposEndereco>();
    private Set<com.saasdb.data.GeTbTiposEmpresas> geTbTiposEmpresases = new HashSet<com.saasdb.data.GeTbTiposEmpresas>();
    private Set<com.saasdb.data.GeTbIndex> geTbIndexes = new HashSet<com.saasdb.data.GeTbIndex>();
    private Set<com.saasdb.data.GeTbTiposContrato> geTbTiposContratos = new HashSet<com.saasdb.data.GeTbTiposContrato>();
    private Set<com.saasdb.data.SiCliHisPgto> siCliHisPgtos = new HashSet<com.saasdb.data.SiCliHisPgto>();
    private Set<com.saasdb.data.GeTbTiposContato> geTbTiposContatos = new HashSet<com.saasdb.data.GeTbTiposContato>();
    private Set<com.saasdb.data.GeTbUf> geTbUfs = new HashSet<com.saasdb.data.GeTbUf>();
    private Set<com.saasdb.data.GeTbBancos> geTbBancoses = new HashSet<com.saasdb.data.GeTbBancos>();
    private Set<com.saasdb.data.GeCaEmpresas> geCaEmpresases = new HashSet<com.saasdb.data.GeCaEmpresas>();
    private Set<com.saasdb.data.GeTbTiposTelefone> geTbTiposTelefones = new HashSet<com.saasdb.data.GeTbTiposTelefone>();
    private Set<com.saasdb.data.SiCliModulo> siCliModulos = new HashSet<com.saasdb.data.SiCliModulo>();
    private Set<com.saasdb.data.GeTbTiposConta> geTbTiposContas = new HashSet<com.saasdb.data.GeTbTiposConta>();
    private Set<com.saasdb.data.GeTbQualificacaoSoc> geTbQualificacaoSocs = new HashSet<com.saasdb.data.GeTbQualificacaoSoc>();
    private Set<com.saasdb.data.SiCliContratos> siCliContratoses = new HashSet<com.saasdb.data.SiCliContratos>();
    private Set<com.saasdb.data.SiCliContas> siCliContases = new HashSet<com.saasdb.data.SiCliContas>();

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

    public Set<com.saasdb.data.SiCliContatos> getSiCliContatoses() {
        return siCliContatoses;
    }

    public void setSiCliContatoses(Set<com.saasdb.data.SiCliContatos> siCliContatoses) {
        this.siCliContatoses = siCliContatoses;
    }

    public Set<com.saasdb.data.GeTbMunicipios> getGeTbMunicipioses() {
        return geTbMunicipioses;
    }

    public void setGeTbMunicipioses(Set<com.saasdb.data.GeTbMunicipios> geTbMunicipioses) {
        this.geTbMunicipioses = geTbMunicipioses;
    }

    public Set<com.saasdb.data.GeSgGrupos> getGeSgGruposes() {
        return geSgGruposes;
    }

    public void setGeSgGruposes(Set<com.saasdb.data.GeSgGrupos> geSgGruposes) {
        this.geSgGruposes = geSgGruposes;
    }

    public Set<com.saasdb.data.GeTbNatJurClasse> getGeTbNatJurClasses() {
        return geTbNatJurClasses;
    }

    public void setGeTbNatJurClasses(Set<com.saasdb.data.GeTbNatJurClasse> geTbNatJurClasses) {
        this.geTbNatJurClasses = geTbNatJurClasses;
    }

    public Set<com.saasdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.saasdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.saasdb.data.GeTbTiposDoc> getGeTbTiposDocs() {
        return geTbTiposDocs;
    }

    public void setGeTbTiposDocs(Set<com.saasdb.data.GeTbTiposDoc> geTbTiposDocs) {
        this.geTbTiposDocs = geTbTiposDocs;
    }

    public Set<com.saasdb.data.SiCliTel> getSiCliTels() {
        return siCliTels;
    }

    public void setSiCliTels(Set<com.saasdb.data.SiCliTel> siCliTels) {
        this.siCliTels = siCliTels;
    }

    public Set<com.saasdb.data.SiCliValores> getSiCliValoreses() {
        return siCliValoreses;
    }

    public void setSiCliValoreses(Set<com.saasdb.data.SiCliValores> siCliValoreses) {
        this.siCliValoreses = siCliValoreses;
    }

    public Set<com.saasdb.data.GeTbTiposWeb> getGeTbTiposWebs() {
        return geTbTiposWebs;
    }

    public void setGeTbTiposWebs(Set<com.saasdb.data.GeTbTiposWeb> geTbTiposWebs) {
        this.geTbTiposWebs = geTbTiposWebs;
    }

    public Set<com.saasdb.data.SiCliWeb> getSiCliWebs() {
        return siCliWebs;
    }

    public void setSiCliWebs(Set<com.saasdb.data.SiCliWeb> siCliWebs) {
        this.siCliWebs = siCliWebs;
    }

    public Set<com.saasdb.data.GeTbTiposEndereco> getGeTbTiposEnderecos() {
        return geTbTiposEnderecos;
    }

    public void setGeTbTiposEnderecos(Set<com.saasdb.data.GeTbTiposEndereco> geTbTiposEnderecos) {
        this.geTbTiposEnderecos = geTbTiposEnderecos;
    }

    public Set<com.saasdb.data.GeTbTiposEmpresas> getGeTbTiposEmpresases() {
        return geTbTiposEmpresases;
    }

    public void setGeTbTiposEmpresases(Set<com.saasdb.data.GeTbTiposEmpresas> geTbTiposEmpresases) {
        this.geTbTiposEmpresases = geTbTiposEmpresases;
    }

    public Set<com.saasdb.data.GeTbIndex> getGeTbIndexes() {
        return geTbIndexes;
    }

    public void setGeTbIndexes(Set<com.saasdb.data.GeTbIndex> geTbIndexes) {
        this.geTbIndexes = geTbIndexes;
    }

    public Set<com.saasdb.data.GeTbTiposContrato> getGeTbTiposContratos() {
        return geTbTiposContratos;
    }

    public void setGeTbTiposContratos(Set<com.saasdb.data.GeTbTiposContrato> geTbTiposContratos) {
        this.geTbTiposContratos = geTbTiposContratos;
    }

    public Set<com.saasdb.data.SiCliHisPgto> getSiCliHisPgtos() {
        return siCliHisPgtos;
    }

    public void setSiCliHisPgtos(Set<com.saasdb.data.SiCliHisPgto> siCliHisPgtos) {
        this.siCliHisPgtos = siCliHisPgtos;
    }

    public Set<com.saasdb.data.GeTbTiposContato> getGeTbTiposContatos() {
        return geTbTiposContatos;
    }

    public void setGeTbTiposContatos(Set<com.saasdb.data.GeTbTiposContato> geTbTiposContatos) {
        this.geTbTiposContatos = geTbTiposContatos;
    }

    public Set<com.saasdb.data.GeTbUf> getGeTbUfs() {
        return geTbUfs;
    }

    public void setGeTbUfs(Set<com.saasdb.data.GeTbUf> geTbUfs) {
        this.geTbUfs = geTbUfs;
    }

    public Set<com.saasdb.data.GeTbBancos> getGeTbBancoses() {
        return geTbBancoses;
    }

    public void setGeTbBancoses(Set<com.saasdb.data.GeTbBancos> geTbBancoses) {
        this.geTbBancoses = geTbBancoses;
    }

    public Set<com.saasdb.data.GeCaEmpresas> getGeCaEmpresases() {
        return geCaEmpresases;
    }

    public void setGeCaEmpresases(Set<com.saasdb.data.GeCaEmpresas> geCaEmpresases) {
        this.geCaEmpresases = geCaEmpresases;
    }

    public Set<com.saasdb.data.GeTbTiposTelefone> getGeTbTiposTelefones() {
        return geTbTiposTelefones;
    }

    public void setGeTbTiposTelefones(Set<com.saasdb.data.GeTbTiposTelefone> geTbTiposTelefones) {
        this.geTbTiposTelefones = geTbTiposTelefones;
    }

    public Set<com.saasdb.data.SiCliModulo> getSiCliModulos() {
        return siCliModulos;
    }

    public void setSiCliModulos(Set<com.saasdb.data.SiCliModulo> siCliModulos) {
        this.siCliModulos = siCliModulos;
    }

    public Set<com.saasdb.data.GeTbTiposConta> getGeTbTiposContas() {
        return geTbTiposContas;
    }

    public void setGeTbTiposContas(Set<com.saasdb.data.GeTbTiposConta> geTbTiposContas) {
        this.geTbTiposContas = geTbTiposContas;
    }

    public Set<com.saasdb.data.GeTbQualificacaoSoc> getGeTbQualificacaoSocs() {
        return geTbQualificacaoSocs;
    }

    public void setGeTbQualificacaoSocs(Set<com.saasdb.data.GeTbQualificacaoSoc> geTbQualificacaoSocs) {
        this.geTbQualificacaoSocs = geTbQualificacaoSocs;
    }

    public Set<com.saasdb.data.SiCliContratos> getSiCliContratoses() {
        return siCliContratoses;
    }

    public void setSiCliContratoses(Set<com.saasdb.data.SiCliContratos> siCliContratoses) {
        this.siCliContratoses = siCliContratoses;
    }

    public Set<com.saasdb.data.SiCliContas> getSiCliContases() {
        return siCliContases;
    }

    public void setSiCliContases(Set<com.saasdb.data.SiCliContas> siCliContases) {
        this.siCliContases = siCliContases;
    }

}
