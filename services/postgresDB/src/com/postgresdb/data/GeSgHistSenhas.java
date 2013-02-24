
package com.postgresdb.data;

import java.util.Date;


/**
 *  postgresDB.GeSgHistSenhas
 *  01/23/2013 09:59:13
 * 
 */
public class GeSgHistSenhas {

    private Integer gesghsenhaid;
    private GeSgUsuarios geSgUsuarios;
    private String gesghsenhasenha;
    private Date gesgusude;
    private Date gesgusuate;

    public Integer getGesghsenhaid() {
        return gesghsenhaid;
    }

    public void setGesghsenhaid(Integer gesghsenhaid) {
        this.gesghsenhaid = gesghsenhaid;
    }

    public GeSgUsuarios getGeSgUsuarios() {
        return geSgUsuarios;
    }

    public void setGeSgUsuarios(GeSgUsuarios geSgUsuarios) {
        this.geSgUsuarios = geSgUsuarios;
    }

    public String getGesghsenhasenha() {
        return gesghsenhasenha;
    }

    public void setGesghsenhasenha(String gesghsenhasenha) {
        this.gesghsenhasenha = gesghsenhasenha;
    }

    public Date getGesgusude() {
        return gesgusude;
    }

    public void setGesgusude(Date gesgusude) {
        this.gesgusude = gesgusude;
    }

    public Date getGesgusuate() {
        return gesgusuate;
    }

    public void setGesgusuate(Date gesgusuate) {
        this.gesgusuate = gesgusuate;
    }

}
