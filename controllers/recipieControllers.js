const Recipe = require('../models/recipies')



// get index
const getAllRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find()
        res.json(recipies)

    } catch (e) {
      return res.status(500).send(e.message)
    }
}
// get show
const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipies = await Recipe.findById(id)
        if (recipies) {
            return res.json(recipies);
        }
        return res.status(404).send('Recipie with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
 
//create - post
const createRecipe = async (req, res) => {
    try{
        const recipies = await new Recipe(req.body)
        await recipies.save()
        return res.status(201).json({recipies})
    }
    catch (e) {
        return res.status(500).json({ error: error.message })
    }
}


//update -> put
const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipies = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipies) {
            return res.status(200).json(recipies)
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//delete

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}









module.exports = Recipe
