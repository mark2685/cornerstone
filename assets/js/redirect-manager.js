import checkoutSsoRedirect from './redirect/checkout-sso-redirect';
import loginRedirect from './redirect/login-redirect';

const pageRedirects = {
    cart: checkoutSsoRedirect,
    login: loginRedirect,
};

const hostUrlMap = {
    'localhost': 'localhost',
    'threadtogether.mybigcommerce.com': 'www.shopbeholdstg.com',
    'behold.mybigcommerce.com': 'www.shopbehold.com',
};

const PROTOCOL = 'https';

window.redirectManager = function redirectManager(
    pageType,
    contextJSON = null,
) {
    const context = JSON.parse(contextJSON || '{}');

    const url = new URL(`${PROTOCOL}:${hostUrlMap[window.document.location.hostname]}`);

    const redirect = pageRedirects[pageType];

    if (typeof redirect === 'function') {
        redirect(context, url);
    }
};
