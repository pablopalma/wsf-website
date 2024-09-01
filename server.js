const fetch = require('node-fetch'); // Usa node-fetch para hacer solicitudes HTTP

// Credenciales API de PayPal
const clientId = 'AceaW96Ixs1hPyE41RQz2czqMRDB73RMJSPo7UfxMJw97z2vB3HjP4JNoClBYVCCTuDtocIT3qw5uffm';
const secret = 'EPZfKvlY0IwcUsINPOeJAoUHgShUeUYOqCrsTOgLhoE4acJOpZH2mYym20YDTAiLZ4rzSEerzHEkhJgM';

async function getAccessToken()
{
    const response = await fetch('https://api.paypal.com/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + secret).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

async function getDonations()
{
    const token = await getAccessToken();
    const response = await fetch('https://api.paypal.com/v1/reporting/transactions', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data;
}

getDonations().then(data =>
{
    console.log(data); // Maneja los datos como desees
});
