
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiCliContatos
 *  02/23/2013 10:50:05
 * 
 */
public class SiCliContatos {

    private Integer sicliconid;
    private com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelatpid;
    private SiClientes siClientes;
    private com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelbtpid;
    private String sicliconnome;
    private String sicliconcargo;
    private Date siclicondtnasc;
    private String sicliconteladdd;
    private String siclicontelano;
    private String siclicontelbddd;
    private String siclicontelbno;
    private String sicliconemail;
    private Set<com.testdb.data.SiCliContatosHist> siCliContatosHists = new HashSet<com.testdb.data.SiCliContatosHist>();

    public Integer getSicliconid() {
        return sicliconid;
    }

    public void setSicliconid(Integer sicliconid) {
        this.sicliconid = sicliconid;
    }

    public com.testdb.data.GeTbTiposTelefone getGeTbTiposTelefoneBySiclicontelatpid() {
        return geTbTiposTelefoneBySiclicontelatpid;
    }

    public void setGeTbTiposTelefoneBySiclicontelatpid(com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelatpid) {
        this.geTbTiposTelefoneBySiclicontelatpid = geTbTiposTelefoneBySiclicontelatpid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public com.testdb.data.GeTbTiposTelefone getGeTbTiposTelefoneBySiclicontelbtpid() {
        return geTbTiposTelefoneBySiclicontelbtpid;
    }

    public void setGeTbTiposTelefoneBySiclicontelbtpid(com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneBySiclicontelbtpid) {
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

    public Set<com.testdb.data.SiCliContatosHist> getSiCliContatosHists() {
        return siCliContatosHists;
    }

    public void setSiCliContatosHists(Set<com.testdb.data.SiCliContatosHist> siCliContatosHists) {
        this.siCliContatosHists = siCliContatosHists;
    }

}
