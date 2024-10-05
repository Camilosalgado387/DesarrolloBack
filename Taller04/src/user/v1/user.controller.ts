
import {getUsersByHobby, userExists, totalExperienceByTeam, usersByFaction} from "./read.user.action";

// DECLARE CONTROLLER FUNCTIONS

//Punto 1
async function readUsersByHobby(hobby:string): Promise<any[]>{
  const users = await getUsersByHobby(hobby);
  return users;
}
//Punto 2
async function readUserExists(id:number): Promise<boolean>{
  const exists = await userExists(id);
  return exists;
}
//Punto 3
async function readTotalExperienceByTeam(team: string): Promise<number>{
  const experience = await totalExperienceByTeam(team);
  return experience;
}
//Punto 4
async function readUsersByFaction(faction:string):Promise<any[]>{
  const usersFaction = await usersByFaction(faction);
  return usersFaction;
}
//Punto 5
async function newUser(id:number, name:string, hobbies:string[], years:number, team:string, faction:string): Promise<any[]> {
  const nUser = await newUser(id, name, hobbies, years, team, faction);
  return nUser;

}
 
// EXPORT CONTROLLER FUNCTIONS
export {readUsersByHobby, readUserExists, readTotalExperienceByTeam, readUsersByFaction, newUser };
