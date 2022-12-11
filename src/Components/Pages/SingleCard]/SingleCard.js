import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from '../Details/ProjectDetails';




const SingleCard = ({singleData}) => {
    const{Img,title, desc, _id} = singleData;
    return (
        <div className="card border">
        <figure>
          <img src={Img} className='' alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title} </h2>
          <p className='text-xl'>{desc.slice(0, 81)}</p>
          <div className="card-actions justify-end">

            <Link to={`/projectDetails/${_id}`}>
            <button className=" btn btn-outline bgColor ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleCard;