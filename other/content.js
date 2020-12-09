console.log("I am alive")

//Creating Elements
var btn = document.createElement("BUTTON")
var t = document.createTextNode("SimplRQL");
btn.appendChild(t);
btn.id ='srql_btn';
//Appending to DOM 
document.querySelector("#AccountRQLConsole > div > div.E8FXQF4UWsz7AVj-pM6FP > div._2pHWvPE-Ug9Nm3ra8QfTgB > div:nth-child(2) > div > h2").appendChild(btn);

btn.addEventListener("click", function(){
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
});