
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.SiClientes
 *  01/23/2013 09:59:14
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
    private Set<com.postgresdb.data.SiCliContatos> siCliContatoses = new HashSet<com.postgresdb.data.SiCliContatos>();
    private Set<com.postgresdb.data.GeTbMunicipios> geTbMunicipioses = new HashSet<com.postgresdb.data.GeTbMunicipios>();
    private Set<com.postgresdb.data.GeSgGrupos> geSgGruposes = new HashSet<com.postgresdb.data.GeSgGrupos>();
    private Set<com.postgresdb.data.GeTbNatJurClasse> geTbNatJurClasses = new HashSet<com.postgresdb.data.GeTbNatJurClasse>();
    private Set<com.postgresdb.data.SiCliEnd> siCliEnds = new HashSet<com.postgresdb.data.SiCliEnd>();
    private Set<com.postgresdb.data.GeTbTiposDoc> geTbTiposDocs = new HashSet<com.postgresdb.data.GeTbTiposDoc>();
    private Set<com.postgresdb.data.SiCliTel> siCliTels = new HashSet<com.postgresdb.data.SiCliTel>();
    private Set<com.postgresdb.data.SiCliValores> siCliValoreses = new HashSet<com.postgresdb.data.SiCliValores>();
    private Set<com.postgresdb.data.GeTbTiposWeb> geTbTiposWebs = new HashSet<com.postgresdb.data.GeTbTiposWeb>();
    private Set<com.postgresdb.data.SiCliWeb> siCliWebs = new HashSet<com.postgresdb.data.SiCliWeb>();
    private Set<com.postgresdb.data.GeTbTiposEndereco> geTbTiposEnderecos = new HashSet<com.postgresdb.data.GeTbTiposEndereco>();
    private Set<com.postgresdb.data.GeTbTiposEmpresas> geTbTiposEmpresases = new HashSet<com.postgresdb.data.GeTbTiposEmpresas>();
    private Set<com.postgresdb.data.GeTbIndex> geTbIndexes = new HashSet<com.postgresdb.data.GeTbIndex>();
    private Set<com.postgresdb.data.GeTbTiposContrato> geTbTiposContratos = new HashSet<com.postgresdb.data.GeTbTiposContrato>();
    private Set<com.postgresdb.data.SiCliHisPgto> siCliHisPgtos = new HashSet<com.postgresdb.data.SiCliHisPgto>();
    private Set<com.postgresdb.data.GeTbTiposContato> geTbTiposContatos = new HashSet<com.postgresdb.data.GeTbTiposContato>();
    private Set<com.postgresdb.data.GeTbUf> geTbUfs = new HashSet<com.postgresdb.data.GeTbUf>();
    private Set<com.postgresdb.data.GeTbBancos> geTbBancoses = new HashSet<com.postgresdb.data.GeTbBancos>();
    private Set<com.postgresdb.data.GeCaEmpresas> geCaEmpresases = new HashSet<com.postgresdb.data.GeCaEmpresas>();
    private Set<com.postgresdb.data.GeTbTiposTelefone> geTbTiposTelefones = new HashSet<com.postgresdb.data.GeTbTiposTelefone>();
    private Set<com.postgresdb.data.SiCliModulo> siCliModulos = new HashSet<com.postgresdb.data.SiCliModulo>();
    private Set<com.postgresdb.data.GeTbTiposConta> geTbTiposContas = new HashSet<com.postgresdb.data.GeTbTiposConta>();
    private Set<com.postgresdb.data.GeTbQualificacaoSoc> geTbQualificacaoSocs = new HashSet<com.postgresdb.data.GeTbQualificacaoSoc>();
    private Set<com.postgresdb.data.SiCliContratos> siCliContratoses = new HashSet<com.postgresdb.data.SiCliContratos>();
    private Set<com.postgresdb.data.SiCliContas> siCliContases = new HashSet<com.postgresdb.data.SiCliContas>();

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

    public Set<com.postgresdb.data.SiCliContatos> getSiCliContatoses() {
        return siCliContatoses;
    }

    public void setSiCliContatoses(Set<com.postgresdb.data.SiCliContatos> siCliContatoses) {
        this.siCliContatoses = siCliContatoses;
    }

    public Set<com.postgresdb.data.GeTbMunicipios> getGeTbMunicipioses() {
        return geTbMunicipioses;
    }

    public void setGeTbMunicipioses(Set<com.postgresdb.data.GeTbMunicipios> geTbMunicipioses) {
        this.geTbMunicipioses = geTbMunicipioses;
    }

    public Set<com.postgresdb.data.GeSgGrupos> getGeSgGruposes() {
        return geSgGruposes;
    }

    public void setGeSgGruposes(Set<com.postgresdb.data.GeSgGrupos> geSgGruposes) {
        this.geSgGruposes = geSgGruposes;
    }

    public Set<com.postgresdb.data.GeTbNatJurClasse> getGeTbNatJurClasses() {
        return geTbNatJurClasses;
    }

    public void setGeTbNatJurClasses(Set<com.postgresdb.data.GeTbNatJurClasse> geTbNatJurClasses) {
        this.geTbNatJurClasses = geTbNatJurClasses;
    }

    public Set<com.postgresdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.postgresdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.postgresdb.data.GeTbTiposDoc> getGeTbTiposDocs() {
        return geTbTiposDocs;
    }

    public void setGeTbTiposDocs(Set<com.postgresdb.data.GeTbTiposDoc> geTbTiposDocs) {
        this.geTbTiposDocs = geTbTiposDocs;
    }

    public Set<com.postgresdb.data.SiCliTel> getSiCliTels() {
        return siCliTels;
    }

    public void setSiCliTels(Set<com.postgresdb.data.SiCliTel> siCliTels) {
        this.siCliTels = siCliTels;
    }

    public Set<com.postgresdb.data.SiCliValores> getSiCliValoreses() {
        return siCliValoreses;
    }

    public void setSiCliValoreses(Set<com.postgresdb.data.SiCliValores> siCliValoreses) {
        this.siCliValoreses = siCliValoreses;
    }

    public Set<com.postgresdb.data.GeTbTiposWeb> getGeTbTiposWebs() {
        return geTbTiposWebs;
    }

    public void setGeTbTiposWebs(Set<com.postgresdb.data.GeTbTiposWeb> geTbTiposWebs) {
        this.geTbTiposWebs = geTbTiposWebs;
    }

    public Set<com.postgresdb.data.SiCliWeb> getSiCliWebs() {
        return siCliWebs;
    }

    public void setSiCliWebs(Set<com.postgresdb.data.SiCliWeb> siCliWebs) {
        this.siCliWebs = siCliWebs;
    }

    public Set<com.postgresdb.data.GeTbTiposEndereco> getGeTbTiposEnderecos() {
        return geTbTiposEnderecos;
    }

    public void setGeTbTiposEnderecos(Set<com.postgresdb.data.GeTbTiposEndereco> geTbTiposEnderecos) {
        this.geTbTiposEnderecos = geTbTiposEnderecos;
    }

    public Set<com.postgresdb.data.GeTbTiposEmpresas> getGeTbTiposEmpresases() {
        return geTbTiposEmpresases;
    }

    public void setGeTbTiposEmpresases(Set<com.postgresdb.data.GeTbTiposEmpresas> geTbTiposEmpresases) {
        this.geTbTiposEmpresases = geTbTiposEmpresases;
    }

    public Set<com.postgresdb.data.GeTbIndex> getGeTbIndexes() {
        return geTbIndexes;
    }

    public void setGeTbIndexes(Set<com.postgresdb.data.GeTbIndex> geTbIndexes) {
        this.geTbIndexes = geTbIndexes;
    }

    public Set<com.postgresdb.data.GeTbTiposContrato> getGeTbTiposContratos() {
        return geTbTiposContratos;
    }

    public void setGeTbTiposContratos(Set<com.postgresdb.data.GeTbTiposContrato> geTbTiposContratos) {
        this.geTbTiposContratos = geTbTiposContratos;
    }

    public Set<com.postgresdb.data.SiCliHisPgto> getSiCliHisPgtos() {
        return siCliHisPgtos;
    }

    public void setSiCliHisPgtos(Set<com.postgresdb.data.SiCliHisPgto> siCliHisPgtos) {
        this.siCliHisPgtos = siCliHisPgtos;
    }

    public Set<com.postgresdb.data.GeTbTiposContato> getGeTbTiposContatos() {
        return geTbTiposContatos;
    }

    public void setGeTbTiposContatos(Set<com.postgresdb.data.GeTbTiposContato> geTbTiposContatos) {
        this.geTbTiposContatos = geTbTiposContatos;
    }

    public Set<com.postgresdb.data.GeTbUf> getGeTbUfs() {
        return geTbUfs;
    }

    public void setGeTbUfs(Set<com.postgresdb.data.GeTbUf> geTbUfs) {
        this.geTbUfs = geTbUfs;
    }

    public Set<com.postgresdb.data.GeTbBancos> getGeTbBancoses() {
        return geTbBancoses;
    }

    public void setGeTbBancoses(Set<com.postgresdb.data.GeTbBancos> geTbBancoses) {
        this.geTbBancoses = geTbBancoses;
    }

    public Set<com.postgresdb.data.GeCaEmpresas> getGeCaEmpresases() {
        return geCaEmpresases;
    }

    public void setGeCaEmpresases(Set<com.postgresdb.data.GeCaEmpresas> geCaEmpresases) {
        this.geCaEmpresases = geCaEmpresases;
    }

    public Set<com.postgresdb.data.GeTbTiposTelefone> getGeTbTiposTelefones() {
        return geTbTiposTelefones;
    }

    public void setGeTbTiposTelefones(Set<com.postgresdb.data.GeTbTiposTelefone> geTbTiposTelefones) {
        this.geTbTiposTelefones = geTbTiposTelefones;
    }

    public Set<com.postgresdb.data.SiCliModulo> getSiCliModulos() {
        return siCliModulos;
    }

    public void setSiCliModulos(Set<com.postgresdb.data.SiCliModulo> siCliModulos) {
        this.siCliModulos = siCliModulos;
    }

    public Set<com.postgresdb.data.GeTbTiposConta> getGeTbTiposContas() {
        return geTbTiposContas;
    }

    public void setGeTbTiposContas(Set<com.postgresdb.data.GeTbTiposConta> geTbTiposContas) {
        this.geTbTiposContas = geTbTiposContas;
    }

    public Set<com.postgresdb.data.GeTbQualificacaoSoc> getGeTbQualificacaoSocs() {
        return geTbQualificacaoSocs;
    }

    public void setGeTbQualificacaoSocs(Set<com.postgresdb.data.GeTbQualificacaoSoc> geTbQualificacaoSocs) {
        this.geTbQualificacaoSocs = geTbQualificacaoSocs;
    }

    public Set<com.postgresdb.data.SiCliContratos> getSiCliContratoses() {
        return siCliContratoses;
    }

    public void setSiCliContratoses(Set<com.postgresdb.data.SiCliContratos> siCliContratoses) {
        this.siCliContratoses = siCliContratoses;
    }

    public Set<com.postgresdb.data.SiCliContas> getSiCliContases() {
        return siCliContases;
    }

    public void setSiCliContases(Set<com.postgresdb.data.SiCliContas> siCliContases) {
        this.siCliContases = siCliContases;
    }

}
