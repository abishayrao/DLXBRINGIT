
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbTiposTelefone
 *  01/23/2013 09:59:14
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
    private Set<com.postgresdb.data.SiCliContatos> siCliContatosesForSiclicontelatpid = new HashSet<com.postgresdb.data.SiCliContatos>();
    private Set<com.postgresdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelatpid = new HashSet<com.postgresdb.data.GeCaEmpContatos>();
    private Set<com.postgresdb.data.GeCaEmpTel> geCaEmpTels = new HashSet<com.postgresdb.data.GeCaEmpTel>();
    private Set<com.postgresdb.data.SiCliTel> siCliTels = new HashSet<com.postgresdb.data.SiCliTel>();
    private Set<com.postgresdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelbtpid = new HashSet<com.postgresdb.data.GeCaEmpContatos>();
    private Set<com.postgresdb.data.SiCliContatos> siCliContatosesForSiclicontelbtpid = new HashSet<com.postgresdb.data.SiCliContatos>();

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

    public Set<com.postgresdb.data.SiCliContatos> getSiCliContatosesForSiclicontelatpid() {
        return siCliContatosesForSiclicontelatpid;
    }

    public void setSiCliContatosesForSiclicontelatpid(Set<com.postgresdb.data.SiCliContatos> siCliContatosesForSiclicontelatpid) {
        this.siCliContatosesForSiclicontelatpid = siCliContatosesForSiclicontelatpid;
    }

    public Set<com.postgresdb.data.GeCaEmpContatos> getGeCaEmpContatosesForGeempcontelatpid() {
        return geCaEmpContatosesForGeempcontelatpid;
    }

    public void setGeCaEmpContatosesForGeempcontelatpid(Set<com.postgresdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelatpid) {
        this.geCaEmpContatosesForGeempcontelatpid = geCaEmpContatosesForGeempcontelatpid;
    }

    public Set<com.postgresdb.data.GeCaEmpTel> getGeCaEmpTels() {
        return geCaEmpTels;
    }

    public void setGeCaEmpTels(Set<com.postgresdb.data.GeCaEmpTel> geCaEmpTels) {
        this.geCaEmpTels = geCaEmpTels;
    }

    public Set<com.postgresdb.data.SiCliTel> getSiCliTels() {
        return siCliTels;
    }

    public void setSiCliTels(Set<com.postgresdb.data.SiCliTel> siCliTels) {
        this.siCliTels = siCliTels;
    }

    public Set<com.postgresdb.data.GeCaEmpContatos> getGeCaEmpContatosesForGeempcontelbtpid() {
        return geCaEmpContatosesForGeempcontelbtpid;
    }

    public void setGeCaEmpContatosesForGeempcontelbtpid(Set<com.postgresdb.data.GeCaEmpContatos> geCaEmpContatosesForGeempcontelbtpid) {
        this.geCaEmpContatosesForGeempcontelbtpid = geCaEmpContatosesForGeempcontelbtpid;
    }

    public Set<com.postgresdb.data.SiCliContatos> getSiCliContatosesForSiclicontelbtpid() {
        return siCliContatosesForSiclicontelbtpid;
    }

    public void setSiCliContatosesForSiclicontelbtpid(Set<com.postgresdb.data.SiCliContatos> siCliContatosesForSiclicontelbtpid) {
        this.siCliContatosesForSiclicontelbtpid = siCliContatosesForSiclicontelbtpid;
    }

}
