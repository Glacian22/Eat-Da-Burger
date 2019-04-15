// Client side script

$(document).ready(() => {

  $(document).on('click', '.devour', function () {
    console.log("id", this.id);
    var burgerId = this.id;

    $.ajax("/api/" + burgerId, {
      type: 'PUT',
      data: true,
    }).then(() => {
      location.reload();
    })
  });

  $("#form-button").click((event) => {
    var data = {
      name: $("#burger-name").val(),
      cb: () => { }
    }
    event.preventDefault()
    console.log($("#burger-name").val())
    $.post("/api", data).then(() => {
      location.reload();
  })
})


})