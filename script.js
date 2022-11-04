<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us</title>
    <link
      rel="stylesheet"
          
 href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <script src="index.js"></script>

    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("SCKc-nkfsOZ43lyyQ");
   })();
</script>
  </head>
  <body>
    <div class="container border mt-3 bg-light">
      <div class="row">
        <div class="col-md-6 p-5 bg-primary text-white">
          <h1>Thank you for participating <p>&#128151;</p></h1>
          <h4 style="color:black;">
            Welcome to the feedback form !</br>
            <p>we are looking forward for your feedback on event also improvement advices if you think its needed. </p>

          </h4>
        </div>
        <div class="col-md-6 border-left py-3">
          <h1>Feedback form</h1>
          <div class="form-group">
            <table>
              <form action="" method="">
                <tr>
                  <td>
                    <label><strong>Rate your experienc</strong></label></br>
                    <input type="radio" name="rate" value="bad"> Bad  
                    <input type="radio" name="rate" value="good"> Good  
                    <input type="radio" name="rate" value="Average"> Average  
                  </td>
                </tr>
            </table></br>
            
            <h5 for="name">Name</h5>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <h5 for="email">Email</h5>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <h5 for="message">Message</h5>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button class="btn btn-primary" onclick="sendMail()">Submit</button>
        </div>
      </div>
    </div>
  </body>
</html>
