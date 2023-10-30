export default function CoffeeCard(){
    return(
        <div className="coffee-card">
            <h3>{coffee.Name}</h3>
            <p>{coffee.description}</p>
        </div>
    )
}