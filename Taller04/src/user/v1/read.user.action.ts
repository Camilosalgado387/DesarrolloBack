

const users = [
  {
    "id": 21,
    "name": "Captain Piett",
    "hobbies": ["singing", "walking", "guitar"],
    "years": 2,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 27,
    "name": "General Veers",
    "hobbies": ["swimming", "guitar"],
    "years": 12,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 32,
    "name": "Admiral Ozzel",
    "hobbies": ["walking", "swimming", "guitar"],
    "years": 7,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 41,
    "name": "Commander Jerjerrod",
    "hobbies": ["swimming", "singing"],
    "years": 3,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 10,
    "name": "Poe Dameron",
    "hobbies": ["walking", "singing"],
    "years": 14,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 2,
    "name": "Temmin 'Snap' Wexley",
    "hobbies": ["swimming", "drums"],
    "years": 30,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 44,
    "name": "Tallissan Lintra",
    "hobbies": ["walking", "walking"],
    "years": 16,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 99,
    "name": "Ello Asty",
    "hobbies": ["guitar", "singing"],
    "years": 2,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 3,
    "name": "Wedge Antilles",
    "hobbies": ["guitar", "walking"],
    "years": 22,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 8,
    "name": "Ciena Ree",
    "hobbies": ["guitar", "singing"],
    "years": 15,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 40,
    "name": "Iden Versio",
    "hobbies": ["drums", "walking"],
    "years": 37,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 66,
    "name": "Thane Kyrell",
    "hobbies": ["drums", "singing"],
    "years": 10,
    "team": "axvedw",
    "faction": "Rebels"
  }
];

// DECLARE ACTION FUNCTION
//punto 1
async function getUsersByHobby(hobby:string): Promise<any[]> {
  return users.filter(user => user.hobbies.includes(hobby));
}
//Punto 2
async function userExists(id:number): Promise<boolean> {
  return users.some(user => user.id === id);
}
//Punto 3
async function totalExperienceByTeam(team: string): Promise<number> {
  return users.filter(user => user.team === team).reduce((acc, user) => acc + user.years, 0);
}
//Punto 4
async function usersByFaction(faction:string):Promise<any[]> {
  return users.filter(user => user.faction === faction);
}
//Punto 5

async function newUser(id:number, name:string, hobbies:string[], years:number, team:string, faction:string): Promise<any[]> {
  const newUser = {
    id,
    name,
    hobbies,
    years,
    team,
    faction
  }
  users.push(newUser);
  return users;
}
// EXPORT ACTION FUNCTION
export {getUsersByHobby, userExists, totalExperienceByTeam, usersByFaction, newUser};
