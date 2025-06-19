import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

function ProfileActions({ onEdit, onLogout }) {
  return (
    <Box display="flex" gap={2} mb={6}>
      <Button variant="contained" startIcon={<EditIcon />} onClick={onEdit} sx={{ minWidth: 150 }}>
        Edit Profile
      </Button>
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        onClick={onLogout}
        sx={{ minWidth: 150 }}
      >
        Sign Out
      </Button>
    </Box>
  );
}
export default ProfileActions;
