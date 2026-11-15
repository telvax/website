// Colors the Telvax examples on the page: keywords and decorators in Volt, comments and strings dimmed.
// Without JavaScript the code is still there, in one color.
const KEYWORDS =
  /^(fn|let|var|type|for|in|if|elif|else|return|import|from|match|while|break|continue|is|and|or|not|async|await|trait|impl|enum|test)$/;
const TOKEN = /(#[^\n]*)|(f?"(?:[^"\\\n]|\\.)*")|(@[A-Za-z_]\w*)|([A-Za-z_]\w*)|([\s\S])/g;

const escape = (text) => text.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);

for (const block of document.querySelectorAll('pre[data-tvx]')) {
  block.innerHTML = block.textContent.replace(TOKEN, (all, comment, string, decorator, word) => {
    if (comment) return `<span class="c">${escape(comment)}</span>`;
    if (string) return `<span class="s">${escape(string)}</span>`;
    if (decorator) return `<span class="k">${decorator}</span>`;
    if (word && KEYWORDS.test(word)) return `<span class="k">${word}</span>`;
    if (word && /^[A-Z]/.test(word)) return `<span class="t">${word}</span>`;
    return escape(all);
  });
}
