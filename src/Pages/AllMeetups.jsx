import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetups-ddc68-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let meetups = [];
        for (const key in data) {
          meetups.push({ id: key, ...data[key] });
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <p>Loading...</p> : <MeetupList meetups={loadedMeetups} />}
    </section>
  );
}

export default AllMeetups;
