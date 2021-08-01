import axiod from "https://deno.land/x/axiod/mod.ts";

export default async function shorten(url: string): Promise<string> {
    try {
        const res = await axiod.get(
            `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
        );

        return res.data.shorturl;
    } catch (error) {
        return error;
    }
}
