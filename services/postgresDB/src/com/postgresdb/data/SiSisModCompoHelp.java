
package com.postgresdb.data;



/**
 *  postgresDB.SiSisModCompoHelp
 *  01/23/2013 09:59:14
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
