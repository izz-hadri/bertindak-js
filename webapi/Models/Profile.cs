namespace webapi.Models;

public class Profile
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public List<string> OtherLinks {  get; set; }  
}
