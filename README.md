# Telvax website

The landing page of Telvax: what the language is, what it is for and how to install it. It links to the
documentation, which is `site/` in [telvax/telvax](https://github.com/telvax/telvax) and is published at
<https://telvax.github.io/telvax/>. The playground (WebAssembly) is `playground/` there too.

## The page

The site is static, with no build step: `index.html`, `style.css` and `highlight.js` (it colors the Telvax
examples; without JavaScript the code is shown in one color). To see it:

```sh
python3 -m http.server 8000     # http://localhost:8000/
```

`.github/workflows/pages.yml` publishes it to GitHub Pages on every push to `main`, once Pages is turned on
for the repository with GitHub Actions as the source.

The code examples are copied from `examples/` and `docs/guide/use-cases.md` of `telvax/telvax`. When one
changes there, change it here.

## Identity

The page follows the brand book: Carbono `#0E0F11`, Osso `#EDEBE4` and Volt `#D7FF3F` as the only accent
(on a light ground Volt is a fill behind Carbono text, never a text color); Space Grotesk for titles and text,
JetBrains Mono for code and uppercase labels; square corners.

| File | Use |
|---|---|
| `assets/brand/avatar.png`, `avatar.svg` | the avatar of the organization and app icon: the symbol without brackets, on Carbono |
| `assets/brand/symbol-dark.svg` | the symbol with brackets, for a dark ground |
| `assets/brand/symbol-light.svg` | the symbol in one color, for a light ground |
| `assets/brand/social-preview.png` | the social preview of a repository (1280×640), uploaded by hand in the settings of each repository |
| `favicon.svg` | the favicon |

The fonts in `assets/fonts/` are under the SIL Open Font License (the two `OFL-*.txt` files).

## License

Dual-licensed under MIT (`LICENSE-MIT`) or Apache 2.0 (`LICENSE-APACHE`), at your option.
