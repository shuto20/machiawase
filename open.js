// 招待リンクのページ。?c=コード を読み取り、アプリ（machiawase://）で開く。
// kind は 'j'（集まり）か 't'（いつメン）
function openInvite(kind, len) {
  var c = (new URLSearchParams(location.search).get('c') || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  var ok = c.length === len;
  var app = 'machiawase://' + kind + '/' + c;
  var btn = document.getElementById('open');
  var msg = document.getElementById('msg');
  if (!ok) {
    btn.style.display = 'none';
    msg.textContent = 'リンクが正しくありません。送ってくれた人に、もう一度送ってもらってください。';
    return;
  }
  btn.href = app;
  // 開いたらすぐアプリへ。アプリが入っていなければ、このページに残る
  setTimeout(function () {
    location.href = app;
  }, 300);
}
