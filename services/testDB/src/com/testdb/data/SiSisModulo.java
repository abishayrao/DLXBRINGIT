
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiSisModulo
 *  02/23/2013 10:50:05
 * 
 */
public class SiSisModulo {

    private Integer simodid;
    private SiSistema siSistema;
    private String simodcod;
    private String simodnome;
    private Set<com.testdb.data.SiSisModDescrDet> siSisModDescrDets = new HashSet<com.testdb.data.SiSisModDescrDet>();
    private Set<com.testdb.data.SiSisModComponentes> siSisModComponenteses = new HashSet<com.testdb.data.SiSisModComponentes>();
    private Set<com.testdb.data.SiCliModulo> siCliModulos = new HashSet<com.testdb.data.SiCliModulo>();
    private Set<com.testdb.data.SiSisModTabelas> siSisModTabelases = new HashSet<com.testdb.data.SiSisModTabelas>();

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

    public Set<com.testdb.data.SiSisModDescrDet> getSiSisModDescrDets() {
        return siSisModDescrDets;
    }

    public void setSiSisModDescrDets(Set<com.testdb.data.SiSisModDescrDet> siSisModDescrDets) {
        this.siSisModDescrDets = siSisModDescrDets;
    }

    public Set<com.testdb.data.SiSisModComponentes> getSiSisModComponenteses() {
        return siSisModComponenteses;
    }

    public void setSiSisModComponenteses(Set<com.testdb.data.SiSisModComponentes> siSisModComponenteses) {
        this.siSisModComponenteses = siSisModComponenteses;
    }

    public Set<com.testdb.data.SiCliModulo> getSiCliModulos() {
        return siCliModulos;
    }

    public void setSiCliModulos(Set<com.testdb.data.SiCliModulo> siCliModulos) {
        this.siCliModulos = siCliModulos;
    }

    public Set<com.testdb.data.SiSisModTabelas> getSiSisModTabelases() {
        return siSisModTabelases;
    }

    public void setSiSisModTabelases(Set<com.testdb.data.SiSisModTabelas> siSisModTabelases) {
        this.siSisModTabelases = siSisModTabelases;
    }

}
