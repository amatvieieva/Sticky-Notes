import { createSelector } from '@reduxjs/toolkit';
import { selectNotes } from './notes/selectors';
import { selectFilters } from './filters/selectors';
import { FilterType } from './filters/interfaces';
import { containingFilter } from '../utils/filters/containingFilter';
import { pickingFilter } from '../utils/filters/pickingFilter';

export const selectVisibleNotes = createSelector([selectNotes, selectFilters], (notes, filters) => {
  const filterItems = Object.values(filters);
  return filterItems.reduce((acc, filter) => {
    switch (filter.type) {
      case FilterType.Containing:
        if (!Array.isArray(filter.value)) return acc;
        return containingFilter(acc, filter.value, filter.fieldName);

      case FilterType.Picking:
        return pickingFilter(acc, filter.value, filter.fieldName);

      default:
        return acc;
    }
  }, notes);
});