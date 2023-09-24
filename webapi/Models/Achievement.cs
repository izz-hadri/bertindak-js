namespace webapi.Models;

public class Achievement
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public List<string>? ListNotes { get; set; }
}