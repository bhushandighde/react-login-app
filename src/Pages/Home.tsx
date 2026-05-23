import { ShowBlogs } from "../Components/ShowBlogs";
import {AllBlogs} from "../Hooks/AllBlogs";

export const Home =()=>{
    const {blogs,setBlogs}=AllBlogs();
    console.log(blogs ,"All blogs");
    return (
        <>
        <h1>Welcome home</h1>
        <ShowBlogs blogs={blogs} ></ShowBlogs>
        </>
    )
}
export default Home;