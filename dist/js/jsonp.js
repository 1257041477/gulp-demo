
function jsonp(option){
	var script = document.createElement('script');

	if(option.data){
		option.url += "?";
		for(var attr in option.data){
			option.url += attr+"="+option.data[attr]+"&";
		}
		option.url = option.url.slice(0,-1);
	}

	script.setAttribute('src',option.url);
	var head = document.querySelector('head')
	head.appendChild(script);

	script.onload=function(){
		head.removeChild(script);
	}

	window[option.fnName] = option.success;
}