import './style.css';

function RecipeDetail({ title, ingredients, time, steps }) {

    return (
        <div className="recipeDetail">
            <div className="recipe">
                <h1>{title}</h1>
                <p>{ingredients}</p>
                <h3>{time}</h3>
                <p>{steps}</p>
            </div>
        </div>
    )
}

export default RecipeDetail;