import './AddCoffee.css'

export default function AddCoffee() {
    const getCoffees = (setCoffees) => {
        fetch('https:first-deployed-api-c12.web.app/coffees')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(alert)
    }




    const handleSubmit = (e) => {
        e.preventDefault()
        const Name = e.target.Name.value
        const Recipe = e.target.Recipe.value
        const Description = e.target.Description.value

        const newCoffee = { Name, Recipe, Description }
        fetch('https:first-deployed-api-c12.web.app/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'Success!') {
                    e.target.Name.value = ''
                    e.target.Recipe.value = ''
                    e.target.Description.value = ''
                }
            })
            .catch(alert)
            getCoffees()
    }



    return (
        <section className="coffee-form">
            <h2>add a coffee</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Name'>
                    Name:
                    <input type='text' Name='Name' />
                </label>
                <label htmlFor='Recipe'>
                    Recipe:
                    <input type='text' name='Recipe' />
                </label>
                <label htmlFor='Description'>
                    Description:
                    <input type='text' name='Description' />
                </label>
                <input type='submit' value="Add" className='add-btn' />
            </form>
        </section>
    )
}