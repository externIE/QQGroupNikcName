var mName      = document.getElementById("name");
var mAction    = document.getElementById("action");
var mDemo      = document.getElementById("demo");
var mNickname  = document.getElementById("nickname");
var mSubmitBtn = document.getElementById("submitBtn");
var result 	   = document.getElementById("result");

new Clipboard('.copyBtn');

function redo(){
	mName.value 	= "";
	mAction.value   = "";
	if (!$(mSubmitBtn).hasClass("disabled")) {
		$(mSubmitBtn).addClass("disabled");
	};
	if (!$(result).hasClass("hide")) {
		$(result).addClass("hide");
	};
}

function build(){
	if (!$(mSubmitBtn).hasClass("disabled")) {
		$(mSubmitBtn).addClass("disabled");
	};
	var rAction     = action.value.split("").reverse().join("");
	var leftCode    = String.fromCharCode(0x202e);
	var rightCode   = String.fromCharCode(0x202d);
	mDemo.innerHTML = mName.value + leftCode + rAction + rightCode + "撤回了一条消息";
	mNickname.innerHTML = mName.value + leftCode + rAction + rightCode;
	if ($(result).hasClass("hide")) {
		$(result).removeClass("hide");
	};
}

function checkInputsValue(){
	if (mName.value!="" && mAction.value!="") {
		if ($(mSubmitBtn).hasClass("disabled")) {
			$(mSubmitBtn).removeClass("disabled");
		};
	}else{
		if (!$(mSubmitBtn).hasClass("disabled")) {
			$(mSubmitBtn).addClass("disabled");
		};
	}
}