
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbUf
 *  01/08/2013 14:21:13
 * 
 */
public class GeTbUf {

    private Integer geufcid;
    private SiClientes siClientes;
    private String geufcod;
    private String geufnome;
    private String geufstatus;
    private Date geufinivig;
    private Date geuffimvig;
    private Set<com.saasdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsouf = new HashSet<com.saasdb.data.GeCaEmpSocios>();
    private Set<com.saasdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfregprofuf = new HashSet<com.saasdb.data.GeCaEmpDocsPf>();
    private Set<com.saasdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.saasdb.data.GeCaEmpEnd>();
    private Set<com.saasdb.data.SiCliDocsPf> siCliDocsPfs = new HashSet<com.saasdb.data.SiCliDocsPf>();
    private Set<com.saasdb.data.GeTbMunicipios> geTbMunicipioses = new HashSet<com.saasdb.data.GeTbMunicipios>();
    private Set<com.saasdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsorguf = new HashSet<com.saasdb.data.GeCaEmpSocios>();
    private Set<com.saasdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.saasdb.data.GeCaEmpLotacao>();
    private Set<com.saasdb.data.SiCliEnd> siCliEnds = new HashSet<com.saasdb.data.SiCliEnd>();
    private Set<com.saasdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfrguf = new HashSet<com.saasdb.data.GeCaEmpDocsPf>();

    public Integer getGeufcid() {
        return geufcid;
    }

    public void setGeufcid(Integer geufcid) {
        this.geufcid = geufcid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGeufcod() {
        return geufcod;
    }

    public void setGeufcod(String geufcod) {
        this.geufcod = geufcod;
    }

    public String getGeufnome() {
        return geufnome;
    }

    public void setGeufnome(String geufnome) {
        this.geufnome = geufnome;
    }

    public String getGeufstatus() {
        return geufstatus;
    }

    public void setGeufstatus(String geufstatus) {
        this.geufstatus = geufstatus;
    }

    public Date getGeufinivig() {
        return geufinivig;
    }

    public void setGeufinivig(Date geufinivig) {
        this.geufinivig = geufinivig;
    }

    public Date getGeuffimvig() {
        return geuffimvig;
    }

    public void setGeuffimvig(Date geuffimvig) {
        this.geuffimvig = geuffimvig;
    }

    public Set<com.saasdb.data.GeCaEmpSocios> getGeCaEmpSociosesForGeempsouf() {
        return geCaEmpSociosesForGeempsouf;
    }

    public void setGeCaEmpSociosesForGeempsouf(Set<com.saasdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsouf) {
        this.geCaEmpSociosesForGeempsouf = geCaEmpSociosesForGeempsouf;
    }

    public Set<com.saasdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfsForGeempdpfregprofuf() {
        return geCaEmpDocsPfsForGeempdpfregprofuf;
    }

    public void setGeCaEmpDocsPfsForGeempdpfregprofuf(Set<com.saasdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfregprofuf) {
        this.geCaEmpDocsPfsForGeempdpfregprofuf = geCaEmpDocsPfsForGeempdpfregprofuf;
    }

    public Set<com.saasdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.saasdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

    public Set<com.saasdb.data.SiCliDocsPf> getSiCliDocsPfs() {
        return siCliDocsPfs;
    }

    public void setSiCliDocsPfs(Set<com.saasdb.data.SiCliDocsPf> siCliDocsPfs) {
        this.siCliDocsPfs = siCliDocsPfs;
    }

    public Set<com.saasdb.data.GeTbMunicipios> getGeTbMunicipioses() {
        return geTbMunicipioses;
    }

    public void setGeTbMunicipioses(Set<com.saasdb.data.GeTbMunicipios> geTbMunicipioses) {
        this.geTbMunicipioses = geTbMunicipioses;
    }

    public Set<com.saasdb.data.GeCaEmpSocios> getGeCaEmpSociosesForGeempsorguf() {
        return geCaEmpSociosesForGeempsorguf;
    }

    public void setGeCaEmpSociosesForGeempsorguf(Set<com.saasdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsorguf) {
        this.geCaEmpSociosesForGeempsorguf = geCaEmpSociosesForGeempsorguf;
    }

    public Set<com.saasdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.saasdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.saasdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.saasdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.saasdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfsForGeempdpfrguf() {
        return geCaEmpDocsPfsForGeempdpfrguf;
    }

    public void setGeCaEmpDocsPfsForGeempdpfrguf(Set<com.saasdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfrguf) {
        this.geCaEmpDocsPfsForGeempdpfrguf = geCaEmpDocsPfsForGeempdpfrguf;
    }

}
