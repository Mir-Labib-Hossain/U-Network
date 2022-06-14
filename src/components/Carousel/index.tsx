import React from "react";
import View from "./view";
export interface CarouselProps{
    children: React.ReactNode
}
const Carousel : React.FC<CarouselProps>  =({children})=>{
    return <View children={children}/>
}
export default Carousel;