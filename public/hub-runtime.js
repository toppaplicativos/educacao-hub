    const CATEGORY = {"key":"educacao","short":"EDUCAÇÃO","label":"Estudos, concursos, ENEM e faculdade","host":"edu.toppapps.online","title":"Soluções para estudar com mais direção e menos improviso.","description":"Guias e ferramentas para organizar a semana, começar o estudo e revisar com critérios que cabem na rotina.","accent":"#5b4b8a","accent_soft":"#f2eff4","deep":"#1a1a22","hero_asset":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/hero-study.webp","hero_alt":"Ilustração editorial de educação com caderno, relógio e cartões de revisão","slides":[{"title":"Um plano possível vence a semana perfeita.","copy":"Escolha uma solução que respeite seu tempo, suas prioridades e os imprevistos.","image":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/hero-study.webp","alt":"Destaque editorial 1 de EDUCAÇÃO"},{"title":"Começar também é uma habilidade.","copy":"Reduza a fricção do primeiro bloco e transforme intenção em uma sessão real.","image":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/session-ready.webp","alt":"Destaque editorial 2 de EDUCAÇÃO"},{"title":"Revisar é voltar com critério.","copy":"Organize o retorno ao conteúdo para não depender de releituras aleatórias.","image":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/pain-desk.webp","alt":"Destaque editorial 3 de EDUCAÇÃO"}],"collections":[["planejamento","Planejar a semana","Para transformar matérias, prazos e tempo em um plano executável."],["inicio","Começar a estudar","Para reduzir a fricção e construir o primeiro bloco de estudo."],["revisao","Revisar melhor","Para voltar ao conteúdo com intervalos e perguntas mais claras."]],"products":[{"slug":"nunca-mais-esqueca-tudo","title":"Nunca Mais Esqueça Tudo","subtitle":"Fila do que vence hoje","description":"Em 5 minutos, só o que vence hoje está na mesa. O semestre fica fora. Guia em PDF + app Fila de Hoje.","objective":"Revisar melhor","theme":"Fila de revisão","audience":"Quem acumula matéria e não sabe o que revisar","format":"Guia digital + app","delivery":"Entrega digital","price":27.9,"status":"live","priority":0,"collection":"revisao","tags":["esquecer","fila","revisão","cartão","manhã"],"featured":true,"cover":"https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@2862ff7b082e60218f94b15dde795712053537fd/public/product/esqueca/cover.webp","checkout":"https://pay.kiwify.com.br/csMSLPJ"},{"slug":"estude-uma-vez-revise-certo","title":"Estude Uma Vez, Revise Certo","subtitle":"Revisão que cobra, não que relê","description":"Feche o caderno — e a matéria volta sem reler o capítulo. Guia em PDF + app Próxima Revisão.","objective":"Revisar melhor","theme":"Revisão espaçada","audience":"Quem estuda e esquece na semana seguinte","format":"Guia digital + app","delivery":"Entrega digital","price":37.9,"status":"live","priority":0,"collection":"revisao","tags":["revisão","esquecer","pergunta","intervalo","1-3-7"],"featured":true,"cover":"https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@04de7fcc0793cd91af062c0a13ae811ccd818973/public/product/revisao/cover.webp","checkout":"https://pay.kiwify.com.br/jY4maqm"},{"slug":"cronograma-que-funciona","title":"Cronograma que Funciona","subtitle":"Plano de estudos possível","description":"Monte uma semana de estudos que respeita sua rotina, suas prioridades e os imprevistos do caminho.","objective":"Planejamento","theme":"Organização e produtividade","audience":"Estudantes, concurseiros e universitários","format":"Guia digital + aplicação","delivery":"Entrega digital","price":27.9,"status":"live","priority":1,"collection":"planejamento","tags":["cronograma","semana","estudos","planejamento","rotina"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/assets/covers/cronograma-que-funciona.webp","checkout":"https://pay.kiwify.com.br/aMALUaX"},{"slug":"senta-e-estuda","title":"Senta e Estuda","subtitle":"Primeira sessão em 10 minutos","description":"Em 10 minutos você senta e começa — sem esperar vontade. Guia em PDF + app Primeira Sessão.","objective":"Começar a estudar","theme":"Início e foco","audience":"Quem adia o começo do estudo","format":"Guia digital + app","delivery":"Entrega digital","price":27.9,"status":"live","priority":2,"collection":"inicio","tags":["começar","foco","primeira sessão","estudar"],"featured":true,"cover":"https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/product/cover-navy.webp","checkout":"https://pay.kiwify.com.br/EDp7t2z"}],"faqs":[["A solução substitui uma escola ou professor?","Não. São materiais de organização e aplicação para apoiar sua rotina de estudos."],["O cronograma funciona para qualquer pessoa?","O material oferece critérios para adaptar a semana. A execução depende do tempo, objetivo e contexto de cada pessoa."],["Como uma oferta planejada aparece?","Ela fica no catálogo com estado de preparação e sem preço ou CTA de compra até que publicação, suporte e QA estejam confirmados."]]};
    const SUPPORT_EMAIL = 'suporte@toppapps.online';
    const HUB_ASSETS = 'https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@2fe1b01479d48d4ebc805822d4c857780aa8d64b/public/product';
    let pathParts = [];
    let params = new URLSearchParams();
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


    function salesCss() {
      return `
        .has-offer-bar .site-header{top:52px;z-index:70}
        .offer-bar{position:sticky;top:0;z-index:80;background:#B91C1C;color:#fff;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.55rem 1rem;padding:.7rem 1rem;font-weight:700;font-size:.9rem;box-shadow:0 6px 18px rgba(185,28,28,.4)}
        .offer-bar-kicker{letter-spacing:.14em;font-size:.7rem}
        .offer-bar-clock{font-variant-numeric:tabular-nums;letter-spacing:.08em;background:rgba(0,0,0,.28);padding:.18rem .55rem;border-radius:6px;font-size:1.08rem}
        .offer-bar a{color:#fff!important;background:#0F172A!important;border-color:#0F172A!important}
        .offer-visit{margin:.55rem 0 0;font-weight:700;color:#FCA5A5;display:flex;align-items:center;gap:.45rem}
        .offer-visit .offer-bar-clock{background:#B91C1C;color:#fff}
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
        .senta-upsell{display:grid;gap:.9rem}
        @media(min-width:800px){.senta-upsell{grid-template-columns:repeat(2,1fr)}}
        .senta-up{border:1px solid #e5e7eb;border-radius:14px;padding:1.1rem;background:#fff;display:flex;flex-direction:column;gap:.65rem}
        .senta-up img{width:100%;height:140px;object-fit:cover;border-radius:10px}
        .senta-up .senta-price{font-size:1.45rem;margin:0}
        .hero-actions .button.secondary[href*="pay.kiwify"]{border-color:#E2571C;color:#E2571C;font-weight:800}
      `;
    }

    function upsellSection(currentSlug) {
      const others = CATEGORY.products.filter((p) => p.slug !== currentSlug && p.status === 'live' && p.checkout);
      if (!others.length) return '';
      const frame = {
        'senta-e-estuda': {
          kicker: 'JUNTO COM A SESSÃO',
          title: 'Uma sessão hoje não segura a terça.',
          body: 'Você começa agora. Se a semana não couber nas horas reais, terça apaga o que segunda fez. Em 15 minutos o Cronograma que Funciona monta a semana: 80% da carga, blocos de 50 minutos, ajuste na sexta.',
        },
        'cronograma-que-funciona': {
          kicker: 'JUNTO COM O PLANO',
          title: 'A semana montada não senta por você.',
          body: 'O plano cabe nas horas. O primeiro minuto ainda trava. Em 10 minutos o Senta e Estuda coloca a questão 1 no papel — e amanhã já tem a próxima entrada escrita.',
        },
        'nunca-mais-esqueca-tudo': {
          kicker: 'JUNTO COM A FILA',
          title: 'Lembrar pede um começo hoje e uma semana que não recomeça.',
          body: 'A matéria antiga só volta se houver sessão e plano. Em 10 minutos a questão 1 está no papel. Em 15 a semana cabe nas horas reais.',
        },
        'estude-uma-vez-revise-certo': {
          kicker: 'JUNTO COM A REVISÃO',
          title: 'Revisar não cria a sessão nem a semana.',
          body: 'A revisão só rende se existe um bloco hoje e uma semana que sobrevive à terça. Em 10 minutos você senta. Em 15 a semana cabe nas horas que existem.',
        },
      }[currentSlug] || {
        kicker: 'TAMBÉM HOJE',
        title: 'O outro ponto da rotina, resolvido no mesmo dia.',
        body: 'Começar, fazer a semana caber, revisar com critério. Cada solução entrega um resultado concreto — agora.',
      };
      const card = {
        'senta-e-estuda': {
          kicker: 'PARA QUEM TRAVA NA HORA DE COMEÇAR',
          title: 'Em 10 minutos a questão 1 está no papel — e amanhã já tem entrada.',
          body: 'O app Primeira Sessão reduz a matéria a um movimento de 2 minutos. Você faz o bloco que cabe hoje e termina com o próximo passo escrito.',
          cta: 'Quero a primeira sessão',
        },
        'cronograma-que-funciona': {
          kicker: 'PARA QUEM ABANDONA O PLANO NA SEGUNDA SEMANA',
          title: 'Em 15 minutos a semana cabe nas horas que existem — e a terça não a apaga.',
          body: 'O app Plano Possível transforma suas horas reais em blocos de 50 minutos — com 20% de folga e a revisão já marcada.',
          cta: 'Montar meu plano possível',
        },
        'nunca-mais-esqueca-tudo': {
          kicker: 'PARA QUEM ACUMULA MATÉRIA E NÃO SABE O QUE REVISAR',
          title: 'Em 5 minutos, só o que vence hoje está na mesa. O semestre fica fora.',
          body: 'O app Fila de Hoje separa o vencido, cobra em dois botões e recoloca no calendário. Sem prometer memória permanente.',
          cta: 'Quero a fila de hoje',
        },
        'estude-uma-vez-revise-certo': {
          kicker: 'PARA QUEM ESTUDA E ESQUECE NA SEMANA SEGUINTE',
          title: 'Feche o caderno — e a matéria volta sem reler o capítulo.',
          body: 'O app Próxima Revisão pega o estudo de hoje, vira uma pergunta e marca o retorno em 1, 3 ou 7 dias. Você testa sem olhar.',
          cta: 'Quero revisar certo',
        },
      };
      return `<section class="section light" id="upsell"><div class="wrap">
        <p class="eyebrow">${esc(frame.kicker)}</p>
        <h2>${esc(frame.title)}</h2>
        <p class="copy">${esc(frame.body)}</p>
        <div class="senta-upsell" style="margin-top:1.4rem">${others.map((p) => {
          const pitch = card[p.slug] || { kicker: p.subtitle, title: p.title, body: p.description, cta: 'Quero agora' };
          return `<article class="senta-up"><img src="${esc(p.cover)}" alt="Capa de ${esc(p.title)}"><p class="eyebrow">${esc(pitch.kicker)}</p><h3>${esc(pitch.title)}</h3><p class="copy">${esc(pitch.body)}</p><p class="senta-price">${esc(p.title)} · ${money(p.price)}</p><a class="button senta-cta" href="${esc(p.checkout)}" rel="noopener">${esc(pitch.cta)}</a></article>`;
        }).join('')}</div>
      </div></section>`;
    }

    function sentaSalesPage(product) {
      document.title = 'Senta e Estuda | Educação Toppapps';
      const pay = 'https://pay.kiwify.com.br/EDp7t2z';
      const cta = (label) => `<a class="button senta-cta" href="${pay}" rel="noopener">${label}</a>`;
      return `<style>${salesCss()}</style>
      <div class="offer-bar" data-offer-timer data-offer-slug="senta-e-estuda"><span class="offer-bar-kicker">OFERTA IMPERDÍVEL</span><span>Por tempo limitado</span><span>De R$ 97 por R$ 27,90</span><span>Termina em <span class="offer-bar-clock" data-clock>20:00</span></span>${cta('Quero agora')}</div>
      ${header()}
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM TRAVA NA HORA DE COMEÇAR</p>
            <h1>Em 10 minutos a questão 1 está no papel — e amanhã já tem entrada.</h1>
            <div class="hero-actions">${cta('Quero minha primeira sessão')}<a class="button secondary" href="${pay}" rel="noopener">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · primeira ação em 2 min · 7 dias para desistir</p>
            <p class="hero-lede">Se abrir o material já cansa, o app Primeira Sessão reduz a matéria a um movimento de menos de 2 minutos. Você faz o bloco que cabe hoje e termina com o próximo passo escrito — para amanhã não recomeçar do zero.</p>
            <div class="senta-proof"><span>Sessão feita em 10 min</span><span>R$ 27,90</span><span>PDF 16 páginas + app</span><span>Garantia 7 dias</span></div>
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
          <h2>Da matéria larga à sessão feita: 2 minutos para reduzir, 10 para sentar.</h2>
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
          <h2>SENTA reduz a matéria à sessão feita — em 10 minutos.</h2>
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
          <h2>Três funções: reduzir, sentar, deixar a próxima escrita.</h2>
          <article class="senta-app" id="miniapp-montar" style="margin-top:1.6rem">
            <div class="senta-copy">
              <p class="eyebrow">NO APP · REDUZIR</p>
              <h3>Em 2 minutos a matéria larga vira uma ação.</h3>
              <p class="copy">Você abre o Primeira Sessão, escreve a matéria e o primeiro movimento. O app devolve uma frase de entrada — não um plano do dia.</p>
              <p class="senta-effect">Efeito. “Estudar direito” colapsa em “questão 1”.</p>
              <div class="senta-box"><p><b>Situação.</b> Você está no ônibus, a 8 minutos de casa.</p><p><b>Faça.</b> Abra o app. Escreva a matéria e a primeira ação.</p><p><b>Resultado.</b> Ao sentar, a questão 1 já está escolhida. Sem reabrir o índice.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div>
            </div>
            <figure class="senta-mock"><img src="${HUB_ASSETS}/miniapp/montar.webp" alt="Celular com o app reduzindo a matéria à questão 1" width="424" height="900"></figure>
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
            <figure class="senta-mock"><img src="${HUB_ASSETS}/miniapp/sessao.webp" alt="Celular com o app em sessão: frase de entrada e timer" width="461" height="900"></figure>
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
            <figure class="senta-mock"><img src="${HUB_ASSETS}/miniapp/retomada.webp" alt="Celular com o app encerrado e o bilhete da próxima entrada" width="687" height="900"></figure>
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
          <h2>Matéria vira ação em 2 minutos. A sessão existe em 10.</h2>
          <div class="senta-bens" style="margin-top:1.3rem">
            <article class="senta-ben"><h3>A matéria vira um movimento em 2 minutos</h3><p class="copy">Você troca “estudar direito” por “abrir a questão 1”.</p><p class="eyebrow">No app: 3 minutos para montar a sessão.</p></article>
            <article class="senta-ben"><h3>Uma sessão feita hoje — mesmo com 10 minutos</h3><p class="copy">O bloco cabe depois do expediente.</p><p class="eyebrow">Abra o app depois do jantar. 10 minutos.</p></article>
            <article class="senta-ben"><h3>O celular deixa de ganhar o começo</h3><p class="copy">Antes de sentar, você nomeia a distração e a resposta.</p><p class="eyebrow">Faça o exercício 1 no mesmo bloco.</p></article>
            <article class="senta-ben"><h3>Amanhã você não recomeça do zero</h3><p class="copy">Toda sessão termina com a próxima entrada escrita.</p><p class="eyebrow">O app só deixa encerrar quando o próximo passo está escrito.</p></article>
          </div>
        </div></section>


        <section class="section" id="antes"><div class="wrap senta-grid">
          <article class="senta-ben" style="background:#0F172A;color:#fff"><p class="eyebrow" style="color:#E2571C">ANTES</p><h3>Tarefa vaga. Celular na mesa. Dia perdido.</h3><p class="copy">“Estudar direito” sem primeiro movimento. Duração inexistente. Quebra vira culpa, não retomada.</p></article>
          <article class="senta-ben"><p class="eyebrow">DEPOIS</p><h3>Ação visível. Tempo que cabe. Próxima entrada escrita.</h3><p class="copy">Questão 1, definição, ou página aberta. 10, 25 ou 50 minutos. Se quebrar, reentra por 10 minutos.</p></article>
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


        <section class="section light" id="publico"><div class="wrap senta-grid">
          <div><p class="eyebrow">PARA QUEM É</p><h2>Se o material fecha na primeira página, a sessão sai hoje.</h2><p class="copy">Quem abre o material e fecha. Quem trabalha e estuda. Quem já tentou cronograma rígido e desistiu no primeiro atraso.</p></div>
          <div><p class="eyebrow">PARA QUEM NÃO É</p><h2>Não é curso, não promete aprovação, não substitui professor.</h2><p class="copy">Não promete aprovação, nota ou classificação. Não é curso de conteúdo. Não substitui professor.</p></div>
        </div></section>

        <section class="senta-offer" id="oferta"><div class="wrap">
          <p class="eyebrow" style="color:#E2571C">OFERTA IMPERDÍVEL</p>
          <h2>Hoje a primeira sessão sai. O próximo passo já fica escrito.</h2>
          <p class="copy">R$ 27,90 por tempo limitado. Guia em PDF (16 páginas) + app Primeira Sessão. Acesso digital após o pagamento.</p>
          <p class="senta-price"><span class="senta-old">R$ 97</span> R$ 27,90</p>
          <p class="offer-visit">Por tempo limitado · <span class="offer-bar-clock" data-clock>20:00</span></p>
          <div class="senta-stack">
            <div><span>Guia Senta e Estuda · PDF 16 páginas</span><b>incluso</b></div>
            <div><span>App Primeira Sessão · celular e computador</span><b>incluso</b></div>
            <div><span>Cartão, tabela, retomada e ciclo de 7 dias</span><b>incluso</b></div>
          </div>
          <div class="hero-actions">${cta('Quero minha primeira sessão')}</div>
          <p class="hero-note" style="color:rgba(255,255,255,.7)">7 dias para desistir, nos termos do art. 49 do CDC. Conteúdo educacional. Não promete aprovação, nota ou classificação.</p>
        </div></section>


        <section class="section" id="garantia"><div class="wrap" style="max-width:720px">
          <p class="eyebrow">GARANTIA</p>
          <h2>7 dias para desistir. O risco fica com a gente.</h2>
          <p class="copy">Art. 49 do CDC. Se o material não servir, peça o reembolso pelo e-mail de suporte informando a compra.</p>
        </div></section>
        ${upsellSection('senta-e-estuda')}
        <section class="section" id="faq"><div class="wrap">
          <p class="eyebrow">DÚVIDAS</p>
          <h2>O que você recebe, o app incluso e a garantia de 7 dias.</h2>
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
          <p class="copy">No app, reduza a matéria em 2 minutos e sente 10. A oferta imperdível termina no cronômetro vermelho.</p>
          <div class="hero-actions" style="justify-content:center">${cta('Quero minha primeira sessão')}</div>
        </div></section>
        ${supportSection()}
      </main>${footer()}`;
    }
    const PDF_BASE = 'https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@e838a03493b19d0c73714c55215a4e1c3504cfa9/public/guides';
    function deliveryThanks(opts) {
      document.title = opts.title;
      return `${header()}<main id="main-content"><section class="section"><div class="wrap" style="max-width:720px">
        <p class="eyebrow">ACESSO LIBERADO</p>
        <h1>${opts.h1}</h1>
        <p class="copy" style="font-size:1.08rem">${opts.lead}</p>
        <div class="senta-box" style="margin-top:1.4rem">
          <p><b>O que fazer agora</b></p>
          <ol style="margin:.6rem 0 0;padding-left:1.15rem;line-height:1.7">
            <li>Abra o app — funciona neste celular e neste computador, sem loja.</li>
            <li>Baixe o PDF do guia (também chega no e-mail da compra, na área de membros da Kiwify).</li>
            <li>${opts.step3}</li>
          </ol>
        </div>
        <div class="actions" style="margin-top:1.4rem;display:flex;flex-wrap:wrap;gap:.7rem">
          <a class="button senta-cta" href="${opts.appHref}">${opts.appLabel}</a>
          <a class="button secondary" href="${opts.pdfHref}" download>${opts.pdfLabel}</a>
        </div>
        <p class="copy" style="margin-top:1.1rem">Se o e-mail da Kiwify demorar, use o botão de baixar o PDF nesta página. Dúvida: <a href="mailto:suporte@toppapps.online">suporte@toppapps.online</a>.</p>
      </div></section></main>${footer()}`;
    }
    function appShell(opts) {
      document.title = opts.title;
      return `${header()}<main id="main-content"><section class="section"><div class="wrap" style="max-width:640px">
        <p class="eyebrow">APP · ${opts.kicker}</p>
        <h1>${opts.h1}</h1>
        <p class="copy">${opts.lede}</p>
        <div id="delivery-app" data-app="${opts.id}" style="margin-top:1.4rem;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;background:#fff"></div>
        <div class="actions" style="margin-top:1.2rem;display:flex;flex-wrap:wrap;gap:.7rem">
          <a class="button secondary" href="${opts.pdfHref}" download>Baixar o PDF</a>
          <a class="button ghost" href="/suporte">Suporte</a>
        </div>
      </div></section></main>${footer()}`;
    }
    function sentaAppPage() {
      return appShell({ title:'Primeira Sessão | Senta e Estuda', kicker:'PRIMEIRA SESSÃO', h1:'Primeira Sessão', lede:'Reduza a matéria a uma ação. Escolha o tempo. Termine com a próxima entrada escrita.', id:'senta', pdfHref: PDF_BASE + '/senta-e-estuda-ebook-v1.1.pdf' });
    }
    function sentaThanksPage() {
      return deliveryThanks({ title:'Acesso | Senta e Estuda', h1:'A primeira sessão já pode começar.', lead:'O PDF e o app Primeira Sessão estão inclusos. Abra o app agora. Baixe o guia se quiser ler no celular.', step3:'Faça a questão 1. Escreva a próxima entrada.', appHref:'/app/primeira-sessao', appLabel:'Abrir o app Primeira Sessão', pdfHref: PDF_BASE + '/senta-e-estuda-ebook-v1.1.pdf', pdfLabel:'Baixar o PDF (16 páginas)' });
    }
    function cronogramaSalesPage(product) {
      document.title = 'Cronograma que Funciona | Educação Toppapps';
      const pay = 'https://pay.kiwify.com.br/aMALUaX';
      const cta = (label) => `<a class="button senta-cta" href="${pay}" rel="noopener">${label}</a>`;
      const A = HUB_ASSETS + '/cronograma';
      return `<style>${salesCss()}</style>
      <div class="offer-bar" data-offer-timer data-offer-slug="cronograma-que-funciona"><span class="offer-bar-kicker">OFERTA IMPERDÍVEL</span><span>Por tempo limitado</span><span>De R$ 97 por R$ 27,90</span><span>Termina em <span class="offer-bar-clock" data-clock>20:00</span></span>${cta('Quero agora')}</div>
      ${header()}
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM ABANDONA O PLANO NA SEGUNDA SEMANA</p>
            <h1>Em 15 minutos a semana cabe nas horas que existem — e a terça não a apaga.</h1>
            <div class="hero-actions">${cta('Montar meu plano possível')}<a class="button secondary" href="${pay}" rel="noopener">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · carga a 80% · 7 dias para desistir</p>
            <p class="hero-lede">Pare de montar tabela no domingo e abandonar na terça. O app Plano Possível transforma suas horas reais em blocos de 50 minutos — com 20% de folga e a revisão já marcada.</p>
            <div class="senta-proof"><span>Semana executável em 15 min</span><span>R$ 27,90</span><span>PDF 14 páginas + app</span><span>Garantia 7 dias</span></div>
            <blockquote class="senta-quote" style="margin-top:1.2rem;overflow:auto">
              <img src="${A}/faces/rafael.webp" alt="Rafael S." width="88" height="88">
              <p>“Antes: grid de 30h. Ação: 80% de 12h. Resultado: semana ajustada, não apagada.”</p>
              <footer>Rafael S. · Concurso + trabalho · Campina Grande</footer>
            </blockquote>
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


        <section class="section" id="virada"><div class="wrap">
          <p class="eyebrow">A VIRADA</p>
          <h2>Do grid perfeito à semana que sobrevive: 80% das horas, blocos de 50 minutos.</h2>
          <p class="copy">O problema não é falta de vontade. É obedecer a um plano que não foi construído para as horas que você realmente tem.</p>
          <p class="senta-effect">Conte as horas reais. Use 80%. Blocos de 50 minutos. Ajuste na sexta — não recomece do zero.</p>
        </div></section>

        <section class="section"><div class="wrap">
          <p class="eyebrow">MÉTODO</p>
          <h2>Horas reais, 80% de carga, ajuste na sexta — o plano sobrevive.</h2>
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
            <div class="senta-copy"><p class="eyebrow">NO APP · INVENTÁRIO</p><h3>Em minutos, a semana deixa de ser a que você gostaria de ter.</h3><p>Você informa as horas reais e as matérias. O app devolve uma carga a 80% — não um grid inflado.</p><p class="senta-effect">A tabela cheia colapsa em blocos de 50 minutos que cabem.</p>
              <div class="senta-box"><p><b>Situação.</b> Domingo à noite. Você ia preencher de novo o horário inteiro.</p><p><b>Faça.</b> Abra o app. Digite as horas que realmente existem.</p><p><b>Resultado.</b> A semana nasce no tamanho da sua vida, não no tamanho da culpa.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/montar.webp" alt="App transformando horas reais em blocos"></div>
          </div>
          <div class="senta-app reverse" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · SEMANA</p><h3>O gerador não motiva. Ele distribui o que cabe.</h3><p>50 minutos, pausa, prioridade. Alta 3x, média 2x, baixa 1x. A revisão já entra no plano.</p><p class="senta-effect">8h planejadas de 10h livres. Carga possível à vista.</p>
              <div class="senta-box"><p><b>Situação.</b> Você tem 10 horas na semana e seis matérias pedindo espaço.</p><p><b>Faça.</b> Gere a semana no app. Aceite os 80%.</p><p><b>Resultado.</b> Cada bloco já tem tarefa. Nenhuma hora nasce inventada.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/sessao.webp" alt="Semana gerada em blocos de 50 minutos"></div>
          </div>
          <div class="senta-app" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · EXECUÇÃO</p><h3>A sexta mede o feito. Não pune o que faltou.</h3><p>Marque planejada, executada, revisada. Execução = feitas / planejadas. Reset de 10 minutos se a semana quebrar.</p><p class="senta-effect">Um bilhete sai da tela: “não recomece do zero”.</p>
              <div class="senta-box"><p><b>Situação.</b> Terça o expediente estourou. Dois blocos caíram.</p><p><b>Faça.</b> Abra o painel. Marque o feito. Mova o que ainda é prioridade.</p><p><b>Resultado.</b> A próxima sessão continua visível. A tabela não vai para o lixo.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/retomada.webp" alt="Painel de execução do Plano Possível"></div>
          </div>
        </div></section>

        <section class="section light" id="conteudo"><div class="wrap">
          <p class="eyebrow">POR DENTRO DO PDF</p>
          <h2>Do inventário real ao ajuste de sexta — sem recomeçar do zero.</h2>
          <div class="senta-pdfs" style="margin-top:1.3rem">
            <article class="senta-pdf"><small>BASE</small><h3>Inventário real</h3><p class="copy">Conte as horas que existem. Desconte deslocamento, refeição, trabalho e sono.</p></article>
            <article class="senta-pdf"><small>CARGA</small><h3>Regra dos 80%</h3><p class="copy">10 horas livres viram cerca de 8 horas de sessão. Folga não é preguiça.</p></article>
            <article class="senta-pdf"><small>BLOCO</small><h3>50 minutos + tarefa visível</h3><p class="copy">Resolver 15 questões. Não “estudar matemática”.</p></article>
            <article class="senta-pdf"><small>AJUSTE</small><h3>Reset de 10 minutos</h3><p class="copy">Marque, mova, reduza. Preserve a próxima sessão possível.</p></article>
          </div>
        </div></section>
        <section class="section"><div class="wrap">
          <p class="eyebrow">O QUE MUDA NA PRÁTICA</p>
          <h2>A semana cabe. A terça não apaga. A execução aparece.</h2>
          <div class="senta-bens" style="margin-top:1.3rem">
            <article class="senta-ben"><h3>Um plano que cabe nas horas que existem</h3><p class="copy">Você conta a disponibilidade líquida e planeja 80%.</p></article>
            <article class="senta-ben"><h3>Blocos de 50 minutos com tarefa visível</h3><p class="copy">Cada sessão diz o que fazer. Não “estudar direito”.</p></article>
            <article class="senta-ben"><h3>Revisão já marcada</h3><p class="copy">24 horas e a semana seguinte entram no plano quando a sessão termina.</p></article>
            <article class="senta-ben"><h3>A terça não apaga o domingo</h3><p class="copy">Reset de 10 minutos: marque o feito, mova o que importa.</p></article>
          </div>
        </div></section>

        <section class="section" id="antes"><div class="wrap senta-grid">
          <article class="senta-ben" style="background:#0F172A;color:#fff"><p class="eyebrow" style="color:#E2571C">ANTES</p><h3>Grid lotado. Nenhuma sessão marcada como feita. Recomeço na segunda.</h3><p class="copy">Todas as matérias, todos os dias. Metas de horas para compensar atraso. Um imprevisto apaga a semana.</p></article>
          <article class="senta-ben"><p class="eyebrow">DEPOIS</p><h3>Horas reais. 80% de carga. Execução visível.</h3><p class="copy">Blocos de 50 minutos com tarefa visível. Revisão de 24h já no plano. Sexta: ajustar. Não apagar.</p></article>
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

        <section class="section light"><div class="wrap senta-grid">
          <div><p class="eyebrow">PARA QUEM É</p><h2>Se o plano morre na segunda, aqui ele sobrevive à terça.</h2><p class="copy">Quem monta cronograma no domingo e abandona. Quem tem 5 a 20 horas reais. Quem já copiou tabela pronta.</p></div>
          <div><p class="eyebrow">PARA QUEM NÃO É</p><h2>Não é curso, não promete aprovação, não substitui professor.</h2><p class="copy">Não promete aprovação, nota ou classificação. Não é cronograma genérico para copiar. Não substitui professor.</p></div>
        </div></section>
        <section class="senta-offer" id="oferta"><div class="wrap senta-grid">
          <div>
            <p class="eyebrow" style="color:#E2571C">OFERTA IMPERDÍVEL</p>
            <h2>Hoje o grid abandonado vira uma semana que se executa.</h2>
            <p class="copy">R$ 27,90 por tempo limitado. O acesso é digital: você abre o app e monta a semana com as horas que realmente tem.</p>
            <div class="senta-stack">
              <div><span>Guia Cronograma que Funciona</span><span>PDF · 14 páginas</span></div>
              <div><span>App Plano Possível</span><span>No celular e no computador</span></div>
              <div><span>Checklist + painel</span><span>Execução visível</span></div>
            </div>
            <p class="senta-price"><span class="senta-old">R$ 97</span> R$ 27,90</p>
            <p class="offer-visit">Por tempo limitado · <span class="offer-bar-clock" data-clock>20:00</span></p>
            ${cta('Montar meu plano possível')}
            <p class="copy" style="margin-top:1rem">7 dias para desistir, nos termos do art. 49 do CDC. Sem promessa de aprovação.</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/toppaplicativos/educacao-hub/main/public/assets/covers/cronograma-que-funciona.webp" alt="Capa do guia Cronograma que Funciona" style="width:100%;border-radius:16px">
          </div>
        </div></section>


        <section class="section"><div class="wrap" style="max-width:720px">
          <p class="eyebrow">GARANTIA</p>
          <h2>7 dias para desistir. O risco fica com a gente.</h2>
          <p class="copy">Art. 49 do CDC. Se o material não servir, peça o reembolso pelo e-mail de suporte informando a compra.</p>
        </div></section>
        ${upsellSection('cronograma-que-funciona')}
        <section class="section senta-faq"><div class="wrap">
          <p class="eyebrow">FAQ</p>
          <h2>O que você recebe, o app incluso e a garantia de 7 dias.</h2>
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
      return appShell({ title:'Plano Possível | Cronograma que Funciona', kicker:'PLANO POSSÍVEL', h1:'Plano Possível', lede:'Informe as horas reais. Receba uma semana a 80%, em blocos de 50 minutos.', id:'cronograma', pdfHref: PDF_BASE + '/cronograma-que-funciona-ebook-v1.2.pdf' });
    }
    function cronogramaThanksPage() {
      return deliveryThanks({ title:'Acesso | Cronograma que Funciona', h1:'A semana já pode caber nas horas que existem.', lead:'O PDF e o app Plano Possível estão inclusos. Abra o app agora e monte a semana com as horas reais.', step3:'Monte a semana a 80%. Blocos de 50 minutos.', appHref:'/app/plano-possivel', appLabel:'Abrir o app Plano Possível', pdfHref: PDF_BASE + '/cronograma-que-funciona-ebook-v1.2.pdf', pdfLabel:'Baixar o PDF (14 páginas)' });
    }
    function revisaoSalesPage(product) {
      document.title = 'Estude Uma Vez, Revise Certo | Educação Toppapps';
      const pay = 'https://pay.kiwify.com.br/jY4maqm';
      const cta = (label) => `<a class="button senta-cta" href="${pay}" rel="noopener">${label}</a>`;
      const A = 'https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@04de7fcc0793cd91af062c0a13ae811ccd818973/public/product/revisao';
      return `<style>${salesCss()}</style>
      <div class="offer-bar" data-offer-timer data-offer-slug="estude-uma-vez-revise-certo"><span class="offer-bar-kicker">OFERTA IMPERDÍVEL</span><span>Por tempo limitado</span><span>De R$ 127 por R$ 37,90</span><span>Termina em <span class="offer-bar-clock" data-clock>20:00</span></span>${cta('Quero agora')}</div>
      ${header()}
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM ESTUDA E ESQUECE NA SEMANA SEGUINTE</p>
            <h1>Feche o caderno — e a matéria volta sem reler o capítulo.</h1>
            <div class="hero-actions">${cta('Quero revisar certo')}<a class="button secondary" href="${pay}" rel="noopener">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · caderno fechado em 3 min · 7 dias para desistir</p>
            <p class="hero-lede">O app Próxima Revisão pega o estudo de hoje, vira uma pergunta e marca o retorno em 1, 3 ou 7 dias. Você testa sem olhar. O caderno continua fechado.</p>
            <div class="senta-proof"><span>Pergunta em 3 min</span><span>R$ 37,90</span><span>PDF 14 páginas + app</span><span>Garantia 7 dias</span></div>
            <blockquote class="senta-quote" style="margin-top:1.2rem;overflow:auto">
              <img src="${A}/faces/marcos.webp" alt="Marcos T." width="88" height="88">
              <p>“Antes: reler o capítulo. Ação: uma pergunta. Resultado: a matéria voltou na quinta.”</p>
              <footer>Marcos T. · Concurso · João Pessoa</footer>
            </blockquote>
          </div>
          <div class="hero-visual"><img src="${A}/hero.webp" alt="Caderno fechado com um cartão de pergunta e a data de volta em 3 dias" width="1600" height="1200"></div>
        </div></section>

        <section class="senta-dark" id="dor"><div class="wrap senta-grid" style="padding:4rem 0">
          <img src="${A}/pain.webp" alt="Livros abertos cobertos de marca-texto — releitura que não gruda" width="1600" height="1200" style="width:100%;border-radius:16px;object-fit:cover;height:320px">
          <div>
            <p class="eyebrow" style="color:#E2571C">TALVEZ VOCÊ RECONHEÇA</p>
            <h2>Você estuda. Na semana seguinte, a matéria some.</h2>
            <p class="copy">Reler parece trabalho. Grifar parece domínio. Na hora da questão, o branco. Isso não é falta de inteligência. É revisão que não cobra nada de você.</p>
            <div style="margin-top:1.2rem;display:grid;gap:.9rem">
              <article><h3>Reler não é revisar</h3><p class="copy">Passar os olhos no caderno gera familiaridade, não recuperação.</p></article>
              <article><h3>O buraco aparece na prova</h3><p class="copy">Você só descobre o que não sabe quando a questão cobra.</p></article>
              <article><h3>O volume vira desculpa</h3><p class="copy">Sem data de retorno, a matéria de ontem perde a vez para a de hoje.</p></article>
            </div>
          </div>
        </div></section>

        <section class="section" id="virada"><div class="wrap">
          <p class="eyebrow">A VIRADA</p>
          <h2>Em 3 minutos o “eu já vi” vira uma pergunta que você puxa sem olhar.</h2>
          <p class="copy">O problema não é estudar pouco. É estudar uma vez e nunca testar. Revisão certa é pergunta + intervalo + correção — não mais uma leitura.</p>
          <p class="senta-effect">Feche o caderno. Responda. Marque 1, 3 ou 7 dias. O erro vira a próxima pergunta.</p>
        </div></section>

        <section class="section"><div class="wrap">
          <p class="eyebrow">MÉTODO</p>
          <h2>Pergunta, sem olhar, intervalo: a matéria volta antes de evaporar.</h2>
          <p class="copy">Três movimentos. O PDF ensina por que a releitura engana. O app cobra a matéria hoje e marca a próxima prova dela.</p>
          <div class="senta-steps" style="margin-top:1.4rem">
            <article class="senta-step"><h3>Pergunta</h3><p>O estudo de hoje vira uma questão que você mesmo formula.</p></article>
            <article class="senta-step"><h3>Sem olhar</h3><p>Você tenta recuperar. Familiaridade não conta.</p></article>
            <article class="senta-step"><h3>Intervalo</h3><p>1, 3 ou 7 dias. A matéria volta antes de evaporar.</p></article>
          </div>
        </div></section>

        <section class="section light" id="app"><div class="wrap">
          <p class="eyebrow">O APP · PRÓXIMA REVISÃO</p>
          <h2>Três movimentos. O caderno fecha. A matéria não.</h2>
          <div class="senta-app" style="margin-top:2rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · CAPTURAR</p><h3>Em 3 minutos o estudo de hoje vira uma pergunta.</h3><p>Você escreve a matéria e o que estudou. O app devolve uma cobrança — não um resumo.</p><p class="senta-effect">O caderno grosso colapsa em um cartão.</p>
              <div class="senta-box"><p><b>Situação.</b> A sessão acabou. Você ia grifar de novo “só para garantir”.</p><p><b>Faça.</b> Abra o app. Escreva a matéria e o que entendeu.</p><p><b>Resultado.</b> Sai uma pergunta. O caderno pode fechar.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/montar.webp" alt="Celular com o app gerando uma pergunta a partir do estudo de hoje"></div>
          </div>
          <div class="senta-app reverse" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · TESTAR</p><h3>Em 2 minutos você descobre o buraco — ainda dá tempo de corrigir.</h3><p>Responda sem olhar. Familiaridade não conta. O branco sai barato.</p><p class="senta-effect">A pergunta está na tela. O caderno, fechado.</p>
              <div class="senta-box"><p><b>Situação.</b> Você acha que sabe controle de constitucionalidade.</p><p><b>Faça.</b> Feche o material. Responda no app.</p><p><b>Resultado.</b> Se vier, marca 7 dias. Se falhar, marca amanhã. Sem drama.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/sessao.webp" alt="Celular com o cartão de pergunta e o botão responder sem olhar"></div>
          </div>
          <div class="senta-app" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · AGENDAR</p><h3>Em um toque a matéria volta em 1, 3 ou 7 dias — o caderno continua fechado.</h3><p>1, 3 ou 7 dias. Encerrar não é fechar o app. É deixar o retorno visível.</p><p class="senta-effect">Um bilhete sai da tela: “próxima prova da matéria”.</p>
              <div class="senta-box"><p><b>Situação.</b> Você acertou pela metade. Não quer reler o capítulo.</p><p><b>Faça.</b> Escolha 3 dias. Saia da sessão.</p><p><b>Resultado.</b> Quinta a pergunta volta. O caderno continua fechado.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/retomada.webp" alt="Celular com os intervalos 1, 3 e 7 dias e o recado da próxima revisão"></div>
          </div>
        </div></section>

        <section class="section light" id="conteudo"><div class="wrap">
          <p class="eyebrow">POR DENTRO DO PDF</p>
          <h2>Do estudo de hoje à próxima prova da matéria — sem reler o caderno inteiro.</h2>
          <div class="senta-pdfs" style="margin-top:1.3rem">
            <article class="senta-pdf"><small>DIAGNÓSTICO</small><h3>Por que você esquece</h3><p class="copy">Familiaridade não é memória. Reler treina reconhecimento, não recuperação.</p></article>
            <article class="senta-pdf"><small>MÉTODO</small><h3>Pergunta antes da página</h3><p class="copy">Toda sessão termina com uma questão que você mesmo formula.</p></article>
            <article class="senta-pdf"><small>INTERVALO</small><h3>1, 3 e 7 dias</h3><p class="copy">A matéria volta num ponto em que ainda dá para salvar — não depois da prova.</p></article>
            <article class="senta-pdf"><small>ERRO</small><h3>O buraco vira cartão</h3><p class="copy">O que você errou hoje é a pergunta de amanhã. Não o capítulo inteiro.</p></article>
          </div>
        </div></section>
        <section class="section"><div class="wrap">
          <p class="eyebrow">O QUE MUDA NA PRÁTICA</p>
          <h2>O estudo de hoje vira pergunta. O retorno já tem data.</h2>
          <div class="senta-bens" style="margin-top:1.3rem">
            <article class="senta-ben"><h3>O estudo de hoje vira uma pergunta em 3 minutos</h3><p class="copy">Você encerra a sessão formulando a cobrança. O caderno fecha. A matéria não.</p></article>
            <article class="senta-ben"><h3>Você descobre o buraco agora, não na prova</h3><p class="copy">Responder sem olhar é o teste barato. O branco deixa de ser surpresa.</p></article>
            <article class="senta-ben"><h3>A matéria volta em 1, 3 ou 7 dias</h3><p class="copy">Intervalo simples, escolhido no acerto. Sem app de flashcard complicado.</p></article>
            <article class="senta-ben"><h3>O erro vira a próxima cobrança</h3><p class="copy">O que falhou não some no resumo. Volta amanhã, em uma pergunta só.</p></article>
          </div>
        </div></section>

        <section class="section" id="antes"><div class="wrap senta-grid">
          <article class="senta-ben" style="background:#0F172A;color:#fff"><p class="eyebrow" style="color:#E2571C">ANTES</p><h3>Caderno grifado. Zero pergunta. Branco na questão.</h3><p class="copy">Reler o capítulo “só para garantir”. Nenhuma data de retorno. O erro some no meio do resumo.</p></article>
          <article class="senta-ben"><p class="eyebrow">DEPOIS</p><h3>Uma pergunta. Sem olhar. Próxima data escrita.</h3><p class="copy">O estudo de hoje vira um cartão. Intervalo de 1, 3 ou 7 dias. O erro entra na próxima cobrança.</p></article>
        </div></section>
        <section class="section"><div class="wrap">
          <p class="eyebrow">PROVA</p>
          <h2>Três matérias. Três retornos. Nenhuma releitura inteira.</h2>
          <div class="senta-faces" style="margin-top:1.4rem">
            <blockquote class="senta-quote"><img src="${A}/faces/marcos.webp" alt="Marcos T."><p>“Antes: reler o capítulo. Ação: uma pergunta. Resultado: a matéria voltou na quinta.”</p><footer>Marcos T. · Concurso · João Pessoa</footer></blockquote>
            <blockquote class="senta-quote"><img src="${A}/faces/diego.webp" alt="Diego P."><p>“Antes: grifo. Ação: pergunta + 1 dia. Resultado: recuperei sem reler o artigo.”</p><footer>Diego P. · Faculdade · Uberlândia</footer></blockquote>
            <blockquote class="senta-quote"><img src="${A}/faces/bia.webp" alt="Bia N."><p>“Antes: teoria de novo. Ação: uma pergunta, 7 dias. Resultado: revisão curta que cobra.”</p><footer>Bia N. · ENEM · Niterói</footer></blockquote>
          </div>
        </div></section>

        <section class="section light"><div class="wrap senta-grid">
          <div><p class="eyebrow">PARA QUEM É</p><h2>Se você estuda e esquece, a matéria ganha a próxima prova hoje.</h2><p class="copy">Quem relê e mesmo assim esquece. Quem confunde grifar com revisão. Quem só descobre o buraco na hora da questão.</p></div>
          <div><p class="eyebrow">PARA QUEM NÃO É</p><h2>Não é curso, não promete aprovação, não substitui professor.</h2><p class="copy">Não promete memória permanente, nota ou classificação. Não é resumo para reler na véspera. Não substitui professor.</p></div>
        </div></section>
        <section class="senta-offer" id="oferta"><div class="wrap senta-grid">
          <div>
            <p class="eyebrow" style="color:#E2571C">OFERTA IMPERDÍVEL</p>
            <h2>Hoje o estudo ganha uma pergunta e uma data — não mais uma releitura.</h2>
            <p class="copy">R$ 37,90 por tempo limitado. O acesso é digital: você abre o app, gera a pergunta do estudo de hoje e marca o retorno.</p>
            <div class="senta-stack">
              <div><span>Guia Estude Uma Vez, Revise Certo</span><span>PDF · 14 páginas</span></div>
              <div><span>App Próxima Revisão</span><span>No celular e no computador</span></div>
              <div><span>Cartão + régua 1-3-7</span><span>Próxima cobrança marcada</span></div>
            </div>
            <p class="senta-price"><span class="senta-old">R$ 127</span> R$ 37,90</p>
            <p class="offer-visit">Por tempo limitado · <span class="offer-bar-clock" data-clock>20:00</span></p>
            ${cta('Quero revisar certo')}
            <p class="copy" style="margin-top:1rem">7 dias para desistir, nos termos do art. 49 do CDC. Sem promessa de aprovação.</p>
          </div>
          <div>
            <img src="${A}/cover.webp" alt="Capa do guia Estude Uma Vez, Revise Certo" style="width:100%;border-radius:16px">
          </div>
        </div></section>

        <section class="section"><div class="wrap" style="max-width:720px">
          <p class="eyebrow">GARANTIA</p>
          <h2>7 dias para desistir. O risco fica com a gente.</h2>
          <p class="copy">Art. 49 do CDC. Se o material não servir, peça o reembolso pelo e-mail de suporte informando a compra.</p>
        </div></section>
        ${upsellSection('estude-uma-vez-revise-certo')}
        <section class="section senta-faq"><div class="wrap">
          <p class="eyebrow">FAQ</p>
          <h2>O que você recebe, o app incluso e a garantia de 7 dias.</h2>
          <div class="faq-list" style="margin-top:1.2rem">
            <details open><summary>O que eu recebo agora?</summary><p>O guia em PDF e o app Próxima Revisão. Por que a releitura engana, como formular a pergunta, a régua 1-3-7, o caderno de erros útil e o ciclo de sete dias.</p></details>
            <details><summary>O app já está incluso?</summary><p>Sim. O Próxima Revisão faz parte da oferta: um app simples, no celular e no computador, sem loja e sem instalação. Você captura o estudo, testa sem olhar e agenda o retorno.</p></details>
            <details><summary>Qual é a garantia?</summary><p>Você tem 7 dias para desistir, com base no art. 49 do CDC. Peça o reembolso pelo e-mail de suporte informando a compra.</p></details>
            <details><summary>Isso promete que eu nunca mais vou esquecer?</summary><p>Não. É conteúdo educacional. Não promete memória permanente, aprovação, nota nem classificação. Promete um jeito de cobrar o que você estudou hoje.</p></details>
            <details><summary>Como falo com o suporte?</summary><p>E-mail oficial: suporte@toppapps.online. Informe o nome do produto e a URL acessada.</p></details>
          </div>
        </div></section>
        <section class="section" style="text-align:center;padding-bottom:4rem">${cta('Quero revisar certo')}</section>
      </main>${footer()}`;
    }
    function revisaoAppPage() {
      return appShell({ title:'Próxima Revisão | Estude Uma Vez, Revise Certo', kicker:'PRÓXIMA REVISÃO', h1:'Próxima Revisão', lede:'O estudo de hoje vira uma pergunta. Você responde sem olhar e marca 1, 3 ou 7 dias.', id:'revisao', pdfHref: PDF_BASE + '/estude-uma-vez-revise-certo-ebook-v1.0.pdf' });
    }
    function revisaoThanksPage() {
      return deliveryThanks({ title:'Acesso | Estude Uma Vez, Revise Certo', h1:'Feche o caderno. A matéria já tem data.', lead:'O PDF e o app Próxima Revisão estão inclusos. Abra o app agora. Baixe o guia se quiser reler o método.', step3:'Gere a pergunta do estudo de hoje. Marque 1, 3 ou 7 dias.', appHref:'/app/proxima-revisao', appLabel:'Abrir o app Próxima Revisão', pdfHref: PDF_BASE + '/estude-uma-vez-revise-certo-ebook-v1.0.pdf', pdfLabel:'Baixar o PDF (14 páginas)' });
    }
    function esquecaSalesPage(product) {
      document.title = 'Nunca Mais Esqueça Tudo | Educação Toppapps';
      const pay = 'https://pay.kiwify.com.br/csMSLPJ';
      const cta = (label) => `<a class="button senta-cta" href="${pay}" rel="noopener">${label}</a>`;
      const A = 'https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@2862ff7b082e60218f94b15dde795712053537fd/public/product/esqueca';
      return `<style>${salesCss()}</style>
      <div class="offer-bar" data-offer-timer data-offer-slug="nunca-mais-esqueca-tudo"><span class="offer-bar-kicker">OFERTA IMPERDÍVEL</span><span>Por tempo limitado</span><span>De R$ 97 por R$ 27,90</span><span>Termina em <span class="offer-bar-clock" data-clock>20:00</span></span>${cta('Quero agora')}</div>
      ${header()}
      <main id="main-content">
        <section class="hero"><div class="wrap senta-grid senta-hero">
          <div class="hero-copy">
            <p class="eyebrow">PARA QUEM ACUMULA MATÉRIA E NÃO SABE O QUE REVISAR</p>
            <h1>Em 5 minutos, só o que vence hoje está na mesa. O semestre fica fora.</h1>
            <div class="hero-actions">${cta('Quero a fila de hoje')}<a class="button secondary" href="${pay}" rel="noopener">Ver o app em 3 funções</a></div>
            <p class="hero-note">Acesso na hora · fila em 5 min · 7 dias para desistir</p>
            <p class="hero-lede">O acúmulo não se resolve relendo o semestre. O app Fila de Hoje separa o que vence hoje, cobra em cartões curtos e recoloca o resto no calendário — sem prometer memória permanente.</p>
            <div class="senta-proof"><span>Fila de hoje em 5 min</span><span>R$ 27,90</span><span>PDF 14 páginas + app</span><span>Garantia 7 dias</span></div>
            <blockquote class="senta-quote" style="margin-top:1.2rem;overflow:auto">
              <img src="${A}/faces/paulo.webp" alt="Paulo R." width="88" height="88">
              <p>“Antes: 14 PDFs. Ação: fila de 6. Resultado: a manhã coube.”</p>
              <footer>Paulo R. · Concurso + trabalho · Teresina</footer>
            </blockquote>
          </div>
          <div class="hero-visual"><img src="${A}/hero.webp" alt="Manhã simples: café e uma lista curta do que revisar hoje" width="1600" height="900"></div>
        </div></section>

        <section class="senta-dark" id="dor"><div class="wrap senta-grid" style="padding:4rem 0">
          <img src="${A}/pain.webp" alt="Adulto diante de cadernos acumulados, sem saber o que revisar" width="1600" height="900" style="width:100%;border-radius:16px;object-fit:cover;height:320px">
          <div>
            <p class="eyebrow" style="color:#E2571C">TALVEZ VOCÊ RECONHEÇA</p>
            <h2>O que você estudou em março está apagando. E você não sabe por onde voltar.</h2>
            <p class="copy">A matéria nova empurra a antiga. Revisar “tudo” não cabe. Revisar nada também. O esquecimento não é um dia ruim — é fila sem dono.</p>
            <div style="margin-top:1.2rem;display:grid;gap:.9rem">
              <article><h3>O acúmulo vira névoa</h3><p class="copy">Sem data de vencimento, tudo parece urgente e nada entra na mesa.</p></article>
              <article><h3>Reler o semestre não cabe</h3><p class="copy">A manhã tem 15 minutos. O PDF tem 400 páginas.</p></article>
              <article><h3>O nome assusta, o método não promete milagre</h3><p class="copy">Ninguém segura 100% da matéria. Dá para não perder o que vence hoje.</p></article>
            </div>
          </div>
        </div></section>

        <section class="section" id="virada"><div class="wrap">
          <p class="eyebrow">A VIRADA</p>
          <h2>Do monte atrasado à fila de 5 minutos: só o que vence hoje.</h2>
          <p class="copy">O problema não é memória fraca. É ausência de vencimento. O que não tem data não volta. O que tem data cabe na manhã.</p>
          <p class="senta-effect">Separe o que vence hoje. Cobre. Recoloque o resto. O semestre não entra na mesa.</p>
        </div></section>

        <section class="section"><div class="wrap">
          <p class="eyebrow">MÉTODO</p>
          <h2>Separar, cobrar, recolocar: a fila da manhã zera em 5 minutos.</h2>
          <p class="copy">Três movimentos. O PDF ensina por que o acúmulo ganha. O app mostra só o que vence hoje e devolve o resto ao calendário.</p>
          <div class="senta-steps" style="margin-top:1.4rem">
            <article class="senta-step"><h3>Separar</h3><p>O calendário escolhe. O semestre fica fora da mesa.</p></article>
            <article class="senta-step"><h3>Cobrar</h3><p>Cartão curto. Sem reler o capítulo. Dois botões: lembrei ou esqueci.</p></article>
            <article class="senta-step"><h3>Recolocar</h3><p>Acerto alonga. Erro encurta. A fila de amanhã já nasceu.</p></article>
          </div>
        </div></section>

        <section class="section light" id="app"><div class="wrap">
          <p class="eyebrow">O APP · FILA DE HOJE</p>
          <h2>Três movimentos. Só o vencido. O semestre fica fora.</h2>
          <div class="senta-app" style="margin-top:2rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · SEPARAR</p><h3>Em segundos, o semestre sai da mesa. Fica o que vence hoje.</h3><p>Você abre o app. A fila mostra só o vencido. O arquivo inteiro permanece fechado.</p><p class="senta-effect">O monte de matérias colapsa em 6 cartões.</p>
              <div class="senta-box"><p><b>Situação.</b> Manhã. Você ia abrir o PDF de março “só um pouco”.</p><p><b>Faça.</b> Abra o app. Veja só o que vence hoje.</p><p><b>Resultado.</b> Uma fila curta. O semestre não entra.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/montar.webp" alt="Celular com o app reduzindo o acúmulo à fila do dia"></div>
          </div>
          <div class="senta-app reverse" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · COBRAR</p><h3>Dois botões. Sem reler o capítulo.</h3><p>Lembrei ou esqueci. O cartão leva 20 segundos. A manhã leva 5 minutos.</p><p class="senta-effect">Contador 3 de 6. A fila anda.</p>
              <div class="senta-box"><p><b>Situação.</b> Café na mesa. 6 cartões. Expediente em 10 minutos.</p><p><b>Faça.</b> Cobre. Aperte lembrei ou esqueci.</p><p><b>Resultado.</b> A fila zera antes do trabalho. O PDF de março continua fechado.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/sessao.webp" alt="Celular com o cartão do dia e os botões lembrei e esqueci"></div>
          </div>
          <div class="senta-app" style="margin-top:2.4rem">
            <div class="senta-copy"><p class="eyebrow">NO APP · RECOLOCAR</p><h3>O cartão só descansa com a próxima data.</h3><p>Acerto alonga. Erro volta amanhã. Encerrar é devolver ao calendário — não “depois eu vejo”.</p><p class="senta-effect">Um bilhete sai da tela: “volta na quinta”.</p>
              <div class="senta-box"><p><b>Situação.</b> Você lembrou pela metade. Não quer o capítulo inteiro.</p><p><b>Faça.</b> Esqueci → amanhã. Ou 7 dias se veio limpo.</p><p><b>Resultado.</b> A fila de amanhã já tem dono. A de hoje acabou.</p></div>
              <div class="hero-actions">${cta('Quero o app agora')}</div></div>
            <div class="senta-mock"><img src="${A}/miniapp/retomada.webp" alt="Celular recolocando o cartão no calendário"></div>
          </div>
        </div></section>

        <section class="section light" id="conteudo"><div class="wrap">
          <p class="eyebrow">POR DENTRO DO PDF</p>
          <h2>Do acúmulo invisível à fila visível — o que vence hoje, nada mais.</h2>
          <div class="senta-pdfs" style="margin-top:1.3rem">
            <article class="senta-pdf"><small>DIAGNÓSTICO</small><h3>Por que o acúmulo ganha</h3><p class="copy">Sem vencimento, revisar vira ‘quando der’. Quando der, não dá.</p></article>
            <article class="senta-pdf"><small>SISTEMA</small><h3>A fila, não o arquivo</h3><p class="copy">O que importa é o que vence hoje. O arquivo inteiro fica fora da mesa.</p></article>
            <article class="senta-pdf"><small>COBRANÇA</small><h3>Lembrei / esqueci</h3><p class="copy">Dois botões. Sem nota, sem drama. O intervalo se ajusta sozinho.</p></article>
            <article class="senta-pdf"><small>MANHÃ</small><h3>Cinco minutos</h3><p class="copy">Uma fila curta cabe no café. O semestre, não.</p></article>
          </div>
        </div></section>
        <section class="section"><div class="wrap">
          <p class="eyebrow">O QUE MUDA NA PRÁTICA</p>
          <h2>5 minutos, só o vencido. O semestre não entra na mesa.</h2>
          <div class="senta-bens" style="margin-top:1.3rem">
            <article class="senta-ben"><h3>A manhã vê só o que vence hoje</h3><p class="copy">O semestre fica no arquivo. A mesa recebe uma fila curta.</p></article>
            <article class="senta-ben"><h3>Cinco minutos cabem no café</h3><p class="copy">Cartões, dois botões, próximo. Sem abrir o PDF de março.</p></article>
            <article class="senta-ben"><h3>O erro volta amanhã, não some</h3><p class="copy">Esqueci encurta. Lembrei alonga. O calendário carrega a decisão.</p></article>
            <article class="senta-ben"><h3>A fila doente aparece no número</h3><p class="copy">Passou de 12, o teto corta. Você vê o acúmulo — em vez de fingir que vai reler o semestre.</p></article>
          </div>
        </div></section>

        <section class="section" id="antes"><div class="wrap senta-grid">
          <article class="senta-ben" style="background:#0F172A;color:#fff;padding:0;overflow:hidden"><img src="${A}/pain.webp" alt="Monte de PDFs e cadernos sem vencimento" style="width:100%;height:220px;object-fit:cover;opacity:.88"><div style="padding:1.15rem 1.2rem"><p class="eyebrow" style="color:#E2571C">ANTES</p><h3>Cadernos empilhados. Zero vencimento. Nada entra na mesa.</h3><p class="copy">Revisar “tudo no domingo”. Matéria de março sem data de volta. A manhã começa no capítulo novo.</p></div></article>
          <article class="senta-ben" style="padding:0;overflow:hidden"><img src="${A}/session.webp" alt="Dois montes de cartões e o timer de cinco minutos" style="width:100%;height:220px;object-fit:cover"><div style="padding:1.15rem 1.2rem"><p class="eyebrow">DEPOIS</p><h3>Seis cartões. Lembrei ou esqueci. O resto no calendário.</h3><p class="copy">Só o que vence hoje. Cinco minutos, não o semestre. Erro volta amanhã. Acerto, na semana.</p></div></article>
        </div></section>
        <section class="section"><div class="wrap">
          <p class="eyebrow">PROVA</p>
          <h2>Três manhãs. Três filas. Nenhum semestre relido.</h2>
          <div class="senta-faces" style="margin-top:1.4rem">
            <blockquote class="senta-quote"><img src="${A}/faces/paulo.webp" alt="Paulo R."><p>“Eu tinha 14 PDFs e não sabia o que revisar de manhã. Separei seis cartões do que vencia naquele dia. A revisão coube no café. O semestre ficou fora da mesa.”</p><footer>Paulo R. · Concurso + trabalho · Teresina</footer></blockquote>
            <blockquote class="senta-quote"><img src="${A}/faces/helena.webp" alt="Helena C."><p>“A matéria de março ia apagando enquanto o semestre andava. Passei a cobrar só o que vencia no dia. Em uma semana a disciplina antiga voltou em fatias — sem reler o livro.”</p><footer>Helena C. · Faculdade · Caxias do Sul</footer></blockquote>
            <blockquote class="senta-quote"><img src="${A}/faces/igor.webp" alt="Igor M."><p>“Meu baralho tinha 300 cards. Eu abria e fechava. Coloquei teto de 12: só o que vencia no dia. Passei a terminar a fila. Matemática antiga voltou sem abrir o capítulo.”</p><footer>Igor M. · ENEM · Maceió</footer></blockquote>
          </div>
        </div></section>

        <section class="section light"><div class="wrap senta-grid">
          <div><p class="eyebrow">PARA QUEM É</p><h2>Se a matéria antiga some, a fila de hoje devolve o que vence.</h2><p class="copy">Quem acumula matéria antiga enquanto a nova chega. Quem não sabe o que revisar hoje e por isso não revisa. Quem tem 5 a 15 minutos de manhã e precisa de uma fila, não de um arquivo.</p></div>
          <div><p class="eyebrow">PARA QUEM NÃO É</p><h2>Não promete memória permanente, aprovação, nem substitui professor.</h2><p class="copy">Não é curso. Não é garantia de nota. Não substitui avaliação clínica de memória. O nome descreve o desejo. O contrato é a fila do que vence hoje.</p></div>
        </div></section>
        <section class="senta-offer" id="oferta"><div class="wrap senta-grid">
          <div>
            <p class="eyebrow" style="color:#E2571C">OFERTA IMPERDÍVEL</p>
            <h2>Hoje o monte atrasado vira uma fila de 5 minutos.</h2>
            <p class="copy">R$ 27,90 por tempo limitado. O acesso é digital: você abre o app e vê só o que vence hoje.</p>
            <div class="senta-stack">
              <div><span>Guia Nunca Mais Esqueça Tudo</span><span>PDF · 14 páginas</span></div>
              <div><span>App Fila de Hoje</span><span>No celular e no computador</span></div>
              <div><span>Filtro + teto</span><span>Só o vencido, no máximo 12</span></div>
            </div>
            <p class="senta-price"><span class="senta-old">R$ 97</span> R$ 27,90</p>
            <p class="offer-visit">Por tempo limitado · <span class="offer-bar-clock" data-clock>20:00</span></p>
            ${cta('Quero a fila de hoje')}
            <p class="copy" style="margin-top:1rem">7 dias para desistir, nos termos do art. 49 do CDC. Sem promessa de memória permanente.</p>
          </div>
          <div>
            <img src="${A}/cover.webp" alt="Capa do guia Nunca Mais Esqueça Tudo" style="width:100%;border-radius:16px">
          </div>
        </div></section>

        <section class="section"><div class="wrap" style="max-width:720px">
          <p class="eyebrow">GARANTIA</p>
          <h2>7 dias para desistir. O risco fica com a gente.</h2>
          <p class="copy">Art. 49 do CDC. Se o material não servir, peça o reembolso pelo e-mail de suporte informando a compra.</p>
        </div></section>
        ${upsellSection('nunca-mais-esqueca-tudo')}
        <section class="section senta-faq"><div class="wrap">
          <p class="eyebrow">FAQ</p>
          <h2>O que você recebe, o app incluso e a garantia de 7 dias.</h2>
          <div class="faq-list" style="margin-top:1.2rem">
            <details open><summary>O que eu recebo agora?</summary><p>O guia em PDF e o app Fila de Hoje. Por que o acúmulo ganha, fila versus arquivo, teto da manhã, dois botões e o ciclo de sete manhãs.</p></details>
            <details><summary>O app já está incluso?</summary><p>Sim. O Fila de Hoje faz parte da oferta: um app simples, no celular e no computador, sem loja e sem instalação. Você vê o vencido, cobra e recoloca.</p></details>
            <details><summary>Qual é a garantia?</summary><p>Você tem 7 dias para desistir, com base no art. 49 do CDC. Peça o reembolso pelo e-mail de suporte informando a compra.</p></details>
            <details><summary>Isso promete que eu nunca mais vou esquecer?</summary><p>Não. É conteúdo educacional. Não promete memória permanente, aprovação, nota nem classificação. Promete uma fila do que vence hoje.</p></details>
            <details><summary>Como falo com o suporte?</summary><p>E-mail oficial: suporte@toppapps.online. Informe o nome do produto e a URL acessada.</p></details>
          </div>
        </div></section>
        <section class="section" style="text-align:center;padding-bottom:4rem">${cta('Quero a fila de hoje')}</section>
      </main>${footer()}`;
    }
    function esquecaAppPage() {
      return appShell({ title:'Fila de Hoje | Nunca Mais Esqueça Tudo', kicker:'FILA DE HOJE', h1:'Fila de Hoje', lede:'Só o que vence hoje. Dois botões. Cinco minutos. O semestre fica fora.', id:'esqueca', pdfHref: PDF_BASE + '/nunca-mais-esqueca-tudo-ebook-v1.0.pdf' });
    }
    function esquecaThanksPage() {
      return deliveryThanks({ title:'Acesso | Nunca Mais Esqueça Tudo', h1:'Abra o app. Baixe o PDF. A fila já pode começar.', lead:'Você não precisa esperar e-mail para usar. O app Fila de Hoje abre agora. O PDF de 14 páginas baixa neste botão — e também chega no e-mail da compra, na área de membros da Kiwify.', step3:'Separe o vencido. Lembrei ou esqueci. Recoloque. Saia em 5 minutos.', appHref:'/app/fila-de-hoje', appLabel:'Abrir o app Fila de Hoje', pdfHref: PDF_BASE + '/nunca-mais-esqueca-tudo-ebook-v1.0.pdf', pdfLabel:'Baixar o PDF (14 páginas)' });
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
      const app = document.getElementById('app');
      if (!app) return;
      pathParts = location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
      params = new URLSearchParams(location.search);
      let output;
      if (pathParts.length === 0) output = hub();
      else if (pathParts[0] === 'categoria' && pathParts[1] && CATEGORY.collections.some(([slug]) => slug === pathParts[1])) output = hub(pathParts[1]);
      else if (pathParts[0] === 'p' && pathParts[1] === 'senta-e-estuda' && findProduct(pathParts[1])) output = sentaSalesPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'p' && pathParts[1] === 'cronograma-que-funciona' && findProduct(pathParts[1])) output = cronogramaSalesPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'p' && pathParts[1] === 'estude-uma-vez-revise-certo' && findProduct(pathParts[1])) output = revisaoSalesPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'p' && pathParts[1] === 'nunca-mais-esqueca-tudo' && findProduct(pathParts[1])) output = esquecaSalesPage(findProduct(pathParts[1]));
      else if (pathParts[0] === 'app' && (pathParts[1] === 'plano-possivel' || pathParts[1] === 'cronograma-que-funciona')) output = cronogramaAppPage();
      else if (pathParts[0] === 'obrigado' && pathParts[1] === 'cronograma-que-funciona') output = cronogramaThanksPage();
      else if (pathParts[0] === 'app' && (pathParts[1] === 'proxima-revisao' || pathParts[1] === 'estude-uma-vez-revise-certo')) output = revisaoAppPage();
      else if (pathParts[0] === 'obrigado' && pathParts[1] === 'estude-uma-vez-revise-certo') output = revisaoThanksPage();
      else if (pathParts[0] === 'app' && (pathParts[1] === 'fila-de-hoje' || pathParts[1] === 'nunca-mais-esqueca-tudo')) output = esquecaAppPage();
      else if (pathParts[0] === 'obrigado' && pathParts[1] === 'nunca-mais-esqueca-tudo') output = esquecaThanksPage();
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

    function bindOfferTimer() {
      const root = document.querySelector('[data-offer-timer]');
      if (!root) return;
      document.body.classList.add('has-offer-bar');
      const slug = root.getAttribute('data-offer-slug') || location.pathname;
      const clocks = [...document.querySelectorAll('[data-clock]')];
      const WINDOW_MS = 20 * 60 * 1000;
      const MAX_MS = 30 * 60 * 1000;
      const COOLDOWN_MS = 2 * 60 * 60 * 1000;
      const key = 'topp-offer-' + slug;
      const now = Date.now();
      let end;
      try {
        const raw = localStorage.getItem(key);
        const saved = Number(raw);
        if (raw && Number.isFinite(saved)) {
          if (saved > now && saved - now <= MAX_MS) end = saved;
          else if (saved <= now && now - saved < COOLDOWN_MS) end = saved;
        }
        if (!end) {
          end = now + WINDOW_MS;
          localStorage.setItem(key, String(end));
        }
      } catch (e) {
        end = now + WINDOW_MS;
      }
      const pad = (n) => String(n).padStart(2, '0');
      const tick = () => {
        const left = Math.max(0, end - Date.now());
        const label = left === 0 ? '00:00' : pad(Math.floor(left / 60000)) + ':' + pad(Math.floor((left % 60000) / 1000));
        clocks.forEach((el) => { el.textContent = label; });
        if (left === 0) {
          const kicker = root.querySelector('.offer-bar-kicker');
          if (kicker) kicker.textContent = 'OFERTA ENCERRADA · PREÇO VIGENTE';
        }
      };
      tick();
      setInterval(tick, 1000);
    }
    function bindDeliveryApps() {
      const root = document.getElementById('delivery-app');
      if (!root) return;
      const kind = root.getAttribute('data-app');
      const ui = {
        screen(html) { root.innerHTML = html; bind(); },
        field(label, inner) { return `<label style="display:grid;gap:.35rem"><span style="font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#64748b">${label}</span>${inner}</label>`; },
        input(id, value, extra='') { return `<input id="${id}" value="${esc(value)}" ${extra} style="height:44px;border:1px solid #e5e7eb;border-radius:10px;padding:0 .8rem;font:inherit">`; },
        btn(label, id, primary) { return `<button type="button" id="${id}" class="button${primary ? ' senta-cta' : ' secondary'}" style="width:100%">${label}</button>`; },
        pad(html, bg) { return `<div style="padding:1.4rem 1.3rem;background:${bg || '#fff'}">${html}</div>`; }
      };
      function bind() {
        root.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', () => render(el.getAttribute('data-go'))));
      }

      if (kind === 'esqueca') {
        const KEY = 'topp-fila-de-hoje';
        const seed = [
          { id: '1', prompt: 'Princípio da legalidade' },
          { id: '2', prompt: 'Função do 2º grau' },
          { id: '3', prompt: 'Concordância verbal' },
          { id: '4', prompt: 'Controle de constitucionalidade' },
          { id: '5', prompt: 'Teorema de Pitágoras — quando usar' },
          { id: '6', prompt: 'Capilares × artérias' },
        ];
        let cards;
        try { cards = JSON.parse(localStorage.getItem(KEY) || 'null') || seed.map((c) => ({...c})); } catch (e) { cards = seed.map((c) => ({...c})); }
        const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cards)); } catch (e) {} };
        const paint = () => {
          const current = cards.find((c) => !c.done);
          const done = cards.filter((c) => c.done).length;
          if (!root.dataset.started) {
            ui.screen(ui.pad(`<p class="eyebrow" style="color:rgba(255,255,255,.8)">FILA DE HOJE</p><h2 style="color:#fff;margin:.4rem 0 0">Só o que vence hoje.</h2><p style="color:rgba(255,255,255,.82);margin:.7rem 0 1.2rem">Dois botões. Cinco minutos. O semestre fica fora.</p><p style="color:rgba(255,255,255,.75)">${cards.filter(c=>!c.done).length} cartões nesta manhã · teto 12</p><div style="margin-top:1.4rem">${ui.btn('Ver só o que vence hoje','fila-start',true)}</div><div style="margin-top:.6rem">${ui.btn('Incluir um cartão','fila-add',false)}</div>`, '#1D4F91'));
            document.getElementById('fila-start').onclick = () => { root.dataset.started = '1'; paint(); };
            document.getElementById('fila-add').onclick = () => { root.dataset.started = 'add'; paint(); };
            return;
          }
          if (root.dataset.started === 'add') {
            ui.screen(ui.pad(`<p class="eyebrow">NOVO CARTÃO</p><h3>O que vence hoje?</h3><div style="display:grid;gap:.8rem;margin-top:1rem">${ui.field('Matéria / ideia', ui.input('fila-prompt','','placeholder="Ex.: habeas corpus"'))}${ui.btn('Colocar na fila','fila-save',true)}${ui.btn('Cancelar','fila-cancel',false)}</div>`));
            document.getElementById('fila-save').onclick = () => {
              const prompt = document.getElementById('fila-prompt').value.trim();
              if (!prompt) return;
              if (cards.filter((c) => !c.done).length >= 12) { alert('Teto de 12. A fila doente se declara.'); return; }
              cards.push({ id: String(Date.now()), prompt }); save(); root.dataset.started = '1'; paint();
            };
            document.getElementById('fila-cancel').onclick = () => { root.dataset.started = '1'; paint(); };
            return;
          }
          if (!current) {
            const ok = cards.filter((c) => c.done === 'ok').length;
            const fail = cards.filter((c) => c.done === 'fail').length;
            ui.screen(ui.pad(`<p class="eyebrow">FILA ZERADA</p><h3>A manhã acabou. O semestre não entrou na mesa.</h3><p class="copy">${ok} alongados · ${fail} voltam amanhã.</p><div style="display:grid;gap:.6rem;margin-top:1rem">${ui.btn('Incluir um cartão','fila-add',true)}${ui.btn('Recomeçar a fila','fila-reset',false)}</div>`));
            document.getElementById('fila-add').onclick = () => { root.dataset.started = 'add'; paint(); };
            document.getElementById('fila-reset').onclick = () => { cards = seed.map((c) => ({...c})); save(); delete root.dataset.started; paint(); };
            return;
          }
          ui.screen(ui.pad(`<p class="eyebrow">${done + 1} DE ${cards.length}</p><h3>${esc(current.prompt)}</h3><p class="copy">Sem olhar o caderno. Lembrei ou esqueci.</p><div style="display:grid;gap:.6rem;margin-top:1.1rem">${ui.btn('Lembrei · 7 dias','fila-ok',true)}${ui.btn('Esqueci · amanhã','fila-fail',false)}${ui.btn('Incluir outro cartão','fila-add',false)}</div>`));
          document.getElementById('fila-ok').onclick = () => { current.done = 'ok'; save(); paint(); };
          document.getElementById('fila-fail').onclick = () => { current.done = 'fail'; save(); paint(); };
          document.getElementById('fila-add').onclick = () => { root.dataset.started = 'add'; paint(); };
        };
        paint();
        return;
      }

      if (kind === 'revisao') {
        let step = 'home', subject = 'Direito constitucional', studied = 'controle de constitucionalidade', answer = '', interval = null;
        const paint = () => {
          if (step === 'home') {
            ui.screen(ui.pad(`<p class="eyebrow" style="color:rgba(255,255,255,.8)">PRÓXIMA REVISÃO</p><h2 style="color:#fff">O estudo de hoje vira uma pergunta.</h2><p style="color:rgba(255,255,255,.82);margin:.7rem 0 1rem">Responda sem olhar. Marque 1, 3 ou 7 dias.</p>${ui.btn('Gerar minha pergunta','rv-go',true)}`, '#1D4F91'));
            document.getElementById('rv-go').onclick = () => { step = 'form'; paint(); };
            return;
          }
          if (step === 'form') {
            ui.screen(ui.pad(`<p class="eyebrow">CAPTURA</p><h3>O que você estudou hoje?</h3><div style="display:grid;gap:.8rem;margin-top:1rem">${ui.field('Matéria', ui.input('rv-sub', subject))}${ui.field('O que entendi', ui.input('rv-st', studied))}${ui.btn('Gerar a pergunta','rv-gen',true)}</div>`));
            document.getElementById('rv-gen').onclick = () => { subject = document.getElementById('rv-sub').value.trim() || subject; studied = document.getElementById('rv-st').value.trim() || studied; answer=''; interval=null; step='test'; paint(); };
            return;
          }
          const q = `Sem olhar o caderno: o que é ${studied} em ${subject}?`;
          ui.screen(ui.pad(`<p class="eyebrow">SEM OLHAR</p><h3>${esc(q)}</h3><textarea id="rv-ans" placeholder="Responda com o caderno fechado" style="min-height:90px;border:1px solid #e5e7eb;border-radius:10px;padding:.7rem;font:inherit;width:100%">${esc(answer)}</textarea><p class="copy">Se acertou com folga, 7 dias. Se vacilou, 3. Se errou, 1.</p><div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem"><button class="button senta-cta" id="rv-1" type="button">1 dia</button><button class="button senta-cta" id="rv-3" type="button">3 dias</button><button class="button senta-cta" id="rv-7" type="button">7 dias</button></div>${interval ? `<p class="senta-effect" style="margin-top:1rem">Próxima prova desta matéria: em ${interval} dia${interval>1?'s':''}.</p><div style="margin-top:.8rem">${ui.btn('Nova pergunta','rv-new',false)}</div>` : ''}`));
          ['1','3','7'].forEach((d) => document.getElementById('rv-'+d).onclick = () => { answer = document.getElementById('rv-ans').value; interval = Number(d); paint(); });
          const neu = document.getElementById('rv-new'); if (neu) neu.onclick = () => { step='form'; paint(); };
        };
        paint();
        return;
      }

      if (kind === 'cronograma') {
        let step = 'home', hours = 10, subjects = 'Direito, Português, Matemática';
        const paint = () => {
          const planned = Math.max(1, Math.round(hours * 0.8));
          const blocks = Math.max(1, Math.round((planned * 60) / 50));
          if (step === 'home') {
            ui.screen(ui.pad(`<p class="eyebrow" style="color:rgba(255,255,255,.8)">PLANO POSSÍVEL</p><h2 style="color:#fff">A semana cabe nas horas que existem.</h2><p style="color:rgba(255,255,255,.82);margin:.7rem 0 1rem">80% da carga. Blocos de 50 minutos. Ajuste na sexta.</p>${ui.btn('Montar minha semana','cr-go',true)}`, '#1D4F91'));
            document.getElementById('cr-go').onclick = () => { step='form'; paint(); };
            return;
          }
          if (step === 'form') {
            ui.screen(ui.pad(`<p class="eyebrow">INVENTÁRIO REAL</p><h3>Quantas horas você realmente tem?</h3><div style="display:grid;gap:.8rem;margin-top:1rem">${ui.field('Horas livres na semana', ui.input('cr-h', hours, 'type="number" min="5" max="40"'))}${ui.field('Matérias', ui.input('cr-s', subjects))}<p class="copy">Carga possível: ${planned}h (${blocks} blocos de 50 min).</p>${ui.btn('Gerar minha semana','cr-gen',true)}</div>`));
            document.getElementById('cr-gen').onclick = () => { hours = Number(document.getElementById('cr-h').value) || 10; subjects = document.getElementById('cr-s').value.trim() || subjects; step='week'; paint(); };
            return;
          }
          const list = subjects.split(',').map((s) => s.trim()).filter(Boolean);
          const days = ['Seg','Ter','Qua','Qui','Sex','Sáb'];
          const per = Math.max(1, Math.floor(blocks / 6));
          ui.screen(ui.pad(`<p class="eyebrow">SEMANA MONTADA</p><h3>${planned}h · ${blocks} blocos de 50 min</h3><p class="copy">Você informou ${hours}h. Usamos 80% para a terça não apagar o plano.</p><div style="display:grid;gap:.45rem;margin:1rem 0">${days.map((d,i)=>`<div style="display:flex;justify-content:space-between;border-bottom:1px solid #e5e7eb;padding:.4rem 0"><b>${d}</b><span>${list[i % list.length] || 'Revisão'} · ${per} bloco(s)</span></div>`).join('')}</div>${ui.btn('Ajustar horas','cr-back',false)}`));
          document.getElementById('cr-back').onclick = () => { step='form'; paint(); };
        };
        paint();
        return;
      }

      if (kind === 'senta') {
        let step = 'home';
        let s = { subject:'Direito constitucional', action:'Abrir direitos fundamentais e resolver a questão 1', duration:'25', place:'mesa da sala', left: 25*60, timer: null };
        const phrase = () => `Em ${s.place}, vou abrir ${s.subject.toLowerCase()} e fazer “${s.action}” por ${s.duration} minutos.`;
        const paint = () => {
          if (step === 'home') {
            ui.screen(ui.pad(`<p class="eyebrow" style="color:rgba(255,255,255,.8)">PRIMEIRA SESSÃO</p><h2 style="color:#fff">Reduza a matéria a um movimento.</h2><p style="color:rgba(255,255,255,.82);margin:.7rem 0 1rem">Escolha o tempo. Termine com a próxima entrada escrita.</p>${ui.btn('Preparar minha sessão','se-go',true)}`, '#1D4F91'));
            document.getElementById('se-go').onclick = () => { step='form'; paint(); };
            return;
          }
          if (step === 'form') {
            ui.screen(ui.pad(`<p class="eyebrow">CARTÃO DA SESSÃO</p><h3>O que você vai fazer agora?</h3><div style="display:grid;gap:.8rem;margin-top:1rem">${ui.field('Matéria', ui.input('se-sub', s.subject))}${ui.field('Primeira ação', ui.input('se-act', s.action))}${ui.field('Onde você vai sentar', ui.input('se-pl', s.place))}<div style="display:flex;gap:.5rem">${['10','25','50'].map((d)=>`<button type="button" class="button${s.duration===d?' senta-cta':' secondary'}" data-d="${d}" style="flex:1">${d} min</button>`).join('')}</div>${ui.btn('Gerar frase de entrada','se-gen',true)}</div>`));
            root.querySelectorAll('[data-d]').forEach((b)=> b.onclick = () => { s.duration = b.getAttribute('data-d'); paint(); });
            document.getElementById('se-gen').onclick = () => { s.subject=document.getElementById('se-sub').value.trim()||s.subject; s.action=document.getElementById('se-act').value.trim()||s.action; s.place=document.getElementById('se-pl').value.trim()||s.place; s.left=Number(s.duration)*60; step='plan'; paint(); };
            return;
          }
          if (step === 'plan') {
            const mm = String(Math.floor(s.left/60)).padStart(2,'0');
            const ss = String(s.left%60).padStart(2,'0');
            ui.screen(ui.pad(`<p class="eyebrow" style="color:#E2571C">FRASE DE ENTRADA</p><h3 style="color:#fff">${esc(phrase())}</h3><p style="font-size:3rem;font-weight:800;color:#fff;margin:1rem 0;font-variant-numeric:tabular-nums">${mm}:${ss}</p><div style="display:grid;gap:.6rem">${ui.btn(s.timer?'Pausar':'Iniciar','se-timer',true)}${ui.btn('Encerrar sessão','se-end',false)}</div>`, '#0F172A'));
            document.getElementById('se-timer').onclick = () => {
              if (s.timer) { clearInterval(s.timer); s.timer=null; paint(); return; }
              s.timer = setInterval(() => { s.left=Math.max(0,s.left-1); if(s.left===0){ clearInterval(s.timer); s.timer=null; step='done'; } paint(); }, 1000);
            };
            document.getElementById('se-end').onclick = () => { if(s.timer) clearInterval(s.timer); s.timer=null; step='done'; paint(); };
            return;
          }
          ui.screen(ui.pad(`<p class="eyebrow">SESSÃO ENCERRADA</p><h3>A próxima entrada já pode ser escrita.</h3><p class="copy">Você fez: ${esc(s.action)}. Escreva o próximo movimento antes de sair.</p><div style="margin-top:1rem">${ui.field('Próxima entrada', ui.input('se-next','A questão 2 do mesmo bloco'))}</div><div style="margin-top:1rem">${ui.btn('Nova sessão','se-new',true)}</div>`));
          document.getElementById('se-new').onclick = () => { step='form'; paint(); };
        };
        paint();
      }
    }

    function bindCommon() {
      const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.main-nav');
      menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
      document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); }));
      const headerSearch = document.getElementById('header-search');
      headerSearch?.addEventListener('keydown', (event) => { if (event.key === 'Enter' && headerSearch.value.trim()) location.href = `/?q=${encodeURIComponent(headerSearch.value.trim())}#catalogo`; });
      const datalist = document.getElementById('search-suggestions');
      bindOfferTimer();
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
    function boot() {
      window.__hubRemount = mount;
      if (!document.getElementById('app')) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', boot, { once: true });
        } else {
          setTimeout(boot, 30);
        }
        return;
      }
      mount();
    }
    boot();
    window.addEventListener('popstate', mount);
