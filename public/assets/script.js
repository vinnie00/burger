$(".devoured-button").on('click', function(e) {
    let devouredButton = $(this).attr("data-id")
    console.log(devouredButton)
    $.ajax({
        method: "PATCH", 
        url: "/burgers/" + devouredButton
    }).then(function(data) {
        location.reload()
    })
})
$("#button-addon2").on('click', function(e) {
    let burgerName = $(this).parent().siblings("input").val()
    let burger = {
        burger_name: burgerName
    }
    $.ajax({
        method: "POST",
        url: "/burgers",
        data: burger
    }).then(function(data) {
        location.reload()
    })
})
