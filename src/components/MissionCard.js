import React from "react";

const cutDetails = (value) => {
  if (value.length > 150) {
    return value.slice(0, 147) + "...";
  } else {
    return value;
  }
};

const MissionCard = (props) => {
  const { mission } = props;
  const date = new Date(mission.event_date_utc);
  const details = cutDetails(mission.details);
  return (
    <div className="mission-card">
      <div className="mission-card-top">
        <h4 className="mission-card-title">{mission.title}</h4>
        <div className="mission-number">{mission.flight_number || "-"}</div>
      </div>
      <div>
        <hr />
        <div className="mission-date">{date.toLocaleDateString()}</div>
        <div>{details}</div>
      </div>
    </div>
  );
};

export default MissionCard;
