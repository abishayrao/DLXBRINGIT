
package com.postgresdb.data;



/**
 *  postgresDB.Logintable
 *  01/08/2013 14:44:39
 * 
 */
public class Logintable {

    private Short userid;
    private String username;
    private String userpwd;
    private String role;

    public Short getUserid() {
        return userid;
    }

    public void setUserid(Short userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpwd() {
        return userpwd;
    }

    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
