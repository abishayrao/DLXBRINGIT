
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbCnaeSecao
 *  01/08/2013 14:21:12
 * 
 */
public class GeTbCnaeSecao {

    private String gecnaeacod;
    private String gecnaeanome;
    private Set<com.saasdb.data.GeTbCnaeDivisao> geTbCnaeDivisaos = new HashSet<com.saasdb.data.GeTbCnaeDivisao>();

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

    public Set<com.saasdb.data.GeTbCnaeDivisao> getGeTbCnaeDivisaos() {
        return geTbCnaeDivisaos;
    }

    public void setGeTbCnaeDivisaos(Set<com.saasdb.data.GeTbCnaeDivisao> geTbCnaeDivisaos) {
        this.geTbCnaeDivisaos = geTbCnaeDivisaos;
    }

}
