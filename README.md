[![Build Status](https://travis-ci.com/M1ntDev/is.gd_shortener.svg?branch=main)](https://travis-ci.com/M1ntDev/is.gd_shortener)  

# is.gd Shortener

**Deno module for is.gd URL shortener.**

## Usage

**Using Promises**

```typescript
import isgd from "https://deno.land/x/isgd_shortener@1.0.0/mod.ts";

// Shorten URL
isgd.shorten(url).then((result) => {
    console.log(result);
});

// Lookup URL
isgd.lookup(url).then((result) => {
    console.log(result);
});
```

**Using Async/await**

```typescript
import isgd from "https://deno.land/x/isgd_shortener@1.0.0/mod.ts";

// Shorten URL
(async () => {
    const result = await isgd.shorten(url);
    console.log(result);
})();

// Lookup URL
(async () => {
    const result = await isgd.lookup(url);
    console.log(result);
})();
```

## License
Please read the <a href="https://github.com/M1ntDev/is.gd_shortener/blob/main/LICENSE">LICENSE</a> file.