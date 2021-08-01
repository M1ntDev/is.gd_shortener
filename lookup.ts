import axiod from "https://deno.land/x/axiod/mod.ts";

export default async function lookup(url: string): Promise<string> {
    try {
        const res = await axiod.get(
            `https://is.gd/forward.php?format=json&shorturl=${encodeURIComponent(url)}`
        );

        return res.data.url;
    } catch (error) {
        return error;
    }
}
