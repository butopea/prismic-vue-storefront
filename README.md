# Vue Storefront Prismic Module

This is the Vue Storefront part (module) of the Prismic integration. It requires the [Vue Storefront API counterpart (extension)](https://github.com/butopea/prismic-vue-storefront-api) to work.  

Tested on Vue Storefront v1.11.0

## Data Flow:

![](docs/assets/dataflow.png)

## Features:

- [ ] Dynamic and prefixed URLs (via [mapping fallback](https://github.com/kodbruket/vsf-mapping-fallback/))
- [X] Server-side rendering (SSR)
- [ ] Preview mode (non-cached, direct data retrieval)
- [ ] In-website edit button
- [X] Webhook sync callback support (on publish)
- [ ] CLI sync script (cronjob)
- [ ] Queued sync (via Kue)
- [X] ElasticSearch data cache
- [X] Slices field support for dynamic page layouts
- [X] Content retrieval based on ID/UID, custom types, tags, filters, and languages
- [X] Document search

## Credits

Made with ❤ by [Butopêa](https://butopea.com)

## Support

Please ask your questions regarding this extension on Vue Storefront's Slack https://vuestorefront.slack.com/ You can join via [this invitation link]((https://join.slack.com/t/vuestorefront/shared_invite/enQtNTAwODYzNzI3MjAzLWFkZjc0YjVjODA1Y2I2MTdlNmM0NThjY2M5MzgzN2U2NzE4YmE2YzA4YTM0MTY3OWQzZjBhMjBlZDhmYjAyNGI)).

## License

This extension is completely free and released under the MIT License.
