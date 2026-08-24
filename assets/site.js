(function(){
  var root = document.documentElement;
  function saved(){ try { return localStorage.getItem('audpt-theme'); } catch(e){ return null; } }
  function store(v){ try { localStorage.setItem('audpt-theme', v); } catch(e){} }

  var pref = saved();
  if (pref === 'dark' || pref === 'light') root.setAttribute('data-theme', pref);

  var btn = document.querySelector('.themetog');
  if (btn) btn.addEventListener('click', function(){
    var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var now = root.getAttribute('data-theme') || (sysDark ? 'dark' : 'light');
    var next = now === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store(next);
  });
})();
