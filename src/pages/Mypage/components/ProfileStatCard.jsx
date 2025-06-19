import { Card, CardContent, CircularProgress, Typography } from '@mui/material';

function ProfileStatCard({ label, value, loading, onClick }) {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', textAlign: 'center' }}>
      <CardContent>
        {loading ? <CircularProgress size={32} /> : <Typography variant="h5">{value}</Typography>}
        <Typography variant="subtitle1">{label}</Typography>
      </CardContent>
    </Card>
  );
}
export default ProfileStatCard;
