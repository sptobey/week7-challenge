$( "#cards" ).on( "click", function( event ) {
    $("#list").empty()
    cards.load()
})

$( "#games" ).on( "click", function( event ) {
    $("#list").empty()
    games.load()
})
