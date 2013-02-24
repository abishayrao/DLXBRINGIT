
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbUf
 *  02/23/2013 10:50:04
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
    private Set<com.testdb.data.StEpFabricEnd> stEpFabricEnds = new HashSet<com.testdb.data.StEpFabricEnd>();
    private Set<com.testdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsorguf = new HashSet<com.testdb.data.GeCaEmpSocios>();
    private Set<com.testdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.testdb.data.GeCaEmpLotacao>();
    private Set<com.testdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfregprofuf = new HashSet<com.testdb.data.GeCaEmpDocsPf>();
    private Set<com.testdb.data.SiCliEnd> siCliEnds = new HashSet<com.testdb.data.SiCliEnd>();
    private Set<com.testdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsouf = new HashSet<com.testdb.data.GeCaEmpSocios>();
    private Set<com.testdb.data.SiCliDocsPf> siCliDocsPfs = new HashSet<com.testdb.data.SiCliDocsPf>();
    private Set<com.testdb.data.GeTbMunicipios> geTbMunicipioses = new HashSet<com.testdb.data.GeTbMunicipios>();
    private Set<com.testdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfrguf = new HashSet<com.testdb.data.GeCaEmpDocsPf>();
    private Set<com.testdb.data.GeCaEmpEnd> geCaEmpEnds = new HashSet<com.testdb.data.GeCaEmpEnd>();

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

    public Set<com.testdb.data.StEpFabricEnd> getStEpFabricEnds() {
        return stEpFabricEnds;
    }

    public void setStEpFabricEnds(Set<com.testdb.data.StEpFabricEnd> stEpFabricEnds) {
        this.stEpFabricEnds = stEpFabricEnds;
    }

    public Set<com.testdb.data.GeCaEmpSocios> getGeCaEmpSociosesForGeempsorguf() {
        return geCaEmpSociosesForGeempsorguf;
    }

    public void setGeCaEmpSociosesForGeempsorguf(Set<com.testdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsorguf) {
        this.geCaEmpSociosesForGeempsorguf = geCaEmpSociosesForGeempsorguf;
    }

    public Set<com.testdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.testdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.testdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfsForGeempdpfregprofuf() {
        return geCaEmpDocsPfsForGeempdpfregprofuf;
    }

    public void setGeCaEmpDocsPfsForGeempdpfregprofuf(Set<com.testdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfregprofuf) {
        this.geCaEmpDocsPfsForGeempdpfregprofuf = geCaEmpDocsPfsForGeempdpfregprofuf;
    }

    public Set<com.testdb.data.SiCliEnd> getSiCliEnds() {
        return siCliEnds;
    }

    public void setSiCliEnds(Set<com.testdb.data.SiCliEnd> siCliEnds) {
        this.siCliEnds = siCliEnds;
    }

    public Set<com.testdb.data.GeCaEmpSocios> getGeCaEmpSociosesForGeempsouf() {
        return geCaEmpSociosesForGeempsouf;
    }

    public void setGeCaEmpSociosesForGeempsouf(Set<com.testdb.data.GeCaEmpSocios> geCaEmpSociosesForGeempsouf) {
        this.geCaEmpSociosesForGeempsouf = geCaEmpSociosesForGeempsouf;
    }

    public Set<com.testdb.data.SiCliDocsPf> getSiCliDocsPfs() {
        return siCliDocsPfs;
    }

    public void setSiCliDocsPfs(Set<com.testdb.data.SiCliDocsPf> siCliDocsPfs) {
        this.siCliDocsPfs = siCliDocsPfs;
    }

    public Set<com.testdb.data.GeTbMunicipios> getGeTbMunicipioses() {
        return geTbMunicipioses;
    }

    public void setGeTbMunicipioses(Set<com.testdb.data.GeTbMunicipios> geTbMunicipioses) {
        this.geTbMunicipioses = geTbMunicipioses;
    }

    public Set<com.testdb.data.GeCaEmpDocsPf> getGeCaEmpDocsPfsForGeempdpfrguf() {
        return geCaEmpDocsPfsForGeempdpfrguf;
    }

    public void setGeCaEmpDocsPfsForGeempdpfrguf(Set<com.testdb.data.GeCaEmpDocsPf> geCaEmpDocsPfsForGeempdpfrguf) {
        this.geCaEmpDocsPfsForGeempdpfrguf = geCaEmpDocsPfsForGeempdpfrguf;
    }

    public Set<com.testdb.data.GeCaEmpEnd> getGeCaEmpEnds() {
        return geCaEmpEnds;
    }

    public void setGeCaEmpEnds(Set<com.testdb.data.GeCaEmpEnd> geCaEmpEnds) {
        this.geCaEmpEnds = geCaEmpEnds;
    }

}
