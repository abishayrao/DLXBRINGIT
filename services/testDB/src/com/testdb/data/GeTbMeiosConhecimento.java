
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeTbMeiosConhecimento
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbMeiosConhecimento {

    private Integer gemeioconcid;
    private String gemeioconcod;
    private String gemeiocondescr;
    private Set<com.testdb.data.SiClientes> siClienteses = new HashSet<com.testdb.data.SiClientes>();

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

    public Set<com.testdb.data.SiClientes> getSiClienteses() {
        return siClienteses;
    }

    public void setSiClienteses(Set<com.testdb.data.SiClientes> siClienteses) {
        this.siClienteses = siClienteses;
    }

}
