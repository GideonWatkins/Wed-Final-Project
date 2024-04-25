var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
var app = builder.Build();
app.UseCors(
    options =>
        options
            .AllowAnyHeader()
            .AllowAnyOrigin()
            .AllowAnyMethod()
);

var books = new List<Book>()
{
    new Book
    (
        title: "How to be a Hero and Suck at It",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    ),
    new Book
    (
        title: "Evil Rising",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    ),
    new Book
    (
        title: "A New Symbol",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    ),
    new Book
    (
        title: "The Dark Age",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    ),
    new Book
    (
        title: "Six Sins: Guilty Men",
        description: "Arthur lost everything the day that the Pure Order, the supposed protectors of Vargras, destroyed his home and murdered his family in cold blood. To seek justice, Arthur must search out the Six Sins, a dangerous group of heroes turned criminals to try and save the world from the corrupt Pure Order.",
        series: "The Six Sins"
    )
};

app.MapGet("/books", () => {
    return books;
});


app.Run();

record Book(string title, string description, string series);