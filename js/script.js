$(document).ready(function() {
	var letters = {A:"i", B:"j", C:"k", D:"l", E:"m", F:"o"};

	$(document).on('keyup', 'input', function() {
		var a = $(this).val();
		if(a.length == 12){
			if(a.search(["[a-fA-F0-9]{12}"])==0){
				var key = "";
				var mac = "";

				for (var i = 11; i >= 0; i--) {
					if(isNaN(a.charAt(i))){
						key += letters[a.charAt(i).toLocaleUpperCase()];
					}else{
						if(a.charAt(i)<=7){
							key += String(parseInt(a.charAt(i))+2);
						}else{
							key += String(parseInt(a.charAt(i)));
						}
					}

					if(i==8){
						key += "P";
					}else if(i==4){
						key += "5";
					}
				}

				for (var i = 1; i <=12; i++) {
					if(i%2==0 && i<12){
						mac += a.charAt(i-1)+":";
					}else{
						mac += a.charAt(i-1);
					}
				}

				$(this).val(mac.toLocaleUpperCase());
				$("h3").html(key);
			}else{
				$("h3").html("MAC Erronea");
			}

		}
	});
});