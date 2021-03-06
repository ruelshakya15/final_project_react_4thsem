import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Club Sandwich',
    description: 'Comes with fresh fries or Chips',
    price:150,
  },
  {
    id: 'm2',
    name: 'Yomari',
    description: 'A newari specialty!',
    price: 120,
  },
  {
    id: 'm3',
    name: 'Momo',
    description: 'Dumplings with sauce',
    price: 110,
  },
  {
    id: 'm4',
    name: 'Chowmein',
    description: 'Healthy...and green...',
    price: 100,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
