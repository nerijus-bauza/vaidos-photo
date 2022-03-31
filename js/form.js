$(document).ready(function () {
  
  var subBtn = $("#submitBtn");
  var subMsg = $("#submitMsg");
  
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
      _subject: "Nauja žinutė Vaidos foto puslapyje",
      _template: "table"
    };
    console.log(formData);

    subBtn.css("display", "none");
        
    $.ajax({
      type: "POST",
      url: "https://formsubmit.co/ajax/nerijus.bauza@gmail.com",
      dataType: "json",
      accepts: 'application/json',
      data: formData,
    })
      .done(function (data) {
        //console.log(data);
        subMsg.css("display", "block");
        subMsg.text("Jūsų žinutė sėkmingai išsiųsta");
    })
      .fail(function (data) {
        //console.log(data);
        subMsg.css("border-color", "red");
        subMsg.text("Serverio klaida. Pabandykite perkrauti puslapį ir parašyti dar kartą arba susisiekite su manimi šalia nurodytais kontaktais");
    });
    
  });
});