export function containingFilter<T>(arr: T[], filterValues: T[keyof T][], fieldName: keyof T) {
  return arr.filter(item => (filterValues.length !== 0 ? filterValues.includes(item[fieldName]) : arr));
}