$(document).ready(function(){

    function createAndAddCard(firstName, lastName, description) {
        var fullName = firstName + " " + lastName;
        // Create html content to be added to the rightBox
        var html = `
        <div class="card">
            <div class="content">
                <h3>${fullName}</h3>  
            </div>    
            <a href="#" alt-data=${description}>Click here for description</a>
        </div>    
        `;

        $("#rightBox").append(html);
    }

    $("form").submit(function(){
        
        var firstName =  $("input[name=firstname]").val() ? $("input[name=firstname]").val().trim() : "";
        var lastName = $("input[name=lastname]").val() ? $("input[name=lastname]").val().trim() : "";
        var description = $("textarea").val() ? $("textarea").val().trim() : "";
        
        // if (firstName === "" || lastName === "") {
        //     alert("Please enter valid first name and last name");
        //     return;
        // }
                
        event.preventDefault();
        createAndAddCard(firstName, lastName, description);
    });

    $(document).on("click", "a", function(e){
        console.log(e);
        var link = e.currentTarget,
            data = $(link).attr("alt-data");
            card = $(link).parent(),
            content = $(link).siblings();

        if ($(link).text() === "Click here for description") {

            // Remove name and add description
            if (data) {
                console.log($(content).children().text());
                $(link).attr("alt-data", $(content).children().html())
                $(content).text(data);
                $(link).text("Display Name");
            }
            else {
                alert("No description entered by the user");
            }
        }
        else {
            $(content).html(`
                <h3>${$(link).attr("alt-data")}</h3>`);
            $(link).text("Click here for description");
        }
        
        event.stopPropagation();
    });

    
});