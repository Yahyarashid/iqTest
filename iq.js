function Question(question, choices, answer) {

	var cls = {};

	cls.question = question;
	cls.choices = choices;
	cls.answer = answer;

	cls.usersAnswer = usersAnswer;
	cls.correct = false;
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
var q5 = Question('Which one of the five is least like the other four?',['Dog','Mouse','Lion','Snake','Elephant'],'Elephant');
var q6 = Question('Which number should come next in the series? \n 1 - 1 - 2 - 3 - 5 - 8 - 13',[8, 13, 21, 26, 31], 21);
var q7 = Question('Which one of the five choices makes the best comparison? \n PEACH is to HCAEP as 46251 is to:',[25641, 26451, 12654, 51462, 15264],15264);
var q8 = Question('Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?', [20,24,25,26,28], 24);
var q9 = Question('Which one of the numbers does not belong in the following series? \n 2 - 3 - 6 - 7 - 8 - 14 - 15 - 30', [3,7,8,15,30], 8);
var q10 = Question('Which one of the five choices makes the best comparison? \n Finger is to Hand as Leaf is to:', ['Twig','Tree','Branch','Blossom','Bark'],'Twig');
var q11 = Question('If you rearrange the letters "CIFAIPC" you would have the name of a(n):', ['City','Animal','Ocean','River','Country'], 'Ocean');
var q12 = Question('Choose the number that is 1/4 of 1/2 of 1/5 of 200:');
var q12 = Question('If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?',[true,false],true);
var q13 = Question('Choose the word most similar to "Trustworthy":',['Resolute', 'Tenacity', 'Relevant', 'Insolent', 'Reliable'], 'Reliable');

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13];