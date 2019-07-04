var database=[
{username : "yogesh",
	password :"1234"

},
{
	username : "tanuja",
	password :"tanuk98"
}];
var newsfeed=[
{
	username : "swastik",
	timeline : "going to be doctor"
},
{
	username : "rishabh",
	timeline :" god is gonna giving you more than you wanted"
}];
function signin( username, password)
{ var check=0;
	for(var i=0;i<database.length;i++)
	{
		if(database[i].username===username && database[i].password===password)
		{
			console.log(newsfeed);
			check =1;
		}
	}
	if(check===0)
	{
		alert("wrong input");
	}
}
var username=prompt(" what is your ud=ser id");
var password=prompt("what is your password");
signin(username,password);