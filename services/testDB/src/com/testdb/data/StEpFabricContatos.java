
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.StEpFabricContatos
 *  02/23/2013 10:50:04
 * 
 */
public class StEpFabricContatos {

    private Integer stfaconid;
    private StEpFabricantes stEpFabricantes;
    private com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneByStfacontelatpid;
    private com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneByStfacontelbtpid;
    private String stfaconnome;
    private String stfaconcargo;
    private Date stfacondtnasc;
    private String stfaconteladdd;
    private String stfacontelano;
    private String stfaconemail;
    private String stfacontelbddd;
    private String stfacontelbno;

    public Integer getStfaconid() {
        return stfaconid;
    }

    public void setStfaconid(Integer stfaconid) {
        this.stfaconid = stfaconid;
    }

    public StEpFabricantes getStEpFabricantes() {
        return stEpFabricantes;
    }

    public void setStEpFabricantes(StEpFabricantes stEpFabricantes) {
        this.stEpFabricantes = stEpFabricantes;
    }

    public com.testdb.data.GeTbTiposTelefone getGeTbTiposTelefoneByStfacontelatpid() {
        return geTbTiposTelefoneByStfacontelatpid;
    }

    public void setGeTbTiposTelefoneByStfacontelatpid(com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneByStfacontelatpid) {
        this.geTbTiposTelefoneByStfacontelatpid = geTbTiposTelefoneByStfacontelatpid;
    }

    public com.testdb.data.GeTbTiposTelefone getGeTbTiposTelefoneByStfacontelbtpid() {
        return geTbTiposTelefoneByStfacontelbtpid;
    }

    public void setGeTbTiposTelefoneByStfacontelbtpid(com.testdb.data.GeTbTiposTelefone geTbTiposTelefoneByStfacontelbtpid) {
        this.geTbTiposTelefoneByStfacontelbtpid = geTbTiposTelefoneByStfacontelbtpid;
    }

    public String getStfaconnome() {
        return stfaconnome;
    }

    public void setStfaconnome(String stfaconnome) {
        this.stfaconnome = stfaconnome;
    }

    public String getStfaconcargo() {
        return stfaconcargo;
    }

    public void setStfaconcargo(String stfaconcargo) {
        this.stfaconcargo = stfaconcargo;
    }

    public Date getStfacondtnasc() {
        return stfacondtnasc;
    }

    public void setStfacondtnasc(Date stfacondtnasc) {
        this.stfacondtnasc = stfacondtnasc;
    }

    public String getStfaconteladdd() {
        return stfaconteladdd;
    }

    public void setStfaconteladdd(String stfaconteladdd) {
        this.stfaconteladdd = stfaconteladdd;
    }

    public String getStfacontelano() {
        return stfacontelano;
    }

    public void setStfacontelano(String stfacontelano) {
        this.stfacontelano = stfacontelano;
    }

    public String getStfaconemail() {
        return stfaconemail;
    }

    public void setStfaconemail(String stfaconemail) {
        this.stfaconemail = stfaconemail;
    }

    public String getStfacontelbddd() {
        return stfacontelbddd;
    }

    public void setStfacontelbddd(String stfacontelbddd) {
        this.stfacontelbddd = stfacontelbddd;
    }

    public String getStfacontelbno() {
        return stfacontelbno;
    }

    public void setStfacontelbno(String stfacontelbno) {
        this.stfacontelbno = stfacontelbno;
    }

}
