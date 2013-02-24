
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbCnaeSubclasse
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbCnaeSubclasse {

    private String gecnaeecod;
    private GeTbCnaeClasse geTbCnaeClasse;
    private String gecnaeenome;
    private Set<com.postgresdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs = new HashSet<com.postgresdb.data.GeCaEmpCnaeSec>();
    private Set<com.postgresdb.data.GeCaEmpLotacao> geCaEmpLotacaos = new HashSet<com.postgresdb.data.GeCaEmpLotacao>();
    private Set<com.postgresdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs = new HashSet<com.postgresdb.data.GeCaEmpDocsPj>();

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

    public Set<com.postgresdb.data.GeCaEmpCnaeSec> getGeCaEmpCnaeSecs() {
        return geCaEmpCnaeSecs;
    }

    public void setGeCaEmpCnaeSecs(Set<com.postgresdb.data.GeCaEmpCnaeSec> geCaEmpCnaeSecs) {
        this.geCaEmpCnaeSecs = geCaEmpCnaeSecs;
    }

    public Set<com.postgresdb.data.GeCaEmpLotacao> getGeCaEmpLotacaos() {
        return geCaEmpLotacaos;
    }

    public void setGeCaEmpLotacaos(Set<com.postgresdb.data.GeCaEmpLotacao> geCaEmpLotacaos) {
        this.geCaEmpLotacaos = geCaEmpLotacaos;
    }

    public Set<com.postgresdb.data.GeCaEmpDocsPj> getGeCaEmpDocsPjs() {
        return geCaEmpDocsPjs;
    }

    public void setGeCaEmpDocsPjs(Set<com.postgresdb.data.GeCaEmpDocsPj> geCaEmpDocsPjs) {
        this.geCaEmpDocsPjs = geCaEmpDocsPjs;
    }

}
