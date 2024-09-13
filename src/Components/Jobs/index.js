import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { Skeleton, Snackbar, Alert } from "@mui/material";
import "./index.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false); 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://testapi.getlokalapp.com/common/jobs?page=1`
        );
        if (!response.ok) {
          throw new Error("Error fetching jobs");
        }
        const data = await response.json();
        setJobs(data.results);
        setLoading(false);
      } catch (error) {
        setError("Error fetching jobs");
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleBookmark = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(job);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    setSnackbarOpen(true); 
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); 
  };

  const renderSkeleton = () => (
    <div className="job-card">
      <Skeleton variant="rectangular" width={300} height={40} />
      <Skeleton variant="rectangular" width={200} height={20} />
      <Skeleton variant="rectangular" width={150} height={20} />
      <Skeleton variant="rectangular" width={250} height={20} />
    </div>
  );

  if (error) return <p>{error}</p>;

  return (
    <div className="jobs-page">
      <div className="header-container">
        <Link to="/" className="head-link">
          <h1>Jobs Portal</h1>
        </Link>
      </div>
      <div className="jobs-container">
        {loading
          ? [1, 2, 3, 4].map((index) => renderSkeleton(index))
          : jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div>
                  <h3>{job.title}</h3>
                  <div className="detail-container">
                    <IoLocationOutline size="21" />
                    <p>{job.primary_details?.Place || "Not Available"}</p>
                  </div>
                  <div className="detail-container">
                    <MdOutlineAttachMoney size="21" />
                    <p>{job.primary_details?.Salary || "Not Available"}</p>
                  </div>
                  <div className="detail-container">
                    <FaPhoneAlt size="21" />
                    <p>{job?.whatsapp_no || "Not Available"}</p>
                  </div>
                  <Link to={`/job/${job.id}`} className="view-link">
                    View Details...
                  </Link>
                </div>
                <div>
                  <button onClick={() => handleBookmark(job)}>
                    <IoBookmarkOutline size="20" />
                  </button>
                </div>
              </div>
            ))}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Job Bookmarked!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Jobs;
