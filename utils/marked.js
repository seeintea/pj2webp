import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/scss/atom-one-dark.scss';

marked.setOptions({
	  renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
})

const getMarkdownText = (input) => {
	var rawMarkup = marked(input, {sanitize: true});
	return { __html: rawMarkup };
}

export default getMarkdownText