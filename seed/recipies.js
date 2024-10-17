const db = require("../db")
const Recipe = require("../models/recipies")

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const plants = [
        { cuisneType: 'Italian', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Mexican', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Indian', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Jamaican', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'African', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Chinese', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Middle Eastern', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Egyptian', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"},
        { cuisneType: 'Mediteranian', recipe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!", directions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet voluptatibus repellat veritatis, recusandae provident temporibus eaque tempore! Corporis dolores nulla corrupti quam dignissimos dolore libero nemo dolorum quaerat fuga!"}
    ]
    await Recipe.insertMany(recipies)
    console.log('created Recipies!')
}

const run = async () => {
    await main()
    db.close()
}

run()