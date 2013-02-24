
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbCnaeSubclasse
 *  01/08/2013 14:21:12
 * 
 */
public class GeTbCnaeSubclasse {

    private String gecnaeecod;
    private GeTbCnaeClasse geTbCnaeClasse;
    private String gecnaeenome;
    private Set<com.saasdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs = new HashSet<com.saasdb.data.GeCaEmpCnaeSec>();
    private Set<com.saasdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.saasdb.data.GeCaEmpLotacao>();
    private Set<com.saasdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs = new HashSet<com.saasdb.data.GeCaEmpDocsPj>();

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

    public Set<com.saasdb.data.GeCaEmpCnaeSec> getGeCaEmpCnaeSecs() {
        return geCaEmpCnaeSecs;
    }

    public void setGeCaEmpCnaeSecs(Set<com.saasdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs) {
        this.geCaEmpCnaeSecs = geCaEmpCnaeSecs;
    }

    public Set<com.saasdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.saasdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.saasdb.data.GeCaEmpDocsPj> getGeCaEmpDocsPjs() {
        return geCaEmpDocsPjs;
    }

    public void setGeCaEmpDocsPjs(Set<com.saasdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs) {
        this.geCaEmpDocsPjs = geCaEmpDocsPjs;
    }

}
