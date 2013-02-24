
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.SiCliContatos
 *  01/23/2013 09:59:13
 * 
 */
public class SiCliContatos {

    private Integer sicliconid;
    private com.postgresdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelatpid;
    private SiClientes siClientes;
    private com.postgresdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelbtpid;
    private String sicliconnome;
    private String sicliconcargo;
    private Date siclicondtnasc;
    private String sicliconteladdd;
    private String siclicontelano;
    private String siclicontelbddd;
    private String siclicontelbno;
    private String sicliconemail;
    private Set<com.postgresdb.data.SiCliContatosHist> siCliContatosHists = new HashSet<com.postgresdb.data.SiCliContatosHist>();

    public Integer getSicliconid() {
        return sicliconid;
    }

    public void setSicliconid(Integer sicliconid) {
        this.sicliconid = sicliconid;
    }

    public com.postgresdb.data.GeTbTiposTelefone getGeTbTiposTelefoneBySiclicontelatpid() {
        return geTbTiposTelefoneBySiclicontelatpid;
    }

    public void setGeTbTiposTelefoneBySiclicontelatpid(com.postgresdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelatpid) {
        this.geTbTiposTelefoneBySiclicontelatpid = geTbTiposTelefoneBySiclicontelatpid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public com.postgresdb.data.GeTbTiposTelefone getGeTbTiposTelefoneBySiclicontelbtpid() {
        return geTbTiposTelefoneBySiclicontelbtpid;
    }

    public void setGeTbTiposTelefoneBySiclicontelbtpid(com.postgresdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelbtpid) {
        this.geTbTiposTelefoneBySiclicontelbtpid = geTbTiposTelefoneBySiclicontelbtpid;
    }

    public String getSicliconnome() {
        return sicliconnome;
    }

    public void setSicliconnome(String sicliconnome) {
        this.sicliconnome = sicliconnome;
    }

    public String getSicliconcargo() {
        return sicliconcargo;
    }

    public void setSicliconcargo(String sicliconcargo) {
        this.sicliconcargo = sicliconcargo;
    }

    public Date getSiclicondtnasc() {
        return siclicondtnasc;
    }

    public void setSiclicondtnasc(Date siclicondtnasc) {
        this.siclicondtnasc = siclicondtnasc;
    }

    public String getSicliconteladdd() {
        return sicliconteladdd;
    }

    public void setSicliconteladdd(String sicliconteladdd) {
        this.sicliconteladdd = sicliconteladdd;
    }

    public String getSiclicontelano() {
        return siclicontelano;
    }

    public void setSiclicontelano(String siclicontelano) {
        this.siclicontelano = siclicontelano;
    }

    public String getSiclicontelbddd() {
        return siclicontelbddd;
    }

    public void setSiclicontelbddd(String siclicontelbddd) {
        this.siclicontelbddd = siclicontelbddd;
    }

    public String getSiclicontelbno() {
        return siclicontelbno;
    }

    public void setSiclicontelbno(String siclicontelbno) {
        this.siclicontelbno = siclicontelbno;
    }

    public String getSicliconemail() {
        return sicliconemail;
    }

    public void setSicliconemail(String sicliconemail) {
        this.sicliconemail = sicliconemail;
    }

    public Set<com.postgresdb.data.SiCliContatosHist> getSiCliContatosHists() {
        return siCliContatosHists;
    }

    public void setSiCliContatosHists(Set<com.postgresdb.data.SiCliContatosHist> siCliContatosHists) {
        this.siCliContatosHists = siCliContatosHists;
    }

}
