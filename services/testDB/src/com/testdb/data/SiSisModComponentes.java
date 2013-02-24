
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiSisModComponentes
 *  02/23/2013 10:50:05
 * 
 */
public class SiSisModComponentes {

    private Integer sismcid;
    private SiSisModulo siSisModulo;
    private String sismcnome;
    private String sismctipo;
    private String sismcopcempresa;
    private String sismcopcvisib;
    private String sismcopcobrig;
    private String sismcopcdireitos;
    private String sismcopcvalida;
    private String sismcopchelp;
    private String sismcopchelpusu;
    private String sismcopctrilha;
    private String sismcopcultregi;
    private String sismcopcdirdvl;
    private String sismcopcesubtask;
    private String sismcnomemenu;
    private Integer sismcmenu;
    private Integer sismcmenuseq;
    private String sismctabelaprinc;
    private String sismcstatus;
    private Integer sismctempodvlpre;
    private Integer sismctempodvlini;
    private Integer sismctempodvlfim;
    private Date sismcdatadvlini;
    private Date sismcdatadvlfim;
    private String sismcdescricao;
    private Set<com.testdb.data.DiHlHelpUsu> diHlHelpUsus = new HashSet<com.testdb.data.DiHlHelpUsu>();
    private Set<com.testdb.data.SiSisModCompCampos> siSisModCompCamposes = new HashSet<com.testdb.data.SiSisModCompCampos>();
    private Set<com.testdb.data.SiSisVerComponentes> siSisVerComponenteses = new HashSet<com.testdb.data.SiSisVerComponentes>();
    private Set<com.testdb.data.SiSisModCompoHelp> siSisModCompoHelps = new HashSet<com.testdb.data.SiSisModCompoHelp>();

    public Integer getSismcid() {
        return sismcid;
    }

    public void setSismcid(Integer sismcid) {
        this.sismcid = sismcid;
    }

    public SiSisModulo getSiSisModulo() {
        return siSisModulo;
    }

    public void setSiSisModulo(SiSisModulo siSisModulo) {
        this.siSisModulo = siSisModulo;
    }

    public String getSismcnome() {
        return sismcnome;
    }

    public void setSismcnome(String sismcnome) {
        this.sismcnome = sismcnome;
    }

    public String getSismctipo() {
        return sismctipo;
    }

    public void setSismctipo(String sismctipo) {
        this.sismctipo = sismctipo;
    }

    public String getSismcopcempresa() {
        return sismcopcempresa;
    }

    public void setSismcopcempresa(String sismcopcempresa) {
        this.sismcopcempresa = sismcopcempresa;
    }

    public String getSismcopcvisib() {
        return sismcopcvisib;
    }

    public void setSismcopcvisib(String sismcopcvisib) {
        this.sismcopcvisib = sismcopcvisib;
    }

    public String getSismcopcobrig() {
        return sismcopcobrig;
    }

    public void setSismcopcobrig(String sismcopcobrig) {
        this.sismcopcobrig = sismcopcobrig;
    }

    public String getSismcopcdireitos() {
        return sismcopcdireitos;
    }

    public void setSismcopcdireitos(String sismcopcdireitos) {
        this.sismcopcdireitos = sismcopcdireitos;
    }

    public String getSismcopcvalida() {
        return sismcopcvalida;
    }

    public void setSismcopcvalida(String sismcopcvalida) {
        this.sismcopcvalida = sismcopcvalida;
    }

    public String getSismcopchelp() {
        return sismcopchelp;
    }

    public void setSismcopchelp(String sismcopchelp) {
        this.sismcopchelp = sismcopchelp;
    }

    public String getSismcopchelpusu() {
        return sismcopchelpusu;
    }

    public void setSismcopchelpusu(String sismcopchelpusu) {
        this.sismcopchelpusu = sismcopchelpusu;
    }

    public String getSismcopctrilha() {
        return sismcopctrilha;
    }

    public void setSismcopctrilha(String sismcopctrilha) {
        this.sismcopctrilha = sismcopctrilha;
    }

    public String getSismcopcultregi() {
        return sismcopcultregi;
    }

    public void setSismcopcultregi(String sismcopcultregi) {
        this.sismcopcultregi = sismcopcultregi;
    }

    public String getSismcopcdirdvl() {
        return sismcopcdirdvl;
    }

    public void setSismcopcdirdvl(String sismcopcdirdvl) {
        this.sismcopcdirdvl = sismcopcdirdvl;
    }

    public String getSismcopcesubtask() {
        return sismcopcesubtask;
    }

    public void setSismcopcesubtask(String sismcopcesubtask) {
        this.sismcopcesubtask = sismcopcesubtask;
    }

    public String getSismcnomemenu() {
        return sismcnomemenu;
    }

    public void setSismcnomemenu(String sismcnomemenu) {
        this.sismcnomemenu = sismcnomemenu;
    }

    public Integer getSismcmenu() {
        return sismcmenu;
    }

    public void setSismcmenu(Integer sismcmenu) {
        this.sismcmenu = sismcmenu;
    }

    public Integer getSismcmenuseq() {
        return sismcmenuseq;
    }

    public void setSismcmenuseq(Integer sismcmenuseq) {
        this.sismcmenuseq = sismcmenuseq;
    }

    public String getSismctabelaprinc() {
        return sismctabelaprinc;
    }

    public void setSismctabelaprinc(String sismctabelaprinc) {
        this.sismctabelaprinc = sismctabelaprinc;
    }

    public String getSismcstatus() {
        return sismcstatus;
    }

    public void setSismcstatus(String sismcstatus) {
        this.sismcstatus = sismcstatus;
    }

    public Integer getSismctempodvlpre() {
        return sismctempodvlpre;
    }

    public void setSismctempodvlpre(Integer sismctempodvlpre) {
        this.sismctempodvlpre = sismctempodvlpre;
    }

    public Integer getSismctempodvlini() {
        return sismctempodvlini;
    }

    public void setSismctempodvlini(Integer sismctempodvlini) {
        this.sismctempodvlini = sismctempodvlini;
    }

    public Integer getSismctempodvlfim() {
        return sismctempodvlfim;
    }

    public void setSismctempodvlfim(Integer sismctempodvlfim) {
        this.sismctempodvlfim = sismctempodvlfim;
    }

    public Date getSismcdatadvlini() {
        return sismcdatadvlini;
    }

    public void setSismcdatadvlini(Date sismcdatadvlini) {
        this.sismcdatadvlini = sismcdatadvlini;
    }

    public Date getSismcdatadvlfim() {
        return sismcdatadvlfim;
    }

    public void setSismcdatadvlfim(Date sismcdatadvlfim) {
        this.sismcdatadvlfim = sismcdatadvlfim;
    }

    public String getSismcdescricao() {
        return sismcdescricao;
    }

    public void setSismcdescricao(String sismcdescricao) {
        this.sismcdescricao = sismcdescricao;
    }

    public Set<com.testdb.data.DiHlHelpUsu> getDiHlHelpUsus() {
        return diHlHelpUsus;
    }

    public void setDiHlHelpUsus(Set<com.testdb.data.DiHlHelpUsu> diHlHelpUsus) {
        this.diHlHelpUsus = diHlHelpUsus;
    }

    public Set<com.testdb.data.SiSisModCompCampos> getSiSisModCompCamposes() {
        return siSisModCompCamposes;
    }

    public void setSiSisModCompCamposes(Set<com.testdb.data.SiSisModCompCampos> siSisModCompCamposes) {
        this.siSisModCompCamposes = siSisModCompCamposes;
    }

    public Set<com.testdb.data.SiSisVerComponentes> getSiSisVerComponenteses() {
        return siSisVerComponenteses;
    }

    public void setSiSisVerComponenteses(Set<com.testdb.data.SiSisVerComponentes> siSisVerComponenteses) {
        this.siSisVerComponenteses = siSisVerComponenteses;
    }

    public Set<com.testdb.data.SiSisModCompoHelp> getSiSisModCompoHelps() {
        return siSisModCompoHelps;
    }

    public void setSiSisModCompoHelps(Set<com.testdb.data.SiSisModCompoHelp> siSisModCompoHelps) {
        this.siSisModCompoHelps = siSisModCompoHelps;
    }

}
