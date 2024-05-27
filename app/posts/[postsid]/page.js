
import PostDetails from "@/app/componsnts/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({params}){

    const postsid = params.postsid

    const loadingJsx=(<div><h1>loading...</h1></div>) //-1
    return(
        <div  style={{padding:"20px"}}> 
            <h1>Post Details </h1>

            <Suspense fallback={loadingJsx}> {/* //-2 */}

            <PostDetails postsid={postsid}/>

            </Suspense>
        </div>
    );
}