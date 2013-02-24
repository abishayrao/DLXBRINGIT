
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbCnaeDivisao
 *  01/23/2013 09:59:13
 * 
 */
public class GeTbCnaeDivisao {

    private String gecnaebcod;
    private GeTbCnaeSecao geTbCnaeSecao;
    private String gecnaebnome;
    private Set<com.postgresdb.data.GeTbCnaeGrupo> geTbCnaeGrupos = new HashSet<com.postgresdb.data.GeTbCnaeGrupo>();

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

    public Set<com.postgresdb.data.GeTbCnaeGrupo> getGeTbCnaeGrupos() {
        return geTbCnaeGrupos;
    }

    public void setGeTbCnaeGrupos(Set<com.postgresdb.data.GeTbCnaeGrupo> geTbCnaeGrupos) {
        this.geTbCnaeGrupos = geTbCnaeGrupos;
    }

}
