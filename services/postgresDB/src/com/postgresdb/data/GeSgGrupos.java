
package com.postgresdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  postgresDB.GeSgGrupos
 *  01/23/2013 09:59:13
 * 
 */
public class GeSgGrupos {

    private Integer gesggrpid;
    private SiClientes siClientes;
    private String gesggrpnome;
    private String gesggrpstatus;
    private Date gesggrpinivig;
    private Date gesggrpfimvig;
    private Set<com.postgresdb.data.GeSgGruXCampo> geSgGruXCampos = new HashSet<com.postgresdb.data.GeSgGruXCampo>();
    private Set<com.postgresdb.data.GeSgGruXCompo> geSgGruXCompos = new HashSet<com.postgresdb.data.GeSgGruXCompo>();
    private Set<com.postgresdb.data.GeSgUsuarios> geSgUsuarioses = new HashSet<com.postgresdb.data.GeSgUsuarios>();
    private Set<com.postgresdb.data.GeSgGruXEmpresa> geSgGruXEmpresas = new HashSet<com.postgresdb.data.GeSgGruXEmpresa>();
    private Set<com.postgresdb.data.GeSgGruXModulos> geSgGruXModuloses = new HashSet<com.postgresdb.data.GeSgGruXModulos>();

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

    public Set<com.postgresdb.data.GeSgGruXCampo> getGeSgGruXCampos() {
        return geSgGruXCampos;
    }

    public void setGeSgGruXCampos(Set<com.postgresdb.data.GeSgGruXCampo> geSgGruXCampos) {
        this.geSgGruXCampos = geSgGruXCampos;
    }

    public Set<com.postgresdb.data.GeSgGruXCompo> getGeSgGruXCompos() {
        return geSgGruXCompos;
    }

    public void setGeSgGruXCompos(Set<com.postgresdb.data.GeSgGruXCompo> geSgGruXCompos) {
        this.geSgGruXCompos = geSgGruXCompos;
    }

    public Set<com.postgresdb.data.GeSgUsuarios> getGeSgUsuarioses() {
        return geSgUsuarioses;
    }

    public void setGeSgUsuarioses(Set<com.postgresdb.data.GeSgUsuarios> geSgUsuarioses) {
        this.geSgUsuarioses = geSgUsuarioses;
    }

    public Set<com.postgresdb.data.GeSgGruXEmpresa> getGeSgGruXEmpresas() {
        return geSgGruXEmpresas;
    }

    public void setGeSgGruXEmpresas(Set<com.postgresdb.data.GeSgGruXEmpresa> geSgGruXEmpresas) {
        this.geSgGruXEmpresas = geSgGruXEmpresas;
    }

    public Set<com.postgresdb.data.GeSgGruXModulos> getGeSgGruXModuloses() {
        return geSgGruXModuloses;
    }

    public void setGeSgGruXModuloses(Set<com.postgresdb.data.GeSgGruXModulos> geSgGruXModuloses) {
        this.geSgGruXModuloses = geSgGruXModuloses;
    }

}
