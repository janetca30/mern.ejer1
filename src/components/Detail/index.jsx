import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import citiesActions from '../../store/actions/cities';
import ItineraryCard from '../ItineraryCard';
import './style.css'

const Detail = () => {
  
  const dispatch = useDispatch();
  const { cityId } = useParams();
  
  const citiesInStore = useSelector(store => store.citiesReducer.cities);
  const city = citiesInStore.find(city => city._id === cityId)

  useEffect(() => {
    dispatch(citiesActions.filter_cities_by_id(cityId));
  }, [dispatch, cityId]);

  if (!city || Object.keys(city).length === 0) {
    return <p>Loading...</p>;
  }
    
  return (
    <>
      <div className="city-detail inline-flex mt-5">
        <img src={city.photo} alt={city.name} className="image w-7/12 h-96" />
        <div className="ml-10">
          <div className=" text1 flex justify-around">
            <h2 className="text-3xl font-bold Font text-cyan-300">{city.name}</h2>
            <h2 className="text-3xl font-bold text-center text-blue-700">{city.country}</h2>
          </div>
          <p className="desc mt-3 ">{city.description}</p>
          <Link to="/Cities" className="btn bg-cyan-300 mt-4">
            Back to Cities
          </Link>
        </div>
      </div>
      <div>
        <ItineraryCard cityId={city._id} />
         
      </div>
    </>
  );
};

export default Detail;






