import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSomeCategories } from 'redux/categories/actions';

import s from './tets.module.css';

export const MainData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSomeCategories());
    // eslint-disable-next-line
  }, []);

  const meals = useSelector(state => state.categories.mealsFiltered);
  const [mealsData, setMealsData] = useState([]);
  useEffect(() => {
    if (meals.length > 0) {
      setMealsData(meals);
    }
  }, [meals]);
  console.log('meals', meals);
  const chicken = meals.filter(one => one.category === 'Chicken');
  const dessert = meals.filter(one => one.category === 'Dessert');
  const miscelous = meals.filter(one => one.category === 'Miscellaneous');
  const brekfast = meals.filter(one => one.category === 'Breakfast');

  console.log('chicken', chicken);
  console.log('mealsdata', mealsData);
  // Tutaj renderujesz właściwą zawartość komponentu, używając `meals`
  return (
    <div className={s.position}>
      <div>Chicken</div>
      <div className={s.fleximage}>
        {chicken.slice(0, 4).map(meal => (
          <NavLink className={s.lonk} to={`/recipes/${meal._id}`}>
            <div className={s.recipe} key={meal._id}>
              <img className={s.img} src={meal.thumb} alt={meal.thumb} />
              <div className={s.overlay}>{meal.title}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to={'/categories/Chicken'}>
        <button>See all</button>
      </NavLink>
      <div>Breakfast</div>
      <div className={s.fleximage}>
        {brekfast.slice(0, 4).map(meal => (
          <NavLink className={s.lonk} to={`/recipes/${meal._id}`}>
            <div className={s.recipe} key={meal._id}>
              <img className={s.img} src={meal.thumb} alt={meal.thumb} />
              <div className={s.overlay}>{meal.title}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to={'/categories/breakfast'}>
        <button>See all</button>
      </NavLink>
      <div>Miscellaneous</div>
      <div className={s.fleximage}>
        {miscelous.slice(0, 4).map(meal => (
          <NavLink className={s.lonk} to={`/recipes/${meal._id}`}>
            <div className={s.recipe} key={meal._id}>
              <img className={s.img} src={meal.thumb} alt={meal.thumb} />
              <div className={s.overlay}>{meal.title}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to={'/categories/Miscellaneous'}>
        <button>See all</button>
      </NavLink>
      <div>Dessert</div>
      <div className={s.fleximage}>
        {dessert.slice(0, 4).map(meal => (
          <NavLink className={s.lonk} to={`/recipes/${meal._id}`}>
            <div className={s.recipe} key={meal._id}>
              <img className={s.img} src={meal.thumb} alt={meal.thumb} />
              <div className={s.overlay}>{meal.title}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to={'/categories/Dessert'}>
        <button>See all</button>
      </NavLink>
    </div>
  );
  // const dispatch = useDispatch();
  // const categories = useSelector(state => state.categories.items);
  // const categoryRecipes = useSelector(state => state.categories.mealsFiltered);
  // const loading = useSelector(state => state.categories.isLoading);
  // useEffect(() => {
  //   dispatch(fetchCategoryMeals());
  //   dispatch(fetchSomeCategories());
  // }, [dispatch]);
  // // Grupowanie przepisów według kategorii
  // const groupedRecipes = categories.map(category => {
  //   const categoryName = category.category;
  //   return {
  //     category: categoryName,
  //     recipes: categoryRecipes.filter(
  //       recipe => recipe.category === categoryName
  //     ),
  //   };
  // });
  // return (
  //   <div className={s.App}>
  //     <div className={s.container}>
  //       {groupedRecipes.map(group => (
  //         <div key={group.category}>
  //           <h2 className={s.categoryTitle}>{group.category}</h2>
  //           <div className={s.recipes}>
  //             {group.recipes.slice(0, 4).map(recipe => (
  //               <div className={s.recipe} key={recipe._id}>
  //                 <Link to={`/recipePage/${recipe._id}`}>
  //                   <img
  //                     className={s.img}
  //                     src={recipe.thumb}
  //                     alt={recipe.title}
  //                   />
  //                   <div className={s.overlay}>{recipe.title}</div>
  //                 </Link>
  //               </div>
  //             ))}
  //           </div>
  //           {group.recipes.length > 4 && (
  //             <Link to={`/categories/${group.category}`}>
  //               <div className={s.empty}>
  //                 <div></div>
  //                 <button className={s.baton}>See all</button>
  //               </div>
  //             </Link>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};
