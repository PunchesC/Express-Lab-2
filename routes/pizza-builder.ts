import express from 'express';

const routes = express.Router();


routes.get('/pizza-builder', (req,res)=>{
  const array =["Ham", "Sausage", "Oyster", "Onion", "Pineapple", "Green Peppers"];
  
  res.render('pizza-builder', {array} );
});

routes.get("/pizza-builder-results", (req,res)=>{
  const size = req.query.size;
  const toppingAmount = parseInt(req.query.toppingAmount as string);
  const gluten = !!req.query.gluten;
  const instructionBox = req.query.instructionBox;
  const smallPizza = (7+toppingAmount*.50);
  const mediumPizza = (10+toppingAmount*1.00);
  const largePizza = (12+toppingAmount*1.25);
  const freeDelivery = 
  
  res.render('pizza-builder-results', {size , toppingAmount, gluten, instructionBox, smallPizza, mediumPizza,largePizza})
});

export default routes;