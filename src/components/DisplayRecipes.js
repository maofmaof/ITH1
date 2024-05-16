import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function DisplayRecipes() {

    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetchRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function fetchRecipes() {
        const response = await fetch('https://dummyjson.com/recipes?limit=3')
        const data = await response.json();
        setRecipes(data.recipes)
        setIsloading(false)
        console.log(data.recipes)
    }

    function renderFood(arr) {
      
        return arr.map((e, index) => {
           return <ListGroup.Item key={index}>{e}</ListGroup.Item>
        })
    }
    return (
        <div>
            {isLoading ? <p> its loading...</p> :
                recipes.map((e) => {
                    return <Card key={e.id} style={{ width: '35rem' }}>
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>
                                Cook time : {e.cookTimeMinutes}<br></br>
                                Calories per serving : {e.caloriesPerServing}
                            </Card.Text>
                            <Card.Title>Ingredients</Card.Title>
                            <ListGroup className="list-group-flush">
                                {renderFood(e.ingredients)}
                            </ListGroup>
                            <Card.Title>Instructions</Card.Title>
                            <ListGroup className="list-group-flush">
                                {renderFood(e.instructions)}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                })
            }
        </div>

    )

}

export default DisplayRecipes;