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
  let price = 0;
  if (size=== "Small"){ price = (7+toppingAmount*.50)}
  else if(size==="Medium"){ price = (10+toppingAmount*1.00)}
  else{price = (12+toppingAmount*1.25)}
  if (gluten){
    
  }
  let displayPrice = price.toFixed(2);
 

  
  res.render('pizza-builder-results', {size , toppingAmount, gluten, instructionBox,displayPrice})
});

export default routes;