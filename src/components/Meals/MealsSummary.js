
import classes from './MealsSummary.module.css';

const MealsSummary = (props) => {
    return (
        <section className={classes.summary}>
            <h2> Delicious Food, Delivered To You </h2>
                <p>
                    Choose your favourite meal
                </p>
                <p>
                    All our meals are cooked with high quality ingredients!
                </p>
        </section>
    );
};

export default MealsSummary;