export default function ShowArtPage(props){
    console.log(props);
    return(
        <div>
            <h1>show art</h1>
            <h1>{props.params.title}</h1>
        </div>
    );
}