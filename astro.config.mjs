import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentry(),
    spotlightjs(), partytown({
    config:{debug:false}
  })]
});