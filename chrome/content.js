(function () {
  function tryInsertPrice() {
    const metaTag = document.querySelector('meta[property="product:price:amount"]');
    const buybox = document.querySelector('[data-name="buybox"]');

    if (metaTag && metaTag.content && buybox && !document.getElementById('xkom-hidden-price')) {
      const price = metaTag.content;

      const priceDiv = document.createElement('div');
      priceDiv.id = 'xkom-hidden-price';
      priceDiv.textContent = `Ukryta cena: ${price} zł`;
      priceDiv.style.marginTop = '16px';
      priceDiv.style.padding = '12px';
      priceDiv.style.backgroundColor = '#f1f3f5';
      priceDiv.style.border = '1px solid #ccc';
      priceDiv.style.borderRadius = '8px';
      priceDiv.style.fontSize = '14px';
      priceDiv.style.color = '#1a1a1a';
      priceDiv.style.textAlign = 'center';

      buybox.appendChild(priceDiv);
    }
  }

  // try first time
  tryInsertPrice();

  // Observe DOM changes
  const observer = new MutationObserver(() => {
    tryInsertPrice();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
