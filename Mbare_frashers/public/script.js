async function loadProducts() {
  try {
    const res = await fetch('products.json', { cache: 'no-store' });
    const data = await res.json();
    console.log('dontBuy:', data.dontBuy);
    console.log('grid:', document.getElementById('dont-buy-grid'));
    renderCategory('civil-laptops-grid', data.civilLaptops || []);
    renderCategory('mechanical-laptops-grid', data.mechanicalLaptops || []);
    renderCategory('cellphones-grid', data.cellphones || []);
    renderCategory('boots-grid', data.boots || []);
    renderCategory('accessories-grid', data.accessories || []);
    renderCategory('dont-buy-grid', data.dontBuy|| []);
/*Phones an accssoriessss............... */
  } catch (err) {
    console.error('Could not load products.json', err);
  }
}

function renderCategory(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = '<p style="opacity:.7">No picks added yet.</p>';
    return;
  }

  grid.innerHTML = items.map(item => `
    <article class="card">
      <a class="card-image-link" href="${escapeAttr(item.affiliateLink)}" target="_blank" rel="noopener sponsored nofollow" aria-label="Buy ${escapeAttr(item.name)} Now (Tenga)">
        <img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.name)}" loading="lazy">
      </a>
      <div class="card-body">
        <h3>${escapeHtml(item.name)}</h3>
        <p class="note">${escapeHtml(item.note || '')}</p>
        <div class="card-footer">
          <span class="price">${escapeHtml(item.price || '')}</span>
          <a class="buy-link" href="${escapeAttr(item.affiliateLink)}" target="_blank" rel="noopener sponsored nofollow">Buy Now (Tenga)</a>
        </div>
      </div>
    </article>
  `).join('');
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}

loadProducts();

const dontBuyGrid = document.getElementById('dont-buy-grid');

if (dontBuyGrid) {
  dontBuyGrid.addEventListener('click', (e) => {
    const link = e.target.closest('.card-image-link');
    if (!link) return;

    e.preventDefault(); // stops the new tab

    const card = link.closest('.card');
    const wasZoomed = card.classList.contains('zoomed');

    dontBuyGrid.querySelectorAll('.card.zoomed')
      .forEach(c => c.classList.remove('zoomed'));

    if (!wasZoomed) card.classList.add('zoomed');
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && dontBuyGrid) {
    dontBuyGrid.querySelectorAll('.card.zoomed')
      .forEach(c => c.classList.remove('zoomed'));
  }
});

/* ==================================================================================================================================== */


/*================ Mechanical Engineering*/



function displayEngineeringLaptops(laptops, containerId) {

  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = laptops.map(laptop => {

    return `
      <article class="engineering-laptop-card">

        <div class="engineering-image">
          <img
            src="${laptop.image}"
            alt="${laptop.name}"
          >
        </div>

        <div class="engineering-card-body">

          <span class="laptop-category">
            ${laptop.category}
          </span>

          <h4>${laptop.name}</h4>

          <p class="laptop-specs">
            ${laptop.specs}
          </p>

          <a
            href="${laptop.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="engineering-buy"
          >
            Check Price
          </a>

        </div>

      </article>
    `;

  }).join("");
}
displayEngineeringLaptops(
  civilLaptops,
  "civil-laptops-grid"
);

displayEngineeringLaptops(
  mechanicalLaptops,
  "mechanical-laptops-grid"
);


/*Analytics............... */


/*Phones an accssoriessss............... */

/*------------not to buy */


// ghjklkjhgfghjk


  // fghjklkh
  


