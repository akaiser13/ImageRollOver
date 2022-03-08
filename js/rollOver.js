var NorthShore = {};

NorthShore.init = function() {
    
    NorthShore.imageCounter = 0;
    
    //alert("Hi from the NorthShore.");
    
    // Set up two indexed arrays such that an index value plugged into both of them produces correlating data
    // Define an array to represent our images
    
    pics = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
    
    // Define an array to represent our captions
    captions = ["Split Rock Lighthouse", "Superior Trail", "Beach Rock", "Breakers", "AmericInn Beach", "Surf Spray", "Superior Red Rock", "Superior Sunset", "Gooseberry Falls", "Cascades at Squatch Rock", "The Temperance", "Fall Colors"];
    
    // Get a reference to our first image
    var northShoreImage = document.querySelector('#northShorePic');
    
    // Get a reference to our bottom image
    timedImage = document.querySelector("#northShoreAutoPic");
    
    // Get references to our paragraphs that contain the caption 
    picCaptions = document.querySelectorAll("p.picCaption");
    
    //alert("northShoreImages is a " + northShoreImage.nodeName + 'and its id is ' + northShoreImage.id)
    
    // Set up our event handlers to handle a hover event which actually consists of 2 separate events which are called mouseover and mouseout
    
    // Older way - event handlers
    // element.onevent = handlerFunctionName;
    
    // Note: Javascript will automatically always pass one argument to any event handler when it is called. It passes the event that occured as an object
    
    // northShoreImage.onmouseover = NorthShore.showRandomImage;
    
    // northShoreImage.onmouseout = NorthShore.resetImage;
    
    // Newer way - event listeners
    
    // element.addEvenetListener('event', listenerFunctionName);
    
    // evenetPropagation is a boolean - false means no propagation true means propagation will occur
    
    northShoreImage.addEventListener('mouseover', NorthShore.showRandomImage, false);
    northShoreImage.addEventListener('mouseout', NorthShore.resetImage, false);
    
    // Start the timed slide show - circular carousel
    NorthShore.slideShow();
    
 };   
    // showRandomImage() method definition
    
NorthShore.showRandomImage = function(e) {

    // inside the context of an event handler function, the this keyword refers to the object the event occured on
    
    /*alert("The id of our moused over image is " + e.currentTarget.id + '(' + this.id + ')' + "The mouse position currently is:" + e.pageX + ',' + e.pageY + '\n\nMouse position related to edges of image: ' + e.offsetX + ',' + e.offsetY);*/
    
    var randomIndex = NorthShore.randRange(1, pics.length);
    
    // Change the image to reflect the randomly chosen image
    this.src = 'images/northShore/pic' + pics[randomIndex] + '.jpg';
    
    // Change the caption on mouseover as well
    picCaptions[0].innerHTML = captions[randomIndex];
    
    // Change class name to add filter effects
    this.className = 'contrast';
    
    //this.className += ' invert';
    
    this.className += ' sepiaBlur';
    
};

NorthShore.resetImage = function() {
    
    this.src = "images/northShore/pic" + pics[0] + '.jpg'
    
    picCaptions[0].innerHTML = captions[0];
    
    this.className = '';
    
}

NorthShore.randRange = function(min, max) {
    
    return Math.floor(Math.random() * (max-min) + min);
    
}

NorthShore.slideShow = function() {

    // Do the image rollover
    timedImage.src = "images/northShore/pic" + pics[NorthShore.imageCounter] + ".jpg";
    
    picCaptions[1].innerHTML = captions[NorthShore.imageCounter];
    
    /*
    if (NorthShore.imageCounter < pics.length - 1) { 
        NorthShore.imageCounter++;   
    }
    
    else {
        NorthShore.imageCounter = 0;
    }
    */
    
    NorthShore.imageCounter = (++NorthShore.imageCounter) % pics.length;
    
    // Keep calling slideShow() every 2 seconds for as long as the user is on the page (heartbeat or ticker)
    setTimeout(NorthShore.slideShow, 1000);
}

