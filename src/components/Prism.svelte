<script>
  import { afterUpdate } from "svelte";
  export let code = "";

  export let language = "javascript";
  export let classes = "";

  let fakeCodeEl;
  let formattedCode;

  afterUpdate(() => {
    if (fakeCodeEl && fakeCodeEl.innerHTML !== "") {
      code = fakeCodeEl.innerHTML;
    }
  });

  $: if (window && Prism && code) {
    formattedCode = Prism.highlight(code, Prism.languages[language], language);
  }
</script>

<code style="display: none;" bind:this={fakeCodeEl}>
  <slot />
</code>

<pre class="language-{language} {classes}">
  <code class="language-{language}">
    {@html code}
  </code>
</pre>
