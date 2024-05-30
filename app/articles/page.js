import Link from "next/link";



export default function ArticlesPage(){
    return(
        <div>
            <h1>art Page</h1>

        <Link href="/posts">
        <button>take me back</button>
        </Link>            

        </div>


    );
}