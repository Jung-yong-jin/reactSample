var img = document.createElement('img');
img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '안녕하dd세요.';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);
