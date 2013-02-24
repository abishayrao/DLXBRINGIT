
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbCnaeClasse
 *  01/08/2013 14:21:13
 * 
 */
public class GeTbCnaeClasse {

    private String gecnaedcod;
    private GeTbCnaeGrupo geTbCnaeGrupo;
    private String gecnaednome;
    private Set<com.saasdb.data.GeTbCnaeSubclasse> geTbCnaeSubclasses = new HashSet<com.saasdb.data.GeTbCnaeSubclasse>();

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

    public Set<com.saasdb.data.GeTbCnaeSubclasse> getGeTbCnaeSubclasses() {
        return geTbCnaeSubclasses;
    }

    public void setGeTbCnaeSubclasses(Set<com.saasdb.data.GeTbCnaeSubclasse> geTbCnaeSubclasses) {
        this.geTbCnaeSubclasses = geTbCnaeSubclasses;
    }

}
