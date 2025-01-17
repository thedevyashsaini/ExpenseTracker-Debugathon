import { Router } from "express";
const router = Router()
import User from '../models/User.js'

router.delete('/:name',async (req,res)=>{
  const newCategories =  req.user.categories.filter(n=>n!==req.params.name)
  const user = await User.findByIdAndUpdate(req.user.id,{categories:newCategories},{new:true})
  res.status(200).json(user)
})

router.post('/',async (req,res)=>{
  var updatedCat = []
  if(!req.user.categories.includes(req.body.name)){
    updatedCat = req.user.categories.concat(req.body.name)
  }else{
    updatedCat = req.user.categories
  }
  const user = await User.findByIdAndUpdate(req.user.id,{categories:updatedCat},{new:true})
  res.status(200).json(user)
})

export default router