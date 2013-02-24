
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeTbMeiosConhecimento
 *  01/08/2013 14:21:13
 * 
 */
public class GeTbMeiosConhecimento {

    private Integer gemeioconcid;
    private String gemeioconcod;
    private String gemeiocondescr;
    private Set<com.saasdb.data.SiClientes> siClienteses = new HashSet<com.saasdb.data.SiClientes>();

    public Integer getGemeioconcid() {
        return gemeioconcid;
    }

    public void setGemeioconcid(Integer gemeioconcid) {
        this.gemeioconcid = gemeioconcid;
    }

    public String getGemeioconcod() {
        return gemeioconcod;
    }

    public void setGemeioconcod(String gemeioconcod) {
        this.gemeioconcod = gemeioconcod;
    }

    public String getGemeiocondescr() {
        return gemeiocondescr;
    }

    public void setGemeiocondescr(String gemeiocondescr) {
        this.gemeiocondescr = gemeiocondescr;
    }

    public Set<com.saasdb.data.SiClientes> getSiClienteses() {
        return siClienteses;
    }

    public void setSiClienteses(Set<com.saasdb.data.SiClientes> siClienteses) {
        this.siClienteses = siClienteses;
    }

}
