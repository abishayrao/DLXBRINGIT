
package com.saasdb.data;

import java.util.Date;


/**
 *  saasDB.GeTbIndexCota
 *  01/08/2013 14:21:12
 * 
 */
public class GeTbIndexCota {

    private Integer geindctid;
    private GeTbIndex geTbIndex;
    private Double geindctvalor;
    private String geindctstatus;
    private Date geindctinivig;
    private Date geindctfimvig;

    public Integer getGeindctid() {
        return geindctid;
    }

    public void setGeindctid(Integer geindctid) {
        this.geindctid = geindctid;
    }

    public GeTbIndex getGeTbIndex() {
        return geTbIndex;
    }

    public void setGeTbIndex(GeTbIndex geTbIndex) {
        this.geTbIndex = geTbIndex;
    }

    public Double getGeindctvalor() {
        return geindctvalor;
    }

    public void setGeindctvalor(Double geindctvalor) {
        this.geindctvalor = geindctvalor;
    }

    public String getGeindctstatus() {
        return geindctstatus;
    }

    public void setGeindctstatus(String geindctstatus) {
        this.geindctstatus = geindctstatus;
    }

    public Date getGeindctinivig() {
        return geindctinivig;
    }

    public void setGeindctinivig(Date geindctinivig) {
        this.geindctinivig = geindctinivig;
    }

    public Date getGeindctfimvig() {
        return geindctfimvig;
    }

    public void setGeindctfimvig(Date geindctfimvig) {
        this.geindctfimvig = geindctfimvig;
    }

}
