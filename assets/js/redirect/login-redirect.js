export default function loginRedirect(context, url) {
    url.pathname = 'log-in';

    if (window.document.referrer.indexOf('reset_password') !== -1) {
        url.search = '?action=reset_password';
    }

    window.location.assign(url.href);
}
