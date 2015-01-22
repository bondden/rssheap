// ==UserScript==
// @name        rssheap
// @namespace   /
// @include     http://www.rssheap.com/articles
// @version     1
// @grant       none
// ==/UserScript==



//execute, when DOM is ready
function bondden_gInit(){
	
	//1. remove feedback sticky buton
	var eee=document.getElementsByClassName('ue-tab-container');
	if(eee.length){
		eee.item(0).parentNode.removeChild(eee.item(0));
	}

}

var bondden_gRi = setInterval(function(){
	if(document.readyState==="complete"){
		bondden_gInit();
		clearInterval(bondden_gRi);
	}
},10);