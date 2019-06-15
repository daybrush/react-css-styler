import stringHash from "string-hash";
import { splitComma } from "@daybrush/utils";
export function getHash(str: string) {
  return stringHash(str).toString(36);
}
export function injectStyle(className: string, css: string) {
  const style = document.createElement("style");

  style.innerHTML = css.replace(/([^}{]*){/mg, (all, selector) => {
    return splitComma(selector).map(subSelector => `.${className} ${subSelector}`).join(", ") + "{";
  });

  (document.head || document.body).appendChild(style);
  return style;
}