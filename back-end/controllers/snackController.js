const express = require("express");
const snacks = express.Router();

const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack }= require("../queries/snacks.js");


snacks.get("/", async (req, res) => {
    try{
        const allSnacks = await getAllSnacks()
        if (allSnacks[0]) {
          res.status(200).json({
              "success": true, 
              "payload": allSnacks 
            })
          } else {
          res.status(500).json({ error: "server error" });
        }
    }catch(err){
        console.log(err)
    }
});

snacks.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try{
        const snack = await getSnack(id);
        if(snack.id){
            res.status(200).json({
                "success":true,
                "payload":snack
            });
        } else {
            res.status(404).json({
                "success": false,
                "payload": "not found"
            });
        }
    } catch(err){
        console.log(err);
    }
})

snacks.post("/", async (req, res)=>{
    const { body } = req;

    try{
        const createdSnack = await createSnack(body);
        if(!createdSnack.name){
            res.status(422).json({error: "Must include name field"})
        }
        if(createdSnack.name && createdSnack.image){
            res.status(200).json({
                "success":true,
                "payload":createdSnack
            });
        }   
        if(createdSnack.name && !createdSnack.image){
            res.status(200).json({
                "success":true,
                "payload": createdSnack
        
            });
        }
    } catch(err){
        console.log(err);
    }
})

snacks.delete("/:id", async(req, res)=>{
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if(deletedSnack.id){
        res.status(200).json({
            "success":true,
            "payload": deletedSnack
        });
    } else {
        res.status(404).json({
            "success": false,
            "payload": "not found"
        });
    }
})

snacks.put("/:id", async(req, res)=>{
    const { id } = req.params;
    const { body } = req;
    const updatedSnack = await updateSnack(id, body);
    if(updatedSnack.id){
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({error: "Snack not found"});
    }
})



module.exports = snacks;