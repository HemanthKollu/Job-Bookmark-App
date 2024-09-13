import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css'

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?${id}`);
        if (!response.ok) {
          throw new Error('Fetching Not Found');
        }
        const data = await response.json();
        // console.log(data)
        setJob(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching job Data');
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  return (
    <div className='job-details-container'>
      <img src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png" alt='not-found' className='not-found-img'/>
      <p className='not-found-page'>Job Details Not Found</p>
    </div>
  );
};

export default JobDetails;
