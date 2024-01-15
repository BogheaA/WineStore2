import { Router } from "express";
import { sample_tags, sample_wines } from "../data";
import asyncHandler from "express-async-handler";
import { WineModel } from "../models/wine.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
       const winesCount = await WineModel.countDocuments();
       if(winesCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await WineModel.create(sample_wines);
       res.send("Seed Is Done!");
   }
   ))

router.get("/", asyncHandler(
    async (req,res) => {
        const wines = await WineModel.find();
        res.send(wines);
    })
)

router.get("/search/:searchTerm",asyncHandler(
    async (req, res) =>{
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const wines = await WineModel.find({name: {$regex:searchRegex}});
        res.send(wines);
    }
) )

// const searchTerm = req.params.searchTerm;
// const wines = sample_wines.filter(wine => wine.name.toLowerCase().includes(searchTerm.toLowerCase() ) );

router.get("/tags", asyncHandler(
    async (req, res) =>{
        const tags = await WineModel.aggregate([
            {
                $unwind: '$tags' //2 wine with 3 tags. unwind tags => 6 wine tags in 1
            },{
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },{
                $project:{
                    _id:0,
                    name:'$_id',
                    count:'$count'
                }
            }
        ]).sort({count: -1});

        const all ={
            name:'All',
            count: await WineModel.countDocuments()
        }
        tags.unshift(all); //new item is first displayed
        res.send(tags);
    }
) )

router.get("/tag/:tagName", asyncHandler(
    async (req, res) =>{
        const wines = await WineModel.find({tags:req.params.tagName})
        res.send(wines);
    }
))

router.get("/:wineId", asyncHandler(
    async (req, res) =>{
        const wine = await WineModel.findById(req.params.wineId)
         res.send(wine);
    }
))

export default router;


