//must inject CSS for parent/non parent
var CSSlink = document.createElement( "link" );
CSSlink.href = "//lagged.com/templates/styles_v2_play.css?v=11";
CSSlink.type = "text/css";
CSSlink.rel = "stylesheet";
CSSlink.media = "screen";
document.getElementsByTagName("head")[0].appendChild(CSSlink);

//inject google
var GoogleAds = document.createElement( "script" );
GoogleAds.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js";
GoogleAds.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(GoogleAds);

var LaggedAPI={}
var hsData;
var adsManager;
var adsLoader;
var adDisplayContainer;
var intervalTimer;
var playButton;
var videoContent;
var isMobile;
var prerollStart=true;
var adsplaying=true;


!function(){
var u=new function(){function c(a){if(!a)return"";a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);d<128?b+=String.fromCharCode(d):d>127&&d<2048?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}function d(a,b){var c=1&a|1&b,d=a>>>1|b>>>1;return d<<1|c}function e(a,b){var c=1&a^1&b,d=a>>>1^b>>>1;return d<<1|c}function f(a,b){var c=1&a&(1&b),d=a>>>1&b>>>1;return d<<1|c}function g(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function h(a){var d,c="";for(d=0;d<=3;d++)c+=b.charAt(a>>8*d+4&15)+b.charAt(a>>8*d&15);return c}function i(a){var d,b=(a.length+8>>6)+1,c=new Array(16*b);for(d=0;d<16*b;d++)c[d]=0;for(d=0;d<a.length;d++)c[d>>2]|=a.charCodeAt(d)<<(8*a.length+d)%4*8;c[d>>2]|=128<<(8*a.length+d)%4*8;var e=8*a.length;return c[16*b-2]=255&e,c[16*b-2]|=(e>>>8&255)<<8,c[16*b-2]|=(e>>>16&255)<<16,c[16*b-2]|=(e>>>24&255)<<24,c}function j(a,b){return a<<b|a>>>32-b}function k(a,b,c,d,e,f){return g(j(g(g(b,a),g(d,f)),e),c)}function l(a,b,c,e,g,h,i){return k(d(f(b,c),f(~b,e)),a,b,g,h,i)}function m(a,b,c,e,g,h,i){return k(d(f(b,e),f(c,~e)),a,b,g,h,i)}function n(a,b,c,d,f,g,h){return k(e(e(b,c),d),a,b,f,g,h)}function o(a,b,c,f,g,h,i){return k(e(c,d(b,~f)),a,b,g,h,i)}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b="0123456789abcdef";return{base64:function(b){var e,f,g,h,i,j,k,d="",l=0;for(b=c(b);l<b.length;)e=b.charCodeAt(l++),f=b.charCodeAt(l++),g=b.charCodeAt(l++),h=e>>2,i=(3&e)<<4|f>>4,j=(15&f)<<2|g>>6,k=63&g,isNaN(f)?j=k=64:isNaN(g)&&(k=64),d=d+a.charAt(h)+a.charAt(i)+a.charAt(j)+a.charAt(k);return d},md5:function(a){for(var b=i(a),c=1732584193,d=-271733879,e=-1732584194,f=271733878,j=0;j<b.length;j+=16){var k=c,p=d,q=e,r=f;c=l(c,d,e,f,b[j+0],7,-680876936),f=l(f,c,d,e,b[j+1],12,-389564586),e=l(e,f,c,d,b[j+2],17,606105819),d=l(d,e,f,c,b[j+3],22,-1044525330),c=l(c,d,e,f,b[j+4],7,-176418897),f=l(f,c,d,e,b[j+5],12,1200080426),e=l(e,f,c,d,b[j+6],17,-1473231341),d=l(d,e,f,c,b[j+7],22,-45705983),c=l(c,d,e,f,b[j+8],7,1770035416),f=l(f,c,d,e,b[j+9],12,-1958414417),e=l(e,f,c,d,b[j+10],17,-42063),d=l(d,e,f,c,b[j+11],22,-1990404162),c=l(c,d,e,f,b[j+12],7,1804603682),f=l(f,c,d,e,b[j+13],12,-40341101),e=l(e,f,c,d,b[j+14],17,-1502002290),d=l(d,e,f,c,b[j+15],22,1236535329),c=m(c,d,e,f,b[j+1],5,-165796510),f=m(f,c,d,e,b[j+6],9,-1069501632),e=m(e,f,c,d,b[j+11],14,643717713),d=m(d,e,f,c,b[j+0],20,-373897302),c=m(c,d,e,f,b[j+5],5,-701558691),f=m(f,c,d,e,b[j+10],9,38016083),e=m(e,f,c,d,b[j+15],14,-660478335),d=m(d,e,f,c,b[j+4],20,-405537848),c=m(c,d,e,f,b[j+9],5,568446438),f=m(f,c,d,e,b[j+14],9,-1019803690),e=m(e,f,c,d,b[j+3],14,-187363961),d=m(d,e,f,c,b[j+8],20,1163531501),c=m(c,d,e,f,b[j+13],5,-1444681467),f=m(f,c,d,e,b[j+2],9,-51403784),e=m(e,f,c,d,b[j+7],14,1735328473),d=m(d,e,f,c,b[j+12],20,-1926607734),c=n(c,d,e,f,b[j+5],4,-378558),f=n(f,c,d,e,b[j+8],11,-2022574463),e=n(e,f,c,d,b[j+11],16,1839030562),d=n(d,e,f,c,b[j+14],23,-35309556),c=n(c,d,e,f,b[j+1],4,-1530992060),f=n(f,c,d,e,b[j+4],11,1272893353),e=n(e,f,c,d,b[j+7],16,-155497632),d=n(d,e,f,c,b[j+10],23,-1094730640),c=n(c,d,e,f,b[j+13],4,681279174),f=n(f,c,d,e,b[j+0],11,-358537222),e=n(e,f,c,d,b[j+3],16,-722521979),d=n(d,e,f,c,b[j+6],23,76029189),c=n(c,d,e,f,b[j+9],4,-640364487),f=n(f,c,d,e,b[j+12],11,-421815835),e=n(e,f,c,d,b[j+15],16,530742520),d=n(d,e,f,c,b[j+2],23,-995338651),c=o(c,d,e,f,b[j+0],6,-198630844),f=o(f,c,d,e,b[j+7],10,1126891415),e=o(e,f,c,d,b[j+14],15,-1416354905),d=o(d,e,f,c,b[j+5],21,-57434055),c=o(c,d,e,f,b[j+12],6,1700485571),f=o(f,c,d,e,b[j+3],10,-1894986606),e=o(e,f,c,d,b[j+10],15,-1051523),d=o(d,e,f,c,b[j+1],21,-2054922799),c=o(c,d,e,f,b[j+8],6,1873313359),f=o(f,c,d,e,b[j+15],10,-30611744),e=o(e,f,c,d,b[j+6],15,-1560198380),d=o(d,e,f,c,b[j+13],21,1309151649),c=o(c,d,e,f,b[j+4],6,-145523070),f=o(f,c,d,e,b[j+11],10,-1120210379),e=o(e,f,c,d,b[j+2],15,718787259),d=o(d,e,f,c,b[j+9],21,-343485551),c=g(c,k),d=g(d,p),e=g(e,q),f=g(f,r)}return h(c)+h(d)+h(e)+h(f)}}}

var PRIVATEKEY;
var PUBLICKEY;
var isFinished=false;
var scrollCountLoads=0;
var newHSisloading=false;
var rank=0;
var prevrank=0;
var prevScore=-99999;
var boardIsOpened=false;
var guestScoreDetails;
var parentisFullScreen=false;
var usewinpar=document;
var earnedList=[];
var newAchList=[];

var removeHSLoading=function(){
fade(usewinpar.getElementById("leaderboard-loading"));
setTimeout(function(){usewinpar.getElementById("leaderboard-loading").remove(); }, 200);
}
var HSinitLoading=function(){
//checks if parent is in full screen
// parentisFullScreen=window.parent.isFullscreen;
// if(parentisFullScreen){
// 	usewinpar=document;
// }else{
// 	usewinpar=window.parent.document;
// }

var backdropDiv = document.createElement("div");
backdropDiv.id="leaderboard-modal";
backdropDiv.onclick=function (event){event.preventDefault();event.stopPropagation();return false;};
usewinpar.body.appendChild(backdropDiv);

//create loading div, will remove later
var loadingDiv = document.createElement("div");
loadingDiv.id="leaderboard-loading";
loadingDiv.className="leaderboard-circle";

//fixes android fukery
if(window.innerWidth>690){
var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
if(vH<710){
loadingDiv.setAttribute("style", "top:116px");
if(window.matchMedia) {
	if (window.matchMedia("(orientation: landscape)").matches) {
		loadingDiv.setAttribute("style", "top:calc((("+vH+"px - 208px)/2));");
	}
}
}else{
loadingDiv.setAttribute("style", "top:calc((("+vH+"px - 710px)/2) + 116px);");
}
}
usewinpar.body.appendChild(loadingDiv);
}


var sendAPIRequest=function(type,urlly,action, data, completed, callback){

	console.log(data);
	var returncallback={};
	returncallback.success=true;
	completed(data,callback);
	//callback(returncallback);

}

//new ACH call
var quickAchCheck=function(len,callback){
	setTimeout(function(){
		if(newAchList.length>len){
			var returncallback={};
			returncallback.success=true;
			callback(returncallback);
		}else{
			var postdata = {};
			postdata.action = 'save';
			postdata.publickey = PUBLICKEY;
			postdata.awards=newAchList;
			newAchList=[];
			// var json = JSON.stringify(postdata);
			// var data=u.base64(json);
			sendAPIRequest('award','award','save', postdata, awardComplete, callback);	
		}
	}, 35);	
}

LaggedAPI.init=function(d,e){
PRIVATEKEY=e,PUBLICKEY=d;
},function(){
LaggedAPI.Achievements={save:function(b,callback){

//earnedList
for (var i = 0, len = b.length; i < len; i++) {
  if(earnedList.indexOf(b[i])===-1){
	earnedList.push(b[i]);
	newAchList.push(b[i]);
  }
}

if(newAchList.length>0){
quickAchCheck(newAchList.length, callback)
}else{
var returncallback={};
returncallback.success=true;
callback(returncallback);
}
}}}(),function(){
LaggedAPI.Scores={save:function(b,callback){
guestScoreDetails=b.board;
HSinitLoading();
var postdata = {};
postdata.action = 'save';
postdata.publickey = PUBLICKEY;
postdata.board=b.board;
postdata.score=b.score;
//var json = JSON.stringify(postdata);
//var data=u.base64(json);
sendAPIRequest('highscore','hs','save', postdata, hsLoadComp, callback);
},load:function(board,logsign){
HSinitLoading();
var postdata = {};
postdata.action = 'load';
postdata.publickey = PUBLICKEY;
postdata.board=board;
var json = JSON.stringify(postdata);
var data=u.base64(json);
sendAPIRequest('highscore','hs','load', data, hsLoadComp, userLogin(logsign));
}}}();

var awardComplete=function(response,callback){
var returncallback={};
returncallback.success=true;

	showAchievementData(response);
	callback(returncallback);

}

var hsLoadComp=function(response,callback){
	hsData=response
	saveScoreAfterLoad();
	var returncallback={};
	returncallback.success=true;
	callback(returncallback);
}

var userLogin=function(logsign){
//google events for log in/ sign up

}

var achOpened=0;
var showAchievementData=function(adata){
//show achievement

usewinpar=document;

achOpened++;

	if(achOpened>4){
		achOpened=1;
	}
	var thisnumber=achOpened;
	var achClass="achievement_pops_"+thisnumber;
	var achievementWrap = usewinpar.createElement("div");
	achievementWrap.id="achievementPopWrap";
	achievementWrap.className=achClass;
	achievementWrap.onclick=function (){usewinpar.getElementsByClassName(achClass)[0].remove();};

	var achTitle="Achievment Saved";

	var achievementWrapTitle = document.createElement("div");
	achievementWrapTitle.className="achievement_title";
	var achievementWrapTitleTxt=document.createTextNode(achTitle);
	achievementWrapTitle.appendChild(achievementWrapTitleTxt);
	achievementWrap.appendChild(achievementWrapTitle);

	var achievementWrapDesc = document.createElement("div");
	achievementWrapDesc.className="achievement_desc";
	var achievementWrapDescText=document.createTextNode('dev mode');
	achievementWrapDesc.appendChild(achievementWrapDescText);
	achievementWrap.appendChild(achievementWrapDesc);
	

	var achievementWrapXP = document.createElement("div");
	achievementWrapXP.className="achievement_xp";
	var achievementWrapXPTxt=document.createTextNode("+xp");
	achievementWrapXP.appendChild(achievementWrapXPTxt);
	achievementWrap.appendChild(achievementWrapXP);

	usewinpar.body.appendChild(achievementWrap);

	//timeout to remove
	setTimeout(function(){ 
			if(usewinpar.getElementsByClassName(achClass)[0]){
			fade(usewinpar.getElementsByClassName(achClass)[0]);
			achOpened--;
				setTimeout(function(){ 
					if(usewinpar.getElementsByClassName(achClass)[0]){
					usewinpar.getElementsByClassName(achClass)[0].remove();
				}
				}, 200);
			}
		}, 4000);
}

var adCallback;
// run ad
(function() {
LaggedAPI.APIAds = {
show: function(type,descriptionURL,thumbNail,callback) {
var svg='<div id="mainContainer" class="fullwidthad"><video id="contentElement" playsinline></video><div id="adContainer"></div></div><div id="playButton"><button>Tap to Play</button></div><div id="preloader"></div>';
var fragment = create(svg);
document.body.insertBefore(fragment,document.body.childNodes[0]);

console.log('create');

videoContent = document.getElementById('contentElement');
playButton = document.getElementById('playButton');
playButton.onclick=function(){playAds()};
//playButton.addEventListener('click', playAds);
adCallback=callback;
startAds(descriptionURL);
}
}
}());
function adsComplete(response) {
adCallback(response);
}

function startAds(descriptionURL) {
	
	console.log('start');
	
createAdDisplayContainer();
try{
adsLoader = new google.ima.AdsLoader(adDisplayContainer);
}catch(err){
console.log(err);
startTheGame();
return;
}
adsLoader.addEventListener(
google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,onAdsManagerLoaded,false);
adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onAdError,false);
isMobile=window.mobilecheck();
var adsRequest = new google.ima.AdsRequest();
var descURL=encodeURIComponent('//lagged.com/info/'+descriptionURL);
adsRequest.adTagUrl = "//googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-6893876361346206&ad_type=video_image&max_ad_duration=20000&description_url="+descURL+"&channel=9129986396&videoad_start_delay=0&hl=en&adtest=on";
adsRequest.linearAdSlotWidth = window.innerWidth;
adsRequest.linearAdSlotHeight = window.innerHeight;
adsRequest.nonLinearAdSlotWidth = window.innerWidth;
adsRequest.nonLinearAdSlotHeight = window.innerHeight;
adsLoader.requestAds(adsRequest);
}
var createAdDisplayContainer=function() {
if(typeof google === 'undefined'){
document.getElementById("preloader").remove();
startTheGame();
	console.log('start1');
}else{
adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById('adContainer'), videoContent);	
	console.log('start3');
	}
}
function playAds() {
	console.log('start2');
playButton.remove();
videoContent.load();
adDisplayContainer.initialize();
try {
adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL);
adsManager.start();
} catch (adError) {
startTheGame();
}
}
function onAdsManagerLoaded(adsManagerLoadedEvent) {
	console.log(adsManagerLoadedEvent);
var adsRenderingSettings = new google.ima.AdsRenderingSettings();
adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
adsManager = adsManagerLoadedEvent.getAdsManager(
videoContent, adsRenderingSettings);
adsManager.addEventListener(
google.ima.AdErrorEvent.Type.AD_ERROR,
onAdError);
adsManager.addEventListener(
google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
onContentResumeRequested);
adsManager.addEventListener(
google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
onAdEvent);
adsManager.addEventListener(
google.ima.AdEvent.Type.LOADED,
onAdEvent);
adsManager.addEventListener(
google.ima.AdEvent.Type.STARTED,
onAdEvent);
adsManager.addEventListener(
google.ima.AdEvent.Type.COMPLETE,
onAdEvent);
adsManager.addEventListener(
google.ima.AdEvent.Type.SKIPPED,
onContentSkipped);
adsManager.addEventListener(
google.ima.AdEvent.Type.USER_CLOSE,
onContentClosed);
if(isMobile){
document.getElementById("playButton").className = "";
document.getElementById("preloader").remove();
}else{
var c;
try{c=window.top.location.hostname}catch(a){console.log(a)}"lagged.com"==c?playAds():(document.getElementById("playButton").getElementsByTagName("button")[0].innerHTML="Click to Play",document.getElementById("playButton").className="",document.getElementById("preloader").remove())}
}
function onAdEvent(adEvent) {
	console.log(adEvent);
var ad = adEvent.getAd();
switch (adEvent.type) {
case google.ima.AdEvent.Type.LOADED:
if (!ad.isLinear()) {
setTimeout(function(){if(adsplaying){startTheGame();}},6000);
}else{
setTimeout(function(){if(adsplaying){startTheGame();}},21000);
}
break;
case google.ima.AdEvent.Type.STARTED:
if(document.getElementById("preloader")){document.getElementById("preloader").remove()}
if (ad.isLinear()) {
intervalTimer = setInterval(
function() {
var remainingTime = adsManager.getRemainingTime();
},
300);
}
break;
case google.ima.AdEvent.Type.COMPLETE:
if (document.mozFullScreen || document.webkitFullScreen) {
if (document.mozCancelFullScreen) {
videoContent.mozCancelFullScreen();
} else {
videoContent.webkitCancelFullScreen();
}
}
if (ad.isLinear()) {
clearInterval(intervalTimer);
}
startTheGame();
break;
}
}
function onAdError(adErrorEvent) {
if(document.getElementById("preloader")){
document.getElementById("preloader").remove();
}
startTheGame();
}
function startTheGame(){
adsplaying=false;
if(document.getElementById("preloader")){document.getElementById("preloader").remove();}
if(adsManager){
adsManager.destroy();
document.getElementById("mainContainer").remove();
var response={};
response.success=true;
adsComplete(response);
}else{
try{
if(document.getElementById("playButton")){
document.getElementById("playButton").remove();
}
if(document.getElementById("mainContainer")){
document.getElementById("mainContainer").remove();
}
}catch(err){
console.log(err);
}
adsComplete(false);
}
}
function onContentResumeRequested() {
startTheGame();
}
function onContentSkipped(){
startTheGame();
}
function onContentClosed(){
startTheGame();
}

function clearHSAll(){
if(usewinpar.getElementById("leaderboard-wrapper")){
usewinpar.getElementById("leaderboard-wrapper").remove();
}
if(usewinpar.getElementById("leaderboard-modal")){
	usewinpar.getElementById("leaderboard-modal").onclick="";
	usewinpar.getElementById("leaderboard-modal").remove();
}
boardIsOpened=false;
}

function saveScoreAfterLoad(){
//reset vars
isFinished=false;
scrollCountLoads=0;
newHSisloading=false;
boardIsOpened=true;

//build main wrapper
var mainWrapDiv = document.createElement("div");
mainWrapDiv.id="leaderboard-wrapper";

//fixes android funkery
var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
if(vH>710){
mainWrapDiv.setAttribute("style", "margin:calc(("+vH+"px - 710px)/2) 0 0 calc((100% - 688px)/2);");
}else{
mainWrapDiv.setAttribute("style", "margin:0;width:100%");
}
if(window.innerWidth<690){
mainWrapDiv.setAttribute("style", "margin:0;height:100vh");
}

//build header + close button
//if step 1, show logo, if step 2 show icon+game name
var mainWrapHeader = document.createElement("div");
mainWrapHeader.id="leaderboard-wrapper-header";
var mainWrapHeaderButton = document.createElement("button");
mainWrapHeaderButton.onclick = function () {clearHSAll()}
mainWrapHeaderButton.id="leaderboard-header-button";
var laggLink = document.createElement('a');
laggLink.setAttribute('href', "//lagged.com");
laggLink.setAttribute('target', "_blank");
laggLink.id="headerlogolink";

var scoreCircle = document.createElement("div");
scoreCircle.id="score-circle";
scoreCircle.className="leaderboard-circle";

mainWrapHeader.appendChild(mainWrapHeaderButton);
mainWrapHeader.appendChild(laggLink);
mainWrapDiv.appendChild(mainWrapHeader);

//add user score here
//append to scoreCircle
var scoreCircleTxtTop = document.createElement("div");
scoreCircleTxtTop.className="yourscore_txtdiv";
var yourscoreTxt=document.createTextNode("Your High Score"); 
scoreCircleTxtTop.appendChild(yourscoreTxt);

var scoreCircleTxtBtm = document.createElement("div");
scoreCircleTxtBtm.className="finalscore_divtxt";

var hiscoreTxt=document.createTextNode(numberWithCommas(hsData.score)); 
scoreCircleTxtBtm.appendChild(hiscoreTxt);

scoreCircle.appendChild(scoreCircleTxtTop);
scoreCircle.appendChild(scoreCircleTxtBtm);
mainWrapDiv.appendChild(scoreCircle);

//add rank text
var guestSignupTxt = document.createElement("div");
guestSignupTxt.className="signup_txti";
var signupTopTxt=document.createTextNode("DEV MODE"); 
guestSignupTxt.appendChild(signupTopTxt);

var guestSignupTxt2 = document.createElement("div");
guestSignupTxt2.className="signup_txti";
var signupTopTxt2=document.createTextNode("For best results:"); 
guestSignupTxt2.appendChild(signupTopTxt2);

var guestSignupTxt3 = document.createElement("div");
guestSignupTxt3.className="signup_txti";
var signupTopTxt3=document.createTextNode("-Only call when new high score"); 
guestSignupTxt3.appendChild(signupTopTxt3);
var guestSignupTxt23 = document.createElement("div");
guestSignupTxt23.className="signup_txti";
var signupTopTxt23=document.createTextNode("-Use custom name spaces when storing any variables locally"); 
guestSignupTxt23.appendChild(signupTopTxt23);


mainWrapDiv.appendChild(guestSignupTxt);
mainWrapDiv.appendChild(guestSignupTxt2);
mainWrapDiv.appendChild(guestSignupTxt3);
mainWrapDiv.appendChild(guestSignupTxt23);

//insert onto screen
//append all to mainWrapDiv, then add to body
usewinpar.body.appendChild(mainWrapDiv);

//remove loading
removeHSLoading();


}


//step 2 for user
function showStep2(tab,from){
if(tab==='leader'&&from){
usewinpar.getElementById("score-circle").remove();
usewinpar.getElementsByClassName("signup_txti")[1].remove();
usewinpar.getElementsByClassName("signup_txti")[0].remove();
usewinpar.getElementsByClassName("moregames_wrapper")[0].remove();
usewinpar.getElementsByClassName("main_hs_btn")[0].remove();
usewinpar.getElementById("headerlogolink").remove();
}else{
usewinpar.getElementById("leaderboardRankingWrap").remove();
}

//create new header
if(from){
var headerGameTitleWrap = document.createElement("div");
headerGameTitleWrap.className="gameThumbTitleWrap";
var gameThumbLink = document.createElement('a');
gameThumbLink.setAttribute('href', "//lagged.com/en/g/"+hsData.data.gamedata.url_key);
gameThumbLink.setAttribute('title', hsData.data.gamedata.name);
gameThumbLink.setAttribute('target', "_blank");
headerGameTitleWrap.appendChild(gameThumbLink);
var gameThumbThumb = document.createElement('img');
gameThumbThumb.setAttribute('src', "//imgs2.dab3games.com/"+hsData.data.gamedata.thumb);
gameThumbThumb.setAttribute('alt', hsData.data.gamedata.name);
gameThumbThumb.setAttribute('width', "200");
gameThumbThumb.setAttribute('height', "200");
gameThumbLink.appendChild(gameThumbThumb);
var gameThumbTextLink = document.createElement("div");
gameThumbLink.appendChild(gameThumbTextLink);
var gameThumbLinkName=document.createTextNode(hsData.data.gamedata.name); 
gameThumbTextLink.appendChild(gameThumbLinkName);
usewinpar.getElementById("leaderboard-wrapper-header").appendChild(headerGameTitleWrap)
}

//create tab links
var rankingsWrrap = document.createElement("div");
rankingsWrrap.id="leaderboardRankingWrap";

var tabsButWrapdiv = document.createElement("div");
tabsButWrapdiv.id="tabsButtonWraps";
var tabLinks1 = document.createElement("button");
tabLinks1.onclick = function () {showStep2('leader',false)}
if(tab==='leader'){
tabLinks1.className="tabs_links active";
}else{
tabLinks1.className="tabs_links";	
}
var gameThumbLinkName=document.createTextNode(hsData.data.gamedata.bname); 
tabLinks1.appendChild(gameThumbLinkName);
var tabLinks2 = document.createElement("button");
tabLinks2.onclick = function () {showStep2('friend',false)}
if(tab==='friend'){
tabLinks2.className="tabs_links active";
}else{
tabLinks2.className="tabs_links";	
}
var gameThumbLinkName2=document.createTextNode("Friends"); 
tabLinks2.appendChild(gameThumbLinkName2);
var tabLinks3 = document.createElement("button");
tabLinks3.onclick = function () {showStep2('share',false)}
if(tab==='share'){
tabLinks3.className="tabs_links active";
}else{
tabLinks3.className="tabs_links";	
}
var gameThumbLinkName3=document.createTextNode("Share"); 
tabLinks3.appendChild(gameThumbLinkName3);

tabsButWrapdiv.appendChild(tabLinks1);
tabsButWrapdiv.appendChild(tabLinks2);
tabsButWrapdiv.appendChild(tabLinks3);
rankingsWrrap.appendChild(tabsButWrapdiv);

//build the tab
if(tab==='leader'||tab==='friend'){
//build leaderboard	

rank=0;
prevrank=0;
prevScore=-99999;
var leadersScoreRowWrap = document.createElement("div");
if(tab==='friend'){
leadersScoreRowWrap.className="leaderboardRankinsRrap friendWrap";	
}else{
leadersScoreRowWrap.id="leaderboardScrollDiv";
leadersScoreRowWrap.className="leaderboardRankinsRrap";
}
var leadersTopTreeWrap = document.createElement("div");
leadersTopTreeWrap.className="leaderboardTopTreWrap";

var useData=hsData.data.scoredata;
if(tab==='friend'){
useData=hsData.data.frndboard;
}

for(i=0;i<useData.length;i++){
//get rank
prevrank++;
if(useData[i].scores!=prevScore){
	rank=prevrank;
	prevScore=useData[i].scores;
}

var userAvatar="default-avatar.jpg";
if(useData[i].avatar){
	userAvatar=useData[i].avatar;
}

var leadersScoreRow = document.createElement("div");

//if top three
if(i<3){
	if(i===0){
		leadersScoreRow.className="leaderboardTopTre leaderboardUserTop3First";
	}else if(i===1){
		leadersScoreRow.className="leaderboardTopTre leaderboardUserTop3Second";
	}else{
		leadersScoreRow.className="leaderboardTopTre leaderboardUserTop3Third";
	}
	
	
	var leadersScoreRankTopTr = document.createElement("div");
	leadersScoreRankTopTr.className="topThreeWrap";
	
	var leadersScoreRank = document.createElement("div");
	leadersScoreRank.className="leaderboardRowRank";
	var leaderScoreRanktxt=document.createTextNode(ordinal_suffix_of(rank)); 
	leadersScoreRank.appendChild(leaderScoreRanktxt);		
	leadersScoreRankTopTr.appendChild(leadersScoreRank);
	
	var userRowLink = document.createElement('a');
	userRowLink.setAttribute('href', "//lagged.com/profile/"+useData[i].uid);
	userRowLink.setAttribute('target', "_blank");
	var userRowAvatar = document.createElement('img');
	userRowAvatar.setAttribute('src', "//imgs2.dab3games.com/avatars/"+userAvatar);
	userRowAvatar.setAttribute('width', "100");
	userRowAvatar.setAttribute('height', "100");
	userRowLink.appendChild(userRowAvatar);
	leadersScoreRankTopTr.appendChild(userRowLink);
	leadersScoreRow.appendChild(leadersScoreRankTopTr);
	
	var userRowLinkDivv = document.createElement('div');
	userRowLinkDivv.className="leaderRowUsernameTop";
	
	var userRowLinkT22 = document.createElement('a');
	userRowLinkT22.setAttribute('href', "//lagged.com/profile/"+useData[i].uid);
	userRowLinkT22.setAttribute('target', "_blank");
	var userNameRow=document.createTextNode(htmlEntities(useData[i].username)); 
	userRowLinkT22.appendChild(userNameRow);
	userRowLinkDivv.appendChild(userRowLinkT22);
	leadersScoreRow.appendChild(userRowLinkDivv);
	
	var leadersScoreScore = document.createElement("div");
	leadersScoreScore.className="leaderboardRowScore";
	var leaderScoreRanktxt2=document.createTextNode(numberWithCommas(useData[i].scores)); 
	leadersScoreScore.appendChild(leaderScoreRanktxt2);		
	leadersScoreRow.appendChild(leadersScoreScore);
	
}else{
	leadersScoreRow.className="leaderboardUserRowWrap";

	var leadersScoreRank = document.createElement("div");
	leadersScoreRank.className="leaderboardRowRank";
	var leaderScoreRanktxt=document.createTextNode(ordinal_suffix_of(rank)); 
	leadersScoreRank.appendChild(leaderScoreRanktxt);		
	leadersScoreRow.appendChild(leadersScoreRank);
	
	var userRowLink = document.createElement('a');
	userRowLink.setAttribute('href', "//lagged.com/profile/"+useData[i].uid);
	userRowLink.setAttribute('target', "_blank");
	var userRowAvatar = document.createElement('img');
	userRowAvatar.setAttribute('src', "//imgs2.dab3games.com/avatars/"+userAvatar);
	userRowAvatar.setAttribute('width', "100");
	userRowAvatar.setAttribute('height', "100");
	userRowLink.appendChild(userRowAvatar);
	var userRowLinkDivv = document.createElement('div');
	var userNameRow=document.createTextNode(htmlEntities(useData[i].username)); 
	userRowLinkDivv.appendChild(userNameRow);
	userRowLink.appendChild(userRowLinkDivv);
	leadersScoreRow.appendChild(userRowLink);
	
	var leadersScoreScore = document.createElement("div");
	leadersScoreScore.className="leaderboardRowScore";
	var leaderScoreRanktxt2=document.createTextNode(numberWithCommas(useData[i].scores)); 
	leadersScoreScore.appendChild(leaderScoreRanktxt2);		
	leadersScoreRow.appendChild(leadersScoreScore);
	
}

if(i<3){
	leadersTopTreeWrap.appendChild(leadersScoreRow);
	leadersScoreRowWrap.appendChild(leadersTopTreeWrap);
}else{
	leadersScoreRowWrap.appendChild(leadersScoreRow);	
}
}
if(tab==='leader'){
leadersScoreRowWrap.onscroll=function(){
boardScrollEv(hsData.data.gamedata.id,rank,prevrank,prevScore);
};	
}
rankingsWrrap.appendChild(leadersScoreRowWrap);	

if(tab==='leader'){
//your best score
var userAvatar="default-avatar.jpg";
if(hsData.data.gamedata.avatar){
userAvatar=hsData.data.gamedata.avatar;
}
var leadersTopScore = document.createElement("div");
leadersTopScore.className="leaderboardUserRowWrap leaderboardBestScoreBottom";
var leadersScoreRank = document.createElement("div");
leadersScoreRank.className="leaderboardRowRank";
var leaderScoreRanktxt=document.createTextNode(ordinal_suffix_of(hsData.data.utop.rank)); 
leadersScoreRank.appendChild(leaderScoreRanktxt);		
leadersTopScore.appendChild(leadersScoreRank);
var userRowLink = document.createElement('a');
userRowLink.setAttribute('href', "//lagged.com/profile/"+hsData.data.gamedata.uid);
userRowLink.setAttribute('target', "_blank");
var userRowAvatar = document.createElement('img');
userRowAvatar.setAttribute('src', "//imgs2.dab3games.com/avatars/"+userAvatar);
userRowAvatar.setAttribute('width', "100");
userRowAvatar.setAttribute('height', "100");
userRowLink.appendChild(userRowAvatar);
var userRowLinkDivv = document.createElement('div');
var userNameRow=document.createTextNode(htmlEntities(hsData.data.gamedata.username)); 
userRowLinkDivv.appendChild(userNameRow);
userRowLink.appendChild(userRowLinkDivv);
leadersTopScore.appendChild(userRowLink);
var leadersScoreScore = document.createElement("div");
leadersScoreScore.className="leaderboardRowScore";
var leaderScoreRanktxt2=document.createTextNode(numberWithCommas(hsData.data.utop.score)); 
leadersScoreScore.appendChild(leaderScoreRanktxt2);		
leadersTopScore.appendChild(leadersScoreScore);
rankingsWrrap.appendChild(leadersTopScore);
}else if(tab==='friend'){
//invite friends
var leadersTopScore = document.createElement("div");
leadersTopScore.className="leaderboardUserRowWrap leaderboardBestScoreBottom friendsinvitebottom";

var leadersTopScore2 = document.createElement("div");
leadersTopScore2.className="invitethefriends";
var inviteFriendsText=document.createTextNode("Games are more fun with friends!"); 
leadersTopScore2.appendChild(inviteFriendsText);
leadersTopScore.appendChild(leadersTopScore2);

var userRowLink = document.createElement('a');
userRowLink.setAttribute('href', "//lagged.com/invite");
userRowLink.setAttribute('target', "_blank");
userRowLink.className="main_hs_btn inviteFriendsLink";
var inviteFriendsText=document.createTextNode("Invite your friends"); 
userRowLink.appendChild(inviteFriendsText);
leadersTopScore.appendChild(userRowLink);
rankingsWrrap.appendChild(leadersTopScore);
}

}else{
//share score sharee

var guestSignupTxt2 = document.createElement("div");
guestSignupTxt2.className="signup_txti headeronform";
var signupTopTxt2=document.createTextNode("You scored "+numberWithCommas(hsData.data.utop.score)+"!"); 
guestSignupTxt2.appendChild(signupTopTxt2);
rankingsWrrap.appendChild(guestSignupTxt2);

var shareLink = document.createElement('a');
var shareLinkText=document.createTextNode("Share It!");
shareLink.className="shareitlink facebook";
shareLink.setAttribute('href', "https://www.facebook.com/dialog/share?app_id=614526822036983&display=popup&href=http%3A%2F%2Flagged.com%2Fen%2Fg%2F"+encodeURIComponent(hsData.data.gamedata.url_key)+"&quote=I%20scored%20"+numberWithCommas(hsData.data.utop.score)+"%20in%20"+encodeURIComponent(hsData.data.gamedata.name)+"!&redirect_uri=http%3A%2F%2Flagged.com%2Fen%2Fg%2F"+encodeURIComponent(hsData.data.gamedata.url_key));
shareLink.setAttribute('target', "_blank");
shareLink.appendChild(shareLinkText);

var shareLink2 = document.createElement('a');
var shareLinkText2=document.createTextNode("Tweet It!");
shareLink2.className="shareitlink twitter";
shareLink2.setAttribute('href', "https://twitter.com/intent/tweet?text=I%20scored%20"+numberWithCommas(hsData.data.utop.score)+"%20in%20"+encodeURIComponent(hsData.data.gamedata.name)+"%20http%3A%2F%2Flagged.com%2Fen%2Fg%2F"+encodeURIComponent(hsData.data.gamedata.url_key)+"&source=webclient");
shareLink2.setAttribute('target', "_blank");
shareLink2.appendChild(shareLinkText2);

rankingsWrrap.appendChild(shareLink);
rankingsWrrap.appendChild(shareLink2);

}
usewinpar.getElementById("leaderboard-wrapper").appendChild(rankingsWrrap)
}


function guestGoToSignup(step){
//remove stuff
//usewinpar.getElementById("signupFormWrap").remove();
if(!step||step===1){
//usewinpar.getElementById("score-circle").remove();
usewinpar.getElementById("guestscorecircle").remove();
//usewinpar.getElementsByClassName("signup_txti")[1].remove();
usewinpar.getElementsByClassName("signup_txti")[0].remove();
usewinpar.getElementsByClassName("moregames_wrapper")[0].remove();
usewinpar.getElementsByClassName("main_hs_btn")[0].remove();
//usewinpar.getElementsByClassName("signup_txti")[0].remove();
}else{
usewinpar.getElementById("signupFormWrap").remove();	
}

//build form and buttons
var guestSignUpWrap = document.createElement("div");
guestSignUpWrap.id="signupFormWrap";

var guestSignupTxt = document.createElement("div");
guestSignupTxt.className="signup_txti headeronform";
var signupTopTxt=document.createTextNode("Sign up to save your score"); 
guestSignupTxt.appendChild(signupTopTxt);
guestSignUpWrap.appendChild(guestSignupTxt);

var signupForm = document.createElement("form");
signupForm.id="loginit";
signupForm.onsubmit=function(){return submitSignUpForm('signup');};

var formGroup1 = document.createElement("div");
formGroup1.className="form-group";
var formGroupLabel1 = document.createElement("label");
formGroupLabel1.setAttribute('form',"inputEmail1");
var formGroupLabelText1=document.createTextNode("Choose a nickname"); 
formGroupLabel1.appendChild(formGroupLabelText1);
formGroup1.appendChild(formGroupLabel1);
var formGroupInput1 = document.createElement("input");
formGroupInput1.setAttribute('type',"text");
formGroupInput1.setAttribute('name',"name");
formGroupInput1.id="inputEmail1";
formGroupInput1.className="form-control";
formGroupInput1.required=true;
if(!isMobile){formGroupInput1.autofocus=true;}
formGroup1.appendChild(formGroupInput1);
signupForm.appendChild(formGroup1);

var formGroup2 = document.createElement("div");
formGroup2.className="form-group";
var formGroupLabel2 = document.createElement("label");
formGroupLabel2.setAttribute('form',"inputEmail2");
var formGroupLabelText2=document.createTextNode("Your email address"); 
formGroupLabel2.appendChild(formGroupLabelText2);
formGroup2.appendChild(formGroupLabel2);
var formGroupInput2 = document.createElement("input");
formGroupInput2.setAttribute('type',"email");
formGroupInput2.setAttribute('name',"name");
formGroupInput2.id="inputEmail2";
formGroupInput2.className="form-control";
formGroupInput2.required=true;
formGroup2.appendChild(formGroupInput2);
signupForm.appendChild(formGroup2);

var formGroup3 = document.createElement("div");
formGroup3.className="form-group";
var formGroupLabel3 = document.createElement("label");
formGroupLabel3.setAttribute('form',"inputEmail3");
var formGroupLabelText3=document.createTextNode("Create a password"); 
formGroupLabel3.appendChild(formGroupLabelText3);
formGroup3.appendChild(formGroupLabel3);
var formGroupInput3 = document.createElement("input");
formGroupInput3.setAttribute('type',"password");
formGroupInput3.setAttribute('name',"name");
formGroupInput3.setAttribute('placeholder',"At least 6 characters");
formGroupInput3.id="inputEmail3";
formGroupInput3.className="form-control";
formGroupInput3.required=true;
formGroup3.appendChild(formGroupInput3);
signupForm.appendChild(formGroup3);

var guestSignUpBtn = document.createElement("button");
guestSignUpBtn.onclick = function () {return submitSignUpForm('signup');}
guestSignUpBtn.className="main_hs_btn viewranks";
guestSignUpBtn.id="createloginBtnMain";
var guestbtntxt=document.createTextNode("Continue"); 
guestSignUpBtn.appendChild(guestbtntxt);

signupForm.appendChild(guestSignUpBtn);
guestSignUpWrap.appendChild(signupForm);

var loginLink = document.createElement('a');
loginLink.onclick=function(){guestGoToLogin(2);};
var loginLinkTxt=document.createTextNode("Already have an account?");
var loginLinkSpan = document.createElement('span');
var loginLinkTxt2=document.createTextNode("Log in");
loginLinkSpan.appendChild(loginLinkTxt2);
loginLink.appendChild(loginLinkTxt);
loginLink.appendChild(loginLinkSpan);
guestSignUpWrap.appendChild(loginLink);

//add form in
usewinpar.getElementById("leaderboard-wrapper").appendChild(guestSignUpWrap);
if(!isMobile){usewinpar.getElementById("inputEmail1").focus();}
}

function guestGoToLogin(step){
//if(step!=1){
usewinpar.getElementById("signupFormWrap").remove();	
//}

//build form and buttons
var guestSignUpWrap = document.createElement("div");
guestSignUpWrap.id="signupFormWrap";

var guestSignupTxt = document.createElement("div");
guestSignupTxt.className="signup_txti headeronform";
var signupTopTxt=document.createTextNode("Log into Lagged.com"); 
guestSignupTxt.appendChild(signupTopTxt);
guestSignUpWrap.appendChild(guestSignupTxt);

var signupForm = document.createElement("form");
signupForm.id="loginit";
signupForm.onsubmit=function(){return submitSignUpForm('login');};

var formGroup2 = document.createElement("div");
formGroup2.className="form-group";
var formGroupLabel2 = document.createElement("label");
formGroupLabel2.setAttribute('form',"inputEmail2");
var formGroupLabelText2=document.createTextNode("Your email address"); 
formGroupLabel2.appendChild(formGroupLabelText2);
formGroup2.appendChild(formGroupLabel2);
var formGroupInput2 = document.createElement("input");
formGroupInput2.setAttribute('type',"email");
formGroupInput2.setAttribute('name',"name");
formGroupInput2.id="inputEmail2";
formGroupInput2.className="form-control";
formGroupInput2.required=true;
if(!isMobile){formGroupInput2.autofocus=true;}
formGroup2.appendChild(formGroupInput2);
signupForm.appendChild(formGroup2);

var formGroup3 = document.createElement("div");
formGroup3.className="form-group";
var formGroupLabel3 = document.createElement("label");
formGroupLabel3.setAttribute('form',"inputEmail3");
var formGroupLabelText3=document.createTextNode("Your password"); 
formGroupLabel3.appendChild(formGroupLabelText3);
formGroup3.appendChild(formGroupLabel3);
var formGroupInput3 = document.createElement("input");
formGroupInput3.setAttribute('type',"password");
formGroupInput3.setAttribute('name',"name");
formGroupInput3.id="inputEmail3";
formGroupInput3.className="form-control";
formGroupInput3.required=true;
formGroup3.appendChild(formGroupInput3);
signupForm.appendChild(formGroup3);

var guestSignUpBtn = document.createElement("button");
guestSignUpBtn.onclick = function () {return submitSignUpForm('login');}
guestSignUpBtn.className="main_hs_btn viewranks";
guestSignUpBtn.id="createloginBtnMain";
var guestbtntxt=document.createTextNode("Log in"); 
guestSignUpBtn.appendChild(guestbtntxt);

signupForm.appendChild(guestSignUpBtn);
guestSignUpWrap.appendChild(signupForm);

var loginLink = document.createElement('a');
loginLink.onclick=function(){guestGoToSignup(2);};
var loginLinkTxt=document.createTextNode("Create an account");
loginLink.className="halfylink";
loginLink.appendChild(loginLinkTxt);

var loginLink2 = document.createElement('a');
var loginLinkTxt2=document.createTextNode("Forgot password?");
loginLink2.className="halfylink secondlink";
loginLink2.setAttribute('href', "//lagged.com/help/password/");
loginLink2.setAttribute('target', "_blank");
loginLink2.appendChild(loginLinkTxt2);

guestSignUpWrap.appendChild(loginLink);
guestSignUpWrap.appendChild(loginLink2);


// //loop through each of the games, get from json or pre load with page??
// var moreGames = window.parent.jsMoreGames;
// var moregameWrapper = document.createElement("div");
// moregameWrapper.className="moregames_wrapper guestmoregames";
// 
// var guestSignupTxt2 = document.createElement("div");
// guestSignupTxt2.className="signup_txti moregametxt";
// var signupTopTxt2=document.createTextNode("More Games"); 
// guestSignupTxt2.appendChild(signupTopTxt2);
// moregameWrapper.appendChild(guestSignupTxt2);
// 
// for(i=0;i<5;i++){
// var gamethumbwrap = document.createElement("div");
// gamethumbwrap.className="thumbWrapper";
// 
// var gamethumbwrap2 = document.createElement("div");
// var gameThumbLink = document.createElement('a');
// gameThumbLink.setAttribute('href', "//lagged.com/en/g/"+moreGames[i].url_key);
// gameThumbLink.setAttribute('title', moreGames[i].name);
// gameThumbLink.setAttribute('target', "_blank");
// gameThumbLink.onclick=function(){window.parent.ga('send', 'event', 'API', 'moregames', 'Thumbnail click guest', {nonInteraction: true});}
// var gameThumbLinkName=document.createTextNode(moreGames[i].name); 
// gameThumbLink.appendChild(gameThumbLinkName);
// 
// var gameThumbThumb = document.createElement('img');
// gameThumbThumb.setAttribute('src', "//imgs2.dab3games.com/"+moreGames[i].thumb);
// gameThumbThumb.setAttribute('alt', moreGames[i].name);
// gameThumbThumb.setAttribute('width', "200");
// gameThumbThumb.setAttribute('height', "200");
// gamethumbwrap2.appendChild(gameThumbLink);
// gamethumbwrap2.appendChild(gameThumbThumb);
// gamethumbwrap.appendChild(gamethumbwrap2);
// moregameWrapper.appendChild(gamethumbwrap);
// }
// guestSignUpWrap.appendChild(moregameWrapper);

//add form in
usewinpar.getElementById("leaderboard-wrapper").appendChild(guestSignUpWrap)
if(!isMobile){usewinpar.getElementById("inputEmail2").focus();}
}


function submitSignUpForm(type){
//add "loading" to button
usewinpar.getElementById("createloginBtnMain").disabled = true;
var originalTxt=usewinpar.getElementById("createloginBtnMain").innerText;
usewinpar.getElementById("createloginBtnMain").innerText="Loading...";
usewinpar.getElementById("createloginBtnMain").className+=" btnloading";
if(usewinpar.getElementById("errorsubmit")){
usewinpar.getElementById("errorsubmit").remove();	
}

var nickname="";
var email="";
var password="";
var errors=false;
var errorMsg=[];

//if login, no need for nickname form
if(type!='login'){
//get nickname here
//check input inputEmail1
if(usewinpar.getElementById("inputEmail1")){
nickname=usewinpar.getElementById("inputEmail1").value;
}
if(nickname.length<2||nickname.length>30){
errors=true;
errorMsg.push("Nickname must be between 2-30 characters");
}
}

//get email+password, make sure meets requirements
email=usewinpar.getElementById("inputEmail2").value;
if(email.length<5){
errors=true;
errorMsg.push("Please enter a valid email address");
}
password=usewinpar.getElementById("inputEmail3").value;
if(password.length<6||password.length>30){
errors=true;
errorMsg.push("Password must be between 6-30 characters");
}

//ajax type == TYPE
if(!errors){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
   
//response
//this.responseText;
var response=this.responseText;
response=response.replace(")]}',","");
response=JSON.parse(response);
if(response.success===true&&response.uid>0){
	
	usewinpar.getElementById("createloginBtnMain").innerText="Success!";
	usewinpar.getElementById("createloginBtnMain").className+=" btnSuccessMsg";

	//window.parent.showUserInfo(response);

	setTimeout(function(){
	usewinpar.getElementById("createloginBtnMain").className="main_hs_btn viewranks btnSuccessMsg";
	
	fade(usewinpar.getElementById("leaderboard-modal"));
	setTimeout(function(){usewinpar.getElementById("leaderboard-wrapper").remove(); }, 200);
	setTimeout(function(){
	usewinpar.getElementById("leaderboard-modal").remove();
	LaggedAPI.Scores.load(guestScoreDetails,type);		
	}, 300);	
	}, 600);
	
}else{
	
	//if error message, show
	//if success, load high score board as user
	usewinpar.getElementById("createloginBtnMain").innerText=originalTxt;
	//document.getElementById("createloginBtnMain").classList.remove("btnloading");
	usewinpar.getElementById("createloginBtnMain").className="main_hs_btn viewranks";
	usewinpar.getElementById("createloginBtnMain").disabled = false;

	//add errors to form
	var errorMsgDiv = document.createElement("div");
	errorMsgDiv.id="errorsubmit";
	errorMsgDiv.className="error_msg";
	var errorMsgDivTxt=document.createTextNode(response.errors);
	errorMsgDiv.appendChild(errorMsgDivTxt);
	usewinpar.getElementById("signupFormWrap").insertBefore( errorMsgDiv,usewinpar.getElementById("loginit"));

	
}

 }
};

var sendata={};
sendata.ftype=type;
if(nickname){
sendata.fnickname=encodeURIComponent(nickname);
}
sendata.femail=encodeURIComponent(email);
sendata.fpass=encodeURIComponent(password);

xhttp.open("POST", "//lagged.com/api/v2/ajax.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("request="+JSON.stringify(sendata));
}else{
usewinpar.getElementById("createloginBtnMain").innerText=originalTxt;
usewinpar.getElementById("createloginBtnMain").classList.remove("btnloading");
usewinpar.getElementById("createloginBtnMain").disabled = false;

//add errors to form
var errorMsgDiv = document.createElement("div");
errorMsgDiv.id="errorsubmit";
errorMsgDiv.className="error_msg";
var errorMsgDivTxt=document.createTextNode(errorMsg[0]);
errorMsgDiv.appendChild(errorMsgDivTxt);
usewinpar.getElementById("signupFormWrap").insertBefore( errorMsgDiv,usewinpar.getElementById("loginit"));

}

return false;
}


function boardScrollEv(boardid,rankf,prevrankf,prevScoref){
var scelemt=usewinpar.getElementById("leaderboardScrollDiv");

if(scelemt.scrollTop+scelemt.offsetHeight>=scelemt.scrollHeight&&!newHSisloading&&!isFinished){
if(newHSisloading){
	return true;
}

//create loading div, will remove later
var loadingDiv = document.createElement("div");
loadingDiv.id="newScoresLoading";
usewinpar.getElementById("leaderboardScrollDiv").appendChild(loadingDiv);

scrollCountLoads++;
newHSisloading=true;

//if click TAB need to keep loaded scores **append to array??

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	var response=this.responseText;
	response=response.replace(")]}',","");
	response=JSON.parse(response);
	
	rank=rankf;
	prevrank=prevrankf;
	prevScore=prevScoref;
	
	if(response.success){
		
		if(response.isfinished){
			isFinished=true;
		}
		
		var useData=response.scoredata;
		hsData.data.scoredata=hsData.data.scoredata.concat(useData);

		for(i=0;i<useData.length;i++){
			//get rank
			prevrank++;
			if(useData[i].scores!=prevScore){
				rank=prevrank;
				prevScore=useData[i].scores;
			}

			var userAvatar="default-avatar.jpg";
			if(useData[i].avatar){
				userAvatar=useData[i].avatar;
			}

			var leadersScoreRow = document.createElement("div");
			leadersScoreRow.className="leaderboardUserRowWrap";

			var leadersScoreRank = document.createElement("div");
			leadersScoreRank.className="leaderboardRowRank";
			var leaderScoreRanktxt=document.createTextNode(ordinal_suffix_of(rank)); 
			leadersScoreRank.appendChild(leaderScoreRanktxt);		
			leadersScoreRow.appendChild(leadersScoreRank);

			var userRowLink = document.createElement('a');
			userRowLink.setAttribute('href', "//lagged.com/profile/"+useData[i].uid);
			userRowLink.setAttribute('target', "_blank");
			var userRowAvatar = document.createElement('img');
			userRowAvatar.setAttribute('src', "//imgs2.dab3games.com/avatars/"+userAvatar);
			userRowAvatar.setAttribute('width', "100");
			userRowAvatar.setAttribute('height', "100");
			userRowLink.appendChild(userRowAvatar);
			var userRowLinkDivv = document.createElement('div');
			var userNameRow=document.createTextNode(htmlEntities(useData[i].username)); 
			userRowLinkDivv.appendChild(userNameRow);
			userRowLink.appendChild(userRowLinkDivv);
			leadersScoreRow.appendChild(userRowLink);

			var leadersScoreScore = document.createElement("div");
			leadersScoreScore.className="leaderboardRowScore";
			var leaderScoreRanktxt2=document.createTextNode(numberWithCommas(useData[i].scores)); 
			leadersScoreScore.appendChild(leaderScoreRanktxt2);		
			leadersScoreRow.appendChild(leadersScoreScore);

		usewinpar.getElementById("leaderboardScrollDiv").appendChild(leadersScoreRow);
		}
		
	}else{
		isFinished=true;
		console.log(response.errors)
	}
	
	newHSisloading=false;
	loadingDiv.remove();
	}
};
	
var sendata={};
sendata.ftype='loadmorehs';
sendata.countr=scrollCountLoads;
sendata.boardid=parseInt(boardid,10) || 0;
xhttp.open("POST", "//lagged.com/api/v2/ajax.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("request="+JSON.stringify(sendata));

if(scrollCountLoads===5){
	isFinished=true;
}		
}
}





var create=function(htmlStr) {
var frag = document.createDocumentFragment(),
temp = document.createElement('div');
temp.innerHTML = htmlStr;
while (temp.firstChild) {
frag.appendChild(temp.firstChild);
}
return frag;
}
window.onresize = function(event) {
if(boardIsOpened){
if(usewinpar.getElementById('leaderboard-wrapper')){
var mainWrapper=usewinpar.getElementById('leaderboard-wrapper');
var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if(vH>710){
mainWrapper.setAttribute("style", "margin:calc(("+vH+"px - 710px)/2) 0 0 calc((100% - 688px)/2);");
}else{
mainWrapper.setAttribute("style", "margin:0;width:100%");
}

if(window.innerWidth<690){
	mainWrapper.setAttribute("style", "margin:0;height:100vh");
}

}	
}

if(adsManager&&adsplaying){var b=window.innerWidth,c=window.innerHeight;document.getElementById("adContainer").style.width=b+"px",document.getElementById("adContainer").style.height=c+"px",adsManager.resize(b,c,google.ima.ViewMode.NORMAL)};
};

window.mobilecheck=function(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a};

//fade out
function fade(element) {
 var op = 1;  // initial opacity
 var timer = setInterval(function () {
     if (op <= 0.1){
         clearInterval(timer);
         element.style.display = 'none';
     }
     element.style.opacity = op;
     element.style.filter = 'alpha(opacity=' + op * 100 + ")";
     op -= op * 0.1;
 }, 13);
}

function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

//remove element
Element.prototype.remove = function() {
 this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
 for(var i = this.length - 1; i >= 0; i--) {
     if(this[i] && this[i].parentElement) {
         this[i].parentElement.removeChild(this[i]);
     }
 }
}

//comma numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//adds st,nd,rd etc
function ordinal_suffix_of(i) {
if(i>999){
return numberWithCommas(i);
}else if(i>99){
return i;
}
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

}();