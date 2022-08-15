import { useSelector, useDispatch } from 'react-redux';
import { CHECK_STATUS } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  return (
    <div>
      <div>{categories}</div>
      <button
        type="button"
        onClick={() => dispatch(CHECK_STATUS('Loading...'))}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
