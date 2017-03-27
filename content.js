//alert("SkillRack Copy/Paste is Enabled!");

var badScriptie = document.getElementById('j_id_3n');
badScriptie.innerHTML = "";

var text;
function getClipboardText(){chrome.extension.sendMessage({cmd: "clipboard", action: "paste" }, function(response) {if (response.paste) {text = response.paste; document.getElementById('newDiv').textContent = text;}});}

var newDiv;
newDiv = document.createElement('div');
newDiv.setAttribute('id','newDiv');
document.body.appendChild(newDiv);
var UpdaterDiv;
UpdaterDiv = document.createElement('div');
UpdaterDiv.setAttribute('id','UpdaterDiv');
document.body.appendChild(UpdaterDiv);

function pasteClipboardItem()
{
  getClipboardText();
  //alert(text);
  newDiv.innerHTML = text;
  ff = 1;
}

var cusScript = document.createElement('script');
cusScript.textContent = ['function ff1s(){var newDiv = document.getElementById(\'newDiv\'); var tt = newDiv.textContent; for(i = 0; i < tt.length; i+=20) { var tmp = ""; for(j = i; j < Math.min(i + 20, tt.length); j++) tmp += tt[j]; editor.insert(String(tmp));}}; \
                          function ff2s(){var newDiv = document.getElementById(\'newDiv\'); document.getElementById(\'j_id_1l\').textContent = newDiv.textContent; }; \
                          function ff3s(){var newDiv = document.getElementById(\'newDiv\'); document.getElementById(\'j_id_1o\').textContent = newDiv.textContent; }; \
                          function ff4s(){var newDiv = document.getElementById(\'newDiv\'); document.getElementById(\'j_id_1r\').textContent = newDiv.textContent; }; \
                          function ff5s(){var newDiv = document.getElementById(\'newDiv\'); document.getElementById(\'j_id_1u\').textContent = newDiv.textContent; }; \
                          function ff6s(){var newDiv = document.getElementById(\'newDiv\'); document.getElementById(\'j_id_1z\').textContent = newDiv.textContent; }'];

var aceEdi = document.getElementsByClassName('ace_editor')[0];
aceEdi.appendChild(cusScript);
aceEdi.setAttribute('onpaste', 'ff1s()');

document.getElementById('j_id_1l').setAttribute('onpaste', 'ff2s()');
document.getElementById('j_id_1o').setAttribute('onpaste', 'ff3s()');
document.getElementById('j_id_1r').setAttribute('onpaste', 'ff4s()');
document.getElementById('j_id_1u').setAttribute('onpaste', 'ff5s()');
document.getElementById('j_id_1z').setAttribute('onpaste', 'ff6s()');

function timedCount()
{
    getClipboardText();
}
setInterval(function(){getClipboardText()},500);
//timedCount();
