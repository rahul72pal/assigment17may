import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {jobs.map(job => (
        <Link to={`/job/${job._id}`} key={job._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-500 text-sm">{job.location} • {job.type}</p>
        </Link>
      ))}
    </div>
  );
}