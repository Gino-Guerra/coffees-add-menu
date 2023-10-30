
export default function CoffeeCard({coffee}){
    return(
        <div className="coffee-card">
            <h3>{coffee.Name}</h3>
            <p>{coffee.Description}</p>
        </div>
    )
}