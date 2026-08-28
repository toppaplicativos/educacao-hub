    const CATEGORY = {"key":"educacao","short":"EDUCAÇÃO","label":"Estudos, concursos, ENEM e faculdade","host":"edu.toppapps.online","title":"Soluções para estudar com mais direção e menos improviso.","description":"Guias e ferramentas para organizar a semana, começar o estudo e revisar com critérios que cabem na rotina.","accent":"#5b4b8a","accent_soft":"#f2eff4","deep":"#1a1a22","hero_asset":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/hero-study.webp","hero_alt":"Ilustração editorial de educação com caderno, relógio e cartões de revisão","slides":[{"title":"Um plano possível vence a semana perfeita.","copy":"Escolha uma solução que respeite seu tempo, suas prioridades e os imprevistos.","image":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/hero-study.webp","alt":"Destaque editorial 1 de EDUCAÇÃO"},{"title":"Começar também é uma habilidade.","copy":"Reduza a fricção do primeiro bloco e transforme intenção em uma sessão real.","image":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/session-ready.webp","alt":"Destaque editorial 2 de EDUCAÇÃO"},{"title":"Revisar é voltar com critério.","copy":"Organize o retorno ao conteúdo para não depender de releituras aleatórias.","image":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/pain-desk.webp","alt":"Destaque editorial 3 de EDUCAÇÃO"}],"collections":[["planejamento","Planejar a semana","Para transformar matérias, prazos e tempo em um plano executável."],["inicio","Começar a estudar","Para reduzir a fricção e construir o primeiro bloco de estudo."],["revisao","Revisar melhor","Para voltar ao conteúdo com intervalos e perguntas mais claras."]],"products":[{"slug":"cronograma-que-funciona","title":"Cronograma que Funciona","subtitle":"Plano de estudos possível","description":"Monte uma semana de estudos que respeita sua rotina, suas prioridades e os imprevistos do caminho.","objective":"Planejamento","theme":"Organização e produtividade","audience":"Estudantes, concurseiros e universitários","format":"Guia digital + aplicação","delivery":"Entrega digital","price":27.9,"status":"live","priority":1,"collection":"planejamento","tags":["cronograma","semana","estudos","planejamento","rotina"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/assets/covers/cronograma-que-funciona.webp","checkout":"https://pay.kiwify.com.br/aMALUaX"},{"slug":"senta-e-estuda","title":"Senta e Estuda","subtitle":"Primeira sessão em 10 minutos","description":"Em 10 minutos você senta e começa — sem esperar vontade. Guia em PDF + app Primeira Sessão.","objective":"Começar a estudar","theme":"Início e foco","audience":"Quem adia o começo do estudo","format":"Guia digital + app","delivery":"Entrega digital","price":27.9,"status":"live","priority":2,"collection":"inicio","tags":["começar","foco","primeira sessão","estudar"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/cover-navy.webp","checkout":"https://pay.kiwify.com.br/EDp7t2z"}],"faqs":[["A solução substitui uma escola ou professor?","Não. São materiais de organização e aplicação para apoiar sua rotina de estudos."],["O cronograma funciona para qualquer pessoa?","O material oferece critérios para adaptar a semana. A execução depende do tempo, objetivo e contexto de cada pessoa."],["Como uma oferta planejada aparece?","Ela fica no catálogo com estado de preparação e sem preço ou CTA de compra até que publicação, suporte e QA estejam confirmados."]]};
    const SUPPORT_EMAIL = 'suporte@toppapps.online';
    const app = document.getElementById('app');
    const pathParts = location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
    const params = new URLSearchParams(location.search);
    const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
    const money = (value) => value == null ? 'Preço a confirmar' : value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    const findProduct = (slug) => CATEGORY.products.find((product) => product.slug === slug);
    const initials = (title) => title.split(/\s+/).filter(Boolean).slice(0,2).map((part) => part[0]).join('').toUpperCase();
    const statusLabel = (status) => status === 'live' ? 'Em produção · QA pendente' : 'Planejada · não publicada';
    const productHref = (product) => `/p/${product.slug}`;
    function header() {
      return `<header class="site-header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Toppapps, início da loja de ${esc(CATEGORY.short)}"><span class="brand-mark" aria-hidden="true">${esc(CATEGORY.short.slice(0,2))}</span><span>TOPPAPPS <em>· ${esc(CATEGORY.short)}</em></span></a><div class="header-search"><label class="sr-only" for="header-search">Buscar soluções</label><input id="header-search" type="search" placeholder="Buscar soluções" autocomplete="off" list="search-suggestions"></div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button><nav class="main-nav" id="main-nav" aria-label="Navegação principal"><a href="/#catalogo">Soluções</a><a href="/#colecoes">Coleções</a><a href="/#destaques">Destaques editoriais</a><a href="/suporte">Suporte</a></nav></div></header>`;
    }
    function footer() {
      return `<footer class="site-footer wrap"><span>TOPPAPPS · ${esc(CATEGORY.short)} · Loja de soluções</span><span><a href="/suporte">Suporte</a> · <a href="/#catalogo">Ver soluções</a> · ${SUPPORT_EMAIL}</span></footer>`;
    }
    function confidence() {
      return `<section class="confidence" aria-label="Informações de compra e suporte"><div class="wrap confidence-grid"><div class="confidence-item"><b aria-hidden="true">01</b><span>Entrega digital</span></div><div class="confidence-item"><b aria-hidden="true">02</b><span>Acesso após confirmação</span></div><div class="confidence-item"><b aria-hidden="true">03</b><span>Informações da oferta na página oficial</span></div><div class="confidence-item"><b aria-hidden="true">04</b><span>Suporte por canal oficial</span></div></div></section>`;
    }
    function carousel() {
      const slides = CATEGORY.slides;
      return `<div class="hero-visual"><img id="hero-image" class="${(slides[0].image.endsWith('.png') || slides[0].image.endsWith('.webp')) ? 'alpha-asset' : ''}" src="${esc(slides[0].image)}" alt="${esc(slides[0].alt)}" width="900" height="520" fetchpriority="high"><div class="carousel" aria-label="Destaques da categoria"><div class="carousel-caption" aria-live="polite"><strong id="slide-title">${esc(slides[0].title)}</strong><span id="slide-copy">${esc(slides[0].copy)}</span></div><div class="carousel-controls"><button id="slide-prev" type="button" aria-label="Destaque anterior">‹</button><button id="slide-next" type="button" aria-label="Próximo destaque">›</button><div class="carousel-dots" role="tablist" aria-label="Escolher destaque">${slides.map((_, index) => `<button type="button" role="tab" aria-label="Destaque ${index+1}" aria-selected="${index === 0}" class="${index === 0 ? 'active' : ''}" data-slide="${index}"></button>`).join('')}</div></div></div></div>`;
    }
    function hubHero() {
      return `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">LOJA TOPPAPPS · ${esc(CATEGORY.short)}</p><h1>${esc(CATEGORY.title)}</h1><p class="hero-lede">${esc(CATEGORY.description)}</p><div class="hero-actions"><a class="button" href="#catalogo">Explorar soluções</a><a class="button secondary" href="/suporte">Acessar suporte</a></div><p class="hero-note">A loja organiza a escolha. A página de cada solução explica o próximo passo.</p></div>${carousel()}</div></section>`;
    }
    function collectionSection() {
      return `<section class="section" id="colecoes"><div class="wrap"><div class="section-head"><p class="eyebrow">NAVEGAÇÃO POR INTENÇÃO</p><h2>Encontre um ponto de partida para o seu momento.</h2><p class="copy">As coleções agrupam soluções por objetivo real do catálogo e levam você direto ao recorte escolhido.</p></div><div class="collection-row">${CATEGORY.collections.map(([slug,title,description], index) => `<a class="collection-card" href="/categoria/${slug}"><span class="index">0${index+1} · COLEÇÃO</span><h3>${esc(title)}</h3><p>${esc(description)}</p></a>`).join('')}</div></div></section>`;
    }
    function featureCard(product) {
      return `<article class="feature-card"><div class="feature-media" aria-hidden="true">${esc(initials(product.title))}</div><div class="feature-body"><span class="eyebrow">SELEÇÃO EDITORIAL</span><h3>${esc(product.title)}</h3><p>${esc(product.description)}</p><div class="feature-footer"><strong>${product.price == null ? 'Em preparação' : money(product.price)}</strong><a class="button secondary" href="${productHref(product)}">Conhecer</a></div></div></article>`;
    }
    function highlights() {
      const products = CATEGORY.products.filter((product) => product.featured);
      if (!products.length) return '';
      return `<section class="section light" id="destaques"><div class="wrap"><div class="section-head"><p class="eyebrow">DESTAQUES EDITORIAIS</p><h2>Uma seleção para começar sem percorrer o catálogo inteiro.</h2><p class="copy">Esta é uma seleção editorial da categoria. Não representa ranking de vendas ou avaliações.</p></div><div class="feature-grid">${products.map(featureCard).join('')}</div></div></section>`;
    }
    function optionsFrom(field) { return [...new Set(CATEGORY.products.map((product) => product[field]).filter(Boolean))]; }
    function filterPanel() {
      const objectives = optionsFrom('objective'), formats = optionsFrom('format');
      return `<div class="filter-panel" id="filter-panel"><div class="filter-groups"><div class="filter-group"><h3>Objetivo</h3>${objectives.map((value) => `<label class="filter-option"><input type="checkbox" data-filter-field="objective" value="${esc(value)}">${esc(value)}</label>`).join('')}</div><div class="filter-group"><h3>Formato</h3>${formats.map((value) => `<label class="filter-option"><input type="checkbox" data-filter-field="format" value="${esc(value)}">${esc(value)}</label>`).join('')}</div><div class="filter-group"><h3>Estado</h3><label class="filter-option"><input type="checkbox" data-filter-field="status" value="live">Em produção</label><label class="filter-option"><input type="checkbox" data-filter-field="status" value="planned">Em preparação</label></div></div><div class="active-filters" id="active-filters"></div><div class="actions"><button class="button secondary" type="button" id="clear-filters">Limpar filtros</button></div></div>`;
    }
    function catalogCard(product) {
      const live = product.status === 'live';
      return `<article class="product-card" data-product="${esc(product.slug)}"><div class="product-cover"><img class="${(product.cover.endsWith('.png') || product.cover.endsWith('.webp')) ? 'alpha-asset' : ''}" src="${esc(product.cover)}" alt="Capa de ${esc(product.title)}" width="900" height="520" loading="lazy"></div><div class="product-body"><span class="status ${live ? 'live' : 'planned'}">${esc(statusLabel(product.status))}</span><h3>${esc(product.title)}</h3><p class="product-subtitle">${esc(product.subtitle)}</p><p class="product-description">${esc(product.description)}</p><div class="product-meta"><span>${esc(product.format)}</span><span>${esc(product.delivery)}</span></div><div class="product-footer"><div class="product-price">${live ? `<small>Valor informado</small>${money(product.price)}` : `<small>Estado comercial</small>Em preparação`}</div>${live ? `<a class="button" href="${productHref(product)}">Comprar</a>` : `<a class="button secondary" href="${productHref(product)}">Ver detalhes</a>`}</div></div></article>`;
    }
    function catalogSection(initialCollection = '') {
      return `<section class="section catalog-shell" id="catalogo"><div class="wrap"><div class="section-head"><p class="eyebrow">CATÁLOGO DA CATEGORIA</p><h2>Compare soluções e escolha o próximo passo.</h2><p class="copy">Pesquise por nome, tema, objetivo, público ou formato. Os estados e valores exibidos são os registrados para esta categoria.</p></div><div class="catalog-toolbar" role="search"><div class="search-field"><label for="catalog-search">Buscar soluções</label><input id="catalog-search" type="search" placeholder="Nome, tema ou necessidade" autocomplete="off" list="search-suggestions" value="${esc(params.get('q') || '')}"></div><button class="tool-button" type="button" id="filter-toggle" aria-expanded="false" aria-controls="filter-panel">Filtros <span id="filter-count"></span></button><div class="select-field"><label for="sort-select">Ordenar</label><select id="sort-select"><option value="recommended">Recomendadas</option><option value="recent">Mais recentes</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option><option value="title">Nome</option></select></div></div>${filterPanel()}<div class="active-filters" id="toolbar-filters"></div><div class="result-summary"><strong id="result-count">0 soluções</strong><span>Sem ranking inventado: a loja mostra estados reais e seleção editorial.</span></div><div class="catalog-grid" id="catalog-grid"></div><div class="empty-state" id="empty-state"><strong>Nenhuma solução corresponde a esta busca.</strong><span>Tente outro termo ou limpe os filtros. Você também pode explorar uma coleção ou falar com o suporte.</span><div class="actions"><button class="button secondary" type="button" id="empty-clear">Limpar busca e filtros</button><a class="button ghost" href="/suporte">Acessar suporte</a></div></div></div><datalist id="search-suggestions"></datalist></section>`;
    }
    function relatedSection() {
      return `<section class="section dark"><div class="wrap"><div class="section-head"><p class="eyebrow">COMBINAÇÕES POR OBJETIVO</p><h2>Se uma solução não basta, continue por uma coleção relacionada.</h2><p class="copy">As combinações abaixo são caminhos de navegação, não descontos ou bundles de compra. Abra a coleção e compare as opções disponíveis.</p></div><div class="related-grid">${CATEGORY.collections.map(([slug,title,description], index) => `<article class="related-card"><span class="index">0${index+1} · CAMINHO</span><h3>${esc(title)}</h3><p>${esc(description)}</p><a href="/categoria/${slug}">Ver soluções relacionadas</a></article>`).join('')}</div></div></section>`;
    }
    function supportSection() {
      return `<section class="section dark" id="suporte"><div class="wrap support-grid"><div><p class="eyebrow">SUPORTE E CONTATO</p><h2>Ajuda clara para acesso, pagamento e uso.</h2><p class="copy">Se encontrar uma dificuldade, informe a solução, a URL acessada e o dispositivo usado. Não envie senhas ou dados completos de pagamento.</p></div><div class="support-box"><h3>Canal oficial</h3><p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p><div class="support-list"><div><b>01</b><span>Nome da solução e rota acessada.</span></div><div><b>02</b><span>Descrição objetiva do que aconteceu.</span></div><div><b>03</b><span>Orientação após a confirmação da compra.</span></div></div></div></div></section>`;
    }
    function faqSection() {
      return `<section class="section"><div class="wrap"><div class="section-head"><p class="eyebrow">DÚVIDAS REAIS</p><h2>Antes de escolher, confira as respostas.</h2></div><div class="faq-list">${CATEGORY.faqs.map(([question,answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('')}</div></div></section>`;
    }
    function hub(collection = '') {
      document.title = `${CATEGORY.short} | Toppapps`;
      return `${header()}<main id="main-content">${hubHero()}${confidence()}${collectionSection()}${highlights()}${catalogSection(collection)}${relatedSection()}${supportSection()}${faqSection()}</main>${footer()}`;
    }
    function routeHeader(title, eyebrow) { return `${header()}<main id="main-content"><section class="route-hero"><div class="wrap"><p class="eyebrow">${esc(eyebrow)} · ${esc(CATEGORY.short)}</p><h1>${esc(title)}</h1></div></section>`; }

    function sentaSalesPage(product) {
      document.title = 'Senta e Estuda | Educação Toppapps';
      const pay = 'https://pay.kiwify.com.br/EDp7t2z';
      const cta = (label) => `<a class="button senta-cta" href="${pay}" rel="noopener">${label}</a>`;
      return `${header()}<style>
        .senta-bar{background:#1D4F91;color:#fff;text-align:center;padding:.55rem 1rem;font-size:.82rem;font-weight:650}
        .senta-cta,.senta-offer .button,.hero-actions .senta-cta{background:#E2571C!important;border-color:#E2571C!important;color:#fff!important}
        .senta-hero h1{font-size:clamp(1.75rem,4.2vw,3.15rem);line-height:1.12;margin:.45rem 0 1rem;letter-spacing:-.04em}
        .senta-grid{display:grid;gap:1.6rem}
        @media(min-width:860px){.senta-grid{grid-template-columns:1.08fr .92fr;align-items:center}}
        .senta-proof{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0 0}
        .senta-proof span{border:1px solid #d7dbe3;padding:.32rem .7rem;border-radius:999px;font-size:.75rem}
        .senta-quote{background:#fff;border:1px solid #e5e7eb;padding:1rem;border-radius:14px}
        .senta-quote img{width:44px;height:44px;border-radius:50%;object-fit:cover;float:left;margin:0 .75rem .4rem 0}
        .senta-offer{background:#0F172A;color:#fff;padding:2.4rem 0}
        .senta-offer h2,.senta-dark h2{color:#fff}
        .senta-dark{background:#0F172A;color:#fff}
        .senta-dark .copy,.senta-offer .copy{color:rgba(255,255,255,.74)}
        .senta-app{display:grid;gap:1.4rem;align-items:center}
        @media(min-width:860px){.senta-app{grid-template-columns:1fr 1fr}}
        .senta-app.reverse .senta-copy{order:2}
        .senta-mock{display:flex;justify-content:center;align-items:center;min-height:280px;background:transparent}
        .senta-mock img{max-height:420px;width:auto;max-width:100%;object-fit:contain;background:transparent;box-shadow:none;height:auto;border-radius:0}
        .senta-box{border:1px solid #e5e7eb;border-radius:14px;padding:1rem;background:#fff;margin-top:1rem;font-size:.92rem;line-height:1.55}
        .senta-box b{color:#1D4F91}
        .senta-effect{margin-top:.9rem;border:1px solid #dbe3ef;background:#f4f7fb;border-radius:10px;padding:.7rem .9rem;font-size:.88rem;font-weight:650}
        .senta-steps{display:grid;gap:.8rem}
        @media(min-width:700px){.senta-steps{grid-template-columns:repeat(3,1fr)}}
        .senta-step{background:#fff;border-top:4px solid #E2571C;border-radius:12px;padding:1.1rem;border:1px solid #e5e7eb;border-top-width:4px}
        .senta-letters{display:grid;gap:.7rem}
        @media(min-width:700px){.senta-letters{grid-template-columns:repeat(4,1fr)}}
        .senta-letter{background:#f7f7f5;border:1px solid #e5e7eb;border-radius:12px;padding:1rem}
        .senta-letter span{display:grid;place-items:center;width:36px;height:36px;border-radius:8px;background:#1D4F91;color:#fff;font-weight:800}
        .senta-pdfs{display:grid;gap:.7rem}
        @media(min-width:700px){.senta-pdfs{grid-template-columns:repeat(4,1fr)}}
        .senta-pdf{border:1px solid #e5e7eb;border-radius:12px;padding:1rem;background:#fff;min-height:180px}
        .senta-pdf small{color:#E2571C;font-size:.68rem;font-weight:800;letter-spacing:.12em}
        .senta-bens{display:grid;gap:.7rem}
        @media(min-width:700px){.senta-bens{grid-template-columns:1fr 1fr}}
        .senta-ben{border:1px solid #e5e7eb;border-radius:12px;padding:1.1rem;background:#fff}
        .senta-faces{display:grid;gap:.8rem}
        @media(min-width:800px){.senta-faces{grid-template-columns:repeat(3,1fr)}}
        .senta-stack{display:grid;gap:.55rem;margin:1.1rem 0}
        .senta-stack div{display:flex;justify-content:space-between;gap:1rem;border-bottom:1px solid rgba(255,255,255,.12);padding:.55rem 0;font-size:.92rem}
        .senta-price{font-size:2.4rem;font-weight:850;letter-spacing:-.04em;margin:.4rem 0}
        .senta-old{text-decoration:line-through;opacity:.55;margin-right:.4rem}
        .senta-faq details{background:#fff}
        .senta-bar a{color:#fff;font-weight:800}
      </style>
      <div class="senta-bar">Condição de lançamento até 04/09 · R$ 27,90 · 7 dias para desistir · ${cta('Quero agora')}</div>
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM TRAVA NA HORA DE COMEÇAR</p>
            <h1>Em 10 minutos você senta e começa — sem esperar vontade.</h1>
            <div class="hero-actions">${cta('Quero minha primeira sessão')}<a class="button secondary" href="#app">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · primeira ação em 2 min · 7 dias para desistir</p>
            <p class="hero-lede">Se abrir o material já cansa, o app Primeira Sessão reduz a matéria a um movimento de menos de 2 minutos. Você faz o bloco que cabe hoje e termina com o próximo passo escrito — para amanhã não recomeçar do zero.</p>
            <div class="senta-proof"><span>Primeira sessão em 10 min</span><span>R$ 27,90</span><span>PDF 16 páginas + app</span><span>Garantia 7 dias</span></div>
            <blockquote class="senta-quote" style="margin-top:1.2rem;overflow:auto">
              <img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/faces/camila.webp" alt="Camila R." width="88" height="88">
              <p>“Antes: abria o PDF e fechava. Ação: questão 1, 25 minutos. Resultado: primeira sessão concluída no mesmo dia.”</p>
              <footer>Camila R. · Concurseira · Fortaleza</footer>
            </blockquote>
          </div>
          <div class="hero-visual"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/hero-study.webp" alt="Estudante adulto em mesa simples, com guia e caderno" width="1067" height="800"></div>
        </div></section>

        <section class="senta-dark" id="dor"><div class="wrap senta-grid" style="padding:4rem 0">
          <img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/pain-desk.webp" alt="Pessoa adulta diante de livros fechados, estudo adiado" width="1100" height="619" style="width:100%;border-radius:16px;object-fit:cover;height:320px">
          <div>
            <p class="eyebrow" style="color:#E2571C">TALVEZ VOCÊ RECONHEÇA</p>
            <h2>Você sabe o que estudar. O difícil é o primeiro minuto.</h2>
            <p class="copy">Abre o material, não sabe por onde começar, o celular ganha. Se perdeu o horário, o dia inteiro parece perdido. Isso não é falta de caráter. É uma entrada grande demais para o tempo que você tem hoje.</p>
            <div style="margin-top:1.2rem;display:grid;gap:.9rem">
              <article><h3>A tarefa é um bloco, não um passo</h3><p class="copy">“Estudar direito” não cabe em 10 minutos. A questão 1 cabe.</p></article>
              <article><h3>A culpa chega antes da sessão</h3><p class="copy">Você já se sente atrasado — e isso empurra o começo ainda mais.</p></article>
              <article><h3>O atraso vira um plano pior</h3><p class="copy">Cada dia perdido nasce um cronograma mais rígido, mais fácil de abandonar.</p></article>
            </div>
          </div>
        </div></section>

        <section class="section" id="virada"><div class="wrap">
          <p class="eyebrow">A VIRADA</p>
          <h2>De “não sei por onde começar” para uma sessão feita em 10 minutos.</h2>
          <p class="copy">Relógio só mede o tempo. Cronograma só lista a dívida. Aqui o começo é desenhado: uma ação de menos de 2 minutos, um bloco que cabe hoje, um próximo passo escrito.</p>
          <p class="senta-effect">Em 2 minutos você reduz a matéria. Em 10 você já sentou. No fim, amanhã não começa do zero.</p>
          <div class="senta-steps" style="margin-top:1.4rem">
            <article class="senta-step"><p class="eyebrow">01</p><h3>2 minutos</h3><p class="copy">A matéria larga vira um movimento visível: abrir, copiar, resolver a questão 1.</p></article>
            <article class="senta-step"><p class="eyebrow">02</p><h3>10 minutos</h3><p class="copy">Você escolhe um bloco que cabe hoje. A sessão existe mesmo depois do expediente.</p></article>
            <article class="senta-step"><p class="eyebrow">03</p><h3>No encerramento</h3><p class="copy">A próxima entrada já está escrita. Quebrar deixa de significar recomeçar.</p></article>
          </div>
        </div></section>

        <section class="section light" id="metodo"><div class="wrap">
          <p class="eyebrow">MECANISMO</p>
          <h2>O protocolo SENTA</h2>
          <p class="copy">Quatro movimentos para reduzir a distância entre “eu deveria” e o primeiro minuto real. Cada um existe no PDF e no app — não é slogan.</p>
          <div class="senta-letters" style="margin-top:1.3rem">
            <article class="senta-letter"><span>S</span><p><b>Sinalizar</b></p><p class="copy">Escolha a matéria de hoje. Uma só.</p></article>
            <article class="senta-letter"><span>E</span><p><b>Enxugar</b></p><p class="copy">Reduza a um movimento observável.</p></article>
            <article class="senta-letter"><span>N</span><p><b>Navegar</b></p><p class="copy">10, 25 ou 50 minutos. O timer segura.</p></article>
            <article class="senta-letter"><span>T</span><p><b>Traçar</b></p><p class="copy">A próxima entrada nasce escrita.</p></article>
          </div>
        </div></section>

        <section class="section" id="app"><div class="wrap">
          <p class="eyebrow">NO APP · TRÊS FUNÇÕES</p>
          <h2>Faça com o app. Atinja o resultado.</h2>
          <article class="senta-app" id="miniapp-montar" style="margin-top:1.6rem">
            <div class="senta-copy">
              <p class="eyebrow">NO APP · REDUZIR</p>
              <h3>Em 2 minutos a matéria larga vira uma ação.</h3>
              <p class="copy">Você abre o Primeira Sessão, escreve a matéria e o primeiro movimento. O app devolve uma frase de entrada — não um plano do dia.</p>
              <p class="senta-effect">Efeito. “Estudar direito” colapsa em “questão 1”.</p>
              <div class="senta-box"><p><b>Situação.</b> Você está no ônibus, a 8 minutos de casa.</p><p><b>Faça.</b> Abra o app. Escreva a matéria e a primeira ação.</p><p><b>Resultado.</b> Ao sentar, a questão 1 já está escolhida. Sem reabrir o índice.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="senta-mock"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/miniapp/montar.webp" alt="Celular com o app reduzindo a matéria à questão 1" width="424" height="900"></figure>
          </article>
        </div></section>

        <section class="section light"><div class="wrap">
          <article class="senta-app reverse" id="miniapp-sessao">
            <div class="senta-copy">
              <p class="eyebrow">NO APP · SEGURAR</p>
              <h3>O timer não motiva. Ele segura o bloco que cabe hoje.</h3>
              <p class="copy">10, 25 ou 50 minutos. A sessão existe mesmo depois do expediente. O app mostra o limite e a distração que você já nomeou.</p>
              <p class="senta-effect">Efeito. 24:18 no ecrã. A sessão está acontecendo — não combinada para amanhã.</p>
              <div class="senta-box"><p><b>Situação.</b> Chegou do trabalho. Sobram 12 minutos antes do jantar.</p><p><b>Faça.</b> Abra o app, escolha 10 minutos, copie a definição-chave.</p><p><b>Resultado.</b> O dia deixa de acabar na porta de casa. Você tem uma sessão feita.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="senta-mock"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/miniapp/sessao.webp" alt="Celular com o app em sessão: frase de entrada e timer" width="461" height="900"></figure>
          </article>
        </div></section>

        <section class="section"><div class="wrap">
          <article class="senta-app" id="miniapp-retomada">
            <div class="senta-copy">
              <p class="eyebrow">NO APP · DEIXAR A PRÓXIMA</p>
              <h3>A sessão só acaba quando amanhã já está escrito.</h3>
              <p class="copy">Encerrar não é fechar o app. É deixar a próxima entrada visível. Quebrar deixa de significar recomeçar do zero.</p>
              <p class="senta-effect">Efeito. Um bilhete sai da tela: “amanhã já tem entrada”.</p>
              <div class="senta-box"><p><b>Situação.</b> O exercício 1 está no papel. O cansaço pede para parar.</p><p><b>Faça.</b> Antes de sair, escreva no app a próxima entrada.</p><p><b>Resultado.</b> Amanhã você não recomeça do índice. Recomeça da questão 2.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="senta-mock"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/miniapp/retomada.webp" alt="Celular com o app encerrado e o bilhete da próxima entrada" width="687" height="900"></figure>
          </article>
        </div></section>

        <section class="section light" id="conteudo"><div class="wrap">
          <p class="eyebrow">POR DENTRO DO PDF</p>
          <h2>16 páginas para sair da intenção e chegar à próxima ação.</h2>
          <div class="senta-pdfs" style="margin-top:1.3rem">
            <article class="senta-pdf"><small>ABERTURA</small><h3>Protocolo SENTA</h3><p class="copy">Quatro movimentos. Uma sessão. Sem motivação como combustível.</p></article>
            <article class="senta-pdf"><small>CONCEITO</small><h3>Tarefa vaga → fuga</h3><p class="copy">O ciclo que transforma “estudar direito” em rolagem no celular.</p></article>
            <article class="senta-pdf"><small>PRÁTICA</small><h3>Cartão da sessão</h3><p class="copy">Matéria, ação, duração, distração, prova de conclusão.</p></article>
            <article class="senta-pdf"><small>TABELA</small><h3>Da ampla à iniciável</h3><p class="copy">Reduza a matéria a um movimento observável em menos de 2 minutos.</p></article>
          </div>
        </div></section>

        <section class="section"><div class="wrap">
          <p class="eyebrow">O QUE MUDA NA PRÁTICA</p>
          <h2>Resultado no começo da sessão — não um slogan de disciplina.</h2>
          <div class="senta-bens" style="margin-top:1.3rem">
            <article class="senta-ben"><h3>A matéria vira um movimento em 2 minutos</h3><p class="copy">Você troca “estudar direito” por “abrir a questão 1”.</p><p class="eyebrow">No app: 3 minutos para montar a sessão.</p></article>
            <article class="senta-ben"><h3>Uma sessão feita hoje — mesmo com 10 minutos</h3><p class="copy">O bloco cabe depois do expediente.</p><p class="eyebrow">Abra o app depois do jantar. 10 minutos.</p></article>
            <article class="senta-ben"><h3>O celular deixa de ganhar o começo</h3><p class="copy">Antes de sentar, você nomeia a distração e a resposta.</p><p class="eyebrow">Faça o exercício 1 no mesmo bloco.</p></article>
            <article class="senta-ben"><h3>Amanhã você não recomeça do zero</h3><p class="copy">Toda sessão termina com a próxima entrada escrita.</p><p class="eyebrow">O app só deixa encerrar quando o próximo passo está escrito.</p></article>
          </div>
        </div></section>

        <section class="section light" id="prova"><div class="wrap">
          <p class="eyebrow">PROVA SOCIAL</p>
          <h2>Três pessoas. Três começos. Nenhum dia perfeito.</h2>
          <p class="copy">Relatos de uso. Resultado medido em minutos sentados — não em aprovação, nota ou classificação.</p>
          <div class="senta-faces" style="margin-top:1.3rem">
            <blockquote class="senta-quote"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/faces/camila.webp" alt="Camila R."><p>“Antes: abria o PDF e fechava. Ação: questão 1, 25 minutos. Resultado: primeira sessão concluída no mesmo dia.”</p><footer>Camila R. · 27 · Fortaleza · concurso</footer></blockquote>
            <blockquote class="senta-quote"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/faces/pedro.webp" alt="Pedro M."><p>“Antes: o expediente matava o estudo. Ação: 10 minutos, uma definição. Resultado: o dia deixou de acabar na porta de casa.”</p><footer>Pedro M. · 31 · Recife · faculdade + trabalho</footer></blockquote>
            <blockquote class="senta-quote"><img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/faces/ana.webp" alt="Ana L."><p>“Antes: a matéria virava feed. Ação: exercício 1 em 10 minutos. Resultado: a primeira página deixou de ser um muro.”</p><footer>Ana L. · 28 · Belo Horizonte · ENEM</footer></blockquote>
          </div>
        </div></section>

        <section class="senta-offer" id="oferta"><div class="wrap">
          <p class="eyebrow" style="color:#E2571C">OFERTA DE LANÇAMENTO</p>
          <h2>Hoje você troca mais um dia perdido por uma sessão feita.</h2>
          <p class="copy">R$ 27,90 até 4 de setembro. Guia em PDF (16 páginas) + app Primeira Sessão. Acesso digital após o pagamento.</p>
          <p class="senta-price"><span class="senta-old">R$ 97</span> R$ 27,90</p>
          <div class="senta-stack">
            <div><span>Guia Senta e Estuda · PDF 16 páginas</span><b>incluso</b></div>
            <div><span>App Primeira Sessão · celular e computador</span><b>incluso</b></div>
            <div><span>Cartão, tabela, retomada e ciclo de 7 dias</span><b>incluso</b></div>
          </div>
          <div class="hero-actions">${cta('Quero minha primeira sessão')}</div>
          <p class="hero-note" style="color:rgba(255,255,255,.7)">7 dias para desistir, nos termos do art. 49 do CDC. Conteúdo educacional. Não promete aprovação, nota ou classificação.</p>
        </div></section>

        <section class="section" id="faq"><div class="wrap">
          <p class="eyebrow">DÚVIDAS</p>
          <h2>Perguntas que travam a compra.</h2>
          <div class="faq-list senta-faq" style="margin-top:1.2rem">
            <details><summary>O que eu recebo agora?</summary><p>O guia editorial em PDF (16 páginas) e o app Primeira Sessão. Método SENTA, exercícios, cartão da sessão, tabela de transformação, protocolos de distração e retomada, e o ciclo de sete dias.</p></details>
            <details><summary>O app já está incluso?</summary><p>Sim. O Primeira Sessão faz parte da oferta: um app simples, no celular e no computador, sem loja e sem instalação. Você define a matéria, a primeira ação e a duração, lê a frase de entrada e encerra com a próxima sessão pronta.</p></details>
            <details><summary>Como recebo o arquivo?</summary><p>A entrega é digital, após a confirmação do pagamento. O PDF chega no e-mail de acesso. O app abre na hora, no mesmo lugar da oferta.</p></details>
            <details><summary>Qual é a garantia?</summary><p>Você tem 7 dias para desistir, com base no art. 49 do CDC. Peça o reembolso pelo e-mail de suporte informando a compra.</p></details>
            <details><summary>Isso promete aprovação?</summary><p>Não. É conteúdo educacional e organizacional. Não promete aprovação, nota, classificação, foco permanente nem eliminação da procrastinação.</p></details>
            <details><summary>Serve para quem trabalha e estuda?</summary><p>Sim. O método existe justamente para sessões curtas depois do expediente.</p></details>
            <details><summary>Como falo com o suporte?</summary><p>E-mail oficial: suporte@toppapps.online. Informe o nome do produto, a URL e o dispositivo. Não envie senhas nem dados de pagamento.</p></details>
          </div>
        </div></section>

        <section class="section light"><div class="wrap" style="text-align:center;max-width:720px;margin-inline:auto">
          <p class="eyebrow">COMECE HOJE</p>
          <h2>Daqui a 10 minutos o material pode estar aberto.</h2>
          <p class="copy">No app, reduza a matéria em 2 minutos e sente 10. A condição de lançamento vai até 4 de setembro.</p>
          <div class="hero-actions" style="justify-content:center">${cta('Quero minha primeira sessão')}</div>
        </div></section>
        ${supportSection()}
      </main>${footer()}`;
    }
    function sentaAppPage() {
      document.title = 'Primeira Sessão | Senta e Estuda';
      return `${routeHeader('Primeira Sessão', 'APP')}<section class="section"><div class="wrap"><div class="center-card">
        <p class="eyebrow">ACESSO DO APP</p>
        <h1>O app abre depois da compra.</h1>
        <p>A Primeira Sessão reduz a matéria a um movimento, segura o timer e deixa a próxima entrada escrita. Para usar agora, confirme o acesso no checkout.</p>
        <div class="actions">
          <a class="button" href="https://pay.kiwify.com.br/EDp7t2z" rel="noopener">Quero o app agora</a>
          <a class="button secondary" href="/p/senta-e-estuda">Voltar à oferta</a>
        </div>
      </div></div></section>${footer()}</main>`;
    }
    function sentaThanksPage() {
      document.title = 'Acesso | Senta e Estuda';
      return `${routeHeader('Acesso liberado', 'OBRIGADO')}<section class="section"><div class="wrap"><div class="center-card">
        <p class="eyebrow">PÓS-COMPRA</p>
        <h1>A primeira sessão já pode começar.</h1>
        <p>O PDF chega no e-mail da compra. O app Primeira Sessão está incluso. Se o pagamento ainda não confirmou, aguarde o e-mail da Kiwify.</p>
        <div class="actions">
          <a class="button" href="/app/primeira-sessao">Abrir o app</a>
          <a class="button secondary" href="mailto:suporte@toppapps.online">Falar com o suporte</a>
        </div>
      </div></div></section>${footer()}</main>`;
    }
    function cronogramaSalesPage(product) {
      document.title = 'Cronograma que Funciona | Educação Toppapps';
      const pay = 'https://pay.kiwify.com.br/aMALUaX';
      const cta = (label) => `<a class="button senta-cta" href="${pay}" rel="noopener">${label}</a>`;
      const A = 'https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/cronograma';
      return `${header()}<style>
        .senta-bar{background:#1D4F91;color:#fff;text-align:center;padding:.55rem 1rem;font-size:.82rem;font-weight:650}
        .senta-cta,.senta-offer .button,.hero-actions .senta-cta{background:#E2571C!important;border-color:#E2571C!important;color:#fff!important}
        .senta-hero h1{font-size:clamp(1.75rem,4.2vw,3.15rem);line-height:1.12;margin:.45rem 0 1rem;letter-spacing:-.04em}
        .senta-grid{display:grid;gap:1.6rem}
        @media(min-width:860px){.senta-grid{grid-template-columns:1.08fr .92fr;align-items:center}}
        .senta-proof{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0 0}
        .senta-proof span{border:1px solid #d7dbe3;padding:.32rem .7rem;border-radius:999px;font-size:.75rem}
        .senta-quote{background:#fff;border:1px solid #e5e7eb;padding:1rem;border-radius:14px}
        .senta-quote img{width:44px;height:44px;border-radius:50%;object-fit:cover;float:left;margin:0 .75rem .4rem 0}
        .senta-offer{background:#0F172A;color:#fff;padding:2.4rem 0}
        .senta-offer h2,.senta-dark h2{color:#fff}
        .senta-dark{background:#0F172A;color:#fff}
        .senta-dark .copy,.senta-offer .copy{color:rgba(255,255,255,.74)}
        .senta-app{display:grid;gap:1.4rem;align-items:center}
        @media(min-width:860px){.senta-app{grid-template-columns:1fr 1fr}}
        .senta-app.reverse .senta-copy{order:2}
        .senta-mock{display:flex;justify-content:center;align-items:center;min-height:280px;background:transparent}
        .senta-mock img{max-height:420px;width:auto;max-width:100%;object-fit:contain;height:auto}
        .senta-steps{display:grid;gap:.8rem}
        @media(min-width:700px){.senta-steps{grid-template-columns:repeat(3,1fr)}}
        .senta-step{background:#fff;border:1px solid #e5e7eb;border-top:4px solid #E2571C;border-radius:12px;padding:1.1rem}
        .senta-faces{display:grid;gap:.8rem}
        @media(min-width:800px){.senta-faces{grid-template-columns:repeat(3,1fr)}}
        .senta-stack{display:grid;gap:.55rem;margin:1.1rem 0}
        .senta-stack div{display:flex;justify-content:space-between;gap:1rem;border-bottom:1px solid rgba(255,255,255,.12);padding:.55rem 0;font-size:.92rem}
        .senta-price{font-size:2.4rem;font-weight:850;letter-spacing:-.04em;margin:.4rem 0}
        .senta-old{text-decoration:line-through;opacity:.55;margin-right:.4rem}
        .senta-faq details{background:#fff}
        .senta-bar a{color:#fff;font-weight:800}
        .senta-effect{margin-top:.9rem;border:1px solid #dbe3ef;background:#f4f7fb;border-radius:10px;padding:.7rem .9rem;font-size:.88rem;font-weight:650}
      </style>
      <div class="senta-bar">Condição de lançamento até 04/09 · R$ 27,90 · 7 dias para desistir · ${cta('Quero agora')}</div>
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM ABANDONA O PLANO NA SEGUNDA SEMANA</p>
            <h1>Em 15 minutos, um plano que cabe na semana que você realmente tem.</h1>
            <div class="hero-actions">${cta('Montar meu plano possível')}<a class="button secondary" href="#app">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · carga a 80% · 7 dias para desistir</p>
            <p class="hero-lede">Pare de montar tabela no domingo e abandonar na terça. O app Plano Possível transforma suas horas reais em blocos de 50 minutos — com 20% de folga e a revisão já marcada.</p>
            <div class="senta-proof"><span>Plano possível em 15 min</span><span>R$ 27,90</span><span>PDF 14 páginas + app</span><span>Garantia 7 dias</span></div>
          </div>
          <div class="hero-visual"><img src="${A}/hero.webp" alt="Mesa com um plano semanal enxuto" width="1792" height="1008"></div>
        </div></section>

        <section class="senta-dark" id="dor"><div class="wrap senta-grid" style="padding:4rem 0">
          <img src="${A}/pain.webp" alt="Adulto diante de um cronograma cheio e abandonado" width="1100" height="700" style="width:100%;border-radius:16px;object-fit:cover;height:320px">
          <div>
            <p class="eyebrow" style="color:#E2571C">TALVEZ VOCÊ RECONHEÇA</p>
            <h2>O cronograma fica lindo no domingo. Na terça, já era.</h2>
            <p class="copy">Você distribui todas as matérias, preenche cada hora e sente que finalmente está no controle. Aí a vida cabe. Um atraso vira culpa. Culpa vira recomeço do zero.</p>
            <div style="margin-top:1.2rem;display:grid;gap:.9rem">
              <article><h3>A tabela ignora a vida real</h3><p class="copy">Deslocamento, jantar, cansaço e imprevisto não entram no grid. O plano nasce inflado.</p></article>
              <article><h3>Tempo sentado não é sessão feita</h3><p class="copy">O cronograma conta horas. Ele não registra o que foi executado.</p></article>
              <article><h3>Atraso vira plano novo</h3><p class="copy">Em vez de ajustar a semana, você apaga tudo e começa outra tabela na segunda.</p></article>
            </div>
          </div>
        </div></section>

        <section class="section"><div class="wrap">
          <p class="eyebrow">MÉTODO</p>
          <h2>Plano possível em 3 camadas</h2>
          <p class="copy">Planejar, executar e revisar. O PDF ensina. O app monta a semana em minutos — sem tabela que a vida não cabe.</p>
          <div class="senta-steps" style="margin-top:1.4rem">
            <article class="senta-step"><h3>Horas reais</h3><p>Inventário do que existe, não do que você gostaria de ter.</p></article>
            <article class="senta-step"><h3>Carga a 80%</h3><p>Se há 10 horas livres, planeje 8. Os 20% protegem o plano.</p></article>
            <article class="senta-step"><h3>Ajuste, não reset</h3><p>Marque o executado, mova o que importa, preserve a próxima sessão.</p></article>
          </div>
        </div></section>

        <section class="section light" id="app"><div class="wrap">
          <p class="eyebrow">O APP · PLANO POSSÍVEL</p>
          <h2>Três movimentos. A semana deixa de ser um grid inflado.</h2>
          <div class="senta-app" style="margin-top:2rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · INVENTÁRIO</p><h3>Em minutos, a semana deixa de ser a que você gostaria de ter.</h3><p>Você informa as horas reais e as matérias. O app devolve uma carga a 80% — não um grid inflado.</p><p class="senta-effect">A tabela cheia colapsa em blocos de 50 minutos que cabem.</p></div>
            <div class="senta-mock"><img src="${A}/miniapp/montar.webp" alt="App transformando horas reais em blocos"></div>
          </div>
          <div class="senta-app reverse" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · SEMANA</p><h3>O gerador não motiva. Ele distribui o que cabe.</h3><p>50 minutos, pausa, prioridade. Alta 3x, média 2x, baixa 1x. A revisão já entra no plano.</p><p class="senta-effect">8h planejadas de 10h livres. Carga possível à vista.</p></div>
            <div class="senta-mock"><img src="${A}/miniapp/sessao.webp" alt="Semana gerada em blocos de 50 minutos"></div>
          </div>
          <div class="senta-app" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · EXECUÇÃO</p><h3>A sexta mede o feito. Não pune o que faltou.</h3><p>Marque planejada, executada, revisada. Execução = feitas / planejadas. Reset de 10 minutos se a semana quebrar.</p><p class="senta-effect">Um bilhete sai da tela: “não recomece do zero”.</p></div>
            <div class="senta-mock"><img src="${A}/miniapp/retomada.webp" alt="Painel de execução do Plano Possível"></div>
          </div>
        </div></section>

        <section class="section"><div class="wrap">
          <p class="eyebrow">PROVA</p>
          <h2>Três rotinas. Três semanas que não recomeçaram do zero.</h2>
          <div class="senta-faces" style="margin-top:1.4rem">
            <blockquote class="senta-quote"><img src="${A}/faces/rafael.webp" alt="Rafael S."><p>“Antes: grid de 30h. Ação: 80% de 12h. Resultado: semana ajustada, não apagada.”</p><footer>Rafael S. · Concurso + trabalho · Campina Grande</footer></blockquote>
            <blockquote class="senta-quote"><img src="${A}/faces/livia.webp" alt="Lívia M."><p>“Antes: cronograma copiado. Ação: prioridade real. Resultado: semana que sobreviveu ao estágio.”</p><footer>Lívia M. · Faculdade + estágio · Curitiba</footer></blockquote>
            <blockquote class="senta-quote"><img src="${A}/faces/tiago.webp" alt="Tiago A."><p>“Antes: horas sentado. Ação: sessão visível. Resultado: execução, não tempo na cadeira.”</p><footer>Tiago A. · ENEM · Belém</footer></blockquote>
          </div>
        </div></section>

        <section class="senta-offer" id="oferta"><div class="wrap senta-grid">
          <div>
            <p class="eyebrow" style="color:#E2571C">OFERTA DE LANÇAMENTO</p>
            <h2>Hoje você troca mais uma tabela abandonada por uma semana possível.</h2>
            <p class="copy">R$ 27,90 até 4 de setembro. O acesso é digital: você abre o app e monta a semana com as horas que realmente tem.</p>
            <div class="senta-stack">
              <div><span>Guia Cronograma que Funciona</span><span>PDF · 14 páginas</span></div>
              <div><span>App Plano Possível</span><span>No celular e no computador</span></div>
              <div><span>Checklist + painel</span><span>Execução visível</span></div>
            </div>
            <p class="senta-price"><span class="senta-old">R$ 97</span> R$ 27,90</p>
            ${cta('Montar meu plano possível')}
            <p class="copy" style="margin-top:1rem">7 dias para desistir, nos termos do art. 49 do CDC. Sem promessa de aprovação.</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/assets/covers/cronograma-que-funciona.webp" alt="Capa do guia Cronograma que Funciona" style="width:100%;border-radius:16px">
          </div>
        </div></section>

        <section class="section senta-faq"><div class="wrap">
          <p class="eyebrow">FAQ</p>
          <h2>Perguntas que travam a compra.</h2>
          <div class="faq-list" style="margin-top:1.2rem">
            <details open><summary>O que eu recebo agora?</summary><p>O guia em PDF e o app Plano Possível. Inventário real, carga a 80%, distribuição, sessão visível, revisão e o plano de 7 dias.</p></details>
            <details><summary>O app já está incluso?</summary><p>Sim. O Plano Possível faz parte da oferta: um app simples, no celular e no computador, sem loja e sem instalação.</p></details>
            <details><summary>Qual é a garantia?</summary><p>Você tem 7 dias para desistir, com base no art. 49 do CDC. Peça o reembolso pelo e-mail de suporte informando a compra.</p></details>
            <details><summary>Isso promete aprovação?</summary><p>Não. É conteúdo educacional e organizacional. Não promete aprovação, nota nem classificação.</p></details>
            <details><summary>Como falo com o suporte?</summary><p>E-mail oficial: suporte@toppapps.online. Informe o nome do produto e a URL acessada.</p></details>
          </div>
        </div></section>
        <section class="section" style="text-align:center;padding-bottom:4rem">${cta('Montar meu plano possível')}</section>
      </main>${footer()}`;
    }
    function cronogramaAppPage() {
      document.title = 'Plano Possível | Cronograma que Funciona';
      const pay = 'https://pay.kiwify.com.br/aMALUaX';
      return `${header()}<main id="main-content"><section class="center-route"><div class="wrap"><div class="center-card"><p class="eyebrow">APP · PLANO POSSÍVEL</p><h1>Plano Possível</h1><p>O app monta a semana com as horas que você realmente tem. Para usar agora, confirme o acesso no checkout.</p><div class="actions"><a class="button" href="${pay}" rel="noopener">Quero o app agora</a><a class="button secondary" href="/p/cronograma-que-funciona">Voltar à oferta</a></div></div></div></section></main>${footer()}`;
    }
    function cronogramaThanksPage() {
      document.title = 'Acesso | Cronograma que Funciona';
      return `${header()}<main id="main-content"><section class="center-route"><div class="wrap"><div class="center-card"><p class="eyebrow">ACESSO LIBERADO</p><h1>Acesso liberado</h1><p>O PDF está na área de membros da Kiwify. O app Plano Possível abre nesta loja, na rota do produto.</p><div class="actions"><a class="button" href="/app/plano-possivel">Abrir o app</a><a class="button secondary" href="/p/cronograma-que-funciona">Voltar à oferta</a></div></div></div></section></main>${footer()}`;
    }

    function productPage(product) {
      const live = product.status === 'live';
      document.title = `${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(product.title, 'SOLUÇÃO INDIVIDUAL')}<section class="section"><div class="wrap detail-grid"><article class="detail-card"><span class="status ${live ? 'live' : 'planned'}">${esc(statusLabel(product.status))}</span><h2>${esc(product.subtitle)}</h2><p>${esc(product.description)}</p><h3>O que esta solução organiza</h3><ul><li>Objetivo: ${esc(product.objective)}</li><li>Tema: ${esc(product.theme)}</li><li>Formato: ${esc(product.format)}</li><li>Entrega: ${esc(product.delivery)}</li></ul></article><aside class="detail-card"><h2>${live ? money(product.price) : 'Em preparação'}</h2><div class="route-note"><strong>${live ? 'Próximo passo' : 'Estado comercial'}</strong><br>${live ? 'A página explica o escopo antes de encaminhar para qualquer confirmação de compra.' : 'Esta oferta ainda não possui CTA de compra ou preço publicado.'}</div><div class="actions">${live ? `<a class="button" href="${product.checkout || `/p/${product.slug}`}">${product.checkout ? "Quero agora" : "Conhecer a área da solução"}</a>` : `<span class="button disabled" aria-disabled="true">Compra não publicada</span>`}<a class="button secondary" href="/">Voltar ao catálogo</a></div></aside></div></section><section class="section light"><div class="wrap"><div class="section-head"><p class="eyebrow">TRANSPARÊNCIA</p><h2>A oferta separa descoberta, decisão e acesso.</h2><p class="copy">O catálogo ajuda a escolher. Esta página apresenta a solução. Condições de pagamento, garantia e acesso somente devem aparecer quando confirmadas no fluxo oficial.</p></div></div></section>${supportSection()}${footer()}</main>`;
    }
    function appPage(product) {
      const live = product.status === 'live';
      document.title = `Área de ${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(`Área de ${product.title}`, 'ÁREA DA SOLUÇÃO')}<section class="section"><div class="wrap"><div class="center-card"><p class="eyebrow">${live ? 'ACESSO DA SOLUÇÃO' : 'ROTA PLANEJADA'}</p><h1>${live ? 'Seu próximo passo fica nesta área.' : 'Esta área ainda não foi publicada.'}</h1><p>${live ? 'O acesso funcional e as instruções da oferta devem ser liberados somente após a confirmação no fluxo oficial.' : 'A rota faz parte do contrato da oferta, mas permanece indisponível enquanto bundle, suporte e QA não estiverem confirmados.'}</p><div class="actions">${live ? `<a class="button secondary" href="/obrigado/${product.slug}">Ver instruções de acesso</a>` : ''}<a class="button secondary" href="/p/${product.slug}">Voltar para a solução</a></div></div></div></section>${supportSection()}${footer()}</main>`;
    }
    function thanksPage(product) {
      const live = product.status === 'live';
      document.title = `Acesso a ${product.title} | ${CATEGORY.short}`;
      return `${routeHeader(`Acesso a ${product.title}`, 'ACESSO E PRÓXIMO PASSO')}<section class="center-route"><div class="wrap"><div class="center-card"><p class="eyebrow">${live ? 'INSTRUÇÕES DE ACESSO' : 'ROTA PLANEJADA'}</p><h1>${live ? 'As instruções aparecem após a confirmação.' : 'Esta página ainda não está publicada.'}</h1><p>${live ? 'Não há confirmação de compra nesta página. O acesso deve ser enviado pelo fluxo oficial da oferta depois que as condições forem aceitas.' : 'A página de obrigado faz parte do contrato, mas permanece planejada até a publicação completa da oferta.'}</p><div class="actions"><a class="button secondary" href="/">Voltar ao catálogo</a><a class="button ghost" href="/suporte">Acessar suporte</a></div></div></div></section>${footer()}</main>`;
    }
    function supportPage() {
      document.title = `Suporte | ${CATEGORY.short}`;
      return `${routeHeader('Ajuda para escolher, acessar e usar.', 'CENTRAL DE SUPORTE')}<section class="section"><div class="wrap detail-grid"><article class="detail-card"><h2>Antes de entrar em contato</h2><ul><li>Nome da solução e URL acessada.</li><li>Dispositivo e navegador usados.</li><li>Mensagem ou comportamento observado.</li><li>Se a confirmação de compra já aconteceu.</li></ul></article><article class="detail-card"><h2>Canal oficial</h2><p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p><p>Não envie senhas, tokens ou dados completos de cartão. O suporte orienta acesso, pagamento, download e uso conforme o estado real da oferta.</p></article></div></section>${faqSection()}${footer()}</main>`;
    }
    function notFound() {
      document.title = `Página não encontrada | ${CATEGORY.short}`;
      return `${routeHeader('Este caminho não faz parte desta loja.', '404 · ROTA NÃO ENCONTRADA')}<section class="center-route"><div class="wrap"><div class="center-card"><p>Verifique a URL ou volte para o catálogo desta categoria. Nenhuma rota de outra loja é usada como fallback.</p><div class="actions"><a class="button" href="/">Voltar ao catálogo</a><a class="button secondary" href="/suporte">Acessar suporte</a></div></div></div></section>${footer()}</main>`;
    }
    function mount() {
      let output;
      if (pathParts.length === 0) output = hub();
      else if (pathParts[0] === 'categoria' && pathParts[1] && CATEGORY.collections.some(([slug]) => slug === pathParts[1])) output = hub(pathParts[1]);
      else if (pathParts[0] === 'p' && pathParts[1] === 'senta-e-estuda' && findProduct(pathParts[1])) output = sentaSalesPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'p' && pathParts[1] === 'cronograma-que-funciona' && findProduct(pathParts[1])) output = cronogramaSalesPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'app' && (pathParts[1] === 'plano-possivel' || pathParts[1] === 'cronograma-que-funciona')) output = cronogramaAppPage();
      else if (pathParts[0] === 'obrigado' && pathParts[1] === 'cronograma-que-funciona') output = cronogramaThanksPage();
      else if (pathParts[0] === 'app' && (pathParts[1] === 'primeira-sessao' || pathParts[1] === 'senta-e-estuda')) output = sentaAppPage();
      else if (pathParts[0] === 'obrigado' && pathParts[1] === 'senta-e-estuda') output = sentaThanksPage();
      else if (pathParts[0] === 'p' && pathParts[1] && findProduct(pathParts[1])) output = productPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'app' && pathParts[1] && findProduct(pathParts[1])) output = appPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'obrigado' && pathParts[1] && findProduct(pathParts[1])) output = thanksPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'suporte') output = supportPage();
      else output = notFound();
      app.innerHTML = output;
      bindCommon();
      if (pathParts.length === 0 || pathParts[0] === 'categoria') bindHub();
    }
    function bindCommon() {
      const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.main-nav');
      menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
      document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); }));
      const headerSearch = document.getElementById('header-search');
      headerSearch?.addEventListener('keydown', (event) => { if (event.key === 'Enter' && headerSearch.value.trim()) location.href = `/?q=${encodeURIComponent(headerSearch.value.trim())}#catalogo`; });
      const datalist = document.getElementById('search-suggestions');
      if (datalist) datalist.innerHTML = CATEGORY.products.flatMap((product) => [product.title, product.objective, product.theme, ...product.tags]).map((value) => `<option value="${esc(value)}"></option>`).join('');
    }
    function bindCarousel() {
      let index = 0, timer;
      const title = document.getElementById('slide-title'), copy = document.getElementById('slide-copy'), dots = [...document.querySelectorAll('[data-slide]')];
      const render = (next) => { index = (next + CATEGORY.slides.length) % CATEGORY.slides.length; const slide = CATEGORY.slides[index]; title.textContent = slide.title; copy.textContent = slide.copy; const image = document.getElementById('hero-image'); if (image) { image.src = slide.image; image.alt = slide.alt; } dots.forEach((dot, dotIndex) => { dot.classList.toggle('active', dotIndex === index); dot.setAttribute('aria-selected', String(dotIndex === index)); }); };
      const start = () => { clearInterval(timer); timer = setInterval(() => render(index + 1), 6500); };
      document.getElementById('slide-prev')?.addEventListener('click', () => { render(index - 1); start(); });
      document.getElementById('slide-next')?.addEventListener('click', () => { render(index + 1); start(); });
      dots.forEach((dot) => dot.addEventListener('click', () => { render(Number(dot.dataset.slide)); start(); }));
      const visual = document.querySelector('.hero-visual'); visual?.addEventListener('mouseenter', () => clearInterval(timer)); visual?.addEventListener('mouseleave', start); visual?.addEventListener('focusin', () => clearInterval(timer)); visual?.addEventListener('focusout', start); start();
    }
    function syncQuery(next) { const query = new URLSearchParams(next); const queryString = query.toString(); history.replaceState(null, '', `${location.pathname}${queryString ? `?${queryString}` : ''}#catalogo`); }
    function bindHub() {
      bindCarousel();
      const grid = document.getElementById('catalog-grid'), empty = document.getElementById('empty-state'), search = document.getElementById('catalog-search'), sort = document.getElementById('sort-select'), toggle = document.getElementById('filter-toggle'), panel = document.getElementById('filter-panel'), count = document.getElementById('result-count'), filterCount = document.getElementById('filter-count'), active = document.getElementById('toolbar-filters'), panelActive = document.getElementById('active-filters');
      if (!grid || !search || !sort) return;
      const selected = { objective: new Set(), format: new Set(), status: new Set() };
      const initialCollection = pathParts[0] === 'categoria' ? pathParts[1] : params.get('collection') || '';
      const state = { q: params.get('q') || '', collection: initialCollection, sort: params.get('sort') || 'recommended' };
      search.value = state.q; sort.value = state.sort;
      if (state.collection) syncQuery({ q: state.q, collection: state.collection, sort: state.sort });
      function matches(product) {
        const text = [product.title, product.subtitle, product.description, product.objective, product.theme, product.audience, product.format, ...product.tags].join(' ').toLowerCase();
        const queryOk = !state.q || text.includes(state.q.toLowerCase());
        const collectionOk = !state.collection || product.collection === state.collection;
        const filtersOk = Object.entries(selected).every(([field, values]) => !values.size || values.has(String(product[field])));
        return queryOk && collectionOk && filtersOk;
      }
      function render() {
        const filtered = CATEGORY.products.filter(matches).sort((a,b) => { if (state.sort === 'price-asc') return (a.price ?? 999999) - (b.price ?? 999999); if (state.sort === 'price-desc') return (b.price ?? -1) - (a.price ?? -1); if (state.sort === 'title') return a.title.localeCompare(b.title,'pt-BR'); if (state.sort === 'recent') return b.priority - a.priority; return a.priority - b.priority; });
        grid.innerHTML = filtered.map(catalogCard).join(''); count.textContent = `${filtered.length} ${filtered.length === 1 ? 'solução' : 'soluções'}`; empty.classList.toggle('show', filtered.length === 0); const chips = []; if (state.collection) { const collection = CATEGORY.collections.find(([slug]) => slug === state.collection); if (collection) chips.push(['collection',state.collection,collection[1]]); } Object.entries(selected).forEach(([field, values]) => values.forEach((value) => chips.push([field,value,value]))); const chipMarkup = chips.map(([field,value,label]) => `<span class="filter-chip">${esc(label)} <button type="button" aria-label="Remover filtro ${esc(label)}" data-remove-field="${esc(field)}" data-remove-value="${esc(value)}">×</button></span>`).join(''); active.innerHTML = chipMarkup; panelActive.innerHTML = chipMarkup; filterCount.textContent = chips.length ? `(${chips.length})` : ''; document.querySelectorAll('[data-remove-field]').forEach((button) => button.addEventListener('click', () => { const field = button.dataset.removeField, value = button.dataset.removeValue; if (field === 'collection') state.collection = ''; else selected[field]?.delete(value); syncQuery({q: state.q, collection: state.collection, sort: state.sort}); render(); })); syncQuery({ q: state.q, collection: state.collection, sort: state.sort }); }
      document.querySelectorAll('[data-filter-field]').forEach((input) => input.addEventListener('change', () => { if (input.checked) selected[input.dataset.filterField].add(input.value); else selected[input.dataset.filterField].delete(input.value); render(); }));
      search.addEventListener('input', () => { state.q = search.value.trim(); render(); }); sort.addEventListener('change', () => { state.sort = sort.value; render(); }); toggle.addEventListener('click', () => { const open = panel.classList.toggle('open'); toggle.classList.toggle('active',open); toggle.setAttribute('aria-expanded',String(open)); }); document.getElementById('clear-filters')?.addEventListener('click', () => { Object.values(selected).forEach((values) => values.clear()); state.collection = ''; state.q = ''; search.value = ''; render(); }); document.getElementById('empty-clear')?.addEventListener('click', () => { Object.values(selected).forEach((values) => values.clear()); state.collection = ''; state.q = ''; search.value = ''; render(); }); render();
    }
    mount();
