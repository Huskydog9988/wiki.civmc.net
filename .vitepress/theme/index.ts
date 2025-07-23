// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import { EnhanceAppContext } from "vitepress";

const newWiki = "https://civmc.net";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    if (typeof window !== "undefined") {
      // Only run in browser
      window.location.replace(newWiki);
    }
  },
};
