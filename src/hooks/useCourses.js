import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://dark-alien-16530.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return { courses, setCourses };
};

export default useCourses;
