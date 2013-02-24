
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbCnaeDivisao
 *  01/08/2013 14:21:13
 * 
 */
public class GeTbCnaeDivisao {

    private String gecnaebcod;
    private GeTbCnaeSecao geTbCnaeSecao;
    private String gecnaebnome;
    private Set<com.saasdb.data.GeTbCnaeGrupo> geTbCnaeGrupos = new HashSet<com.saasdb.data.GeTbCnaeGrupo>();

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

    public Set<com.saasdb.data.GeTbCnaeGrupo> getGeTbCnaeGrupos() {
        return geTbCnaeGrupos;
    }

    public void setGeTbCnaeGrupos(Set<com.saasdb.data.GeTbCnaeGrupo> geTbCnaeGrupos) {
        this.geTbCnaeGrupos = geTbCnaeGrupos;
    }

}
