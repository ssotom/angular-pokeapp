export class NamedAPIResource {
  name: string;
  url: string;
}

export class NamedAPIResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: NamedAPIResource[];
}
