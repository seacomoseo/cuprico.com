# cuprico.com

[![cuprico.com](/assets/media/base/icon.svg)](https://cuprico.com/)


## STEPS


### Local

- Design
  - GENERAL
    - `config.yml`
    - `data/*.{yml,md}`
  - FONTS: Google Fonts
  - CONTENT
    - `content/*`
      - `page/divisores.md` ⏩ remove
  - CSS: `assets/css/` ⏩ `{*,_variables-custom.scss,_custom.scss}`
  - IMG: `assets/media/*`
  - Try in Safari and Firefox
  - Check in [W3 Validator](https://validator.w3.org/)
  - Check in [PageSpeed Insights](https://pagespeed.web.dev/)


### After client validate web


#### Domain

- If Netlify
  - [`Domain Management / settings`](https://app.netlify.com/sites/cuprico/settings/domain)
  - `Add custom domain`
  - `Check DNS configuration` Copy
  - Add `DNS Records` copied from Netlify to Domain gestor:
    - From: `cuprico.com`
      DNS Record: `ALIAS`, `ANAME` or `flattened CNAME`
      To: `apex-loadbalancer.netlify.com`
    - From: `cuprico.com`
      DNS Record: `A`
      To: `75.2.60.5`
    - From: `www`
      DNS Record: `CNAME`
      To: `cuprico.netlify.app.`
    - Maybe you need to eliminate the previous records with similar names
  - `Verify DNS configuration`
  - If it does not work after a while, try `Set as main domain` in the `www` version and also in te `nowww` version
- If Cloudflare Pages
  - [Custom domains](https://dash.cloudflare.com/?to=/:account/pages/view/cuprico/domains)
  - `Set up a custom domains`
  - `cuprico.com`
  - `Continue`
  - Add `DNS Records` copied from Cloudflare Pages to Domain gestor:
    - From: `cuprico.com`
      DNS Record: `CNAME`
      To: `cuprico.pages.dev`
    - From: `www`
      DNS Record: `CNAME`
      To: `cuprico.pages.dev`
  - `Activate domain` (if `Begin DNS transfer` end)
  - Repeat with `www.cuprico.com`
  - ...........................................................


#### [Google Search Console](https://search.google.com/search-console)

- Add property
- Verify versions ⏩ `data/config.yml`
  - `google_analytics`
  - `google_site_verification`
  - `google_file_verification`
  - DNS:
    From: `@`
    DNS Record: `TXT`
    To: `google-site-verification=[google_site_verification]`
- Link with Analytics
- Add sitemap.xml


#### [Google My Business](https://business.google.com/)

- `Add company ⏩ ...` ⏩ whait 13 days to receive postal and insert code to verify


##### Delivery

Send to all collaborators next:

###### WhatsApp

```md
*ENTREGA WEB cuprico.com*

Te dejo aquí este mensaje como referencia (también te lo paso por email con el asunto `ENTREGA WEB cuprico.com`).

En el siguiente enlace tienes instrucciones sobre cosas referentes a tu sitio web (cómo modificar cosas, información extra, ect.):

https://seacomoseo.com/entrega/

No es necesario que lo veas, solo lo es si quieres hacer cosas por tu cuenta o si no estoy disponible.

¡Un saludo!
```

###### Mail

```
Asunto: ENTREGA WEB cuprico.com
Cuerpo:
Te dejo aquí este email como referencia.

En el siguiente enlace tienes instrucciones sobre cosas referentes a tu sitio web (cómo modificar cosas, información extra, ect.):

https://seacomoseo.com/entrega/

No es necesario que lo veas, solo lo es si quieres hacer cosas por tu cuenta o si no estoy disponible.

¡Un saludo!
```
