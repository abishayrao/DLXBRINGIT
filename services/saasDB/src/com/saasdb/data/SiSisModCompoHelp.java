
package com.saasdb.data;



/**
 *  saasDB.SiSisModCompoHelp
 *  01/08/2013 14:21:12
 * 
 */
public class SiSisModCompoHelp {

    private Integer simcohid;
    private SiSisModComponentes siSisModComponentes;
    private String simcohlingua;
    private String simcohdescricao;

    public Integer getSimcohid() {
        return simcohid;
    }

    public void setSimcohid(Integer simcohid) {
        this.simcohid = simcohid;
    }

    public SiSisModComponentes getSiSisModComponentes() {
        return siSisModComponentes;
    }

    public void setSiSisModComponentes(SiSisModComponentes siSisModComponentes) {
        this.siSisModComponentes = siSisModComponentes;
    }

    public String getSimcohlingua() {
        return simcohlingua;
    }

    public void setSimcohlingua(String simcohlingua) {
        this.simcohlingua = simcohlingua;
    }

    public String getSimcohdescricao() {
        return simcohdescricao;
    }

    public void setSimcohdescricao(String simcohdescricao) {
        this.simcohdescricao = simcohdescricao;
    }

}
