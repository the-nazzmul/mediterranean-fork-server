const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors = require('cors')
app.use(cors())

const chefs = require('./data/chefData.json')
const recipes = require('./data/recipe.json')

app.get('/', (req, res)=>{
    res.send('Server is RUNNING')
})

app.get('/chefs', (req,res)=>{
    res.send(chefs)
})

app.get('/recipes', (req,res)=>{
    res.send(recipes)
})

app.get('/chefs/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const chef = chefs.find(chef => chef.id === id)
    const chefRecipes = recipes.filter(recipe => recipe.chef_id === id );
    const chefAndRecipies = {chef, chefRecipes}
    res.send(chefAndRecipies)
})

app.listen(port,()=>{
    console.log('running on port', port);
})