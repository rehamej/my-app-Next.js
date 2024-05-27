import Todo from "../componsnts/todo";
import Link from "next/link";

//User Components
export default async function Postspage(){

        const response = await fetch('https://jsonplaceholder.typicode.com/posts' , 
        {
            // الكاش وظيفتو انو كانو يحظ البيانات ,فانا اقلو لاتحفظ عشان يسويلها ابديت كل مره,حولتو الى SSR
            // cache:'no-store'

            //ISG عشان احولو الى
            next: {
                revalidate: 120,
            },
            
        
        });
        const posts = await response.json();
        console.log(posts);

        // الللي تحت دا هوا نفسو اللي فوق بس بطريقه مخنلفه
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json));

        const postsJSX = posts.map((post) => {




    return(

            <Link href={`/posts/${post.id}`} 
            style={{ width: "70%"}}>

            <div key={post.id} style={{ width: "100%", background: "white", padding: "10px", borderRadius: "10px" , color:"black", marginTop:"20px"}}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            </Link>
        );
	});
        

        return (
        <div>
            <h1>Posts Page</h1>
            {/* <h1>{todo.title}</h1>
            <h2><Todo/></h2> */}

            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                {postsJSX}
                </div>
        </div>
    );
}