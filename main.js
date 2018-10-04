function Question(question, choices, answer) {
// Question object factory 
	var cls = {};

	cls.question = question;
	cls.choices = choices;
	cls.answer = answer;

	
	cls.correct = false;

	return cls;
}
// Creating our questions
var q1 = Question('Which number should come next in the pattern? 37, 34, 31, 28', [22, 25, 20, 27, 13], 25);
var q2 = Question('Find the answer that best completes the analogy: "Book is to Reading as Fork is to:"', ['drawing', 'writing' ,'stirring', 'eating'], 'eating');
var q3 = Question('Find two words, one from each group, that are the closest in meaning: Group A talkative, job, ecstatic \n Group B angry, wind, loquacious', ['talkative and wind','job and angry','talkative and loquacious','acstatic and angry'], 'talkative and loquacious');
var q4 = Question('What number best completes the analogy: 8:4 as 10:',[3,7,24,5], 5 );
var q5 = Question('Which one of the five is least like the other four?',['Dog','Mouse','Lion','Snake','Elephant'],'Snake');
var q6 = Question('Which number should come next in the series? \n 1 - 1 - 2 - 3 - 5 - 8 - 13',[8, 13, 21, 26, 31], 21);
var q7 = Question('Which one of the five choices makes the best comparison? \n PEACH is to HCAEP as 46251 is to:',[25641, 26451, 12654, 51462, 15264],15264);
var q8 = Question('Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?', [20,24,25,26,28], 24);
var q9 = Question('Which one of the numbers does not belong in the following series? \n 2 - 3 - 6 - 7 - 8 - 14 - 15 - 30', [3,7,8,15,30], 8);
var q10 = Question('Which one of the five choices makes the best comparison? \n Finger is to Hand as Leaf is to:', ['Twig','Tree','Branch','Blossom','Bark'],'Twig');
var q11 = Question('If you rearrange the letters "CIFAIPC" you would have the name of a(n):', ['City','Animal','Ocean','River','Country'], 'Ocean');
var q12 = Question('If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?',[true,false],true);
var q13 = Question('Choose the word most similar to "Trustworthy":',['Resolute', 'Tenacity', 'Relevant', 'Insolent', 'Reliable'], 'Reliable');

// Questions array
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13];

// Easy mode
$('#easy').click(function(){
	displayQuestions(6);
	submit(6);
});

// Medium mode
$('#normal').click(function(){
	displayQuestions(9);
	submit(9);
});

// Hard mode
$('#difficult').click(function(){
	displayQuestions(12);
	submit(12);
});


// Displaying questions
function displayQuestions(num) {
	$('#body').html('');
	for(var i = 0; i < num; i++) {
	var choice = ''; 
	// Appending the choices for each question
	$.each(questions[i].choices,function(j, e){
			choice+= '<p class="choice" style="margin-left: 2%"> <input name="'+i+'" type="radio" id="c'+i+j+'" value="'+ e +'" /> <label for="c'+i+j+'">'+e+'</label> </p>';
		});

	var qs = '<div class="question"><p class="question1"> '+questions[i].question+'</p> <div id="'+i+'" class="answers"> '+choice+' </div> <div>  </div> </div> <hr>';
	$('#body').append(qs);
	}
	$('.btn').show();
}


var counter = 0; // The number of correct answers

function submit(num) {
	$(".btn").click(function() { // The submit button
	$('html, body').animate({
 	scrollTop: $("#main").offset().top
		},0); // Scrolls to the top of the page
	});
	// The submit button
	$('.btn').click(function(){
		// If the user leaves out any questions
		if ($( "input:checked" ).length < num){
			alert("Answer all questions wala");
		} else {
			for (var i = 0; i < num; i++) { // Loop throught the answers
				if ($( "input:checked" )[i].value == questions[i].answer) {
					counter++; // If answer is correct increase score
				} 
			}
		
		// Calculating the IQ
		var max = num;
		var ratio = counter/max ;
		var third = Math.floor(max * 0.4);
		var constant = 70 / third;
		var result = counter * constant;

		// Displaying the IQ result
		if(ratio < 0.4) {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', Kill yourself!!</h1> \n <img src="https://i.imgur.com/UwIy08o.gif" >');
		}
		else if (ratio < 0.65) {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', You are smart, keep it going!</h1> \n <img src="https://78.media.tumblr.com/tumblr_lr168zmKZg1qh59n0o5_250.gif" >');
		}
		else if (ratio < 0.80) {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', You are very smart. Hurray!!!</h1> \n <img src="https://thumbs.gfycat.com/MajorConsciousCorydorascatfish-size_restricted.gif" >');
		}
		else {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', You are super intelligent!</h1> \n <img src="https://media.giphy.com/media/ohdY5OaQmUmVW/giphy.gif" >');
		}
	$('.btn').hide();
	}
});
}

$(document).ready(function(){
	$('#body').fadeIn(850); // Fading effect for the body
});

$("#contact").click(function() {
	$('html, body').animate({
 	scrollTop: $("#con").offset().top
		}, 1000); // Scrolls to the map when clicking on contact us
});

// Google maps API
var map; 
function initMap() {
  	var RBK = {lat: 31.986515, lng: 35.83769887};
    map = new google.maps.Map(document.getElementById('map'), {
      center: RBK,
      zoom: 16
    });
    var marker = new google.maps.Marker({
      position: RBK,
      map: map,
      title: 'RBK!'
    });
}

// Ahmed's game.... thank you Ahmed, I mean really..
var game = '';
var pos = Math.floor(Math.random() * 600);
for(var i = 0; i < 600; i++) {
	if(i === pos) {
		game += '<span id="dollar" style="margin:0;">$ </span>';
	} else {
	game += '8 ';
	}
}
$('#game').html(game);
$('#dollar').on('click', function(){
    alert("Good job!")
}); 