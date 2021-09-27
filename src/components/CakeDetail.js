function CakeDetail({cake}) {
    return(
    <div key={cake.flavor}>
    <img src={cake.image} style={{width:"200px"}}></img>
    <p>{cake.flavor}</p>
    <p>{cake.size}</p>
    <p>${cake.price}</p>
    <p>{cake.description}</p>
    </div>
    )
}

export default CakeDetail;