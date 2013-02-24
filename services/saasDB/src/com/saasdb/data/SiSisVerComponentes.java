
package com.saasdb.data;



/**
 *  saasDB.SiSisVerComponentes
 *  01/08/2013 14:21:13
 * 
 */
public class SiSisVerComponentes {

    private Integer simvecomid;
    private SiSisModComponentes siSisModComponentes;
    private String simvecomtipo;
    private String simvecomdescricao;

    public Integer getSimvecomid() {
        return simvecomid;
    }

    public void setSimvecomid(Integer simvecomid) {
        this.simvecomid = simvecomid;
    }

    public SiSisModComponentes getSiSisModComponentes() {
        return siSisModComponentes;
    }

    public void setSiSisModComponentes(SiSisModComponentes siSisModComponentes) {
        this.siSisModComponentes = siSisModComponentes;
    }

    public String getSimvecomtipo() {
        return simvecomtipo;
    }

    public void setSimvecomtipo(String simvecomtipo) {
        this.simvecomtipo = simvecomtipo;
    }

    public String getSimvecomdescricao() {
        return simvecomdescricao;
    }

    public void setSimvecomdescricao(String simvecomdescricao) {
        this.simvecomdescricao = simvecomdescricao;
    }

}
