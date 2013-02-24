
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbCnaeClasse
 *  02/23/2013 10:50:04
 * 
 */
public class GeTbCnaeClasse {

    private String gecnaedcod;
    private GeTbCnaeGrupo geTbCnaeGrupo;
    private String gecnaednome;
    private Set<com.testdb.data.GeTbCnaeSubclasse> geTbCnaeSubclasses = new HashSet<com.testdb.data.GeTbCnaeSubclasse>();

    public String getGecnaedcod() {
        return gecnaedcod;
    }

    public void setGecnaedcod(String gecnaedcod) {
        this.gecnaedcod = gecnaedcod;
    }

    public GeTbCnaeGrupo getGeTbCnaeGrupo() {
        return geTbCnaeGrupo;
    }

    public void setGeTbCnaeGrupo(GeTbCnaeGrupo geTbCnaeGrupo) {
        this.geTbCnaeGrupo = geTbCnaeGrupo;
    }

    public String getGecnaednome() {
        return gecnaednome;
    }

    public void setGecnaednome(String gecnaednome) {
        this.gecnaednome = gecnaednome;
    }

    public Set<com.testdb.data.GeTbCnaeSubclasse> getGeTbCnaeSubclasses() {
        return geTbCnaeSubclasses;
    }

    public void setGeTbCnaeSubclasses(Set<com.testdb.data.GeTbCnaeSubclasse> geTbCnaeSubclasses) {
        this.geTbCnaeSubclasses = geTbCnaeSubclasses;
    }

}
