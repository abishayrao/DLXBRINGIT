
package com.testdb.data;

import java.util.Date;


/**
 *  testDB.GeTbIndexCota
 *  02/23/2013 10:50:05
 * 
 */
public class GeTbIndexCota {

    private Integer geindctid;
    private GeTbIndex geTbIndex;
    private Float geindctvalor;
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

    public Float getGeindctvalor() {
        return geindctvalor;
    }

    public void setGeindctvalor(Float geindctvalor) {
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
