import express from 'express';
import path from 'path';
import homeRoutes  from './routes/home';
import specialitypizzaRoutes from './routes/speciality-pizza';
import reviewRoutes from './routes/review';
import pizzabuilder from './routes/pizza-builder';


const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.use("/", homeRoutes);
app.use("/", specialitypizzaRoutes);
app.use("/", reviewRoutes);
app.use("/", pizzabuilder);




const port = 1000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));