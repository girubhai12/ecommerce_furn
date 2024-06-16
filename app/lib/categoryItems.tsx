import {BedSingle, Lamp, Sofa } from "lucide-react"
import {ReactNode} from "react";
interface iAppProps{
    name:string;
    title:string;
    image: ReactNode;
    id:number;
}
export const categoryItems: iAppProps[] =[{
// id:0,
// name:'template',
// title:'Template',
// image:<Pencil />
id:0,
name:"bed",
title:'Bed',
image:<BedSingle/>

},
{
    // id:1,
    // name:'Ui kit',
    // title:"Ui Kit",
    // image: <Coffee />
    id:1,
    name:"lamp",
    title:"Lamp",
    image: <Lamp />
},

//     id:2,
//     name:'icon',
//     title:"Icon",
//     image:<Slice />
{
id:2,
name:"sofa",
title:"Sofa",
image:<Sofa />
},

];