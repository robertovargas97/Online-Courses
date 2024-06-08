import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../journal/components'

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          Jun 08, 2024
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 1 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Add a tile"
          label="Title"
          sx={{ border: 'none', mb: 1, mt: 2 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What's new"
          sx={{ border: 'none', mb: 1, mt: 2 }}
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
