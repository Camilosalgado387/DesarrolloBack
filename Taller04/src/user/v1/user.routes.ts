import { Router, Request, Response } from "express"
import { readUsersByHobby, readUserExists, readTotalExperienceByTeam, readUsersByFaction, newUser } from "./user.controller"

// INIT ROUTES
const userRoutes = Router()

// DECLARE ENDPOINT FUNCTIONS
//Endpoint function punto 1
async function GetHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string
  if(!hobby){
    return response.status(400).json({message: "Hobby req."})
  }
  const usersWithHobby = await readUsersByHobby(hobby)
  response.status(200).json({
    message: "Success.",
    users: usersWithHobby,
  })
}
//Endpoint function punto 2
async function userExists(request: Request, response: Response) {
  const id = Number(request.query.id)
  if(!id){
    return response.status(400).json({message: "Id req."})
  }
  
  const exists = await readUserExists(id)
  response.status(200).json({
    message: "Success.",
    exists,
  })
}
//Endpoint function punto 3
async function GetExperience(request: Request, response: Response) {
  const team = request.query.team as string
  if(!team){
    return response.status(400).json({message: "Team req."})
  }
  const totalExperience = await readTotalExperienceByTeam(team)
  response.status(200).json({
    message: "Success.",
    totalExperience,
  })
}
//Endpoint function punto 4
async function GetFaction(request: Request, response: Response) {
  const faction = request.query.faction as string
  if(!faction){
    return response.status(400).json({message: "Faction req."})
  }
  if(faction !== "Rebels" && faction !== "Empire"){
    return response.status(400).json({message: "Invalid faction."})
  }
  const usersFaction = await readUsersByFaction(faction)
  response.status(200).json({
    message: "Success.",
    users: usersFaction,
  })
}
//Endpoint function punto 5
async function CreateNewUser(request: Request, response: Response) {
  const { id, name, hobbies, years, team, faction } = request.body
  if(!id || !name || !hobbies || !years || !team || !faction){
    return response.status(400).json({message: "All fields req."})
  }
  if(faction !== "Rebels" && faction !== "Empire"){
    return response.status(400).json({message: "Invalid faction."})
  }
  const nUser = await newUser(id, name, hobbies, years, team, faction)
  response.status(200).json({
    message: "Success.",
    user: nUser,
  })
}
// DECLARE ENDPOINTS
userRoutes.post("/", CreateNewUser)
userRoutes.get("/hobby", GetHobby)
userRoutes.get("/exists", userExists)
userRoutes.get("/experience", GetExperience)
userRoutes.get("/by-faction", GetFaction)


// EXPORT ROUTES
export default userRoutes
