
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbCnaeGrupo
 *  01/08/2013 14:21:13
 * 
 */
public class GeTbCnaeGrupo {

    private String gecnaeccod;
    private GeTbCnaeDivisao geTbCnaeDivisao;
    private String gecnaecnome;
    private Set<com.saasdb.data.GeTbCnaeClasse> geTbCnaeClasses = new HashSet<com.saasdb.data.GeTbCnaeClasse>();

    public String getGecnaeccod() {
        return gecnaeccod;
    }

    public void setGecnaeccod(String gecnaeccod) {
        this.gecnaeccod = gecnaeccod;
    }

    public GeTbCnaeDivisao getGeTbCnaeDivisao() {
        return geTbCnaeDivisao;
    }

    public void setGeTbCnaeDivisao(GeTbCnaeDivisao geTbCnaeDivisao) {
        this.geTbCnaeDivisao = geTbCnaeDivisao;
    }

    public String getGecnaecnome() {
        return gecnaecnome;
    }

    public void setGecnaecnome(String gecnaecnome) {
        this.gecnaecnome = gecnaecnome;
    }

    public Set<com.saasdb.data.GeTbCnaeClasse> getGeTbCnaeClasses() {
        return geTbCnaeClasses;
    }

    public void setGeTbCnaeClasses(Set<com.saasdb.data.GeTbCnaeClasse> geTbCnaeClasses) {
        this.geTbCnaeClasses = geTbCnaeClasses;
    }

}
