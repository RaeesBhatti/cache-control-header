type NumericDuration = number;

type Duration =
  `${NumericDuration}sec`
  | `${NumericDuration}min`
  | `${NumericDuration}hr`
  | `${NumericDuration}day`
  | `${NumericDuration}week`
  | `${NumericDuration}mo`
  | `${NumericDuration}y`;

// Directives for cache-control header
type Directives = {
  public?: boolean;
  private?: boolean;
  immutable?: boolean;
  noCache?: boolean;
  noStore?: boolean;
  noTransform?: boolean;
  proxyRevalidate?: boolean;
  mustUnderstand?: boolean;
  maxAge?: Duration;
  sMaxAge?: Duration;
  staleWhileRevalidate?: Duration;
  staleIfError?: Duration;
}
export default function cacheControl(params: Directives): string {
  const directives = Object.entries(params).map(([key, value]) => {
    if (value === true) {
      return key;
    }
    if (value === false) {
      return undefined;
    }
    const parsedDuration = parseDuration(value);
    return `${key}=${parsedDuration}`;
  }).filter(Boolean);
  return directives.join(', ');
}

function parseDuration(duration: Duration): number {
  const [unparsedAmount, unit] = duration.split(/(\D+)/);
  if (!unparsedAmount || !unit) {
    throw new Error(`Invalid duration: ${duration}`);
  }
  const amount = parseInt(unparsedAmount);
  switch (unit) {
    case 'sec':
      return amount;
    case 'min':
      return amount * 60;
    case 'hr':
      return amount * 60 * 60;
    case 'day':
      return amount * 60 * 60 * 24;
    case 'week':
      return amount * 60 * 60 * 24 * 7;
    case 'mo':
      return amount * 60 * 60 * 24 * 30;
    case 'y':
      return amount * 60 * 60 * 24 * 365;
    default:
      throw new Error(`Invalid duration unit: ${unit}`);
  }
}
