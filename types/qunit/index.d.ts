interface Assert {
  url: {
    equals(expectedUrl: string, expectedQueryParams?: { [key: string]: string }): void;
    includes(str: string): void;
    doesNotInclude(str: string): void;
    hasQueryParameters(qps: { [key: string]: string }): void;
    doesNotHaveQueryParameters(qps: { [key: string]: string }): void;
  };
}
