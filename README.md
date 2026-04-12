# tu-delft
TU Delft's bottom-up integrity page for moral deliberation

## Adding new content

The website is designed to not rely on any external libraries. Only for the
timeline feature do we introduce an external library, but the static content served
does not depend on it, once generated. This general philosophy ensures a stable
page and predictable maintenance load.

Whenever possible, items are reused using web components; a native feature of
modern html. You can find these in the [components](components/) directory.

When new content is added, it should support both English and Dutch versions.
Both Dutch and English versions are always both present and loaded on the page.
Only one of the two is displayed at the same time, using css logic.

To mark items as Dutch or English content, add the following data attribute:
`data-lang-el={lang}, where `lang` follows the BCP 47 language tag standard,
meaning only `nl` and `en` are valid.

A complete example:

```html
<div data-lang-el=en>We want to have a say in university policy.</div>
<div data-lang-el=nl>Wij willen inspraak in het beleid van de universiteit.</div>
```

When adding new content, other other 'output' material such as events, also update the RSS entry. 

## Updating the RSS feed

The RSS feed provides a way for parties to keep up with our output without needing to provide any personal information, and allows people to combine different efforts on campus under a single banner.

The rss feed is contained in [feed.xml](feed.xml). It is in the [Atom 1.0 format](https://validator.w3.org/feed/docs/atom.html).

Have a look at the previous entries in the list and add new ones for new events. Note that you will have to generate two nontrivial pieces of information:
1. A unique ID (under the `<id>` tag). To keep it domain agnostic, I suggest you just [generate a uuid](https://www.uuidgenerator.net/version4) and then prepend `urn:uuid:` 
2. A timestamp; it should be in the following format: `yyyy-mm-ddTHH:MM:SS+01:00` e.g. `2026-04-01T17:00:00+01:00` 

> [!warning] Warning: The current approach for NL/EN language switching means that RSS readers tend to show both languges simultaneously. A fix for that should be implemented.