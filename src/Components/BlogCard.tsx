import type { Blog } from "../Types/Blog";

type BlogItemProps = {
  blog: Blog;
};

export const BlogCard=({blog}:BlogItemProps)=>{
    return(
        <>
        <h1>{blog.title}</h1>
        <b>{blog.content}</b>
        <h6>{blog.userId}</h6>
        </>
    )
}

export default BlogCard;