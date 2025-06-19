import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function ProfileHeader({ displayName, email }) {
  return (
    <Box textAlign="center" mb={4}>
      <AccountCircleIcon sx={{ fontSize: 120, color: 'primary.light' }} />
      <Typography variant="h4" mb={1}>
        {displayName.split(' ')[0]}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {email}
      </Typography>
    </Box>
  );
}
export default ProfileHeader;
