# cache-control-header
Utility function that outputs Cache-Control header string based on given parameters

## Usage
ESM import:
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

CommonJS require:
```js
const {default: cacheControl} = require('cache-control-header');
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
  public?: true;
  private?: true;
  immutable?: true;
  noCache?: true;
  noStore?: true;
  noTransform?: true;
  proxyRevalidate?: true;
  mustUnderstand?: true;
  maxAge?: false | Duration;
  sMaxage?: false | Duration;
  staleWhileRevalidate?: false | Duration;
  staleIfError?: false | Duration;
};
export default function cacheControl(params: Directives): string;
```
