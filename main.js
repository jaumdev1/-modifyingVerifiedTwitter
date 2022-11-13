"use strict";

if(document.readyState == "loading") document.addEventListener('DOMContentLoaded', twitterBlueVerified);
else twitterBlueVerified();

function twitterBlueVerified(){
    setInterval(function () {document.querySelectorAll("g").forEach(element => {
        var el = element.innerHTML.substring(9,15);
        if(el == "M22.25")
            element.parentElement.parentElement.innerHTML = "<p>💀</p>"

        
    });}, 1000);
}
