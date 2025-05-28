import { useEffect } from "react";
import { Container, Box, TextField, Typography, Button } from "@mui/material";

import BackHeader from "../components/BackHeader";
import useUserStore from "../store/userStore";

const EditProfile = () => {
  const { user } = useUserStore();
  useEffect(() => {});

  return (
    <div>
      <BackHeader text="Edit Profile" />
      <Container
        maxWidth="sm"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="p" mb={1}>
          USERNAME
        </Typography>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="updateUsername"
            value={user.displayName.split(" ")[0]}
          />
        </Box>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <Button variant="contained" sx={{ minWidth: 150 }}>
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default EditProfile;
