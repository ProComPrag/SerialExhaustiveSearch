// data for view
config_views.intro = {
    // introduction title
    "title": "Welcome!",
    // introduction text
    "text": "Thank you for participating in our study. By answering the following questions, you are participating in a study being performed by scientists from the University of Osnabrück. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you. Press SPACE to accept and continue.",
    // introduction's slide proceeding button text
    "buttonText": "Begin experiment"
};


// creates the Introduction view
var initIntroView = function() {
	var view = {};
	view.name = 'intro';
	view.template = $('#intro-view').html();
	$('#main').html(Mustache.render(view.template, {
	    title: config_views.intro.title,
	    text: config_views.intro.text,
	    button: config_views.intro.buttonText
	}));

	showNextView();

    var instructionScreen = true

    addEventListener('keydown', function(event) {
        if(event.keyCode == 32 && instructionScreen === true) {
            instructionScreen = false
            exp.findNextView()
        }
    })
	return view;
};
