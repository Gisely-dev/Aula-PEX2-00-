// controla o botão da lanterna: liga e desliga o modo escuro
(function(){
  // se a pessoa já escolheu um tema antes, usa ele
  try{
    var stored = localStorage.getItem('el-theme');
    if(stored){ document.documentElement.setAttribute('data-theme', stored); }
  }catch(e){}

  var btn = document.getElementById('torchBtn');
  btn.addEventListener('click', function(){
    var current = document.documentElement.getAttribute('data-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = current ? current === 'dark' : prefersDark;
    var next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    // guarda a escolha para lembrar na próxima visita
    try{ localStorage.setItem('el-theme', next); }catch(e){}
  });
})();
