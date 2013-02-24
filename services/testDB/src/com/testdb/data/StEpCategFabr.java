
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.StEpCategFabr
 *  02/23/2013 10:50:06
 * 
 */
public class StEpCategFabr {

    private Integer stepcfid;
    private SiClientes siClientes;
    private String stepcfcod;
    private String stepcfnome;
    private String stepcfstatus;
    private Date stepcfinivig;
    private Date stepcffimvig;
    private Set<com.testdb.data.StEpFabricantes> stEpFabricanteses = new HashSet<com.testdb.data.StEpFabricantes>();

    public Integer getStepcfid() {
        return stepcfid;
    }

    public void setStepcfid(Integer stepcfid) {
        this.stepcfid = stepcfid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getStepcfcod() {
        return stepcfcod;
    }

    public void setStepcfcod(String stepcfcod) {
        this.stepcfcod = stepcfcod;
    }

    public String getStepcfnome() {
        return stepcfnome;
    }

    public void setStepcfnome(String stepcfnome) {
        this.stepcfnome = stepcfnome;
    }

    public String getStepcfstatus() {
        return stepcfstatus;
    }

    public void setStepcfstatus(String stepcfstatus) {
        this.stepcfstatus = stepcfstatus;
    }

    public Date getStepcfinivig() {
        return stepcfinivig;
    }

    public void setStepcfinivig(Date stepcfinivig) {
        this.stepcfinivig = stepcfinivig;
    }

    public Date getStepcffimvig() {
        return stepcffimvig;
    }

    public void setStepcffimvig(Date stepcffimvig) {
        this.stepcffimvig = stepcffimvig;
    }

    public Set<com.testdb.data.StEpFabricantes> getStEpFabricanteses() {
        return stEpFabricanteses;
    }

    public void setStEpFabricanteses(Set<com.testdb.data.StEpFabricantes> stEpFabricanteses) {
        this.stEpFabricanteses = stEpFabricanteses;
    }

}
