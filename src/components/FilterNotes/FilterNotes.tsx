import './FilterNotes.scss';
import { COLORS } from '../../redux/notes/constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectFilters } from '../../redux/filters/selectors';
import { useCallback } from 'react';
import { addFilterColor, removeFilterColor, resetFilter, setFavorite } from '../../redux/filters';
import { Favorite, FilterNames } from '../../redux/filters/interfaces';
import { Colors } from '../../redux/notes/interfaces';

export default function FilterNotes() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  const handleFavoriteChange = useCallback(
    (value: Favorite) => {
      dispatch(setFavorite(value));
    },
    [dispatch]
  );

  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, color: Colors) => {
      if (event.target.checked) {
        dispatch(addFilterColor(color));
        return;
      }

      dispatch(removeFilterColor(color));
    },
    [dispatch]
  );

  return (
    <form className="filterNotes__form">
      <fieldset className="filterNotes__fieldset" name="favoritesFieldset">
        <button
          type="button"
          className="filterNotes__resetBtn"
          onClick={() => dispatch(resetFilter(FilterNames.favorite))}
        >
          reset filter
        </button>
        <div className="checkbox__wrapper">
          <input
            className="checkbox__input"
            type="radio"
            value="true"
            name="favorite"
            id="favorite"
            onChange={() => handleFavoriteChange(true)}
            checked={filters.favorite && filters.favorite.value === true}
          />
          <span className="checkbox__checked checkbox__checked--black "></span>
          <label htmlFor="favorite" className="checkbox__label">
            Favorite
          </label>
        </div>

        <div className="checkbox__wrapper">
          <input
            type="radio"
            value="false"
            className="checkbox__input"
            name="favorite"
            id="noFavorite"
            onChange={() => handleFavoriteChange(false)}
            checked={filters.favorite && filters.favorite.value === false}
          />
          <span className="checkbox__checked checkbox__checked--black "></span>
          <label htmlFor="noFavorite" className="checkbox__label">
            Not Favorite
          </label>
        </div>
      </fieldset>
      <fieldset className="filterNotes__fieldset" name="colorsFieldset">
        <button
          type="button"
          className="filterNotes__resetBtn"
          onClick={() => dispatch(resetFilter(FilterNames.colors))}
        >
          reset filter
        </button>

        {COLORS.map((color, index) => (
          <div className="checkbox__wrapper" key={index}>
            <input
              className="checkbox__input"
              type="checkbox"
              id={color.value}
              value={color.value}
              name="color"
              onChange={e => handleColorChange(e, color.value)}
              checked={filters.colors && filters.colors.value.includes(color.value)}
            />
            <span className={`checkbox__checked ${color.value}`}></span>
            <label className="checkbox__label" htmlFor={color.value}>
              {color.name}
            </label>
          </div>
        ))}
      </fieldset>
    </form>
  );
}