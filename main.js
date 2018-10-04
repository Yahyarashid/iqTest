function Question(question, choices, answer) {

	var cls = {};

	cls.question = question;
	cls.choices = choices;
	cls.answer = answer;

	cls.usersAnswer = usersAnswer;
	cls.correct = false;

	return cls;
}

var usersAnswer = function(answer) {
	if(answer === this.answer) {
		this.correct = true;
	}
}

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

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13];

// var $Q = $('.question') // question big box
// var $As = $('.answers')	// answers white box
// var $p = $('.p')	//	paragraph for each answer
// var $a = $('.a')	// answer

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
	
	$.each(questions[i].choices,function(j, e){
			choice+= '<p class="choice" style="margin-left: 2%"> <input name="'+i+'" type="radio" id="c'+i+j+'" value="'+ e +'" /> <label for="c'+i+j+'">'+e+'</label> </p>';
		});

	var qs = '<div class="question"><p class="question1"> '+questions[i].question+'</p> <div id="'+i+'" class="answers"> '+choice+' </div> <div>  </div> </div> <hr>';
	$('#body').append(qs);
	}
	$('.btn').show();
}


var counter = 0;

function submit(num) {
	$(".btn").click(function() {
	$('html, body').animate({
 	scrollTop: $("#main").offset().top
		},0);
	});

	$('.btn').click(function(){
		if ($( "input:checked" ).length < num){
			alert("Answer all questions wala");
		} else {
			for (var i = 0; i < num; i++) {
				if ($( "input:checked" )[i].value == questions[i].answer) {
					counter++;
				} 
			}
		
		var max = num;
		var ratio = counter/max ;
		var third = Math.floor(max * 0.4);
		var constant = 70 / third;
		var result = counter * constant;

		if(ratio < 0.4) {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', Kill yourself!!</h1>');
		}
		else if (ratio < 0.65) {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', You are smart, keep it going!</h1>');
		}
		else if (ratio < 0.80) {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', You are very smart. Hurray!!!</h1>');
		}
		else {
			$('#body').html('<h1 style="text-align: center; margin-right: 9%"> Your IQ is: '+result+', You are super intelligent!</h1>');
		}
	$('.btn').hide();
	}
});
}




$(document).ready(function(){
	$('#body').fadeIn(850);
});

$("#contact").click(function() {
	$('html, body').animate({
 	scrollTop: $("#con").offset().top
		}, 1000);
});