var cards = {

    listCards: function() {
        $.ajax({
            url: "https://irythia-hs.p.mashape.com/cards",
            headers: { 
                "X-Mashape-Key": apikey["X-Mashape-Key"],
                "Accept": "application/json"
            },
            success: function(data) {
                if (data){
                    //console.log(data);
                        $.get("/week7-challenge/cards/list.jade", function(template) {
                        var html = jade.render(template, {
                            data: data
                        })
                        $("#list").html(html)
                    })
                }
            }
        });
    },
    
    searchByName: function(name) {
        $.ajax({
            url: "https://irythia-hs.p.mashape.com/card?name=" + name.charAt(0).toUpperCase() + name.slice(1),
            headers: { 
                "X-Mashape-Key": apikey["X-Mashape-Key"],
                "Accept": "application/json"
            },
            success: function(data) {
                if (data){
                    //console.log(data);
                        $.get("/week7-challenge/cards/view.jade", function(template) {
                        var html = jade.render(template, {
                            data: data
                        })
                        $("#list").html(html)
                    })
                }
            }
        });
    },

    load: function() {
        $.get("/week7-challenge/cards/ui.jade", function(template) {
            var html = jade.render(template);
            $("#searchdiv").html(html);
        })
        
        // list all cards
        cards.listCards();
    }
}
