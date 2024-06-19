export function pickingFilter<T, F>(arr: T[], filterValue: F, fieldName: keyof T) {
  return arr.filter(item => {
    return filterValue === null ? item : filterValue === item[fieldName];
  });
}

