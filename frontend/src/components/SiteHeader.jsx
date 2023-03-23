import { Link } from 'react-router-dom';

const SiteHeader = () => {
  return (
    <div className="siteHeader">
        <Link to="/">
            <h1>Movie Reviews</h1>
        </Link>
    </div>
  )
}

export default SiteHeader;
