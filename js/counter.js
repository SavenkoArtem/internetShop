// add listen click on page
window.addEventListener('click', function (event) {

    let counter;

    // Check click on div minus or plus
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // find parent div
        const counterWrapper = event.target.closest('.counter-wrapper');
        // find counter div
        counter = counterWrapper.querySelector('[data-counter]');
    }    

    // Check action Plus
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Check action Minus
    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        }else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();

            // check status Cart - Empty/Full
		    toggleCartStatus();

            calcCartPriceAndDelivery();
        }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){

        calcCartPriceAndDelivery();

    }

});