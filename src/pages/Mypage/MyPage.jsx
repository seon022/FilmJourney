import { useEffect, useState } from 'react';

import { Grid2 } from '@mui/material';
import { Container } from '@mui/system';
import { Navigate, useNavigate } from 'react-router-dom';

import ProfileActions from './components/ProfileAction';
import ProfileHeader from './components/ProfileHeader';
import ProfileStatCard from './components/ProfileStatCard';
import useUserStore from '../../store/userStore';
import useMovieStore from '../../store/movieStore';

function MyPage() {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();
  const { reviews, fetchReviews } = useMovieStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.userId) {
      setLoading(true);
      fetchReviews().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user?.userId, fetchReviews]);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Container
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        py: 6,
      }}
    >
      <ProfileHeader displayName={user.displayName} email={user.email} />
      <ProfileActions onEdit={() => navigate('/edit-profile')} onLogout={logout} />
      <Grid2 container spacing={2} sx={{ width: '100%' }}>
        <Grid2 size="grow">
          <ProfileStatCard
            label="Reviews"
            value={reviews.length}
            loading={loading}
            onClick={() => navigate('/review')}
          />
        </Grid2>
        <Grid2 size="grow">
          <ProfileStatCard
            label="Favorites"
            value={user.favoriteCount || 0}
            loading={false}
            onClick={() => navigate('/favorites')}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default MyPage;
