window.onload = function(){
var param = getQueryData();
document.getElementById("theScore").innerHTML = param.score;
document.getElementById("totalNumber").innerHTML = param.totalNumber;
document.getElementById("evalutationMsg").innerHTML = getEvaluation(param.score);
};

function getQueryData()
{
	
if(1 < document.location.search.length)
{
	
	var scoreResult = document.location.search.substring(1);
	var parameters = scoreResult.split('&');	

	var result = new Object();
	
	for(var i = 0; i < parameters.length; i++)
	{
		
		var element = parameters[i].split('=');
		var elementKey = element[0];
		var elementValue = element[1];
		result[elementKey] = elementValue;		
		
	}
 return result;
}
alert("Something is super illegal");
};


/*produce evaluation message*/
function getEvaluation(score)
{
	var evaluation = "Somthing is wrong!";
	
	if(score < 5)
	{
		evaluation = "Ummm...You have to keep learning..";
	}
	else if (score >= 5)
	{
		evaluation = "Hey!! You are the Master!!";
    }
	else{}
	
	return evaluation;
	
};