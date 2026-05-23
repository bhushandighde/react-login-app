import { useEffect,useState } from "react";
import type { Blog } from "../Types/Blog";


export const AllBlogs=()=>{
const [blogs,setBlogs]=useState<Blog[]>([]);

useEffect(()=>{
const loadBlogs= async()=>{
    try{
   const response = await fetch("https://localhost:44325/api/Blog/getAllBlogs",{
    method:'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })

  if(!response.ok){
    throw new Error("Can't get blog")
  }
  const data: Blog[] = await response.json();
  setBlogs(data);
    }
    catch(error){
  console.error(error);
  console.error("blog error")
    }
  } 
   loadBlogs();
  },[])

  return {
    blogs,
    setBlogs
}

}

