using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{

    public PersonController()
    {
    }

    [HttpGet(nameof(GetProfile))]
    public ActionResult<Profile> GetProfile()
    {
        Profile profile = new()
        {
            Name = "Izz Hadri Bin Hamidi",
            Position = "Fullstack Developer",
            Description = "Hi, this is my personal website using BertindakJs",
            Email = "hadriizz.work@gmail.com",
            OtherLinks = new()
            {
                new()
                {
                    Url = "https://www.linkedin.com/in/izzhadri/",
                    Title = "LinkedIn",
                },
                new()
                {
                    Url = "https://github.com/izz-hadri",
                    Title = "Github",
                },
                new()
                {
                    Url = "https://www.instagram.com/izz.hadri/",
                    Title = "Instagram",
                },
                new()
                {
                    Url = "https://about-me-c2ff2.web.app/",
                    Title = "Other",
                }
            }
        };

        return Ok(profile);
    }

    [HttpGet(nameof(GetAchievements))]
    public ActionResult<List<Achievement>> GetAchievements()
    {
        List<Achievement> achievements = new()
        {
            new()
            {
                Id = 1,
                Title = "Final Year Project Awards (Bachelor)",
                Description = "Project: Automatic Malaysian Vehicle Plate Number Identification using CNN",
                ListNotes = new()
                {
                    "Best Project Award",
                    "Industrial Panel Award",
                    "Gold Medal in i-JaMCSIIX 2021"
                }
            },
            new()
            {
                Id = 2,
                Title = "Vice-Chancellor Award in Diploma",
                Description = "Achieved Dean’s List for every semester and managed to get 3.78 for CGPA in Diploma (ANC)",
                ListNotes = new()
            },
            new()
            {
                Id = 3,
                Title = "Completed Online Courses",
                Description = "Datacamp Python Track and Udemy Online Course",
                ListNotes = new()
                {
                    "Cert. in Data Analyst with Python track, Data Scientist with Python track, and Python Programmer track",
                    "Cert. Question Generation using Natural Language Processing online course"
                }
            },
            new()
            {
                Id = 4,
                Title = "Joined 1DIIDC 2018",
                Description = "Attained second place in 1st Digitised Invention, Innovation & Design Competition 2018",
                ListNotes = new()
            }
        };

        return Ok(achievements);
    }
}
