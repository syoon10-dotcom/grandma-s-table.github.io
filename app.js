document.addEventListener('DOMContentLoaded', () => {
  // ====== Data: Seok Suyeon (석수연) ======
  const grandma = {
    name: 'Seok Suyeon (석수연)',
    from: 'Hamyang, near Mount Jiri, Korea',
    about: 'Seok Suyeon runs a small guesthouse tucked into the foothills of Mount Jiri. She welcomes travelers from around the world with home-cooked meals built from local vegetables and wild mountain greens. Her cooking is seasonal, humble, and deeply fragrant — a taste of rural rhythms that she loves to share.',
    quote: '“Nothing makes me happier than seeing someone enjoy a meal we cooked together”',
    photo: 'grandma3.png'
  };

  const recipes = [
    { tags:'soup', title:'Hobak Doenjang Soup (호박된장국)', by:'Grandma Seok', time:'20 min',
      image:'hobak.jpg',
      ingredients:['2 cups anchovy-kelp broth','1 tbsp doenjang (soybean paste, 된장)','1 Korean zucchini (애호박), sliced','1/2 block tofu, cubed','1 tsp minced garlic','Sliced scallion; pinch of gochugaru (optional)'],
      steps:['Simmer broth with doenjang and garlic 3–4 min.','Add zucchini and tofu; cook until tender (6–7 min).','Finish with scallion and a pinch of chili flakes.']
    },
    { tags:'banchan', title:'Minari Jeon (미나리전)', by:'Grandma Seok', time:'15 min',
      image:'minari.jpg',
      ingredients:['1 cup minari (미나리, water parsley), chopped','1/4 onion, thinly sliced','3 tbsp flour (or buchim garu)','1 egg','Salt & pepper; oil for pan-frying'],
      steps:['Mix minari, onion, flour, egg, and seasoning to a loose batter.','Pan-fry small rounds until golden and crisp on both sides.']
    },
    { tags:'main rice', title:'Jirisan Sanchae Bibimbap (산채비빔밥)', by:'Grandma Seok', time:'25 min',
      image:'bibimbap.jpg',
      ingredients:['1 bowl steamed rice','Assorted mountain greens: gosari (고사리), chwinamul (취나물), minari (미나리), chamnamul (참나물)','1 tbsp gochujang','1 tsp sesame oil; sesame seeds','1 fried egg'],
      steps:['Blanch or saute each green lightly; season with salt and sesame oil.','Arrange over hot rice with fried egg and gochujang.','Mix gently before eating.']
    },
    { tags:'banchan pickles', title:'Perilla Leaf Jangajji (깻잎장아찌)', by:'Grandma Seok', time:'15 min + marinate',
      image:'pickle.jpg',
      ingredients:['30 perilla leaves (깻잎)','1/3 cup soy sauce + 1/3 cup water','1 tbsp sugar or rice syrup','1 tbsp vinegar','Sliced chili & garlic (optional)'],
      steps:['Simmer soy sauce, water, sugar, vinegar; cool slightly.','Pour over layered perilla leaves; add chili/garlic if using.','Marinate in fridge; serve as a side with rice.']
    },
    { tags:'banchan', title:'Gosari Namul (고사리나물)', by:'Grandma Seok', time:'20 min (after soaking)',
      image:'gosari.jpg',
      ingredients:['Soaked bracken fern (고사리), drained','1 tsp minced garlic','1 tbsp soy sauce','1 tsp sesame oil','Sesame seeds'],
      steps:['Saute soaked gosari with garlic and soy sauce until tender.','Finish with sesame oil and seeds.']
    },
    { tags:'banchan', title:'Doraji Muchim (도라지무침)', by:'Grandma Seok', time:'15 min',
      image:'doraji.jpg',
      ingredients:['200 g peeled bellflower root (도라지), julienned','1 tbsp gochujang','1 tsp sugar','1 tsp vinegar','1 tsp sesame oil; garlic to taste'],
      steps:['Salt and rinse doraji to remove bitterness.','Toss with gochujang, sugar, vinegar, garlic, sesame oil.']
    },
    { tags:'soup', title:'Perilla-Seed Tofu Stew (들깨두부탕)', by:'Grandma Seok', time:'18 min',
      image:'tofu.jpg',
      ingredients:['2 cups water or light broth','1/2 block soft tofu (순두부 or soft tofu)','2 tbsp ground perilla seed (들깻가루)','Sliced scallion; salt to taste'],
      steps:['Bring broth to a gentle boil; add tofu chunks.','Whisk in ground perilla seed; simmer briefly until creamy.','Season with salt; garnish with scallion.']
    },
    { tags:'rice main', title:'Wild Herb Tofu Toss (산나물 두부무침)', by:'Grandma Seok', time:'15 min',
      image:'greens.jpg',
      ingredients:['Soft tofu, drained and crumbled','Assorted blanched mountain greens','1 tsp sesame oil','Salt and pepper; sesame seeds'],
      steps:['Gently combine tofu with greens; season with salt, pepper, and sesame oil.','Serve warm or room temperature with rice.']
    },
    /* ➕ 새 카드: 감자조림 */
    { tags:'banchan', title:'Stewed Potatoes (감자조림)', by:'Grandma Seok', time:'20 min',
      image:'gamja.jpg',
      ingredients:[
        '3 small potatoes (감자) ~500 g, peeled and 3 cm chunks',
        '1/2 small onion, sliced (optional)',
        '1.5 tbsp soy sauce',
        '1 tbsp sugar or rice syrup (조청)',
        '1 cup water',
        '1 tsp minced garlic',
        '1 tsp sesame oil',
        '1 tsp sesame seeds',
        'Sliced green onion; pinch of gochugaru (optional)'
      ],
      steps:[
        'Put potatoes, water, soy sauce, and sugar in a pan with garlic. Bring to a boil over medium-high.',
        'Add onion if using; lower to medium. Simmer 10–12 min until potatoes are tender and liquid is half reduced.',
        'Increase heat slightly and stir gently to glaze until sauce thickens and coats potatoes (2–3 min).',
        'Turn off heat; finish with sesame oil and sesame seeds. Garnish with green onion and a pinch of gochugaru.'
      ]
    }
  ];

  const vocab = [
    {k:'애호박', e:'korean zucchini', hint:'soups, stir-fries'},
    {k:'미나리', e:'water parsley', hint:'fresh, herbal; pancakes & salads'},
    {k:'참나물', e:'korean wild chervil', hint:'spring herb; namul'},
    {k:'산나물', e:'mountain greens', hint:'assorted wild greens'},
    {k:'고사리', e:'bracken fern', hint:'bibimbap classic'},
    {k:'취나물', e:'aster scaber', hint:'fragrant wild green'},
    {k:'두릅', e:'aralia shoots', hint:'spring shoots, blanched'},
    {k:'도라지', e:'bellflower root', hint:'crisp & slightly bitter'},
    {k:'더덕', e:'deodeok', hint:'grill or muchim'},
    {k:'들깻가루', e:'ground perilla seed', hint:'nutty, creamy soups'},
    {k:'들기름', e:'perilla oil', hint:'finishing oil'},
    {k:'깻잎', e:'perilla leaf', hint:'wraps & pickles'},
    {k:'된장', e:'soybean paste (doenjang)', hint:'soups & seasoning'},
    {k:'고추장', e:'gochujang', hint:'sweet-spicy paste'},
    {k:'고춧가루', e:'gochugaru', hint:'chili flakes'},
    {k:'국간장', e:'soup soy sauce', hint:'lighter, for soups'},
    {k:'멸치', e:'dried anchovy', hint:'stock base'},
    {k:'다시마', e:'kelp', hint:'broth with anchovy'},
    {k:'쑥', e:'mugwort', hint:'pancakes & rice cakes'},
    {k:'반찬', e:'sidedish (banchan)'},
    {k:'메밀', e:'buckwheat', hint:'noodles & pancakes'},
    {k:'손두부', e:'handmade tofu', hint:'soft texture'},
    {k:'장아찌', e:'pickles', hint:'soy-brined vegetables'},
    {k:'지리산', e:'Jirisan', hint:'national park; region'}
  ];

  // ====== Build Grandma UI ======
  document.getElementById('grandma-name').textContent = grandma.name;
  document.getElementById('grandma-from').textContent = grandma.from;
  document.getElementById('grandma-about').textContent = grandma.about;
  document.getElementById('grandma-quote').textContent = grandma.quote;

  const gimg = document.getElementById('grandma-photo');
  gimg.src = grandma.photo;
  gimg.onerror = () => { gimg.src = 'placeholder.jpg'; };

  // ====== Build recipes ======
  const cardsRoot = document.getElementById('cards');
  function labelFromTag(t){
    if(!t) return 'Recipe';
    if(t.includes('soup')) return 'Soups & Stews';
    if(t.includes('banchan')) return 'Banchan';
    if(t.includes('noodle')) return 'Noodles';
    if(t.includes('sweet')) return 'Desserts';
    if(t.includes('main') || t.includes('rice')) return 'Mains & Rice';
    if(t.includes('pickles')) return 'Pickles';
    return 'Recipe';
  }

  function cardHTML(r){
    return `
      <article class="rcard"
               role="button"
               tabindex="0"
               data-tags="${r.tags}"
               data-title="${r.title}"
               data-by="${r.by}"
               data-time="${r.time}"
               data-image="${r.image}"
               onclick="openRecipeFromCard(this)"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openRecipeFromCard(this);}">
        <div class="corner-sticker">★</div>
        <img class="thumb"
             src="${r.image}"
             alt="${r.title}"
             loading="lazy"
             decoding="async"
             sizes="(max-width: 900px) 50vw, 240px">
        <div class="body">
          <p class="title">${r.title}</p>
          <p class="meta">${labelFromTag(r.tags)} · ${r.time} · ${r.by}</p>
          <div>${(r.tags||'').split(' ').map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </article>`;
  }
  cardsRoot.innerHTML = recipes.map(cardHTML).join('');

  // ====== Filtering ======
  const chips = document.querySelectorAll('.chip');
  const cardEls = () => Array.from(document.querySelectorAll('.rcard'));
  chips.forEach(ch => ch.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    ch.classList.add('active');
    const k = ch.dataset.filter;
    cardEls().forEach(card => {
      card.style.display = (k === 'all' || card.dataset.tags.includes(k)) ? '' : 'none';
    });
  }));

  // ====== Detail dialog ======
  const dlg   = document.getElementById('detail');
  const dTitle= document.getElementById('detail-title');
  const dBy   = document.getElementById('detail-by');
  const dImg  = document.getElementById('detail-img');
  const dIngs = document.getElementById('detail-ings');
  const dSteps= document.getElementById('detail-steps');

  window.openRecipeFromCard = function(card){
    const r = recipes.find(x => x.title === card.dataset.title) || {};
    dTitle.textContent = r.title || card.dataset.title;
    dBy.textContent    = `${r.by || card.dataset.by} · ${r.time || card.dataset.time}`;
    dImg.src = r.image || card.dataset.image;
    dImg.alt = r.title || card.dataset.title;
    dIngs.innerHTML    = (r.ingredients||[]).map(i=>`<li>${i}</li>`).join('');
    dSteps.innerHTML   = (r.steps||[]).map(s=>`<li>${s}</li>`).join('');
    dlg.showModal();
  };

  document.getElementById('close').addEventListener('click', () => dlg.close());

  // ====== Vocab ======
  const chipsRoot = document.getElementById('vocab-chips');
  const list = document.getElementById('vocab-cards');
  const vocabBtns = vocab.map(v=>`<button class="chip" style="background:#e9f5ee" data-k="${v.k}" data-e="${v.e}">${v.k} (${v.e})</button>`).join('');
  chipsRoot.innerHTML = vocabBtns;

  vocab.forEach(v => {
    const wrap = document.createElement('div');
    wrap.className = 'flip';
    wrap.tabIndex = 0; // keyboard focus
    wrap.innerHTML = `
      <div class="flip-inner">
        <div class="face front">
          <div style="font-size:24px; font-weight:800">${v.k}</div>
          <div class="small">Tap to flip · Speak</div>
          <div class="row">
            <button type="button" class="sbtn speak" data-k="${v.k}">Speak</button>
            <button type="button" class="sbtn ghost flipbtn">Flip</button>
          </div>
        </div>
        <div class="face back">
          <div style="font-size:18px; font-weight:800">${v.e}</div>
          <div class="small">${v.hint||''}</div>
          <div class="row">
            <button type="button" class="sbtn speak" data-k="${v.k}">Speak</button>
            <button type="button" class="sbtn ghost flipbtn">Flip</button>
          </div>
        </div>
      </div>`;
    list.appendChild(wrap);
  });

  // ---- Flip & Speak handlers ----
  // 칩에서 발음
  chipsRoot.addEventListener('click', (e)=>{
    const chip = e.target.closest('.chip');
    if (!chip) return;
    speakKo(chip.dataset.k);
  });

  // 카드에서: 버튼만 동작하도록(다른 곳 클릭해도 뒤집히지 않게)
  list.addEventListener('click', (e)=>{
    // 1) Speak 버튼
    const speakBtn = e.target.closest('.sbtn.speak');
    if (speakBtn) { speakKo(speakBtn.dataset.k); return; }

    // 2) Flip 버튼만 카드 뒤집기
    const flipBtn = e.target.closest('.flipbtn');
    if (flipBtn) {
      e.preventDefault();
      e.stopPropagation();
      flipBtn.closest('.flip').classList.toggle('flipped');
    }
    // 그 외 클릭은 무시 (카드 아무 곳 눌러도 더 이상 뒤집히지 않음)
  });

  // 키보드 접근성: Flip 버튼 포커스 상태에서 Enter/Space 로 토글
  list.addEventListener('keydown', (e)=>{
    const flipBtn = e.target.closest('.flipbtn');
    if (flipBtn && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      flipBtn.closest('.flip').classList.toggle('flipped');
    }
  });

  // ====== Korean TTS: force female voice when possible ======
  (function setupKoreanTTS(){
    let cachedVoice = null;

    const PREFERRED_KO_FEMALE = [
      'Yuna','Nari','Sora',                        // Apple
      'Microsoft Heami Online','Heami','SunHi',   // Microsoft
      'Google 한국의 여자','Google 한국어 여성','ko-KR-Standard-A','ko-KR-Wavenet-A',
      'Female','여자','female'
    ];

    function pickKoreanFemaleVoice() {
      const voices = speechSynthesis.getVoices() || [];
      const ko = voices.filter(v => (v.lang || '').toLowerCase().startsWith('ko'));
      for (const wanted of PREFERRED_KO_FEMALE) {
        const found = ko.find(v => (v.name || '').toLowerCase().includes(wanted.toLowerCase()));
        if (found) return found;
      }
      if (ko.length) return ko[0];
      return voices.find(v => (v.lang || '').toLowerCase().startsWith('ko')) || voices[0] || null;
    }

    function ensureVoiceReady(cb){
      const tryPick = () => {
        if (!cachedVoice) cachedVoice = pickKoreanFemaleVoice();
        if (cachedVoice) cb();
      };
      const voices = speechSynthesis.getVoices();
      if (voices && voices.length) {
        tryPick();
      } else {
        speechSynthesis.onvoiceschanged = () => tryPick();
        setTimeout(tryPick, 300);
      }
    }

    // 외부에서 호출하는 함수
    window.speakKo = function(text){
      if(!('speechSynthesis' in window)) { alert('Speech not supported in this browser.'); return; }
      ensureVoiceReady(() => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ko-KR';

        // 실행 시점에도 한 번 더 여성 우선 보이스 탐색
        const voices = speechSynthesis.getVoices() || [];
        const female = voices.find(v =>
          (v.lang||'').toLowerCase().startsWith('ko') &&
          PREFERRED_KO_FEMALE.some(name => (v.name||'').toLowerCase().includes(name.toLowerCase()))
        );
        if (female) {
          u.voice = female;
        } else if (cachedVoice) {
          u.voice = cachedVoice;
        }

        u.pitch = 1.05;
        u.rate  = 1.0;

        speechSynthesis.cancel();
        speechSynthesis.speak(u);
      });
    };
  })();
});

