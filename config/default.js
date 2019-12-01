const fs = require('fs');
const AsToken = require('as-token');

const jwtDebug = fs.readFileSync(`${__dirname}/jwt_debug.pem`, 'utf8');

const config = {
  url: 'https://localhost:8011',
  ssl: {
    key: fs.readFileSync(`${__dirname}/ssl_debug.key`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/ssl_debug.crt`, 'utf8'),
  },
  saml: {
    entryPoint: 'https://dev-563819.okta.com/app/cesinedev563819_asx_1/exk21xuixr0EuByfe357/sso/saml',
    // issuer: 'passport-saml',
    issuer: 'http://www.okta.com/exk21xuixr0EuByfe357',
    path: '/login/callback',
    // privateCert: jwtDebug,
    cert: 'MIIDpDCCAoygAwIBAgIGAW643Mh4MA0GCSqGSIb3DQEBCwUAMIGSMQswCQYDVQQGEwJVUzETMBEG'+
    'A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU'+
    'MBIGA1UECwwLU1NPUHJvdmlkZXIxEzARBgNVBAMMCmRldi01NjM4MTkxHDAaBgkqhkiG9w0BCQEW'+
    'DWluZm9Ab2t0YS5jb20wHhcNMTkxMTI5MjAzMDQ3WhcNMjkxMTI5MjAzMTQ3WjCBkjELMAkGA1UE'+
    'BhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTALBgNV'+
    'BAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRMwEQYDVQQDDApkZXYtNTYzODE5MRwwGgYJ'+
    'KoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA'+
    'i0okfPEvFkW/zE5nkBt24vETIdj/20Py/Ee1nS1zEQy7uhbab1BsFQOmypcQRbxhJyBi31A2UC8W'+
    'xiGnf+ZFgtlYWEnpT5qOVB/2JbzcXrgryi0FD2QshnFwo91bbbqISKhljfyOBxFSex+8wupEdWoP'+
    'PMUv+IXlXg3atvuCjfTj/Lb4Ii8cBG2E+hqTOR14WnVaCshsus5ej41bgDjhj883e96IZUZmpA7z'+
    'eBmEJVMp2dkesFlednp8JbaEv68XK3WjyHJ4KC2+mHWOmelby+k2SNFBGR5NQwl9nwvQXDSS/dgM'+
    '4YTLzBLU35vTLWXn6HelW1PTSZGuXfeoj8RDywIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAF8FgN'+
    'j0CiUEvh4Yxgyp/dRybIDDoqEzWOhzaaRdM2HRTN1CuvNzxWwGNYUYJIPRaHtAr/dTaNXEwiKrCM'+
    '1QBak1VVWD7z6v9ZWXa3R9AEalSaaipRVj186QodqEgLGDgZ1lqIp5i7HeAYUZJhECXpm3O3/6JB'+
    '4S40tHSagowIk5LI0VLV7Iqi0zNSe8OswFsNqc7VTNme1+9QnAulvjk79iJg1vsIrCKkn88tggaR'+
    'dTiocciL/+3P16PHFsXjH2EIYxro8S8J3YnWrgWoDHLfxlQ4hkJGEXJvvRvzPHv3uHNY8NXMuXx5'+
    'CVSgoH5V9/k/Xa0npjZLBhw4BLRSD6Lo',
  },
};

AsToken.config.jwt.private = jwtDebug;

module.exports = config;
