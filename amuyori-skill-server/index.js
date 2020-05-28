const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const RecipeList = require('./responseBodies/recipeList');

const apiRouter = express.Router();
app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use(express.static('images'));

apiRouter.get('/allRecipes', function (req, res) {
  const rs = "<h1>👑아무요리 레시피 리스트</h1>"
  res.status(200).send(rs);
});

apiRouter.post('/recipeCarosel', function (req, res) {

  // forEach 때문에 비동기로 처리
  RecipeList.carousel()
    .then(function (result) {
      res.status(200).send(result)
      }
    )
});

app.listen(3000, function () {
  console.log('Example skill server listening on port 3000!');
});