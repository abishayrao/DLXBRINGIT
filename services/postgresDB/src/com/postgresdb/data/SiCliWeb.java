
package com.postgresdb.data;



/**
 *  postgresDB.SiCliWeb
 *  01/23/2013 09:59:14
 * 
 */
public class SiCliWeb {

    private Integer sicliwebid;
    private SiClientes siClientes;
    private GeTbTiposWeb geTbTiposWeb;
    private String sicliwebtxt;

    public Integer getSicliwebid() {
        return sicliwebid;
    }

    public void setSicliwebid(Integer sicliwebid) {
        this.sicliwebid = sicliwebid;
    }

    public SiClientes getSiClientes() {
        return siClientes;
    }

    public void setSiClientes(SiClientes siClientes) {
        this.siClientes = siClientes;
    }

    public GeTbTiposWeb getGeTbTiposWeb() {
        return geTbTiposWeb;
    }

    public void setGeTbTiposWeb(GeTbTiposWeb geTbTiposWeb) {
        this.geTbTiposWeb = geTbTiposWeb;
    }

    public String getSicliwebtxt() {
        return sicliwebtxt;
    }

    public void setSicliwebtxt(String sicliwebtxt) {
        this.sicliwebtxt = sicliwebtxt;
    }

}
