import shorten from "./shorten.ts";
import lookup from "./lookup.ts";

export default {
    shorten: (url: string) => {
        return shorten(url);
    },
    lookup: (url: string) => {
        return lookup(url);
    }
}
