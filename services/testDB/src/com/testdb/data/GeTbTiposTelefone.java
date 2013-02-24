
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbTiposTelefone
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbTiposTelefone {

    private Integer getipotelid;
    private SiClientes siClientes;
    private String getipotelcod;
    private String getipoteldescr;
    private String getipotelstatus;
    private Date getipotelinivig;
    private Date getipotelfimvig;
    private Set<com.testdb.data.StEpFabricContatos> stEpFabricContatosesForStfacontelatpid = new HashSet<com.testdb.data.StEpFabricContatos>();
    private Set<com.testdb.data.SiCliContatos> siCliContatosesForSiclicontelbtpid = new HashSet<com.testdb.data.SiCliContatos>();
    private Set<com.testdb.data.StEpFabricWeb> stEpFabricWebs = new HashSet<com.testdb.data.StEpFabricWeb>();
    private Set<com.testdb.data.StEpFabricContatos> stEpFabricContatosesForStfacontelbtpid = new HashSet<com.testdb.data.StEpFabricContatos>();
    private Set<com.testdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelbtpid = new HashSet<com.testdb.data.GeCaEmpContatos>();
    private Set<com.testdb.data.StEpFabricTel> stEpFabricTels = new HashSet<com.testdb.data.StEpFabricTel>();
    private Set<com.testdb.data.SiCliContatos> siCliContatosesForSiclicontelatpid = new HashSet<com.testdb.data.SiCliContatos>();
    private Set<com.testdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelatpid = new HashSet<com.testdb.data.GeCaEmpContatos>();
    private Set<com.testdb.data.SiCliTel> siCliTels = new HashSet<com.testdb.data.SiCliTel>();
    private Set<com.testdb.data.GeCaEmpTel> geCaEmpTels = new HashSet<com.testdb.data.GeCaEmpTel>();

    public Integer getGetipotelid() {
        return getipotelid;
    }

    public void setGetipotelid(Integer getipotelid) {
        this.getipotelid = getipotelid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGetipotelcod() {
        return getipotelcod;
    }

    public void setGetipotelcod(String getipotelcod) {
        this.getipotelcod = getipotelcod;
    }

    public String getGetipoteldescr() {
        return getipoteldescr;
    }

    public void setGetipoteldescr(String getipoteldescr) {
        this.getipoteldescr = getipoteldescr;
    }

    public String getGetipotelstatus() {
        return getipotelstatus;
    }

    public void setGetipotelstatus(String getipotelstatus) {
        this.getipotelstatus = getipotelstatus;
    }

    public Date getGetipotelinivig() {
        return getipotelinivig;
    }

    public void setGetipotelinivig(Date getipotelinivig) {
        this.getipotelinivig = getipotelinivig;
    }

    public Date getGetipotelfimvig() {
        return getipotelfimvig;
    }

    public void setGetipotelfimvig(Date getipotelfimvig) {
        this.getipotelfimvig = getipotelfimvig;
    }

    public Set<com.testdb.data.StEpFabricContatos> getStEpFabricContatosesForStfacontelatpid() {
        return stEpFabricContatosesForStfacontelatpid;
    }

    public void setStEpFabricContatosesForStfacontelatpid(Set<com.testdb.data.StEpFabricContatos> stEpFabricContatosesForStfacontelatpid) {
        this.stEpFabricContatosesForStfacontelatpid = stEpFabricContatosesForStfacontelatpid;
    }

    public Set<com.testdb.data.SiCliContatos> getSiCliContatosesForSiclicontelbtpid() {
        return siCliContatosesForSiclicontelbtpid;
    }

    public void setSiCliContatosesForSiclicontelbtpid(Set<com.testdb.data.SiCliContatos> siCliContatosesForSiclicontelbtpid) {
        this.siCliContatosesForSiclicontelbtpid = siCliContatosesForSiclicontelbtpid;
    }

    public Set<com.testdb.data.StEpFabricWeb> getStEpFabricWebs() {
        return stEpFabricWebs;
    }

    public void setStEpFabricWebs(Set<com.testdb.data.StEpFabricWeb> stEpFabricWebs) {
        this.stEpFabricWebs = stEpFabricWebs;
    }

    public Set<com.testdb.data.StEpFabricContatos> getStEpFabricContatosesForStfacontelbtpid() {
        return stEpFabricContatosesForStfacontelbtpid;
    }

    public void setStEpFabricContatosesForStfacontelbtpid(Set<com.testdb.data.StEpFabricContatos> stEpFabricContatosesForStfacontelbtpid) {
        this.stEpFabricContatosesForStfacontelbtpid = stEpFabricContatosesForStfacontelbtpid;
    }

    public Set<com.testdb.data.GeCaEmpContatos> getGeCaEmpContatosesForGeempcontelbtpid() {
        return geCaEmpContatosesForGeempcontelbtpid;
    }

    public void setGeCaEmpContatosesForGeempcontelbtpid(Set<com.testdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelbtpid) {
        this.geCaEmpContatosesForGeempcontelbtpid = geCaEmpContatosesForGeempcontelbtpid;
    }

    public Set<com.testdb.data.StEpFabricTel> getStEpFabricTels() {
        return stEpFabricTels;
    }

    public void setStEpFabricTels(Set<com.testdb.data.StEpFabricTel> stEpFabricTels) {
        this.stEpFabricTels = stEpFabricTels;
    }

    public Set<com.testdb.data.SiCliContatos> getSiCliContatosesForSiclicontelatpid() {
        return siCliContatosesForSiclicontelatpid;
    }

    public void setSiCliContatosesForSiclicontelatpid(Set<com.testdb.data.SiCliContatos> siCliContatosesForSiclicontelatpid) {
        this.siCliContatosesForSiclicontelatpid = siCliContatosesForSiclicontelatpid;
    }

    public Set<com.testdb.data.GeCaEmpContatos> getGeCaEmpContatosesForGeempcontelatpid() {
        return geCaEmpContatosesForGeempcontelatpid;
    }

    public void setGeCaEmpContatosesForGeempcontelatpid(Set<com.testdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelatpid) {
        this.geCaEmpContatosesForGeempcontelatpid = geCaEmpContatosesForGeempcontelatpid;
    }

    public Set<com.testdb.data.SiCliTel> getSiCliTels() {
        return siCliTels;
    }

    public void setSiCliTels(Set<com.testdb.data.SiCliTel> siCliTels) {
        this.siCliTels = siCliTels;
    }

    public Set<com.testdb.data.GeCaEmpTel> getGeCaEmpTels() {
        return geCaEmpTels;
    }

    public void setGeCaEmpTels(Set<com.testdb.data.GeCaEmpTel> geCaEmpTels) {
        this.geCaEmpTels = geCaEmpTels;
    }

}
