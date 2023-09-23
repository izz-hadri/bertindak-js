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

    [HttpGet(Name = nameof(GetProfile))]
    public Profile GetProfile()
    {
        Profile profile = new Profile()
        {
            Name = "Izz Hadri Bin Hamidi",
            Description = "Hi, this is my ReactJs Playground. BERTINDAK-JS!",
            Email = "hadriizz.work@gmail.com",
            OtherLinks = new()
            {
                "https://www.linkedin.com/in/izzhadri/",
                "https://github.com/izz-hadri",
                "https://about-me-c2ff2.web.app/",
                "https://www.instagram.com/izz.hadri/"
            }
        };

        return profile;
    }
}
