export default function checkoutSsoRedirect(context, url) {
    url.pathname = 'checkout';

    const params = (new URL(document.location)).searchParams;
    const shouldRedirect = params.get('redirect');

    if (shouldRedirect) {
        const cartId = params.get('cartId');

        url.search = `?sso=true&cartId=${cartId}`;

        window.location.assign(url.href);
    }
}
