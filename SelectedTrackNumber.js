/* 
This Program takes the track number from a song title
(01 Come Together) and makes it the TrackNumber. It
also fixes the title by removing the track number and space.

By Brian Anders
*/

function trim10 (str) {
	var whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
	for (var i = 0; i < str.length; i++) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(i);
			break;
		}
	}
	for (i = str.length - 1; i >= 0; i--) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
	
var objApp = WScript.CreateObject("iTunes.Application");
var tracks = objApp.SelectedTracks;
var numTracks = tracks.Count;
 
while(numTracks != 0)
{
	var currTrack = tracks.Item(numTracks);
	Tname = currTrack.Name;

	var ArrNum = 0;
	var let;
	var ArrayLength = 2;
	var TitleArray = [];
	for (j = 0; j < ArrayLength; j++)
	{
		TitleArray[j] = "";
	}	

	for(j = 0; j < Tname.length; j++)
	{
		let = Tname.charAt(j);	
		if(ArrNum == 0)
		{
			TitleArray[ArrNum] += let;
			if(let == " ") ArrNum = ArrNum + 1;
		}
		else
		{
			TitleArray[ArrNum] += let;
		}
	}
	
    currTrack.Name = trim10(TitleArray[1]);
	currTrack.TrackNumber = TitleArray[0];
	
	numTracks--;
}


WScript.Echo("Done");