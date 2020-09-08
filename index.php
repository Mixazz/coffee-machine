<!doctype html>
<html lang="ru">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Coffe mashine</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="css/style.css">
   </head>
   <body>
      <div class="container">
         <div class="row">
            <div class="col-12 col-sm-5 coffee-list">
               <div class="coffee-item">
                  <img src="img/espresso.png" alt="Эспрессо">
                  <span>Эспрессо - 45 руб. </span>
               </div>
               <div class="coffee-item">
                  <img src="img/americano.png" alt="Американо">
                  <span>Американо - 56 руб. </span>
               </div>
               <div class="coffee-item">
                  <img src="img/cappuccino.png" alt="Капучино">
                  <span>Капучино - 91 руб. </span>
               </div>
               <div class="coffee-item">
                  <img src="img/latte.png" alt="Латте">
                  <span>Латте - 113 руб. </span>
               </div>
            </div>
            <div class="col-12 col-sm-7 coffee-operation">
               <div class="row">
                  <div class="col-12 col-sm-6">
                     <div class="display">
                        <p class="display-text">Выберите кофе</p>
                        <div class="progress">
                           <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                     </div>
                     <div class="cup-container">
                        <img class="cup" src="img/americano.png" alt="">
                     </div>
                  </div>
                  <div class="col-12 col-sm-6">
                     <div class="input-group mb-3">
                        <div class="input-group-prepend">
                           <span class="input-group-text">₽</span>
                        </div>
                        <input type="text" class="form-control"  placeholder="Баланс">
                     </div>
                     <div class="atm-container">
                         <img src="img/bill_acc.png" alt="">
                         <button type="button" class="btn btn-success btn-block">Сдача</button>
                         <div class="change"></div>
                     </div>
                     
                     
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script src="js/script.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   </body>
</html>