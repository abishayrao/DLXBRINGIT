
package com.postgresdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.SiSisModCompCampos
 *  01/23/2013 09:59:14
 * 
 */
public class SiSisModCompCampos {

    private Integer sismccid;
    private SiSisModComponentes siSisModComponentes;
    private String sismccnome;
    private Integer sismccseqtela;
    private String sismccdescricao;
    private Set<com.postgresdb.data.SiSisModCampoHelp> siSisModCampoHelps = new HashSet<com.postgresdb.data.SiSisModCampoHelp>();

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

    public Set<com.postgresdb.data.SiSisModCampoHelp> getSiSisModCampoHelps() {
        return siSisModCampoHelps;
    }

    public void setSiSisModCampoHelps(Set<com.postgresdb.data.SiSisModCampoHelp> siSisModCampoHelps) {
        this.siSisModCampoHelps = siSisModCampoHelps;
    }

}
