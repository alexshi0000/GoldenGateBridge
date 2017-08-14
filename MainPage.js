
function HoverAnimation(Button){
	var Animation = setInterval(ColorSlider,30);
	var Color = "#00000065";
	var Counter = 14;
	function ColorSlider(){
		if(Counter >= 18)
			clearInterval(Animation);
		else{
			if(Color == "#00000065"){
				Color = "#00000080";
			}
			else if(Color == "#00000080"){
				Color = "#00000090";
				Counter++;
			}
			else if(Color == "#00000090"){
				Color = "#000000A0";
			}
			else if(Color == "#000000A0"){
				Color = "#000000B0";
				Counter++;
			}
			else if(Color == "#000000B0"){
				Color = "#000000C0";
			}
			else if(Color == "#000000C0"){
				Color = "#000000D0";
				Counter++;
			}
			else if(Color == "#000000D0"){
				Color = "#000000E0";
			}
			else if(Color == "#000000E0"){
				Color = "#000000FF";
				Counter++;
			}
			Button.style.color = Color+'';
		}
	}
}

function OutAnimation(Button){
	var Animation = setInterval(ColorSlider,30);
	var Color = "#000000FF";
	var Counter = 14;
	function ColorSlider(){
		if(Counter >= 18)
			clearInterval(Animation);
		else{
			if(Color == "#000000FF"){
				Color = "#000000E0";
			}
			else if(Color == "#000000E0"){
				Color = "#000000D0";
				Counter++;
			}
			else if(Color == "#000000D0"){
				Color = "#000000C0";
			}
			else if(Color == "#000000C0"){
				Color = "#000000B0";
				Counter++;
			}
			else if(Color == "#000000B0"){
				Color = "#000000A0";
			}
			else if(Color == "#000000A0"){
				Color = "#00000090";
				Counter++;
			}
			else if(Color == "#00000090"){
				Color = "#00000080";
			}
			else if(Color == "#00000080"){
				Color = "#00000065";
				Counter++;
			}
			Button.style.color = Color+'';
		}
	}
}

function ZoomIn(img){
	var Animation = setInterval(SizeSlider,2);
	var Ratio = 100;
	function SizeSlider(){
		if(Ratio >= 115){
			clearInterval(Animation);
			img.style.backgroundSize = "115%";
		}
		else{
			img.style.backgroundSize = Ratio+'%';
			Ratio*=1.02;
		}
	}
}

function ZoomOut(img){
	var Animation = setInterval(SizeSlider,2);
	var Ratio = 115;
	function SizeSlider(){
		if(Ratio <= 100){
			clearInterval(Animation)
			img.style.backgroundSize = "100%";
		}
		else{
			img.style.backgroundSize = Ratio+'%';
			Ratio/=1.02;
		}
	}
}