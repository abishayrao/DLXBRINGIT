
package com.postgresdb.data;



/**
 *  postgresDB.SiSisModCampoHelp
 *  01/23/2013 09:59:13
 * 
 */
public class SiSisModCampoHelp {

    private Integer simcahid;
    private SiSisModCompCampos siSisModCompCampos;
    private String simcahlingua;
    private String simcahdescricao;

    public Integer getSimcahid() {
        return simcahid;
    }

    public void setSimcahid(Integer simcahid) {
        this.simcahid = simcahid;
    }

    public SiSisModCompCampos getSiSisModCompCampos() {
        return siSisModCompCampos;
    }

    public void setSiSisModCompCampos(SiSisModCompCampos siSisModCompCampos) {
        this.siSisModCompCampos = siSisModCompCampos;
    }

    public String getSimcahlingua() {
        return simcahlingua;
    }

    public void setSimcahlingua(String simcahlingua) {
        this.simcahlingua = simcahlingua;
    }

    public String getSimcahdescricao() {
        return simcahdescricao;
    }

    public void setSimcahdescricao(String simcahdescricao) {
        this.simcahdescricao = simcahdescricao;
    }

}
