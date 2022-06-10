import React, {useState}  from "react";

function CategoryFilter({categories, category, setCategory}) {

const categoryArray = categories.map((cat) => {
  return <button key={cat} onClick={() => setCategory(cat)} className={cat===category ? "selected" : null}>{cat}</button>
}) 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
