
package com.postgresdb.data;



/**
 *  postgresDB.SiSisModTabIndex
 *  01/23/2013 09:59:14
 * 
 */
public class SiSisModTabIndex {

    private Integer sismtiid;
    private SiSisModTabelas siSisModTabelas;
    private String sismtinome;
    private String sismtidescricao;

    public Integer getSismtiid() {
        return sismtiid;
    }

    public void setSismtiid(Integer sismtiid) {
        this.sismtiid = sismtiid;
    }

    public SiSisModTabelas getSiSisModTabelas() {
        return siSisModTabelas;
    }

    public void setSiSisModTabelas(SiSisModTabelas siSisModTabelas) {
        this.siSisModTabelas = siSisModTabelas;
    }

    public String getSismtinome() {
        return sismtinome;
    }

    public void setSismtinome(String sismtinome) {
        this.sismtinome = sismtinome;
    }

    public String getSismtidescricao() {
        return sismtidescricao;
    }

    public void setSismtidescricao(String sismtidescricao) {
        this.sismtidescricao = sismtidescricao;
    }

}
