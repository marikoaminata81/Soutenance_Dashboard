import { Role } from "../role/role";

export class User {
    id!:number;
    nom!:String;
    prenom!:String;
    username!:String;
    numero!:String;
    email!:String;
    password!: String;
    Adresse!:String;
    photo!:String;
    followerCount!:User;
    followingCount!:number;
    role!: Role;
    VideoList!:any[];
    followerUsers!:any[];
    followingUsers!:any[];
    likedComments!:any[];
    ProduitList!:any[];
    likedPosts!:any[];
}

 

 
 
 
  
