
package com.testdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  testDB.StEpFabricantes
 *  02/23/2013 10:50:04
 * 
 */
public class StEpFabricantes {

    private Integer stepfaid;
    private StEpCategFabr stEpCategFabr;
    private SiClientes siClientes;
    private String stepfadoc;
    private String stepfanome;
    private String stepfaobs;
    private String stepfastatus;
    private Date stepfainivig;
    private Date stepfafimvig;
    private Set<com.testdb.data.StEpFabricTel> stEpFabricTels = new HashSet<com.testdb.data.StEpFabricTel>();
    private Set<com.testdb.data.StEpFabricContatos> stEpFabricContatoses = new HashSet<com.testdb.data.StEpFabricContatos>();
    private Set<com.testdb.data.StEpFabricWeb> stEpFabricWebs = new HashSet<com.testdb.data.StEpFabricWeb>();
    private Set<com.testdb.data.StEpFabricEnd> stEpFabricEnds = new HashSet<com.testdb.data.StEpFabricEnd>();

    public Integer getStepfaid() {
        return stepfaid;
    }

    public void setStepfaid(Integer stepfaid) {
        this.stepfaid = stepfaid;
    }

    public StEpCategFabr getStEpCategFabr() {
        return stEpCategFabr;
    }

    public void setStEpCategFabr(StEpCategFabr stEpCategFabr) {
        this.stEpCategFabr = stEpCategFabr;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public String getStepfadoc() {
        return stepfadoc;
    }

    public void setStepfadoc(String stepfadoc) {
        this.stepfadoc = stepfadoc;
    }

    public String getStepfanome() {
        return stepfanome;
    }

    public void setStepfanome(String stepfanome) {
        this.stepfanome = stepfanome;
    }

    public String getStepfaobs() {
        return stepfaobs;
    }

    public void setStepfaobs(String stepfaobs) {
        this.stepfaobs = stepfaobs;
    }

    public String getStepfastatus() {
        return stepfastatus;
    }

    public void setStepfastatus(String stepfastatus) {
        this.stepfastatus = stepfastatus;
    }

    public Date getStepfainivig() {
        return stepfainivig;
    }

    public void setStepfainivig(Date stepfainivig) {
        this.stepfainivig = stepfainivig;
    }

    public Date getStepfafimvig() {
        return stepfafimvig;
    }

    public void setStepfafimvig(Date stepfafimvig) {
        this.stepfafimvig = stepfafimvig;
    }

    public Set<com.testdb.data.StEpFabricTel> getStEpFabricTels() {
        return stEpFabricTels;
    }

    public void setStEpFabricTels(Set<com.testdb.data.StEpFabricTel> stEpFabricTels) {
        this.stEpFabricTels = stEpFabricTels;
    }

    public Set<com.testdb.data.StEpFabricContatos> getStEpFabricContatoses() {
        return stEpFabricContatoses;
    }

    public void setStEpFabricContatoses(Set<com.testdb.data.StEpFabricContatos> stEpFabricContatoses) {
        this.stEpFabricContatoses = stEpFabricContatoses;
    }

    public Set<com.testdb.data.StEpFabricWeb> getStEpFabricWebs() {
        return stEpFabricWebs;
    }

    public void setStEpFabricWebs(Set<com.testdb.data.StEpFabricWeb> stEpFabricWebs) {
        this.stEpFabricWebs = stEpFabricWebs;
    }

    public Set<com.testdb.data.StEpFabricEnd> getStEpFabricEnds() {
        return stEpFabricEnds;
    }

    public void setStEpFabricEnds(Set<com.testdb.data.StEpFabricEnd> stEpFabricEnds) {
        this.stEpFabricEnds = stEpFabricEnds;
    }

}
