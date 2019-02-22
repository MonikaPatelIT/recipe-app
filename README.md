# Recipe search Application using React

As a part of self study, I have worked on small and simple recipe search to fetch recipes by matching word using a third party API - [Food 2 fork](https://www.food2fork.com)

## Demo 

You can see the Demo here [https://monikapatelit.github.io/recipe-app/)


## Screenshot
![image](https://user-images.githubusercontent.com/9668906/53216844-c77a2a80-36ba-11e9-8433-6f40b851b657.png)


## Prerequisites
- I have used coding editor Visual studio code but you use any text editor
- [Download](https://nodejs.org/en/) Node.js and npm and follow installation steps
- Basic knowldge to create react boilerplate application to work on. Have a look the (tutorial by Gurjot Singh Makkar on Codeburst.io)[https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d] I like the most.


## Let's the fun begin

- Creat account on food 2 fork  and get the API to access the Json file. URL will look like this

```
https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}&page=2&count=5
```
Where we pass the API to access json data file with any word related to recipe or content of recipe to get related list of recipes 

### four components 

- From component, user can search by recipe name or content of the recipe default search with 'Chicken'
- Recipes Component, Will display all the search result in card
- Recipe Component, detailed description of any perticular recipe 
- Router Component, Will manage route between recipes and recipe components

## Bootstraped

Tried to create responsive application using Boostrap 3.3.7


For detailed tutorial, Please visit [Youtube channel by Hamza Mirza](https://www.youtube.com/watch?v=PbJt7-a2274)





