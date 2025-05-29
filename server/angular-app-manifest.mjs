
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Academy_UI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Academy_UI/home"
  },
  {
    "renderMode": 2,
    "route": "/Academy_UI/classes"
  },
  {
    "renderMode": 2,
    "route": "/Academy_UI/admissions"
  },
  {
    "renderMode": 2,
    "route": "/Academy_UI/whyus"
  },
  {
    "renderMode": 2,
    "route": "/Academy_UI/contacts"
  },
  {
    "renderMode": 2,
    "route": "/Academy_UI/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 502, hash: '65370428d856af6ff23c93783abea60c161c9703fe3b005cb8d6c23ab49579c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '11eb88698ce8ae6ec42b4fe6008b1c862b7a583129775a3dd1f3fc4a76b1303d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admissions/index.html': {size: 6430, hash: '5df38be75108ed4c0bc034934086b087e5e1312d6e94ebfc17f9acb38af3a989', text: () => import('./assets-chunks/admissions_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13744, hash: '3c767fd5fdff4582aeebb5cf9627e33b3323bde1a5526ae81d563e98ac96e195', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'classes/index.html': {size: 7532, hash: 'b6f6b9737ae67d146b6c5f27f7aac49a4846e34bc401b635a0e1d9c0445b0806', text: () => import('./assets-chunks/classes_index_html.mjs').then(m => m.default)},
    'whyus/index.html': {size: 5920, hash: '40c2ba3fa03d13a4fd1de8206d2d1d22dc093b0a9d04f37514f870c485530a53', text: () => import('./assets-chunks/whyus_index_html.mjs').then(m => m.default)},
    'contacts/index.html': {size: 4199, hash: '72234eecaaa8a34abc058e19af4865e016e8c9667d5b282771d2b9fefeb95547', text: () => import('./assets-chunks/contacts_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
