
package com.postgresdb.data;



/**
 *  postgresDB.SiCliTel
 *  01/23/2013 09:59:14
 * 
 */
public class SiCliTel {

    private Integer siclitelid;
    private SiClientes siClientes;
    private GeTbTiposTelefone geTbTiposTelefone;
    private String siclitelddd;
    private String siclitelno;
    private String siclitelramal;

    public Integer getSiclitelid() {
        return siclitelid;
    }

    public void setSiclitelid(Integer siclitelid) {
        this.siclitelid = siclitelid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public GeTbTiposTelefone getGeTbTiposTelefone() {
        return geTbTiposTelefone;
    }

    public void setGeTbTiposTelefone(GeTbTiposTelefone geTbTiposTelefone) {
        this.geTbTiposTelefone = geTbTiposTelefone;
    }

    public String getSiclitelddd() {
        return siclitelddd;
    }

    public void setSiclitelddd(String siclitelddd) {
        this.siclitelddd = siclitelddd;
    }

    public String getSiclitelno() {
        return siclitelno;
    }

    public void setSiclitelno(String siclitelno) {
        this.siclitelno = siclitelno;
    }

    public String getSiclitelramal() {
        return siclitelramal;
    }

    public void setSiclitelramal(String siclitelramal) {
        this.siclitelramal = siclitelramal;
    }

}
