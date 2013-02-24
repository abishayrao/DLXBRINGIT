
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbTiposTelefone
 *  01/08/2013 14:21:12
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
    private Set<com.saasdb.data.SiCliContatos> siCliContatosesForSiclicontelatpid = new HashSet<com.saasdb.data.SiCliContatos>();
    private Set<com.saasdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelatpid = new HashSet<com.saasdb.data.GeCaEmpContatos>();
    private Set<com.saasdb.data.GeCaEmpTel> geCaEmpTels = new HashSet<com.saasdb.data.GeCaEmpTel>();
    private Set<com.saasdb.data.SiCliTel> siCliTels = new HashSet<com.saasdb.data.SiCliTel>();
    private Set<com.saasdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelbtpid = new HashSet<com.saasdb.data.GeCaEmpContatos>();
    private Set<com.saasdb.data.SiCliContatos> siCliContatosesForSiclicontelbtpid = new HashSet<com.saasdb.data.SiCliContatos>();

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

    public Set<com.saasdb.data.SiCliContatos> getSiCliContatosesForSiclicontelatpid() {
        return siCliContatosesForSiclicontelatpid;
    }

    public void setSiCliContatosesForSiclicontelatpid(Set<com.saasdb.data.SiCliContatos> siCliContatosesForSiclicontelatpid) {
        this.siCliContatosesForSiclicontelatpid = siCliContatosesForSiclicontelatpid;
    }

    public Set<com.saasdb.data.GeCaEmpContatos> getGeCaEmpContatosesForGeempcontelatpid() {
        return geCaEmpContatosesForGeempcontelatpid;
    }

    public void setGeCaEmpContatosesForGeempcontelatpid(Set<com.saasdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelatpid) {
        this.geCaEmpContatosesForGeempcontelatpid = geCaEmpContatosesForGeempcontelatpid;
    }

    public Set<com.saasdb.data.GeCaEmpTel> getGeCaEmpTels() {
        return geCaEmpTels;
    }

    public void setGeCaEmpTels(Set<com.saasdb.data.GeCaEmpTel> geCaEmpTels) {
        this.geCaEmpTels = geCaEmpTels;
    }

    public Set<com.saasdb.data.SiCliTel> getSiCliTels() {
        return siCliTels;
    }

    public void setSiCliTels(Set<com.saasdb.data.SiCliTel> siCliTels) {
        this.siCliTels = siCliTels;
    }

    public Set<com.saasdb.data.GeCaEmpContatos> getGeCaEmpContatosesForGeempcontelbtpid() {
        return geCaEmpContatosesForGeempcontelbtpid;
    }

    public void setGeCaEmpContatosesForGeempcontelbtpid(Set<com.saasdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelbtpid) {
        this.geCaEmpContatosesForGeempcontelbtpid = geCaEmpContatosesForGeempcontelbtpid;
    }

    public Set<com.saasdb.data.SiCliContatos> getSiCliContatosesForSiclicontelbtpid() {
        return siCliContatosesForSiclicontelbtpid;
    }

    public void setSiCliContatosesForSiclicontelbtpid(Set<com.saasdb.data.SiCliContatos> siCliContatosesForSiclicontelbtpid) {
        this.siCliContatosesForSiclicontelbtpid = siCliContatosesForSiclicontelbtpid;
    }

}
