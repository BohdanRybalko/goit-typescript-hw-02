function flexibleVariable<T>(value: T): T {
  return value;
}

let result: number | string | object = flexibleVariable(-20);
result = flexibleVariable('Text');
result = flexibleVariable({});
