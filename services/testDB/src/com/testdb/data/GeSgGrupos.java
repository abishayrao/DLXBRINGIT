
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.GeSgGrupos
 *  02/23/2013 10:50:05
 * 
 */
public class GeSgGrupos {

    private Integer gesggrpId;
    private SiClientes siClientes;
    private String gesggrpNome;
    private String gesggrpStatus;
    private Date gesggrpIniVig;
    private Date gesggrpFimVig;
    private Set<com.testdb.data.GeSgGruXCampo> geSgGruXCampos = new HashSet<com.testdb.data.GeSgGruXCampo>();
    private Set<com.testdb.data.GeSgGruXModulos> geSgGruXModuloses = new HashSet<com.testdb.data.GeSgGruXModulos>();
    private Set<com.testdb.data.GeSgUsuarios> geSgUsuarioses = new HashSet<com.testdb.data.GeSgUsuarios>();
    private Set<com.testdb.data.GeSgGruXEmpresa> geSgGruXEmpresas = new HashSet<com.testdb.data.GeSgGruXEmpresa>();
    private Set<com.testdb.data.GeSgGruXCompo> geSgGruXCompos = new HashSet<com.testdb.data.GeSgGruXCompo>();

    public Integer getGesggrpId() {
        return gesggrpId;
    }

    public void setGesggrpId(Integer gesggrpId) {
        this.gesggrpId = gesggrpId;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGesggrpNome() {
        return gesggrpNome;
    }

    public void setGesggrpNome(String gesggrpNome) {
        this.gesggrpNome = gesggrpNome;
    }

    public String getGesggrpStatus() {
        return gesggrpStatus;
    }

    public void setGesggrpStatus(String gesggrpStatus) {
        this.gesggrpStatus = gesggrpStatus;
    }

    public Date getGesggrpIniVig() {
        return gesggrpIniVig;
    }

    public void setGesggrpIniVig(Date gesggrpIniVig) {
        this.gesggrpIniVig = gesggrpIniVig;
    }

    public Date getGesggrpFimVig() {
        return gesggrpFimVig;
    }

    public void setGesggrpFimVig(Date gesggrpFimVig) {
        this.gesggrpFimVig = gesggrpFimVig;
    }

    public Set<com.testdb.data.GeSgGruXCampo> getGeSgGruXCampos() {
        return geSgGruXCampos;
    }

    public void setGeSgGruXCampos(Set<com.testdb.data.GeSgGruXCampo> geSgGruXCampos) {
        this.geSgGruXCampos = geSgGruXCampos;
    }

    public Set<com.testdb.data.GeSgGruXModulos> getGeSgGruXModuloses() {
        return geSgGruXModuloses;
    }

    public void setGeSgGruXModuloses(Set<com.testdb.data.GeSgGruXModulos> geSgGruXModuloses) {
        this.geSgGruXModuloses = geSgGruXModuloses;
    }

    public Set<com.testdb.data.GeSgUsuarios> getGeSgUsuarioses() {
        return geSgUsuarioses;
    }

    public void setGeSgUsuarioses(Set<com.testdb.data.GeSgUsuarios> geSgUsuarioses) {
        this.geSgUsuarioses = geSgUsuarioses;
    }

    public Set<com.testdb.data.GeSgGruXEmpresa> getGeSgGruXEmpresas() {
        return geSgGruXEmpresas;
    }

    public void setGeSgGruXEmpresas(Set<com.testdb.data.GeSgGruXEmpresa> geSgGruXEmpresas) {
        this.geSgGruXEmpresas = geSgGruXEmpresas;
    }

    public Set<com.testdb.data.GeSgGruXCompo> getGeSgGruXCompos() {
        return geSgGruXCompos;
    }

    public void setGeSgGruXCompos(Set<com.testdb.data.GeSgGruXCompo> geSgGruXCompos) {
        this.geSgGruXCompos = geSgGruXCompos;
    }

}
