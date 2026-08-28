    const CATEGORY = {"key":"educacao","short":"EDUCAÇÃO","label":"Estudos, concursos, ENEM e faculdade","host":"edu.toppapps.online","title":"Soluções para estudar com mais direção e menos improviso.","description":"Guias e ferramentas para organizar a semana, começar o estudo e revisar com critérios que cabem na rotina.","accent":"#5b4b8a","accent_soft":"#f2eff4","deep":"#1a1a22","hero_asset":"/assets/hero-educacao-1.webp","hero_alt":"Ilustração editorial de educação com caderno, relógio e cartões de revisão","slides":[{"title":"Um plano possível vence a semana perfeita.","copy":"Escolha uma solução que respeite seu tempo, suas prioridades e os imprevistos.","image":"/assets/hero-educacao-1.webp","alt":"Destaque editorial 1 de EDUCAÇÃO"},{"title":"Começar também é uma habilidade.","copy":"Reduza a fricção do primeiro bloco e transforme intenção em uma sessão real.","image":"/assets/hero-educacao-2.webp","alt":"Destaque editorial 2 de EDUCAÇÃO"},{"title":"Revisar é voltar com critério.","copy":"Organize o retorno ao conteúdo para não depender de releituras aleatórias.","image":"/assets/hero-educacao-3.webp","alt":"Destaque editorial 3 de EDUCAÇÃO"}],"collections":[["planejamento","Planejar a semana","Para transformar matérias, prazos e tempo em um plano executável."],["inicio","Começar a estudar","Para reduzir a fricção e construir o primeiro bloco de estudo."],["revisao","Revisar melhor","Para voltar ao conteúdo com intervalos e perguntas mais claras."]],"products":[{"slug":"cronograma-que-funciona","title":"Cronograma que Funciona","subtitle":"Plano de estudos possível","description":"Monte uma semana de estudos que respeita sua rotina, suas prioridades e os imprevistos do caminho.","objective":"Planejamento","theme":"Organização e produtividade","audience":"Estudantes, concurseiros e universitários","format":"Guia digital + aplicação","delivery":"Entrega digital","price":27.9,"status":"live","priority":1,"collection":"planejamento","tags":["cronograma","semana","estudos","planejamento","rotina"],"featured":true,"cover":"/assets/covers/cronograma-que-funciona.webp"},{"slug":"senta-e-estuda","title":"Senta e Estuda","subtitle":"Primeira sessão em 10 minutos","description":"Em 10 minutos você senta e começa — sem esperar vontade. Guia em PDF + app Primeira Sessão.","objective":"Começar a estudar","theme":"Início e foco","audience":"Quem adia o começo do estudo","format":"Guia digital + app","delivery":"Entrega digital","price":27.9,"status":"live","priority":2,"collection":"inicio","tags":["começar","foco","primeira sessão","estudar"],"featured":true,"cover":"/assets/covers/senta-e-estuda.webp","checkout":"https://pay.kiwify.com.br/EDp7t2z"}],"faqs":[["A solução substitui uma escola ou professor?","Não. São materiais de organização e aplicação para apoiar sua rotina de estudos."],["O cronograma funciona para qualquer pessoa?","O material oferece critérios para adaptar a semana. A execução depende do tempo, objetivo e contexto de cada pessoa."],["Como uma oferta planejada aparece?","Ela fica no catálogo com estado de preparação e sem preço ou CTA de compra até que publicação, suporte e QA estejam confirmados."]]};
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
      document.title = 'Senta e Estuda | EDUCAÇÃO';
      const pay = 'https://pay.kiwify.com.br/EDp7t2z';
      return `${header()}<style>
        .senta-bar{background:#1D4F91;color:#fff;text-align:center;padding:.55rem 1rem;font-size:.85rem}
        .senta-hero h1{font-size:clamp(1.8rem,4vw,3rem);line-height:1.15;margin:.4rem 0 1rem}
        .senta-grid{display:grid;gap:1.5rem}
        @media(min-width:860px){.senta-grid{grid-template-columns:1.1fr .9fr;align-items:center}}
        .senta-proof{display:flex;flex-wrap:wrap;gap:.6rem;margin:1rem 0}
        .senta-proof span{border:1px solid #d7dbe3;padding:.35rem .7rem;border-radius:999px;font-size:.78rem}
        .senta-quote{background:#fff;border:1px solid #e5e7eb;padding:1rem;border-radius:12px}
        .senta-offer{background:#0F172A;color:#fff;padding:2rem 0}
        .senta-offer .button{background:#E2571C;color:#fff}
      </style>
      <div class="senta-bar">Condição de lançamento até 04/09 · R$ 27,90 · 7 dias para desistir</div>
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM TRAVA NA HORA DE COMEÇAR</p>
            <h1>Em 10 minutos você senta e começa — sem esperar vontade.</h1>
            <p class="hero-lede">Se abrir o material já cansa, o app Primeira Sessão reduz a matéria a um movimento de menos de 2 minutos. Você faz o bloco que cabe hoje e termina com o próximo passo escrito.</p>
            <div class="hero-actions">
              <a class="button" href="${pay}" rel="noopener">Quero minha primeira sessão</a>
              <a class="button secondary" href="#app">Ver o app em 3 funções</a>
            </div>
            <p class="hero-note">Acesso na hora · primeira ação em 2 min · 7 dias para desistir</p>
            <div class="senta-proof"><span>Primeira sessão em 10 min</span><span>R$ 27,90</span><span>PDF 16 páginas + app</span><span>Garantia 7 dias</span></div>
          </div>
          <div class="hero-visual"><img src="/assets/covers/senta-e-estuda.webp" alt="Capa Senta e Estuda" width="900" height="520"></div>
        </div></section>
        <section class="section" id="dor"><div class="wrap">
          <p class="eyebrow">TALVEZ VOCÊ RECONHEÇA</p>
          <h2>Você sabe o que estudar. O difícil é o primeiro minuto.</h2>
          <p class="copy">A matéria está aberta. O celular vence. O dia acaba com a mesma frase: amanhã eu começo.</p>
        </div></section>
        <section class="section light" id="app"><div class="wrap">
          <p class="eyebrow">NO APP · TRÊS FUNÇÕES</p>
          <h2>Faça com o app. Atinja o resultado.</h2>
          <div class="feature-grid">
            <article class="feature-card"><div class="feature-body"><span class="eyebrow">MONTAR</span><h3>Em 2 minutos a matéria vira um movimento.</h3><p>Abra o app. Reduza o capítulo a uma ação visível. A tela mostra só o próximo passo.</p><p><b>Faça:</b> escolha o pedaço de hoje.<br><b>Atinja:</b> uma sessão que cabe, não o semestre.</p></div></article>
            <article class="feature-card"><div class="feature-body"><span class="eyebrow">SESSÃO</span><h3>10, 25 ou 50 minutos. O timer segura o bloco.</h3><p>Você senta. O relógio corre. Termina sem negociar “mais um pouco”.</p><p><b>Faça:</b> escolha o tempo e comece.<br><b>Atinja:</b> um bloco fechado hoje.</p></div></article>
            <article class="feature-card"><div class="feature-body"><span class="eyebrow">RETOMADA</span><h3>A próxima entrada já nasce escrita.</h3><p>Encerrar é deixar o amanhã com dono. Sem recomeçar do zero.</p><p><b>Faça:</b> escreva a próxima entrada.<br><b>Atinja:</b> amanhã não começa na dúvida.</p></div></article>
          </div>
          <p class="hero-note" style="margin-top:1.2rem">O acesso ao app entra depois do checkout. CTA leva para a compra, não para o app aberto.</p>
        </div></section>
        <section class="section"><div class="wrap">
          <p class="eyebrow">PROVA SOCIAL</p>
          <h2>Três começos. Três sessões feitas.</h2>
          <div class="feature-grid">
            <blockquote class="senta-quote"><p>“Antes: 40 min escolhendo PDF. Ação: 2 min no app. Resultado: 25 min de bloco no mesmo dia.”</p><footer>Carla M. · 29 · Recife · concurso + trabalho</footer></blockquote>
            <blockquote class="senta-quote"><p>“Antes: matéria aberta, zero sessão. Ação: timer de 10. Resultado: primeira página feita antes do almoço.”</p><footer>Rafael T. · 34 · Campinas · faculdade</footer></blockquote>
            <blockquote class="senta-quote"><p>“Antes: domingo inteiro ‘se organizando’. Ação: 50 min e a próxima entrada escrita. Resultado: segunda já tinha dono.”</p><footer>Lívia S. · 22 · Belém · ENEM</footer></blockquote>
          </div>
          <p class="copy">Relatos de uso. Não é garantia de aprovação, nota ou classificação.</p>
        </div></section>
        <section class="senta-offer" id="oferta"><div class="wrap">
          <p class="eyebrow">OFERTA DE LANÇAMENTO</p>
          <h2>Hoje você troca mais um dia travado pela primeira sessão.</h2>
          <p>R$ 27,90 até 4 de setembro. Guia em PDF (16 páginas) + app Primeira Sessão. Acesso digital após o pagamento.</p>
          <div class="hero-actions" style="margin-top:1rem">
            <a class="button" href="${pay}" rel="noopener">Quero minha primeira sessão</a>
          </div>
          <p class="hero-note">7 dias para desistir, nos termos do art. 49 do CDC. Conteúdo educacional.</p>
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
