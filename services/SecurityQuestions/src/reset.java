import com.wavemaker.runtime.service.annotations.ExposeToClient;
import java.sql.* ;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import sun.misc.BASE64Encoder;

@ExposeToClient
// Reset Password
public class reset {

    int out = 0;
    String q1 = "NULL"; // Question 1
    String a1 = "NULL"; // Answer 1
    String q2 = "NULL"; // Question 2
    String a2 = "NULL"; // Answer 2
    String email = "NULL"; //User e-mail
    String newpass = "NULL"; // new password for user
    String newencpass = "NULL"; // new encrypted password for DB
    // Connection to Database
    public Connection connectDB() {
        String driverclass = "org.postgresql.Driver";
        String url = "jdbc:postgresql://localhost:5432/postgres";
        String username = "postgres";
        String password = "basel1";
        Connection conn = null;

        try {
            Class.forName(driverclass);
            conn = DriverManager.getConnection(url, username, password);
        }
        catch (Exception e) {}
        return conn;
    }

    // Retrieveing Question, Answers & email from authenticated username
    public int uname(String in ) {
        try {
            Connection con = connectDB();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from ge_sg_usuarios");
            while (rs.next()) {
                String a = rs.getString(3);
                email = rs.getString(13);
                if ( in .equals(a)) {
                    out = 1;
                    q1 = rs.getString(14);
                    a1 = rs.getString(15);
                    q2 = rs.getString(16);
                    a2 = rs.getString(17);
                    break;
                }
            }
            rs.close();
            st.close();
            con.close();
        }
        catch (Exception e) {}
        return out;
    }
    // Show security question 1
    public String Sq1() {
        return q1;
    }
    // Check for Security Answer 1
    public int Sa1(String in ) {
        if ( in .equals(a1)) return 1;
        else return 0;
    }
    // Show security question 2
    public String Sq2() {
        return q2;
    }
    // Check for Security Answer 2
    public int Sa2(String in ) {
        if ( in .equals(a2)) 
        return 1;
        else return 0;
    }
    // Send email to user abt new password
    public String sendEmail() {
        // Change these parameters to use your own email service!
        final String smtpHost = "smtp.gmail.com";
        final String smtpHostUser = "toughmad";
        final String smtpHostPassword = "08_shravan";
        String toEmailAddress = email;
        //Get a random String
        newpass = np();
        String emailMessage = "Hey there,\n this is your newly set password : " + newpass + "\nUse the same to log-in. \nBYE :)";
        //Replace the old password in database
        try {
            Connection con = connectDB();
            Statement st1 = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            ResultSet rs1 = st1.executeQuery("select * from ge_sg_usuarios");
            while (rs1.next()) {
                if (email.equals(rs1.getString(13))) {
                    // encrypt password
                    try {
                        newencpass = encrypt(newpass);
                    }
                    catch (Exception e) {}
                    // Update Encrypted password in DB
                    rs1.updateString(4, newencpass);
                    rs1.updateRow();
                }
            }
            rs1.close();
            st1.close();
            con.close();
        }
        catch (Exception e) {}
        //Proceed to mail
        // Use javamail api, set parameters from registration.properties file
        // set the session properties
        try {
            Properties props = System.getProperties();
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", smtpHost);
            props.put("mail.smtp.port", "587");
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.required", "true");
            Session session = Session.getDefaultInstance(props, null);

            // Create email message
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("toughmad@gmail.com"));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(toEmailAddress));
            message.setSubject("Password Reset Information");
            message.setText(emailMessage);

            // Send smtp message
            Transport tr = session.getTransport("smtp");
            tr.connect(smtpHost, 587, smtpHostUser, smtpHostPassword);
            message.saveChanges();
            tr.sendMessage(message, message.getAllRecipients());
            tr.close();

            return "Mail sent successfully.";

        }
        catch (MessagingException e) {
            return "Unable to Send the mail";
        }
    }

    // Encrypting password
    public String encrypt(String plaintext) throws Exception {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("SHA"); //step 2
        }
        catch (NoSuchAlgorithmException e) {
            throw new Exception(e.getMessage());
        }
        try {
            md.update(plaintext.getBytes("UTF-8")); //step 3
        }
        catch (UnsupportedEncodingException e) {
            throw new Exception(e.getMessage());
        }

        byte raw[] = md.digest(); //step 4
        String hash = (new BASE64Encoder()).encode(raw); //step 5
        return hash; //step 6
    }

    // Generating a new random string password
    public String np() {
        final int plen = 6;
        StringBuffer sb = new StringBuffer();
        newpass = sb.toString();
        for (int x = 0; x < plen; x++)
        sb.append((char)((int)(Math.random() * 26) + 97));
        return sb.toString();
    }

    public String resetpassword(String epass, String npass) {
        String ans = "Sorry, Result Unknown!";
        String newenpass = "XXXXXX";
        String encepass = "XXXXXX";
        try {
            newenpass = encrypt(npass);
            encepass = encrypt(epass);
        }
        catch (Exception e) {
            ans = "Encryption Failed!";
        }
        try {
            Connection con = connectDB();
            Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            ResultSet rs = st.executeQuery("select * from ge_sg_usuarios");
            while (rs.next()) {
                if (encepass.equals(rs.getString(4))) {
                    rs.updateString(4,newenpass);
                    rs.updateRow();
                    ans = "Success! .. Password Changed.";
                    break;
                }
            }
        }
        catch (Exception e) {
            ans = "Unsuccessful! .. Unable to Change Password";
        }
        return ans;
    }
}