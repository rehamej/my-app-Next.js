        export default async function PostDetails({ postsid }) {
            // await new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve();
            //     }, 2000);
            // });
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postsid}`,
                {

                            // الكاش وظيفتو انو كانو يحظ البيانات ,فانا اقلو لاتحفظ عشان يسويلها ابديت كل مره,حولتو الى SSR
        // cache:'no-store'

                    next: {         //ISG عشان احولو الى
                        revalidate: 120,
                    },
                }
            );
    const post = await response.json();



    return(
        <div> 


            <div  style={{ width: "100%", background: "white", padding: "10px", borderRadius: "10px" , color:"black", marginTop:"20px"}}>
            <h1>
                {post.title}
            </h1>
            <hr></hr>

            <h3>{post.body}</h3>                
            </div>

        </div>
    );
}