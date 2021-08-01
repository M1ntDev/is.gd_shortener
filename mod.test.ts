import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";
import isgd from "./mod.ts";

Deno.test({
    name: "Shorten",
    fn: async () => {
        const shortURL = await isgd.shorten("https://example.com");
        assertEquals(shortURL, "https://is.gd/jGamH3")
    }
});

Deno.test({
    name: "Lookup",
    fn: async () => {
        const lookupURL = await isgd.lookup("https://is.gd/jGamH3");
        assertEquals(lookupURL, "https://example.com");
    }
});
