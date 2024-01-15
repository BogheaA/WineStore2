import { Schema,model } from "mongoose";

export interface Wine{
    id:string;
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    imageUrl: string;

}

export const WineSchema = new Schema<Wine>(
    {
        name: {type:String, required:true},
        price: {type:Number, required:true},
        tags: {type:[String]},
        favorite: {type:Boolean, default:false},
        imageUrl: {type:String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const WineModel = model<Wine>('wine', WineSchema);