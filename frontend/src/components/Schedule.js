import React, { useState } from "react";
import * as api from "../api";
import { FormGroup, FormControl, Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Schedule = ({ data }) => {
  const [startMonday, setStartMonday] = useState(data.schedule[0].startHour);
  const [startTuesday, setStartTuesday] = useState(data.schedule[1].startHour);
  const [startWednesday, setStartWednesday] = useState(
    data.schedule[2].startHour
  );
  const [startThursday, setStartThursday] = useState(
    data.schedule[3].startHour
  );
  const [startFriday, setStartFriday] = useState(data.schedule[4].startHour);
  const [startSaturday, setStartSaturday] = useState(
    data.schedule[5].startHour
  );
  const [startSunday, setStartSunday] = useState(data.schedule[6].startHour);

  const [endMonday, setEndMonday] = useState(data.schedule[0].endHour);
  const [endTuesday, setEndTuesday] = useState(data.schedule[1].endHour);
  const [endWednesday, setEndWednesday] = useState(data.schedule[2].endHour);
  const [endThursday, setEndThursday] = useState(data.schedule[3].endHour);
  const [endFriday, setEndFriday] = useState(data.schedule[4].endHour);
  const [endSaturday, setEndSaturday] = useState(data.schedule[5].endHour);
  const [endSunday, setEndSunday] = useState(data.schedule[6].endHour);
  const [loading, setLoading] = useState(false);
  const handleStartMonday = (event) => {
    setStartMonday(event.target.value);
  };
  const handleEndMonday = (event) => {
    setEndMonday(event.target.value);
  };

  const handleStartTuesday = (event) => {
    setStartTuesday(event.target.value);
  };
  const handleEndTuesday = (event) => {
    setEndTuesday(event.target.value);
  };
  const handleStartWednesday = (event) => {
    setStartWednesday(event.target.value);
  };
  const handleEndWednesday = (event) => {
    setEndWednesday(event.target.value);
  };
  const handleStartThursday = (event) => {
    setStartThursday(event.target.value);
  };
  const handleEndThursday = (event) => {
    setEndThursday(event.target.value);
  };
  const handleStartFriday = (event) => {
    setStartFriday(event.target.value);
  };
  const handleEndFriday = (event) => {
    setEndFriday(event.target.value);
  };
  const handleStartSaturday = (event) => {
    setStartSaturday(event.target.value);
  };
  const handleEndSaturday = (event) => {
    setEndSaturday(event.target.value);
  };
  const handleStartSunday = (event) => {
    setStartSunday(event.target.value);
  };
  const handleEndSunday = (event) => {
    setEndSunday(event.target.value);
  };

  const handleSaveButton = async (event) => {
    const newData = {
      schedule: [
        {
          day: "luni",
          startHour: startMonday,
          endHour: endMonday,
        },
        {
          day: "marti",
          startHour: startTuesday,
          endHour: endTuesday,
        },
        {
          day: "miercuri",
          startHour: startWednesday,
          endHour: endWednesday,
        },
        {
          day: "joi",
          startHour: startThursday,
          endHour: endThursday,
        },
        {
          day: "vineri",
          startHour: startFriday,
          endHour: endFriday,
        },
        {
          day: "sambata",
          startHour: startSaturday,
          endHour: endSaturday,
        },
        {
          day: "duminica",
          startHour: startSunday,
          endHour: endSunday,
        },
      ],
    };
    setLoading(true);
    try {
      let answer = await api.profile(newData);
      if (answer.success === true) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 767 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
    console.log(isMobile);
  };
  return (
    <div>
      <Desktop>
        <div className="schedule_provider">
          <div className="schedule_form">
            <Form>
              <div className="profile_title">
                <h2>Schedule</h2>
              </div>
              <div className="schedule_columns">
                <div className="schedule_row">
                  <div className="day_title">
                    <h4>DAY</h4>
                  </div>
                  <h4>START TIME</h4>
                  <h4>END TIME</h4>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5> MONDAY </h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startMonday}
                      value={startMonday}
                      type="text"
                      onChange={handleStartMonday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endMonday}
                      value={endMonday}
                      type="text"
                      onChange={handleEndMonday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>TUESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startTuesday}
                      value={startTuesday}
                      type="text"
                      onChange={handleStartTuesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endTuesday}
                      value={endTuesday}
                      type="text"
                      onChange={handleEndTuesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>WEDNESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startWednesday}
                      value={startWednesday}
                      type="text"
                      onChange={handleStartWednesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endWednesday}
                      value={endWednesday}
                      type="text"
                      onChange={handleEndWednesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>THURSDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startThursday}
                      value={startThursday}
                      type="text"
                      onChange={handleStartThursday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endThursday}
                      value={endThursday}
                      type="text"
                      onChange={handleEndThursday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>FRIDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startFriday}
                      value={startFriday}
                      type="text"
                      onChange={handleStartFriday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endFriday}
                      value={endFriday}
                      type="text"
                      onChange={handleEndFriday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SATURDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startSaturday}
                      value={startSaturday}
                      type="text"
                      onChange={handleStartSaturday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={startSaturday}
                      value={startSaturday}
                      type="text"
                      onChange={handleEndSaturday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SUNDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startSunday}
                      value={startSunday}
                      type="text"
                      onChange={handleStartSunday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endSunday}
                      value={endSunday}
                      type="text"
                      onChange={handleEndSunday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="submit_button">
                  <Button className="actual_button" onClick={handleSaveButton}>
                    Save
                  </Button>
                  <div></div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="schedule_provider_phone">
          <div className="schedule_form_phone">
            <Form>
              <div className="profile_title">
                <h2>Schedule</h2>
              </div>
              <div className="schedule_columns">
                <div className="schedule_row">
                  <div className="day_title">
                    <h4>DAY</h4>
                  </div>
                  <h4>START TIME</h4>
                  <h4>END TIME</h4>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5> MONDAY </h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startMonday}
                      value={startMonday}
                      type="text"
                      onChange={handleStartMonday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endMonday}
                      value={endMonday}
                      type="text"
                      onChange={handleEndMonday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>TUESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startTuesday}
                      value={startTuesday}
                      type="text"
                      onChange={handleStartTuesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endTuesday}
                      value={endTuesday}
                      type="text"
                      onChange={handleEndTuesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>WEDNESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startWednesday}
                      value={startWednesday}
                      type="text"
                      onChange={handleStartWednesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endWednesday}
                      value={endWednesday}
                      type="text"
                      onChange={handleEndWednesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>THURSDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startThursday}
                      value={startThursday}
                      type="text"
                      onChange={handleStartThursday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endThursday}
                      value={endThursday}
                      type="text"
                      onChange={handleEndThursday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>FRIDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startFriday}
                      value={startFriday}
                      type="text"
                      onChange={handleStartFriday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endFriday}
                      value={endFriday}
                      type="text"
                      onChange={handleEndFriday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SATURDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startSaturday}
                      value={startSaturday}
                      type="text"
                      onChange={handleStartSaturday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={startSaturday}
                      value={startSaturday}
                      type="text"
                      onChange={handleEndSaturday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SUNDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={startSunday}
                      value={startSunday}
                      type="text"
                      onChange={handleStartSunday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endSunday}
                      value={endSunday}
                      type="text"
                      onChange={handleEndSunday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="submit_button">
                  <Button className="actual_button" onClick={handleSaveButton}>
                    Save
                  </Button>
                  <div></div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default Schedule;
