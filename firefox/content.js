(function () {
  const metaTag = document.querySelector('meta[property="product:price:amount"]');
  const buybox = document.querySelector('[data-name="buybox"]');

  if (metaTag && metaTag.content && buybox) {
    const price = metaTag.content;

    const priceDiv = document.createElement('div');
    priceDiv.textContent = `Ukryta cena: ${price} zł`;
    priceDiv.style.marginTop = '16px';
    priceDiv.style.padding = '12px';
    priceDiv.style.backgroundColor = '#f1f3f5';
    priceDiv.style.border = '1px solid #ccc';
    priceDiv.style.borderRadius = '8px';
    priceDiv.style.fontSize = '14px';
    // priceDiv.style.fontWeight = 'bold';
    priceDiv.style.color = '#1a1a1a';
    priceDiv.style.textAlign = 'center';

    buybox.appendChild(priceDiv);
  }
})();
