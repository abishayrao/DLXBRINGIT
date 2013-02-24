
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.SiSisModulo
 *  01/23/2013 09:59:13
 * 
 */
public class SiSisModulo {

    private Integer simodid;
    private SiSistema siSistema;
    private String simodcod;
    private String simodnome;
    private Set<com.postgresdb.data.SiSisModDescrDet> siSisModDescrDets = new HashSet<com.postgresdb.data.SiSisModDescrDet>();
    private Set<com.postgresdb.data.SiCliModulo> siCliModulos = new HashSet<com.postgresdb.data.SiCliModulo>();
    private Set<com.postgresdb.data.SiSisModTabelas> siSisModTabelases = new HashSet<com.postgresdb.data.SiSisModTabelas>();
    private Set<com.postgresdb.data.SiSisModComponentes> siSisModComponenteses = new HashSet<com.postgresdb.data.SiSisModComponentes>();

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

    public Set<com.postgresdb.data.SiSisModDescrDet> getSiSisModDescrDets() {
        return siSisModDescrDets;
    }

    public void setSiSisModDescrDets(Set<com.postgresdb.data.SiSisModDescrDet> siSisModDescrDets) {
        this.siSisModDescrDets = siSisModDescrDets;
    }

    public Set<com.postgresdb.data.SiCliModulo> getSiCliModulos() {
        return siCliModulos;
    }

    public void setSiCliModulos(Set<com.postgresdb.data.SiCliModulo> siCliModulos) {
        this.siCliModulos = siCliModulos;
    }

    public Set<com.postgresdb.data.SiSisModTabelas> getSiSisModTabelases() {
        return siSisModTabelases;
    }

    public void setSiSisModTabelases(Set<com.postgresdb.data.SiSisModTabelas> siSisModTabelases) {
        this.siSisModTabelases = siSisModTabelases;
    }

    public Set<com.postgresdb.data.SiSisModComponentes> getSiSisModComponenteses() {
        return siSisModComponenteses;
    }

    public void setSiSisModComponenteses(Set<com.postgresdb.data.SiSisModComponentes> siSisModComponenteses) {
        this.siSisModComponenteses = siSisModComponenteses;
    }

}
