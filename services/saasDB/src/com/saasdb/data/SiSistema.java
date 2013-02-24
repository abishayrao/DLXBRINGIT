
package com.saasdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  saasDB.SiSistema
 *  01/08/2013 14:21:13
 * 
 */
public class SiSistema {

    private Integer sisisid;
    private SiProduto siProduto;
    private String sisissigla;
    private String sisisnome;
    private String sisisdescricao;
    private String sisisstatus;
    private Date sisisinivig;
    private Date sisisfimvig;
    private Set<com.saasdb.data.SiSisModulo> siSisModulos = new HashSet<com.saasdb.data.SiSisModulo>();
    private Set<com.saasdb.data.SiSisVersao> siSisVersaos = new HashSet<com.saasdb.data.SiSisVersao>();

    public Integer getSisisid() {
        return sisisid;
    }

    public void setSisisid(Integer sisisid) {
        this.sisisid = sisisid;
    }

    public SiProduto getSiProduto() {
        return siProduto;
    }

    public void setSiProduto(SiProduto siProduto) {
        this.siProduto = siProduto;
    }

    public String getSisissigla() {
        return sisissigla;
    }

    public void setSisissigla(String sisissigla) {
        this.sisissigla = sisissigla;
    }

    public String getSisisnome() {
        return sisisnome;
    }

    public void setSisisnome(String sisisnome) {
        this.sisisnome = sisisnome;
    }

    public String getSisisdescricao() {
        return sisisdescricao;
    }

    public void setSisisdescricao(String sisisdescricao) {
        this.sisisdescricao = sisisdescricao;
    }

    public String getSisisstatus() {
        return sisisstatus;
    }

    public void setSisisstatus(String sisisstatus) {
        this.sisisstatus = sisisstatus;
    }

    public Date getSisisinivig() {
        return sisisinivig;
    }

    public void setSisisinivig(Date sisisinivig) {
        this.sisisinivig = sisisinivig;
    }

    public Date getSisisfimvig() {
        return sisisfimvig;
    }

    public void setSisisfimvig(Date sisisfimvig) {
        this.sisisfimvig = sisisfimvig;
    }

    public Set<com.saasdb.data.SiSisModulo> getSiSisModulos() {
        return siSisModulos;
    }

    public void setSiSisModulos(Set<com.saasdb.data.SiSisModulo> siSisModulos) {
        this.siSisModulos = siSisModulos;
    }

    public Set<com.saasdb.data.SiSisVersao> getSiSisVersaos() {
        return siSisVersaos;
    }

    public void setSiSisVersaos(Set<com.saasdb.data.SiSisVersao> siSisVersaos) {
        this.siSisVersaos = siSisVersaos;
    }

}
