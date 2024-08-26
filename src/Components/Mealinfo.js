import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ingredients,Setingredients]=useState([]);
  const [measures,Setmeasures] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsondata = await data.json();
        setInfo(jsondata.meals[0]);
        for(let i=1;i<=20;i++){
          const ingredient = jsondata.meals[0][`strIngredient${i}`];
          const measure = jsondata.meals[0][`strMeasure${i}`]
          if(ingredient !== "" && ingredient !== null && measure !== "" && measure !== null){
            Setingredients((prev) => [...prev, ingredient]);
            Setmeasures((prev) =>[...prev,measure])
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInfo();
  }, [mealid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!info) {
    return <div>Data Not Found</div>;
  }

  return (
    <div className="mealInfo">
      <div className="mealdetail">
      <img src={info.strMealThumb} />
      <div className="info">
        <h1>Recipe Details</h1>
        <button>{info.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>

        <h3>INGREDIENTS</h3>
        <li id='ingredients'>
{/* displaying the ingredients */}
          {ingredients.filter((ingredient, index, self) => 
          self.indexOf(ingredient) === index).map((ingredient, index) => {
    return <li key={index}>{ingredient} -- {measures[index]}</li>
   })}

        </li>
      </div>
      </div>
    </div>
  );
};

export default Mealinfo;