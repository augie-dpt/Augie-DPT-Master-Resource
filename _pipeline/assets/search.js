(function(){
  var q = document.getElementById('q'),
      out = document.getElementById('results'),
      stat = document.getElementById('stat'),
      DATA = null;

  function ready(d){
    DATA = d;
    var secs = d.reduce(function(n,m){ return n + m.s.length; }, 0);
    stat.textContent = d.length + ' modules · ' + secs + ' sections · full text';
    if (q.value) render(q.value);
  }

  // index.js sets this; it works over http and straight off disk alike
  if (window.__AUDPT_INDEX) ready(window.__AUDPT_INDEX);
  else fetch('assets/index.json').then(function(r){ return r.json(); }).then(ready)
       .catch(function(){ stat.textContent = 'Search index could not be loaded.'; });

  function esc(s){ return s.replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function rx(t){ return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'); }

  function mark(text, terms){
    var html = esc(text);
    terms.forEach(function(t){
      if (t.length < 2) return;
      html = html.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')','ig'), '<mark>$1</mark>');
    });
    return html;
  }

  // a window of text around the first hit, trimmed to word boundaries
  function snippet(text, terms){
    var at = -1;
    for (var i=0;i<terms.length;i++){
      var m = text.match(rx(terms[i]));
      if (m && (at === -1 || m.index < at)) at = m.index;
    }
    if (at === -1) return text.slice(0,180) + '…';
    var start = Math.max(0, at - 90), end = Math.min(text.length, at + 150);
    var s = text.slice(start, end);
    if (start > 0) s = '…' + s.replace(/^\S*\s/,'');
    if (end < text.length) s = s.replace(/\s\S*$/,'') + '…';
    return s;
  }

  function render(query){
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!DATA || !terms.length){ out.innerHTML = ''; stat.textContent = ''; return; }

    var hits = [];
    DATA.forEach(function(m){
      var label = (m.t + ' ' + m.c + ' module ' + m.m).toLowerCase();
      var titleHit = terms.every(function(t){ return label.indexOf(t) > -1; });
      var secs = [];
      m.s.forEach(function(sec){
        var hay = (sec.t + ' ' + sec.x).toLowerCase();
        if (!terms.every(function(t){ return hay.indexOf(t) > -1; })) return;
        var inHead = terms.every(function(t){ return sec.t.toLowerCase().indexOf(t) > -1; });
        secs.push({sec:sec, score:inHead ? 3 : 1});
      });
      if (!titleHit && !secs.length) return;
      secs.sort(function(a,b){ return b.score - a.score; });
      hits.push({m:m, secs:secs.slice(0,3), score:(titleHit?50:0) + secs.length});
    });
    hits.sort(function(a,b){ return b.score - a.score; });

    if (!hits.length){
      out.innerHTML = '<p class="stat">No match for “' + esc(query) + '”. Try one word, or a term as the notes would phrase it.</p>';
      stat.textContent = '0 results';
      return;
    }
    var nsec = hits.reduce(function(n,h){ return n + h.secs.length; }, 0);
    stat.textContent = hits.length + ' module' + (hits.length===1?'':'s') +
                       (nsec ? ' · ' + nsec + ' passage' + (nsec===1?'':'s') : '');

    out.innerHTML = hits.map(function(h){
      var m = h.m;
      var head = '<a class="res" href="' + m.u + '">' +
                 '<p class="rc">' + esc(m.c) + ' · Module ' + m.m + '</p>' +
                 '<p class="rt">' + mark(m.t, terms) + '</p></a>';
      var secs = h.secs.map(function(o){
        return '<a class="res sub" href="' + m.u + (o.sec.i ? '#'+o.sec.i : '') + '">' +
               '<p class="rc">' + mark(o.sec.t, terms) + '</p>' +
               '<p class="rh">' + mark(snippet(o.sec.x, terms), terms) + '</p></a>';
      }).join('');
      return head + secs;
    }).join('');
  }

  var timer;
  q.addEventListener('input', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){ render(q.value); }, 90);
  });
})();
