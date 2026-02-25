import { Link } from "react-router";
import PropTypes from "prop-types";
import {
  buildOptimizedUrl,
  buildResponsiveSrcSet,
} from "../../utils/imageHelpers";

const Item = ({ item }) => {
  const { id, name, logo, total } = item;
  const totalQuestions = Math.min(Number(total) || 0, 10);

  const logoSrc = buildOptimizedUrl(logo, 160);
  const logoSrcSet = buildResponsiveSrcSet(logo, [80, 160, 240]);

  return (
    <div className='space-y-4'>
      <figure className='flex items-center justify-center rounded-2xl bg-base-200/60 p-5'>
        <img
          src={logoSrc}
          srcSet={logoSrcSet}
          sizes='80px'
          alt={`${name} logo`}
          width='80'
          height='80'
          loading='lazy'
          decoding='async'
          className='h-20 w-20 object-contain'
        />
      </figure>
      <div className='space-y-3'>
        <h2 className='text-lg font-semibold text-base-content'>{name}</h2>
        <p className='text-3xl font-bold text-amber-400'>
          {totalQuestions}
          <span className='ml-2 text-xs font-medium uppercase tracking-widest text-base-content/60'>
            Questions
          </span>
        </p>
        <div>
          <Link to={`/item/${id}`}>
            <button className='btn btn-primary w-full'>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Item;
