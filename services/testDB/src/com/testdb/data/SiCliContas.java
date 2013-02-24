
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.SiCliContas
 *  02/23/2013 10:50:05
 * 
 */
public class SiCliContas {

    private Integer siclictsid;
    private GeTbBancos geTbBancos;
    private SiClientes siClientes;
    private GeTbTiposConta geTbTiposConta;
    private String siclictsagencia;
    private String siclictsagdv;
    private String siclictsconta;
    private String siclictsctdv;
    private String siclictsstatus;
    private Date siclictsinivig;
    private Date siclictsfimvig;

    public Integer getSiclictsid() {
        return siclictsid;
    }

    public void setSiclictsid(Integer siclictsid) {
        this.siclictsid = siclictsid;
    }

    public GeTbBancos getGeTbBancos() {
        return geTbBancos;
    }

    public void setGeTbBancos(GeTbBancos geTbBancos) {
        this.geTbBancos = geTbBancos;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public GeTbTiposConta getGeTbTiposConta() {
        return geTbTiposConta;
    }

    public void setGeTbTiposConta(GeTbTiposConta geTbTiposConta) {
        this.geTbTiposConta = geTbTiposConta;
    }

    public String getSiclictsagencia() {
        return siclictsagencia;
    }

    public void setSiclictsagencia(String siclictsagencia) {
        this.siclictsagencia = siclictsagencia;
    }

    public String getSiclictsagdv() {
        return siclictsagdv;
    }

    public void setSiclictsagdv(String siclictsagdv) {
        this.siclictsagdv = siclictsagdv;
    }

    public String getSiclictsconta() {
        return siclictsconta;
    }

    public void setSiclictsconta(String siclictsconta) {
        this.siclictsconta = siclictsconta;
    }

    public String getSiclictsctdv() {
        return siclictsctdv;
    }

    public void setSiclictsctdv(String siclictsctdv) {
        this.siclictsctdv = siclictsctdv;
    }

    public String getSiclictsstatus() {
        return siclictsstatus;
    }

    public void setSiclictsstatus(String siclictsstatus) {
        this.siclictsstatus = siclictsstatus;
    }

    public Date getSiclictsinivig() {
        return siclictsinivig;
    }

    public void setSiclictsinivig(Date siclictsinivig) {
        this.siclictsinivig = siclictsinivig;
    }

    public Date getSiclictsfimvig() {
        return siclictsfimvig;
    }

    public void setSiclictsfimvig(Date siclictsfimvig) {
        this.siclictsfimvig = siclictsfimvig;
    }

}
