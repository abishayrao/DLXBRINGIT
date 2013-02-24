
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.SiCliHisPgto
 *  02/23/2013 10:50:06
 * 
 */
public class SiCliHisPgto {

    private Integer sichpid;
    private SiClientes siClientes;
    private Date sichpdtvenc;
    private Float sichpvalapagar;
    private Float sichpvaldesconto;
    private Float sichpvalmulta;
    private Date sichpdtpgto;
    private Float sichpvalpago;
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

    public Float getSichpvalapagar() {
        return sichpvalapagar;
    }

    public void setSichpvalapagar(Float sichpvalapagar) {
        this.sichpvalapagar = sichpvalapagar;
    }

    public Float getSichpvaldesconto() {
        return sichpvaldesconto;
    }

    public void setSichpvaldesconto(Float sichpvaldesconto) {
        this.sichpvaldesconto = sichpvaldesconto;
    }

    public Float getSichpvalmulta() {
        return sichpvalmulta;
    }

    public void setSichpvalmulta(Float sichpvalmulta) {
        this.sichpvalmulta = sichpvalmulta;
    }

    public Date getSichpdtpgto() {
        return sichpdtpgto;
    }

    public void setSichpdtpgto(Date sichpdtpgto) {
        this.sichpdtpgto = sichpdtpgto;
    }

    public Float getSichpvalpago() {
        return sichpvalpago;
    }

    public void setSichpvalpago(Float sichpvalpago) {
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
