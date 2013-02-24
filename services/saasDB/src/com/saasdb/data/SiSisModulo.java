
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.SiSisModulo
 *  01/08/2013 14:21:13
 * 
 */
public class SiSisModulo {

    private Integer simodid;
    private SiSistema siSistema;
    private String simodcod;
    private String simodnome;
    private Set<com.saasdb.data.SiSisModDescrDet> siSisModDescrDets = new HashSet<com.saasdb.data.SiSisModDescrDet>();
    private Set<com.saasdb.data.SiCliModulo> siCliModulos = new HashSet<com.saasdb.data.SiCliModulo>();
    private Set<com.saasdb.data.SiSisModTabelas> siSisModTabelases = new HashSet<com.saasdb.data.SiSisModTabelas>();
    private Set<com.saasdb.data.SiSisModComponentes> siSisModComponenteses = new HashSet<com.saasdb.data.SiSisModComponentes>();

    public Integer getSimodid() {
        return simodid;
    }

    public void setSimodid(Integer simodid) {
        this.simodid = simodid;
    }

    public SiSistema getSiSistema() {
        return siSistema;
    }

    public void setSiSistema(SiSistema siSistema) {
        this.siSistema = siSistema;
    }

    public String getSimodcod() {
        return simodcod;
    }

    public void setSimodcod(String simodcod) {
        this.simodcod = simodcod;
    }

    public String getSimodnome() {
        return simodnome;
    }

    public void setSimodnome(String simodnome) {
        this.simodnome = simodnome;
    }

    public Set<com.saasdb.data.SiSisModDescrDet> getSiSisModDescrDets() {
        return siSisModDescrDets;
    }

    public void setSiSisModDescrDets(Set<com.saasdb.data.SiSisModDescrDet> siSisModDescrDets) {
        this.siSisModDescrDets = siSisModDescrDets;
    }

    public Set<com.saasdb.data.SiCliModulo> getSiCliModulos() {
        return siCliModulos;
    }

    public void setSiCliModulos(Set<com.saasdb.data.SiCliModulo> siCliModulos) {
        this.siCliModulos = siCliModulos;
    }

    public Set<com.saasdb.data.SiSisModTabelas> getSiSisModTabelases() {
        return siSisModTabelases;
    }

    public void setSiSisModTabelases(Set<com.saasdb.data.SiSisModTabelas> siSisModTabelases) {
        this.siSisModTabelases = siSisModTabelases;
    }

    public Set<com.saasdb.data.SiSisModComponentes> getSiSisModComponenteses() {
        return siSisModComponenteses;
    }

    public void setSiSisModComponenteses(Set<com.saasdb.data.SiSisModComponentes> siSisModComponenteses) {
        this.siSisModComponenteses = siSisModComponenteses;
    }

}
