
package com.testdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.SiSisModTabelas
 *  02/23/2013 10:50:06
 * 
 */
public class SiSisModTabelas {

    private Integer sismtid;
    private SiSisModulo siSisModulo;
    private String sismtnome;
    private String sismtpublicname;
    private String sismtclasse;
    private String sismtdimens;
    private String sismtvolinicial;
    private String sismtdescricao;
    private String sismttemid;
    private String sismtdadosIni;
    private String sismtclienteUsa;
    private Set<com.testdb.data.SiSisModTabIndex> siSisModTabIndexes = new HashSet<com.testdb.data.SiSisModTabIndex>();
    private Set<com.testdb.data.SiSisModTabCampos> siSisModTabCamposes = new HashSet<com.testdb.data.SiSisModTabCampos>();

    public Integer getSismtid() {
        return sismtid;
    }

    public void setSismtid(Integer sismtid) {
        this.sismtid = sismtid;
    }

    public SiSisModulo getSiSisModulo() {
        return siSisModulo;
    }

    public void setSiSisModulo(SiSisModulo siSisModulo) {
        this.siSisModulo = siSisModulo;
    }

    public String getSismtnome() {
        return sismtnome;
    }

    public void setSismtnome(String sismtnome) {
        this.sismtnome = sismtnome;
    }

    public String getSismtpublicname() {
        return sismtpublicname;
    }

    public void setSismtpublicname(String sismtpublicname) {
        this.sismtpublicname = sismtpublicname;
    }

    public String getSismtclasse() {
        return sismtclasse;
    }

    public void setSismtclasse(String sismtclasse) {
        this.sismtclasse = sismtclasse;
    }

    public String getSismtdimens() {
        return sismtdimens;
    }

    public void setSismtdimens(String sismtdimens) {
        this.sismtdimens = sismtdimens;
    }

    public String getSismtvolinicial() {
        return sismtvolinicial;
    }

    public void setSismtvolinicial(String sismtvolinicial) {
        this.sismtvolinicial = sismtvolinicial;
    }

    public String getSismtdescricao() {
        return sismtdescricao;
    }

    public void setSismtdescricao(String sismtdescricao) {
        this.sismtdescricao = sismtdescricao;
    }

    public String getSismttemid() {
        return sismttemid;
    }

    public void setSismttemid(String sismttemid) {
        this.sismttemid = sismttemid;
    }

    public String getSismtdadosIni() {
        return sismtdadosIni;
    }

    public void setSismtdadosIni(String sismtdadosIni) {
        this.sismtdadosIni = sismtdadosIni;
    }

    public String getSismtclienteUsa() {
        return sismtclienteUsa;
    }

    public void setSismtclienteUsa(String sismtclienteUsa) {
        this.sismtclienteUsa = sismtclienteUsa;
    }

    public Set<com.testdb.data.SiSisModTabIndex> getSiSisModTabIndexes() {
        return siSisModTabIndexes;
    }

    public void setSiSisModTabIndexes(Set<com.testdb.data.SiSisModTabIndex> siSisModTabIndexes) {
        this.siSisModTabIndexes = siSisModTabIndexes;
    }

    public Set<com.testdb.data.SiSisModTabCampos> getSiSisModTabCamposes() {
        return siSisModTabCamposes;
    }

    public void setSiSisModTabCamposes(Set<com.testdb.data.SiSisModTabCampos> siSisModTabCamposes) {
        this.siSisModTabCamposes = siSisModTabCamposes;
    }

}
