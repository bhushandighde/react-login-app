import type { Blog } from "../Types/Blog"
import BlogCard from "./BlogCard";
type ShowBlogsProps = {
  blogs: Blog[];
};
export const ShowBlogs=({blogs}:ShowBlogsProps)=>{
 return (
    <>
     <ul>
      {blogs.map((u, index) => {
        return (
           <li key={index}>
              
               <BlogCard blog={u}></BlogCard>
            </li>
        )   
       })
      }
    </ul>
  </>
 )

}

export default ShowBlogs;