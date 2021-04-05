function changeElements() {
	var csslist =new Array(
		".col-10 alert,.alert-primary,.text-center",
		".col-10,.alert,.alert-info,.text-center",
		".col-1,.text-center",
		".col-4,.text-center",
		".col-2,.text-center",
		".col-3,.text-center",
		".nav-link",
		".nav-link,.dropdown-toggle",
		".dropdown-item",
		".form-group  label",
		".col-12,.text-center",
		//"fieldset legend",
		//"fieldset",
		"",
		"",
		"",
		""
	);
	var list = new Array(
		".trans",
		".modal-title",
		".modal-body"
	);
	/*var x=$(".trans");
	var len=x.length;
	for(var i=0;i<len;i++){
		var str=x[i].innerText;
		str=str.replace(/[\r\n]/g,"");
		console.log(str);
		if(dictionary[""+str]) x[i].innerHTML=dictionary[""+str];
	}*/

	if(tmp=document.getElementById("Login")) tmp.value="登录";
	if(tmp=document.getElementById('passwordInput')) tmp.setAttribute("placeholder","请输入密码");
	if(tmp=document.getElementById("usernameInput")) tmp.setAttribute("placeholder","请输入用户名");
	if(tmp=document.getElementById("manage-awards-new-award-name")) tmp.setAttribute("placeholder","输入奖项名称...");
	if(tmp=document.getElementById("manage-awards-new-award-desc")) tmp.setAttribute("placeholder","输入奖项描述...");
	if(tmp=document.getElementById("Sponsorsubmit")&&dictionary[""+tmp.value]) tmp.value=dictionary[""+tmp.value];
	var len=list.length;
	for(var i=0;i<len;i++){
		var x=$(list[i]);
		var csslen=x.length;
		
		for(var j=0;j<csslen;j++){
			var str = x[j].innerText;
			str=str.replace(/[\r\n]/g,"");
			//console.log(str);
			if(dictionary[""+str]) x[j].innerHTML=dictionary[""+str];
		}
	}
}

jQuery(changeElements);

let mutationObserverCallback = (mutationList) => {
	/*
	for(let mutation of mutationList){
		console.log(mutation);
		console.log(mutation.target);
		console.log('oldValue:' + mutation.oldValue);
	}
	*/
	changeElements();
}
let documentDOMObserver = new MutationObserver(mutationObserverCallback);
documentDOMObserver.observe(
	document.getRootNode(),
	{
		childList: true,
		attributes: true,
		subtree: true,
		attributeFilter: ['style'],
		attributeOldValue: true
	}
);

console.log('FTC2021赛季裁判系统汉化已在本页成功启动!');
console.log('By 萝卜造工作室 And 量子饼干');
console.log('https://www.robozone.com.cn/');
console.log('https://github.com/ToiletCommander/');

tmp = document.getElementsByClassName("scoreCardHelpDiv text-center")

if(tmp.length >= 4){
	for(var i=0;i<4;i++){
		 tmp[i].title='Y = 第一张黄牌, R = 红牌, Y&R = 两张以上黄牌';
	}
}