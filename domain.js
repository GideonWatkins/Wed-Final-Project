export var StoreList =  [
    {
        title: "How to be a Hero and Suck at It",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    },
    {
        title: "Evil Rising",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    },
    {
        title: "A New Symbol",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    },
    {
        title: "The Dark Age",
        description: "Gray lives in a world of superpowers, where the comicbook profession of Heroes have become the norm. They protect the supercity of Goldpeak from Villains and keep the peace. Everyone wants to be a Hero, and Gray is no exception. But the truth is Gray is naturally good at being a Villain, and being a Hero is a lot harder than it looks...",
        series: "How to be a Hero and Suck at It"
    },
    {
        title: "Six Sins: Guilty Men",
        description: "Arthur lost everything the day that the Pure Order, the supposed protectors of Vargras, destroyed his home and murdered his family in cold blood. To seek justice, Arthur must search out the Six Sins, a dangerous group of heroes turned criminals to try and save the world from the corrupt Pure Order.",
        series: "The Six Sins"
    },
];

export var CartList = [

];

export var PrivateBooksList = [

];

export const RemoveFromList = (list, item) =>{
    const index = list.indexOf(item);
    list.splice(index,1);
}

export const AddToList = (list, item) => {
    list.push(item);
}