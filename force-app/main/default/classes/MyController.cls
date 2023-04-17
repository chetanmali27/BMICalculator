public class MyController {
	public String username { get; set; }
    public String password { get; set; }
    public String newUsername { get; set; }
    public String newPassword { get; set; }
    public String confirmPassword { get; set; }
    
    public PageReference login() {
        // perform login logic here
        return null;
    }
    
    public PageReference signup() {
        // perform signup logic here
        return null;
    }
}