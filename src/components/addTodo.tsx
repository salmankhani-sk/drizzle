
"use client"
import React, { useState, useTransition } from "react"; 
import svg from "../../public/svg.png"
import Image from "next/image";
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
const Addtodo=()=>{
    const [task , setTask]= useState<NewTodo | null>(null)  
    const { refresh } = useRouter() ; 
    const handleSubmit =async()=>{
        try {
        if (task){
        const res =await fetch("/api/todo",{
            method: "POST",
            body: JSON.stringify({
                task: task.task
            })
        })
        refresh()
        
    }
        } catch(error){
            console.log("error")
        }
}
    return(
        <div>
        <form  className="flex w-full gap-x-3">
<input onChange={(e)=> setTask({task: e.target.value})} type="text"
 className="w-full px-5 py-3.5 border rounded-full focus:outline-secondary"/>
<button  onClick={handleSubmit}
 className="p-4 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" >
    <Image src={svg} alt="svg" width={20} height={20} />
</button>
        </form>
        </div>
    )
}
export default Addtodo