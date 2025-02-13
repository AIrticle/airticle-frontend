import * as React from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';

export default function ButtonUsage() {

  return (
    <Stack
      margin="10vh auto"
      width="90vw"
      height="80vh"
      sx={{ border: 1 }}
      spacing={1}
    >
      <Stack
        width="50%"
      >
        <TextField 
          id="outlined-notes_input" 
          label="Enter your notes for an article here!" 
          multiline
          fullWidth
          rows={22}
          />
        <Stack
          direction="row"
          >
          <Box
            width={"50%"}
            paddingLeft="4px"
            paddingRight="2px"
            >
            <Button variant="contained" fullWidth>Publish</Button>
          </Box>
          <Box
            width={"50%"}
            paddingLeft="2px"
            paddingRight="4px"
            >
            <Button variant="contained" fullWidth>Parse Notes</Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}