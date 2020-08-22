import * as sapper from "@sapper/app";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

import "prismjs/themes/prism.css";
import "prismjs/themes/prism-coy.css";

sapper.start({
  target: document.querySelector("#sapper"),
});
