namespace webapi.Models;

public class Profile
{
    public string Name { get; set; }
    public string Position { get; set; }
    public string Description { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public List<OtherLink> OtherLinks {  get; set; }  
}

public class OtherLink
{
    public string Url { get; set; }
    public string Title { get; set; }
}

public class Achievement
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public List<string>? ListNotes { get; set; }
}