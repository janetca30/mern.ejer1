import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../../store/actions/itineraries";
import './style.css'; 
import { useEffect, useState } from 'react';

const ItineraryCard = ({ cityId }) => {
  
  const dispatch = useDispatch();
  
  const itinerariesInStore = useSelector((store) => store.itinerariesReducer.itineraries);
  const [open, setOpen] = useState({});

  useEffect(() => {
    dispatch(itinerariesActions.get_itineraries_by_city(cityId));
  }, [dispatch, cityId]);

  const handleViewMoreClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
  };

  if (!Array.isArray(itinerariesInStore)) {
    // Manejar el caso en el que itinerariesInStore no sea un array
    return <p>Itineraries not available.</p>;
  }
  console.log('itinerariesInStore:' , itinerariesInStore)
  const filteredItineraries = itinerariesInStore.filter((itinerary) => itinerary.city === cityId);
  
  if (!filteredItineraries || filteredItineraries.length === 0) {
    return <p>There are no itineraries available for this city.</p>;
  }

  return (
    <>
      <div className="container">
        <h3 className='text-4xl text-center font-bold mt-5 text-pink-600'>Itineraries</h3>
      </div>
      <div className="cardItinerary bg-blue-950 mt-5 p-5 text-white">
        {filteredItineraries.map((itinerary) => (
          <div className='itinerary-container' key={itinerary._id}>
            <div >
              <div className='itinerary-title '>
                <h3 className="text-pink-600 text-3xl font-semibold flex justify-center">{itinerary.name}</h3>
              </div>
              <div className="container inline-flex mt-5 " >
                <div className="itin-photo">
                  <img src={itinerary.photo} className="itiPhoto w-96 h-64 "  />
                </div>
                <div className="itin-info-1 ml-24">
                  <div className='text-lg'>
                    <h4>Author:</h4>
                    <p>{itinerary.author}</p>
                  </div>
                  <div className="">
                    <h4>Likes:</h4>
                    <p>{itinerary.likes}</p>
                    <div className="likes-container inline-flex">
                      {[...Array(5)].map((_, i) => (
                      <img
                      key={i}
                      className="heart-icon w-10"
                      src={i < itinerary.likes ? "https://i.imgur.com/ZqV202K.png" : "https://i.imgur.com/eKG9yGG.png"}
                      alt="heart"/>
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <h4>Price:</h4>
                    <p>{itinerary.price}</p>
                    <div className="likes-container inline-flex">
                      {[...Array(5)].map((_, i) => (
                      <img
                      key={i}
                      className="bill-icon w-10"
                      src={i < itinerary.price ? "https://i.imgur.com/mWb9dA7.png" : "https://i.imgur.com/Ba3zRBE.png"}
                      alt="bill"/>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='itin-info-2 text-lg ml-24  '>
                  <div className=" ">
                    <h4>Duration:</h4>
                    <p>{itinerary.duration} minutes</p>
                  </div>
                  <div>
                    <h4>#HashTags:</h4>
                    {itinerary.hashtags.map((hashtag, index) => (
                    <p key={index}>{hashtag}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
            <button className="arrow w-14 inline-flex justify-center text-green-700 font-semibold" onClick={() => handleViewMoreClick(itinerary._id)}>View More<img src="https://i.imgur.com/OkCXBDt.png"/></button>
            {open[itinerary._id] ? (
              <div className="dropContent">
                <div className="comment-container">
                  <h4>Comment:</h4>
                  {itinerary.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                  ))}
                </div>
                <div className="activities-container">
                  <h4>Activities:</h4>
                  <img src='https://i.imgur.com/HZKpOFo.png' />
                </div>
              </div>
            ): null}
            </div>
          </div>
        ))}
      </div>
      
    </>
  )
};

export default ItineraryCard
