
package com.saasdb.data;

import java.util.Date;


/**
 *  saasDB.SiCliHisPgto
 *  01/08/2013 14:21:13
 * 
 */
public class SiCliHisPgto {

    private Integer sichpid;
    private SiClientes siClientes;
    private Date sichpdtvenc;
    private Double sichpvalapagar;
    private Double sichpvaldesconto;
    private Double sichpvalmulta;
    private Date sichpdtpgto;
    private Double sichpvalpago;
    private String sichpstatus;
    private String sichpprotesto;

    public Integer getSichpid() {
        return sichpid;
    }

    public void setSichpid(Integer sichpid) {
        this.sichpid = sichpid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public Date getSichpdtvenc() {
        return sichpdtvenc;
    }

    public void setSichpdtvenc(Date sichpdtvenc) {
        this.sichpdtvenc = sichpdtvenc;
    }

    public Double getSichpvalapagar() {
        return sichpvalapagar;
    }

    public void setSichpvalapagar(Double sichpvalapagar) {
        this.sichpvalapagar = sichpvalapagar;
    }

    public Double getSichpvaldesconto() {
        return sichpvaldesconto;
    }

    public void setSichpvaldesconto(Double sichpvaldesconto) {
        this.sichpvaldesconto = sichpvaldesconto;
    }

    public Double getSichpvalmulta() {
        return sichpvalmulta;
    }

    public void setSichpvalmulta(Double sichpvalmulta) {
        this.sichpvalmulta = sichpvalmulta;
    }

    public Date getSichpdtpgto() {
        return sichpdtpgto;
    }

    public void setSichpdtpgto(Date sichpdtpgto) {
        this.sichpdtpgto = sichpdtpgto;
    }

    public Double getSichpvalpago() {
        return sichpvalpago;
    }

    public void setSichpvalpago(Double sichpvalpago) {
        this.sichpvalpago = sichpvalpago;
    }

    public String getSichpstatus() {
        return sichpstatus;
    }

    public void setSichpstatus(String sichpstatus) {
        this.sichpstatus = sichpstatus;
    }

    public String getSichpprotesto() {
        return sichpprotesto;
    }

    public void setSichpprotesto(String sichpprotesto) {
        this.sichpprotesto = sichpprotesto;
    }

}
