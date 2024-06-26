
import React from "react";
import Gif from "../../components/giffy/Gif";
import useGlobalGifs from "../../hooks/giffy/useGlobalGif";

export default function Detail ({params}){
    
    const gifs = useGlobalGifs()


    const gif = gifs.find(singleGif => 
     singleGif.id ===params.id)

    return<Gif {...gif}/>
}