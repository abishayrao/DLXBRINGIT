
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.GeSgGrupos
 *  01/08/2013 14:21:13
 * 
 */
public class GeSgGrupos {

    private Integer gesggrpid;
    private SiClientes siClientes;
    private String gesggrpnome;
    private String gesggrpstatus;
    private Date gesggrpinivig;
    private Date gesggrpfimvig;
    private Set<com.saasdb.data.GeSgGruXCampo> geSgGruXCampos = new HashSet<com.saasdb.data.GeSgGruXCampo>();
    private Set<com.saasdb.data.GeSgGruXCompo> geSgGruXCompos = new HashSet<com.saasdb.data.GeSgGruXCompo>();
    private Set<com.saasdb.data.GeSgUsuarios> geSgUsuarioses = new HashSet<com.saasdb.data.GeSgUsuarios>();
    private Set<com.saasdb.data.GeSgGruXEmpresa> geSgGruXEmpresas = new HashSet<com.saasdb.data.GeSgGruXEmpresa>();
    private Set<com.saasdb.data.GeSgGruXModulos> geSgGruXModuloses = new HashSet<com.saasdb.data.GeSgGruXModulos>();

    public Integer getGesggrpid() {
        return gesggrpid;
    }

    public void setGesggrpid(Integer gesggrpid) {
        this.gesggrpid = gesggrpid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getGesggrpnome() {
        return gesggrpnome;
    }

    public void setGesggrpnome(String gesggrpnome) {
        this.gesggrpnome = gesggrpnome;
    }

    public String getGesggrpstatus() {
        return gesggrpstatus;
    }

    public void setGesggrpstatus(String gesggrpstatus) {
        this.gesggrpstatus = gesggrpstatus;
    }

    public Date getGesggrpinivig() {
        return gesggrpinivig;
    }

    public void setGesggrpinivig(Date gesggrpinivig) {
        this.gesggrpinivig = gesggrpinivig;
    }

    public Date getGesggrpfimvig() {
        return gesggrpfimvig;
    }

    public void setGesggrpfimvig(Date gesggrpfimvig) {
        this.gesggrpfimvig = gesggrpfimvig;
    }

    public Set<com.saasdb.data.GeSgGruXCampo> getGeSgGruXCampos() {
        return geSgGruXCampos;
    }

    public void setGeSgGruXCampos(Set<com.saasdb.data.GeSgGruXCampo> geSgGruXCampos) {
        this.geSgGruXCampos = geSgGruXCampos;
    }

    public Set<com.saasdb.data.GeSgGruXCompo> getGeSgGruXCompos() {
        return geSgGruXCompos;
    }

    public void setGeSgGruXCompos(Set<com.saasdb.data.GeSgGruXCompo> geSgGruXCompos) {
        this.geSgGruXCompos = geSgGruXCompos;
    }

    public Set<com.saasdb.data.GeSgUsuarios> getGeSgUsuarioses() {
        return geSgUsuarioses;
    }

    public void setGeSgUsuarioses(Set<com.saasdb.data.GeSgUsuarios> geSgUsuarioses) {
        this.geSgUsuarioses = geSgUsuarioses;
    }

    public Set<com.saasdb.data.GeSgGruXEmpresa> getGeSgGruXEmpresas() {
        return geSgGruXEmpresas;
    }

    public void setGeSgGruXEmpresas(Set<com.saasdb.data.GeSgGruXEmpresa> geSgGruXEmpresas) {
        this.geSgGruXEmpresas = geSgGruXEmpresas;
    }

    public Set<com.saasdb.data.GeSgGruXModulos> getGeSgGruXModuloses() {
        return geSgGruXModuloses;
    }

    public void setGeSgGruXModuloses(Set<com.saasdb.data.GeSgGruXModulos> geSgGruXModuloses) {
        this.geSgGruXModuloses = geSgGruXModuloses;
    }

}
