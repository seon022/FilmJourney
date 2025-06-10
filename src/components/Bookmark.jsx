import React, { useState } from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { red } from '@mui/material/colors';

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault(); // <-- 링크 이동 자체 막기
    e.stopPropagation(); // <-- 이벤트 전파 막기
    setBookmarked((prev) => !prev);
  };

  return (
    <div className="favorite-icons" onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {bookmarked ? (
        <FavoriteOutlinedIcon sx={{ color: red[400] }} />
      ) : (
        <FavoriteBorderOutlinedIcon sx={{ color: red[200] }} />
      )}
    </div>
  );
};

export default Bookmark;
