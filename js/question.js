var correctMessage = "CORRECT!!";
var wrongMessage = "WRONG!!";
var score = 0;
var maxAnswerTimes = 3;
var howManyQuestions = 0;
var anwersTimes = new Array();

function toMailForm(score,howManyQuestions)
{
	location.href = "result.html?score=" + score + "&totalNumber=" + howManyQuestions;	
}

function enterKeyEvent(code)
{
	if( code == 13){
	console.log("click the CHECK BTN")
	}
}

var main = function() {
	/*get th number of each Question*/
     $('.questionWrapper').each(function(){
        howManyQuestions++;
    });
	
	/*count how many questions*/
    var classCount = $(".questionWrapper").length;
   
    
	/*Set up answerTimes*/

	for (var i = 0; i < classCount; i++)
	{
	anwersTimes[i] = maxAnswerTimes;
	};
	
	
	/*print the inicial score = 0*/
    $('#scoreBoard span.points').text(score);

    /*to print "CHECK" in all the Btn Class Element*/
    $('.btn').empty();
    $('.btn').text("CHECK");

    /*check anwer1*/
    $('.answer').click(function() {
		var toThisH3 = $(this).parent();
		var index = $('#wrapper section .questionWrapper').index(toThisH3);
        var getNameFrom = $(this).siblings('form').children('p').children('input')
        var name = $(getNameFrom).attr("name");
        var selector0 = ":radio[name=\"" + name + "\"][value=\"correct\"]";
        var selector1 = ":radio[name=\"" + name + "\"][value=\"incorrect1\"]";
        var selector2 = ":radio[name=\"" + name + "\"][value=\"incorrect2\"]";
        var selector3 = ":radio[name=\"" + name + "\"][value=\"incorrect3\"]";

        var answerChecked = new Array();
        answerChecked[0] = $(selector0).prop('checked');
        answerChecked[1] = $(selector1).prop('checked');
        answerChecked[2] = $(selector2).prop('checked');
        answerChecked[3] = $(selector3).prop('checked');

        $(this).siblings('.ansList').empty();
        var putTo = $(this).siblings('.ansList');
        
        if (answerChecked[0]) {
            $(getNameFrom).addClass('no-action');
            $(this).remove();
        }
 
 

    if (answerChecked[0]) {
        $('<li>').text(correctMessage).appendTo(putTo).hide().fadeIn();
        $(putTo).removeClass('redText greenText');
        $(putTo).addClass('greenText');
        $(toThisH3).addClass('done');
        score = score + 1;
        $('#scoreBoard span.points').text(score);
    } else if (answerChecked[1] || answerChecked[2] || answerChecked[3]) {
        $('<li>').text(wrongMessage + "  You can answer one more time only ").appendTo(putTo).hide().fadeIn();
        $(putTo).removeClass('redText greenText');
        $(toThisH3).removeClass('done');
        $(putTo).addClass('redText');
		anwersTimes[index]--;
        
		if(anwersTimes[index] == 0)
		{
	    $(this).remove();
		$(putTo).empty();
		$('<li>').text("Sorry,You answered wrong over the limit times").appendTo(putTo).hide().fadeIn();
		}

    } else {
        $('<li>').text("Nothing is selected..").appendTo(putTo).hide().fadeIn();
        $(putTo).removeClass('redText greenText');
        $(toThisH3).removeClass('done');
        $(putTo).addClass('redText');
    }
    });




    $('.answer2').click(function() {
		 var toThisH3 = $(this).parent();
		var index = $('#wrapper section .questionWrapper').index(toThisH3);
        var putTo = $(this).siblings('.ansList');
        var textAnswer = $(this).siblings('.textAnswer').text();

        var answer = $(this).siblings('input').val();

        /*convert the input to lowercase*/
        answer = answer.toLowerCase();

        /*Remove full-pich and half spaces*/
        answer = answer.replace(/　/g, '');
        answer = answer.replace(/ /g, '');

        $(this).siblings('ul.ansList').empty();
        var putTo = $(this).siblings('ul.ansList');
       
        if (answer == textAnswer) {
            $('<li>').text(correctMessage).appendTo(putTo).hide().fadeIn();
            $(putTo).removeClass('redText greenText');
            $(putTo).addClass('greenText');
            $(toThisH3).addClass('done');
            score = score + 1;
            $('#scoreBoard span.points').text(score);
            $(this).remove();
        } else {
            $('<li>').text(wrongMessage).appendTo(putTo).hide().fadeIn();
            $(putTo).removeClass('redText greenText');
            $(toThisH3).removeClass('done');
            $(putTo).addClass('redText');
			anwersTimes[index]--;
        
		if(anwersTimes[index] == 0)
		{
	    $(this).remove();
		 $('<li>').text("Sorry,You wrong over times").appendTo(putTo).hide().fadeIn();
		}

        }

    });
	
	$('#finishBtn').click(function() {
		 toMailForm(score,howManyQuestions); 
      });

};


$(document).ready(main);