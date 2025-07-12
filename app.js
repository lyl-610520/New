// 实时时间与动态背景
function updateTimeAndBackground() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  document.getElementById('time-text').textContent = timeText;

  // 时钟指针
  const hourDeg = (hours % 12 + minutes / 60) * 30;
  const minuteDeg = minutes * 6;
  document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;

  // 动态背景
  document.body.style.background = hours < 12 ? 
    'linear-gradient(180deg, #FFD700, #87CEEB)' : 
    'linear-gradient(180deg, #2C3E50, #000)';

  // 问候语
  const greetings = {
    zh: hours < 12 ? '清晨好，准备开启新一天！' : hours < 18 ? '下午好，继续加油！' : '晚上好，放松一下吧！',
    en: hours < 12 ? 'Good morning, start a new day!' : hours < 18 ? 'Good afternoon, keep it up!' : 'Good evening, time to relax!'
  };
  document.getElementById('greeting').textContent = greetings[localStorage.getItem('lang') || 'zh'];
}
updateTimeAndBackground();
setInterval(updateTimeAndBackground, 1000);

// 语言切换
function switchLang(lang) {
  localStorage.setItem('lang', lang);
  updateTimeAndBackground();
}

// 气泡提示（每5分钟）
function showBubble() {
  const messages = {
    zh: ['主人，该打卡啦！', '花园需要你的爱！', '宠物想你了哦！'],
    en: ['Time to check in!', 'Your garden needs love!', 'Your pet misses you!']
  };
  const lang = localStorage.getItem('lang') || 'zh';
  const text = messages[lang][Math.floor(Math.random() * messages[lang].length)];
  const bubble = document.getElementById('bubble');
  document.getElementById('bubble-text').textContent = text;
  bubble.style.display = 'block';
  setTimeout(() => bubble.style.display = 'none', 5000);
}
setInterval(showBubble, 5 * 60 * 1000);
showBubble(); // 立即显示

// 导航（占位）
function navigate(page) {
  alert(`跳转到${page}页面`);
}
