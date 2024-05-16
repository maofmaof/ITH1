import { useState } from 'react';

function Form() {

  const [recipe, setRecipe] = useState("");
  const [dislike, setDislike] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(recipe + " " +  dislike )
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label"> Enter your favourite recipe:
          <input
            type="text"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form-label"> Enter your most disliked recipe:
          <input
            type="text"
            value={dislike}
            onChange={(e) => setDislike(e.target.value)}
          />
        </label>
        <input type="submit"/>
      </form>

    </div>
  );
}

export default Form;
