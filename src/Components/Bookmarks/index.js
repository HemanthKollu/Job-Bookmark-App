import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const storedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(storedBookmarks);
      setLoading(false); 
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="bookmarks-container">
        <Link to="/" className="bookmark-header">
          <h1>Bookmarked Jobs</h1>
        </Link>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bookmark-card">
            <Skeleton variant="text" width={150} height={30} />
            <Skeleton variant="rectangular" width={250} height={20} />
            <Skeleton variant="rectangular" width={250} height={20} />
            <Skeleton variant="rectangular" width={250} height={20} />
          </div>
        ))}
      </div>
    );
  }

  if (bookmarks.length === 0)
    return <p className="no-bookmark">No Bookmarked Jobs</p>;

  return (
    <div className="bookmarks-container">
      <Link to="/" className="bookmark-header">
        <h1>Bookmarked Jobs</h1>
      </Link>
      {bookmarks.map((job) => (
        <div key={job.id} className="bookmark-card">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
