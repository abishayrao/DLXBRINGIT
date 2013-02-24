import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import java.sql. * ;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import sun.misc.BASE64Encoder;@ExposeToClient
public class Authorize extends JavaServiceSuperClass {
    String greeting = "Welcome";
    int pass=0;
    static int failure=0;
    // Connecting to DB
    public Connection connectDB()
     {
        String driverclass="org.postgresql.Driver";
        String url="jdbc:postgresql://localhost:5432/postgres";
        String username="postgres";
        String password="basel1";
        Connection conn=null;
        
        try {
            Class.forName(driverclass);
            conn = DriverManager.getConnection(url,username,password);
            }
         catch(Exception e)
            {}
         return conn;
     }
     // Authentication of Username & Password
     public String Authorized(String uname, String pass) {
        
        String res = "Sorry, Access Denied !";
        String Desg = "User";
        int res1 = 0;
        int res2 = 0;
        int res3 = 0;
        int in = 0, nxt = 0;
        try {
            
            Connection con=connectDB();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from ge_sg_usuarios");
            while (rs.next()) 
            { in = rs.getInt(2);
                // if username matches
                if ((uname.equals(rs.getString(3))))
               // Checking password
                if(PassChk(pass)==1)
                 {
                    nxt = in ;
                    // Check user Status
                    res1 = 1;
                    // Retrieve Designation (Administrator/User)
                    String s = "S";
                    if (s.equals(rs.getString(9))) Desg = "Administrator";
                    break;
                 }
            }
            rs.close();
            st.close();
            con.close();
        }
        catch (Exception e) {}
        // Checking Groups
        try {
            Connection con=connectDB();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from ge_sg_grupos");
            while (rs.next()) { in = rs.getInt(1);
                if (nxt == (rs.getInt(2))) { in = nxt;
                    res2 = 1;
                    break;
                }
            }
            rs.close();
            st.close();
            con.close();
        }
        catch (Exception e) {}
        String Client = "Unknown";
        // Checking Client Status
        try {
            Connection con=connectDB();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from si_clientes");
            while (rs.next()) {
                if (nxt == rs.getInt(1)) {
                    String a = "A";
                    if (a.equals(rs.getString(6))) {
                        Client = rs.getString(4);
                        res3 = 1;
                    }
                    else res3 = 0;
                    break;
                }
            }
            rs.close();
            st.close();
            con.close();
        }
        catch (Exception e) {}
        // Authenticating if all steps are successful
        if ((res1 == 1) && (res2 == 1) && (res3 == 1) &&(failure<3)) {
            res = "Authenticated";
            failure=0;
            greeting="Welcome " + Client + " " + Desg + "!";
            return res;
        }
        else {
        failure=failure+1;
        return res;
        }
    }
    // Greeting the logged in! 
    public String Greet() {
        return greeting;
    }
    // Encrption of Password in md5 using SHA Algorithm
    public synchronized String encrypt(String plaintext) throws Exception
  {
    MessageDigest md = null;
    try
    {
      md = MessageDigest.getInstance("SHA"); //step 2
    }
    catch(NoSuchAlgorithmException e)
    {
      throw new Exception(e.getMessage());
    }
    try
    {
      md.update(plaintext.getBytes("UTF-8")); //step 3
    }
    catch(UnsupportedEncodingException e)
    {
      throw new Exception(e.getMessage());
    }
 
    byte raw[] = md.digest(); //step 4
    String hash = (new BASE64Encoder()).encode(raw); //step 5
    return hash; //step 6
  }
  // Check the password punched in by encrypting it & checking against the relevant DB entry
  public int PassChk(String in)
  {  
      String encrypted=new String();
      try{encrypted=encrypt(in);}
      catch(Exception e){}
      try {
            Connection con=connectDB();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from ge_sg_usuarios");
            while (rs.next()) {
                if (encrypted.equals(rs.getString(4))) {
                     pass=1; break;}
                     else pass=0;
            }
      }
      catch(Exception e) { }
      return pass;
     }
     public int chkfailure(){
         return failure;}
     }