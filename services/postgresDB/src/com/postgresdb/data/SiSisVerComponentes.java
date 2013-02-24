
package com.postgresdb.data;



/**
 *  postgresDB.SiSisVerComponentes
 *  01/23/2013 09:59:14
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
