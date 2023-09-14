import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../../store/actions/cities';

const Cities = () => {
  
  const [filter, setFilter] = useState('');
  const citiesInStore = useSelector((store) => store.citiesReducer.cities)
  const dispatch = useDispatch();

  useEffect(() =>  {
    dispatch(citiesActions.get_cities())
  }, [dispatch]);

  const hFilterChange = (event) => {
    const cFilter = event.target.value.trim().toLowerCase();
    setFilter(cFilter);
  };

  const filteredCities = citiesInStore.filter((city) =>
    city.name.toLowerCase().startsWith(filter)
  );

  return (
    <>
      <nav className="">
        <div className="">
          <form className="d-flex" role="search">
            <input
              className="form-control me-3"
              type="search"
              id="searchInput"
              placeholder="Search"
              aria-label="Search"
              onChange={hFilterChange}
              value={filter}
            />
          </form>
        </div>
      </nav>
      <div className="tcard-container">
        <h2 className="text-4xl font-bold text-blue-950 text-center">Cities</h2>
        <div className="card-deck d-flex flex-wrap justify-content-center gap-5">
          {filteredCities.length === 0 ? (
            <p className='text-4xl text-cyan-300 p-5'>No cities found</p>
          ) : (
            filteredCities.map((city) => (
              <div className="" key={city._id}>
                <img
                  src={city.photo}
                  className="w-80 h-52 mt-5"
                  alt={city.name}
                />
                <div className="tcard-body">
                  <h4 className="d-flex justify-content-center text-2xl font-bold text-blue-950">
                    {city.name}
                  </h4>
                  <h4 className="d-flex justify-content-center">
                    {city.country}
                  </h4>
                  <Link to={`/Detail/${city._id}`} className="btn bg-cyan-300">
                    Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Cities;
