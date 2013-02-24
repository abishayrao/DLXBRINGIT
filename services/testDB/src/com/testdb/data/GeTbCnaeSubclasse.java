
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbCnaeSubclasse
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbCnaeSubclasse {

    private String gecnaeecod;
    private GeTbCnaeClasse geTbCnaeClasse;
    private String gecnaeenome;
    private Set<com.testdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs = new HashSet<com.testdb.data.GeCaEmpCnaeSec>();
    private Set<com.testdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs = new HashSet<com.testdb.data.GeCaEmpDocsPj>();
    private Set<com.testdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.testdb.data.GeCaEmpLotacao>();

    public String getGecnaeecod() {
        return gecnaeecod;
    }

    public void setGecnaeecod(String gecnaeecod) {
        this.gecnaeecod = gecnaeecod;
    }

    public GeTbCnaeClasse getGeTbCnaeClasse() {
        return geTbCnaeClasse;
    }

    public void setGeTbCnaeClasse(GeTbCnaeClasse geTbCnaeClasse) {
        this.geTbCnaeClasse = geTbCnaeClasse;
    }

    public String getGecnaeenome() {
        return gecnaeenome;
    }

    public void setGecnaeenome(String gecnaeenome) {
        this.gecnaeenome = gecnaeenome;
    }

    public Set<com.testdb.data.GeCaEmpCnaeSec> getGeCaEmpCnaeSecs() {
        return geCaEmpCnaeSecs;
    }

    public void setGeCaEmpCnaeSecs(Set<com.testdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs) {
        this.geCaEmpCnaeSecs = geCaEmpCnaeSecs;
    }

    public Set<com.testdb.data.GeCaEmpDocsPj> getGeCaEmpDocsPjs() {
        return geCaEmpDocsPjs;
    }

    public void setGeCaEmpDocsPjs(Set<com.testdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs) {
        this.geCaEmpDocsPjs = geCaEmpDocsPjs;
    }

    public Set<com.testdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.testdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

}
