export const metadata = {
    title: "article page"
};

export default function ({children}){
    return(
        <div><h1>
            Articles
            </h1>
            
            <div style={{background:"#9c232c"}}>{children}
            </div>

            </div>
    );
}