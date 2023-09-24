namespace webapi.Models;

public class Profile
{
    public string Name { get; set; }
    public string Position { get; set; }
    public string Description { get; set; }
    public string PhoneNumber { get; set; }
    public List<OtherLink> OtherLinks {  get; set; }  
}
