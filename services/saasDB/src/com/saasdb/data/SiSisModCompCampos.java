
package com.saasdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.SiSisModCompCampos
 *  01/08/2013 14:21:13
 * 
 */
public class SiSisModCompCampos {

    private Integer sismccid;
    private SiSisModComponentes siSisModComponentes;
    private String sismccnome;
    private Integer sismccseqtela;
    private String sismccdescricao;
    private Set<com.saasdb.data.SiSisModCampoHelp> siSisModCampoHelps = new HashSet<com.saasdb.data.SiSisModCampoHelp>();

    public Integer getSismccid() {
        return sismccid;
    }

    public void setSismccid(Integer sismccid) {
        this.sismccid = sismccid;
    }

    public SiSisModComponentes getSiSisModComponentes() {
        return siSisModComponentes;
    }

    public void setSiSisModComponentes(SiSisModComponentes siSisModComponentes) {
        this.siSisModComponentes = siSisModComponentes;
    }

    public String getSismccnome() {
        return sismccnome;
    }

    public void setSismccnome(String sismccnome) {
        this.sismccnome = sismccnome;
    }

    public Integer getSismccseqtela() {
        return sismccseqtela;
    }

    public void setSismccseqtela(Integer sismccseqtela) {
        this.sismccseqtela = sismccseqtela;
    }

    public String getSismccdescricao() {
        return sismccdescricao;
    }

    public void setSismccdescricao(String sismccdescricao) {
        this.sismccdescricao = sismccdescricao;
    }

    public Set<com.saasdb.data.SiSisModCampoHelp> getSiSisModCampoHelps() {
        return siSisModCampoHelps;
    }

    public void setSiSisModCampoHelps(Set<com.saasdb.data.SiSisModCampoHelp> siSisModCampoHelps) {
        this.siSisModCampoHelps = siSisModCampoHelps;
    }

}
