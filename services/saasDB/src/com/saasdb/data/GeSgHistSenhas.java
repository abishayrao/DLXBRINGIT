
package com.saasdb.data;

import java.util.Date;


/**
 *  saasDB.GeSgHistSenhas
 *  01/08/2013 14:21:13
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
