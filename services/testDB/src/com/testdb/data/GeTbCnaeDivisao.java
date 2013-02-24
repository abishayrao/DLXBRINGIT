
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbCnaeDivisao
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbCnaeDivisao {

    private String gecnaebcod;
    private GeTbCnaeSecao geTbCnaeSecao;
    private String gecnaebnome;
    private Set<com.testdb.data.GeTbCnaeGrupo> geTbCnaeGrupos = new HashSet<com.testdb.data.GeTbCnaeGrupo>();

    public String getGecnaebcod() {
        return gecnaebcod;
    }

    public void setGecnaebcod(String gecnaebcod) {
        this.gecnaebcod = gecnaebcod;
    }

    public GeTbCnaeSecao getGeTbCnaeSecao() {
        return geTbCnaeSecao;
    }

    public void setGeTbCnaeSecao(GeTbCnaeSecao geTbCnaeSecao) {
        this.geTbCnaeSecao = geTbCnaeSecao;
    }

    public String getGecnaebnome() {
        return gecnaebnome;
    }

    public void setGecnaebnome(String gecnaebnome) {
        this.gecnaebnome = gecnaebnome;
    }

    public Set<com.testdb.data.GeTbCnaeGrupo> getGeTbCnaeGrupos() {
        return geTbCnaeGrupos;
    }

    public void setGeTbCnaeGrupos(Set<com.testdb.data.GeTbCnaeGrupo> geTbCnaeGrupos) {
        this.geTbCnaeGrupos = geTbCnaeGrupos;
    }

}
