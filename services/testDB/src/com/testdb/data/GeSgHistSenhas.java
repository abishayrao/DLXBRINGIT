
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.GeSgHistSenhas
 *  02/23/2013 10:50:04
 * 
 */
public class GeSgHistSenhas {

    private Integer gesghsenhaId;
    private GeSgUsuarios geSgUsuarios;
    private String gesghsenhaSenha;
    private Date gesgusuDe;
    private Date gesgusuAte;

    public Integer getGesghsenhaId() {
        return gesghsenhaId;
    }

    public void setGesghsenhaId(Integer gesghsenhaId) {
        this.gesghsenhaId = gesghsenhaId;
    }

    public GeSgUsuarios getGeSgUsuarios() {
        return geSgUsuarios;
    }

    public void setGeSgUsuarios(GeSgUsuarios geSgUsuarios) {
        this.geSgUsuarios = geSgUsuarios;
    }

    public String getGesghsenhaSenha() {
        return gesghsenhaSenha;
    }

    public void setGesghsenhaSenha(String gesghsenhaSenha) {
        this.gesghsenhaSenha = gesghsenhaSenha;
    }

    public Date getGesgusuDe() {
        return gesgusuDe;
    }

    public void setGesgusuDe(Date gesgusuDe) {
        this.gesgusuDe = gesgusuDe;
    }

    public Date getGesgusuAte() {
        return gesgusuAte;
    }

    public void setGesgusuAte(Date gesgusuAte) {
        this.gesgusuAte = gesgusuAte;
    }

}
