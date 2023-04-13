import React from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  transition: '0.2s',
  ':hover': {
    background: theme.palette.grey[300],
  },
}))

function Card({ singer, selected, onClick }) {
  const backgroundSx = React.useCallback(
    (theme) => ({
      backgroundColor: selected
        ? theme.palette.info.main
        : theme.palette.grey[50],
    }),
    [selected]
  )

  return (
    <Item elevation={3} onClick={() => onClick(singer)} sx={backgroundSx}>
      <Avatar src={singer.image} sx={{ height: 65, width: 65 }} />

      <Typography variant='h6' sx={{ marginLeft: 3 }}>
        {singer.name}
      </Typography>

      {selected && (
        <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
          <AddTaskIcon />
        </Box>
      )}
    </Item>
  )
}

export default React.memo(Card)
