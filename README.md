# cache-control-header
Utility function that outputs Cache-Control header string based on given parameters

## Usage
```ts
import cacheControl from 'cache-control-header';

// Outputs: max-age=86400, s-maxage=0, immutable, stale-while-revalidate=604800
console.log(cacheControl({
  maxAge: '1day',
  sMaxage: false,
  immutable: true,
  staleWhileRevalidate: '1week',
}));
```

## API
```ts
type NumericDuration = number;
type Duration = `${NumericDuration}sec` | `${NumericDuration}min` | `${NumericDuration}hr` | `${NumericDuration}day` | `${NumericDuration}week` | `${NumericDuration}mo` | `${NumericDuration}y`;
type Directives = {
    public?: boolean;
    private?: boolean;
    immutable?: boolean;
    noCache?: boolean;
    noStore?: boolean;
    noTransform?: boolean;
    proxyRevalidate?: boolean;
    mustUnderstand?: boolean;
    maxAge?: false | Duration;
    sMaxAge?: false | Duration;
    staleWhileRevalidate?: false | Duration;
    staleIfError?: false | Duration;
};
export default function cacheControl(params: Directives): string;
```
