import "../../css/styling.css"
function PropsComponent(props){
   const styleattrs={
        backgroundColor:"skyblue",color:"yellow"
    }
    return(
        <div style={styleattrs}><h1>
            Name:{props.name}<br></br>Class: {props.course}class</h1>
        </div>
    );
}
export default PropsComponent;
//<div style={{backgroundColor:"purple",color:"green"}}><h1></h1>
//external styling takes place:
//1)write your css files
//2)while writing css you can use general css format
//3)import your css with absolute path
//4)if in case absolute path doesn't