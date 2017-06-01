// 90% of this code is shamelessly stolen from Jake White's VGC calc, so huge shoutouts to him!

var showdownFormes = [
["rotomwash", "Rotom-W"],
["rotomheat", "Rotom-H"],
["landorustherian", "Landorus-T"],
["thundurustherian", "Thundurus-T"]];

var savecustom = function()
{

	var string = document.getElementById('customMon').value
	var lines = string.split('\n')
	var species = "";
	var item = "";
	var ability = ""
	var level = "50";
	var EVs = [0,0,0,0,0,0];
	var IVs = [31,31,31,31,31,31]
	var nature = "Serious"
	var moves = []
	var ln1p1 = '  "'
	var ln1p2 = '" { \n'
	var ln2p1 = '    "'
	var ln2p2 = "SET NAME"
	var ln2p3 = '": { \n'
	var ln3 = '      "level": 50, \n'
	var ln4 = '      "evs": { \n'
	var ln5p1 = '        "hp": '
	var lnbr = '\n'
	var ln6p1 = '        "at": '
	var ln7p1 = '        "df": '
	var ln8p1 = '        "sa": '
	var ln9p1 = '        "sd": '
	var ln10p1 = '        "se": '
	var ln12p1 = '      "ivs": { \n'
	var ln11 = '      }, \n'
	var ln19p1 = '      "nature": "'
	var lnen = '", \n'
	var ln20p1 = '      "ability": "'
	var ln21p1 = '      "item": "'
	var ln22 = '      "moves": [ \n'
	var lnmv = '        "'
	var lnenl = '" \n'
	var movarray = new Array()
	var ln3l = '      ] \n'
	var ln2l = '    } \n'
	var lnl = '  },'
	var ln12p1 = ""
	var ln11v2 = ""
	
	var item = string.substring(string.indexOf('"item":"')+8, string.indexOf('","ability'));
	var species = string.substring(string.indexOf('{"species":"')+12, string.indexOf('","'));
	var nature = string.substring(string.indexOf('"nature":"')+10, string.indexOf('","moves'));
	var ability = string.substring(string.indexOf('"ability":"')+11, string.indexOf('","evs":'));

	/*
			var movlist = movarray.toString()
			var move1 = movlist.split(",")[0]
			var move2 = movlist.split(",")[1]
			var move3 = movlist.split(",")[2]
			var move4 = movlist.split(",")[3]
			
		    if (lines[0].indexOf('(') != -1)
		    {
		    var ln2p2 = lines[0].substring(0, lines[0].indexOf('(')).trim()
		    }
		    else var ln2p2 = "set name"
		}
	}
*/
	
		var ln5p2 = EVs[0]
		var ln6p2 = EVs[1]
		var ln7p2 = EVs[2]
		var ln8p2 = EVs[3]
		var ln9p2 = EVs[4]
		var ln10p2 = EVs[5]
		var ln12p2 = IVs[0]
		var ln13p2 = IVs[1]
		var ln14p2 = IVs[2]
		var ln15p2 = IVs[3]
		var ln16p2 = IVs[4]
		var ln17p2 = IVs[5]
		
		// HP EV
		if (string.substring(string.indexOf('"hp":')+5, string.indexOf(',"atk"')) == 0)
		{
			var hpev = ""
		}
		else var hpev = ln5p1.concat(string.substring(string.indexOf('"hp":')+5, string.indexOf(',"atk"')), lnbr)
		// Atk EV
		if (string.substring(string.indexOf('"atk":')+6, string.indexOf(',"def"')) == 0)
		{
			var atev = ""
		}
		else var atev = ln6p1.concat(string.substring(string.indexOf('"atk":')+6, string.indexOf(',"def"')), lnbr)
		// Def EV
		if (string.substring(string.indexOf('"def":')+6, string.indexOf(',"spa"')) == 0)
		{
			var deev = ""
		}
		else var deev = ln7p1.concat(string.substring(string.indexOf('"def":')+6, string.indexOf(',"spa"')), lnbr)
		// SpA EV
		if (string.substring(string.indexOf('"spa":')+6, string.indexOf(',"spd"')) == 0)
		{
			var saev = ""
		}
		else var saev = ln8p1.concat(string.substring(string.indexOf('"spa":')+6, string.indexOf(',"spd"')), lnbr)
		// SpD EV
		if (string.substring(string.indexOf('"spd":')+6, string.indexOf(',"spe"')) == 0)
		{
			var sdev = ""
		}
		else var sdev = ln9p1.concat(string.substring(string.indexOf('"spd":')+6, string.indexOf(',"spe"')), lnbr)
		// Spe EV
		if (string.substring(string.indexOf('"spe":')+6, string.indexOf('},"nature"')) == 0)
		{
			var spev = ""
		}
		else var spev = ln10p1.concat(string.substring(string.indexOf('"spe":')+6, string.indexOf('},"nature"')), lnbr)
		
		var movesall = string.substring(string.indexOf('"moves":[[') + 11, string.lastIndexOf(']]'))
		var move1 = string.substring(string.indexOf('"moves":[[') + 11, string.indexOf('"],['))
		var m2p1 = movesall.substring(movesall.indexOf(move1) + move1.length + 4)
		var move2 = m2p1.substring(m2p1.indexOf(m2p1) + 1, m2p1.indexOf('"],['))
		var m3p1 = movesall.substring(movesall.indexOf(move2) + move2.length + 4)
		var move3 = m3p1.substring(m3p1.indexOf(m3p1) + 1, m3p1.indexOf('"],['))
		// var m4p1 = movesall.substring(movesall.indexOf(move3) + move3.length + 4)
		var move4 = string.substring(string.lastIndexOf('"],["') + 5, string.lastIndexOf('"]]'))
				
		/*
		if (string.substring(string.indexOf('"hp":')+5, string.indexOf(',"atk"')) == 31)
		{
			var hpiv = ""
		}
		else var hpiv = ln5p1.concat(string.substring(string.indexOf('"hp":')+5, string.indexOf(',"atk"')), lnbr)

		if (IVs[1] == 31)
		{
			var ativ = ""
		}
		else var ativ = ln6p1.concat(IVs[1], lnbr)
		
		if (IVs[2] == 31)
		{
			var deiv = ""
		}
		else var deiv = ln7p1.concat(IVs[2], lnbr)
		
		if (IVs[3] == 31)
		{
			var saiv = ""
		}
		else var saiv = ln8p1.concat(IVs[3], lnbr)
		
		if (IVs[4] == 31)
		{
			var sdiv = ""
		}
		else var sdiv = ln9p1.concat(IVs[4], lnbr)
		
		if (IVs[5] == 31)
		{
			var spiv = ""
		}
		else var spiv = ln10p1.concat(IVs[5], lnbr)
		*/
		
	var res = ln1p1.concat(species, ln1p2, ln2p1, ln2p2, ln2p3, ln3, ln4, hpev, atev, deev, saev, sdev, spev, ln11, ln12p1, ln19p1, nature, lnen, ln20p1, ability, lnen, ln21p1, item, lnen, ln22, lnmv, move1, lnen, lnmv, move2, lnen, lnmv, move3, lnen, lnmv, move4, lnenl, ln3l, ln2l, lnl)	
	//var res = ln1p1.concat(species, ln1p2, ln2p1, ln2p2, ln2p3, ln3, ln4, hpev, atev, deev, saev, sdev, spev, ln11, ln12p1, hpiv, ativ, deiv, saiv, sdiv, spiv, ln11v2, ln19p1, nature, lnen, ln20p1, ability, lnen, ln21p1, item, lnen, ln22, lnmv, move1, lnen, lnmv, move2, lnen, lnmv, move3, lnen, lnmv, move4, lnenl, ln3l, ln2l, lnl);
    document.getElementById("Output").innerHTML = res


}
