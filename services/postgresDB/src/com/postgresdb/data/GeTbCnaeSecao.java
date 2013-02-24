
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeTbCnaeSecao
 *  01/23/2013 09:59:14
 * 
 */
public class GeTbCnaeSecao {

    private String gecnaeacod;
    private String gecnaeanome;
    private Set<com.postgresdb.data.GeTbCnaeDivisao> geTbCnaeDivisaos = new HashSet<com.postgresdb.data.GeTbCnaeDivisao>();

    public String getGecnaeacod() {
        return gecnaeacod;
    }

    public void setGecnaeacod(String gecnaeacod) {
        this.gecnaeacod = gecnaeacod;
    }

    public String getGecnaeanome() {
        return gecnaeanome;
    }

    public void setGecnaeanome(String gecnaeanome) {
        this.gecnaeanome = gecnaeanome;
    }

    public Set<com.postgresdb.data.GeTbCnaeDivisao> getGeTbCnaeDivisaos() {
        return geTbCnaeDivisaos;
    }

    public void setGeTbCnaeDivisaos(Set<com.postgresdb.data.GeTbCnaeDivisao> geTbCnaeDivisaos) {
        this.geTbCnaeDivisaos = geTbCnaeDivisaos;
    }

}
