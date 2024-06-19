
import { useDispatch, useSelector } from 'react-redux';
import './ChooseBackground.scss';
import { imgArr } from './imgArr';
import { changeBg } from '../../redux/background';
import { useState } from 'react';
import { RootState } from '../../redux/store';

export default function ChooseBackground() {
  const [errorImg, setErrorImg] = useState<number[]>([]);
  const dispatch = useDispatch();
  const bgImg = useSelector((state: RootState) => state.reducer.background);

  function handleClickBg(img: string) {
    dispatch(changeBg(img));
  }

  function handleImageError(index: number) {
    setErrorImg(state => [...state, index]);
  }

  return (
    <ul className="chooseBackground__list">
      {imgArr.map((img, index) => (
        <li className="chooseBackground__item" key={index} onClick={() => handleClickBg(img)}>
          {errorImg.includes(index) ? (
            <div className="errorImg">Sorry, this image is currently unavailable.</div>
          ) : (
            <img
              src={img}
              alt="background"
              onError={() => handleImageError(index)}
              className={`chooseBackground__img ${bgImg === img ? 'chooseBackground__img--border' : ''}`}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
