import React from 'react'
import { NavLink } from "react-router-dom";

function CampaignItem({campaign, onDeleteItem, index}) {
    console.log(campaign)
    function handleDeleteClick() {
        fetch(`/campaigns/${campaign.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteItem(campaign));
      }

      const truncate =(string,n)=>{
        return string?.length > n ? string.substr(0,n-1) + '...': string
      }
      return(
        <div className="campaigns-img col-md-4 mb-4 mt-4 " key={index}>
        <div className="card h-100 text-center p-4" key={campaign.id}>
          <img src={campaign.image_url} className="card-img-top" alt={campaign.title} height="400px"/>
          <div className="card-body">
              <h5 className="card-title mb-0">{truncate(campaign.description, 150)}</h5>
              <p className="card-text lead fw-bold">${campaign.goal_amount}</p>
              <div className="buttons" style={{display: "flex", justifyContent: "space-between"}}>
                <NavLink to={`/campaigns/${campaign.id}`} className="btn btn-outline-dark">View Campaign</NavLink>
                <button className="btn btn-outline-dark" onClick={handleDeleteClick}>Delete Campaign</button>
              </div>
          </div>
          </div>
        </div>
    )
}

export default CampaignItem