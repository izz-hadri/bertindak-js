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
            OtherLinks = new()
            {
                new()
                {
                    Url = "mailto:hadriizz.work@gmail.com",
                    Title = "Email"
                },
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

    [HttpGet(nameof(GetExperiences))]
    public ActionResult<List<Experience>> GetExperiences()
    {
        List<Experience> experiences = new()
        {
            new()
            {
                Title = "C#",
                Keywords = new()
                {
                    ".NET 4.8",
                    ".NET Core",
                    "Web-API",
                    "MVC",
                    "EF Core",
                    "Razor",
                    "Azure Functions"
                },
                Notes = new()
                {
                    "Build a CRUD system using the Asp.Net MVC framework and Asp.Net Web API framework.",
                    "Implement Entity Framework for Object Relational Mapping (ORM).",
                    "Design front-end using Razor page.",
                    "Apply MSSQL as a database.",
                    "Use Azure Function Queue Trigger and Timer Trigger."
                }
            },
            new()
            {
                Title = "Javascript/Typescript",
                Keywords = new()
                {
                    "AngularJs",
                    "Angular"
                },
                Notes = new()
                {
                    "Build a front end using AngularJs with Typescript.",
                    "Build a single-page application (SPA) using Angular.",
                    "Apply object-oriented programming (OOP) in Typescript."
                }
            },
            new()
            {
                Title = "CSS/SCSS",
                Keywords = new(),
                Notes = new()
                {
                    "Design HTML elements in SCSS based on Figma designs."
                }
            },
            new()
            {
                Title = "Python",
                Keywords = new()
                {
                    "Django",
                    "Machine Learning",
                    "NLP",
                    "Object Detection"
                },
                Notes = new()
                {
                    "Build a system using MVC framework with Artificial Intelligence (AI) using Django.",
                    "Apply PostgreSQL and SQLite as databases.",
                    "Manipulate data from the CSV file.",
                    "Process an image using OpenCV.",
                    "Training data in Machine Learning (ML).",
                    "TensorFlow and Keras.",
                    "Object detection and recognition.",
                    "Natural Language Processing (NLP).",
                    "Automate certificate generator using Canvas and Pandas (in Google Colab)."
                }
            },
            new()
            {
                Title = "Java",
                Keywords = new()
                {
                    "MVC",
                    "Android App",
                    "Firebase"
                },
                Notes = new()
                {
                    "Build a web system using the MVC framework.",
                    "Apply Java Oracle as a database.",
                    "Produce a CRUD mobile application using Android Studio.",
                    "Apply Firebase and SQLite as databases."
                }
            },
            new()
            {
                Title = "Git",
                Keywords = new()
                {
                    "Git Flow"
                },
                Notes = new()
                {
                    "Collaborated with a team of developers, using Git Flow for version control and branch management.",
                    "Implemented feature branches and bug fixes, ensuring seamless code integration through pull requests.",
                    "Resolved merge conflicts and maintained a clean and organized repository using Git best practices."
                }
            },
            new()
            {
                Title = "Figma",
                Keywords = new(),
                Notes = new()
                {
                    "Design web components.",
                    "Design web pages."
                }
            }
        };

        return Ok(experiences);
    }
}
