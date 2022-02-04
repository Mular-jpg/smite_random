<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <title>Smite Random God</title>
  </head>
  <body style="background-color: #071425">

  <div class="container-fluid">
    <div class="row">
      
      <div class="col-12 mb-4">
        <div class="wrapped-header"><h4>GODS</h4></div>
      </div>
      
      <div class="col-2"></div>
      
      <div class="col-8 mb-4">
        <button class="god-button m-1" id="random_god">Random</button>
        <span class="god-filter-container">
          <button class="god-button m-1" id="filter-button">Filters</button>
          <span class="god-filter" id="filter-box">
            <ul class="god-filter-list">
              <li>
                <div class="wrapped-header"><span>ROLE</span></div>
              </li>
            </ul>
          </span>
        </span>
        <button class="god-button m-1" onclick="loadGods()">show all</button>
      </div>

      <div class="col-2"></div>
      <div class="col-2"></div>
      
      <div class="col-8 row" id="all_gods"></div>
      
    </div>
  </div>

  <script src="js/jquery-3.6.0.js"></script>
  <script src="js/app.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>
