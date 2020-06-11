import loginRedirect from './redirect/login';

const pageRedirects = {
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
