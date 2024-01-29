const Map=()=>{
    const array=["Rm","jimin"]
    const array1=[...array,"Surya","jothika"]
    return(
        <div>
    <ul type="None">
                {array1.map((val,index)=>(
                <li key={index}>{val}</li>
                ))}
            
            </ul>
        </div>
    )
}
export default Map;