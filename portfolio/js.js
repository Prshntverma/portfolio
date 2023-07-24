var tablinks = document.getElementsByClassName("tabs-links");
       var tabcontents = document.getElementsByClassName("tabs-contents");
        
       function opentab(tabname) {

        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents)
        {
            tablink.classList.remove(" active-tab")
        }
       }