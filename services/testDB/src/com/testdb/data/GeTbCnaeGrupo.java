
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbCnaeGrupo
 *  02/23/2013 10:50:04
 * 
 */
public class GeTbCnaeGrupo {

    private String gecnaeccod;
    private GeTbCnaeDivisao geTbCnaeDivisao;
    private String gecnaecnome;
    private Set<com.testdb.data.GeTbCnaeClasse> geTbCnaeClasses = new HashSet<com.testdb.data.GeTbCnaeClasse>();

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

    public Set<com.testdb.data.GeTbCnaeClasse> getGeTbCnaeClasses() {
        return geTbCnaeClasses;
    }

    public void setGeTbCnaeClasses(Set<com.testdb.data.GeTbCnaeClasse> geTbCnaeClasses) {
        this.geTbCnaeClasses = geTbCnaeClasses;
    }

}
