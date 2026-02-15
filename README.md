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
