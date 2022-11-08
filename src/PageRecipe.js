import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import RecipeDetail from "./RecipeDetail";

export default function PageRecipe() {
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    function handleBack() {
        navigate("/");
    }

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/recipes/${params.recipeId}`);
        promise.then(response => setRecipe(response.data));
        promise.catch(error => console.log("error", error));
    }, [params.recipeId]);

    return (
        <div className="PageRecipe">
            {
                recipe ?
                    <RecipeDetail
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        time={recipe.time}
                        steps={recipe.steps}
                    /> :
                    <div>Não há nada para exibir</div>
            }
            <div className="actions">
                <button onClick={handleBack}>Voltar</button>
            </div>
        </div>
    )
}