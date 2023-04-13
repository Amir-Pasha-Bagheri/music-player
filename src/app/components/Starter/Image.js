import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import { useDispatch, useSelector } from 'react-redux'
import { updateAvatar } from '../../store/userSlice'
import { showMessage } from '../../store/messageSlice'

function Image({ pageContainerRef, unmount }) {
  const [image, setImage] = React.useState(null)
  const [shouldDisplay, setShouldDisplay] = React.useState({
    container: true,
    title: false,
    input: false,
    submit: false,
  })

  const { name } = useSelector((state) => state.user)

  const boxContainerRef = React.useRef()
  const inputRef = React.useRef()

  const dispatch = useDispatch()

  const inputClick = () => {
    inputRef.current.click()
  }

  const inputChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))

    inputRef.current.value = ''
  }

  const handleNext = () => {
    if (!image) {
      dispatch(
        showMessage({
          variant: 'image',
          text: 'Please choose an image to continue',
        })
      )
    } else {
      dispatch(updateAvatar(image))
      setShouldDisplay((prev) => ({ ...prev, container: false }))
    }
  }

  const handleSkip = () => {
    unmount()
  }

  React.useEffect(() => {
    const intialTime = 0

    const title = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, title: true }))
    }, intialTime + 300)

    const input = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, input: true }))
    }, intialTime + 150)

    const submit = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, submit: true }))
    }, intialTime + 400)

    return () => {
      clearTimeout(title)
      clearTimeout(input)
      clearTimeout(submit)
    }
  }, [])

  return (
    <Slide
      direction='down'
      in={shouldDisplay.container}
      container={pageContainerRef.current}
      onExited={unmount}
    >
      <Paper
        sx={{
          width: { xs: '80vw', lg: '35vw' },
          height: 'max-content',
          padding: 4,
          overflow: 'hidden',
        }}
        ref={boxContainerRef}
      >
        <Slide
          direction='up'
          in={shouldDisplay.title}
          container={boxContainerRef.current}
        >
          <Typography variant='h4' sx={{ marginLeft: 3 }}>
            Alright {name} !
          </Typography>
        </Slide>

        <Slide
          direction='up'
          in={shouldDisplay.title}
          container={boxContainerRef.current}
        >
          <Box sx={{ marginTop: 3, marginLeft: 3 }}>
            <Typography variant='h5' sx={{ marginBottom: 0.5 }}>
              Do you want to set image for your account ?
            </Typography>
          </Box>
        </Slide>

        <Slide
          direction='up'
          in={shouldDisplay.input}
          container={boxContainerRef.current}
        >
          <Grid
            container
            sx={{
              marginTop: 5,
              marginLeft: 3,
              alignItems: 'center',
            }}
          >
            <Grid item>
              <Badge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  !image && <AddCircleIcon sx={{ width: 30, height: 30 }} />
                }
                sx={{
                  cursor: 'pointer',
                  borderRadius: 20,
                }}
                onClick={inputClick}
              >
                <Avatar sx={{ width: 90, height: 90 }} src={image}>
                  <PersonIcon sx={{ fontSize: 80 }} />
                </Avatar>
              </Badge>
              <input
                ref={inputRef}
                onInput={inputChange}
                style={{ display: 'none' }}
                type='file'
                accept='image/png, image/jpeg'
              />
            </Grid>
            {image && (
              <Grid
                item
                xs={12}
                md='auto'
                sx={(theme) => ({
                  paddingX: 4,
                  [theme.breakpoints.down('md')]: {
                    paddingX: 0,
                    marginTop: 3,
                  },
                })}
              >
                <Grow in={Boolean(image)}>
                  <Typography variant='h6'>
                    Nice picture ! Let's move on to other sections.
                  </Typography>
                </Grow>
              </Grid>
            )}
          </Grid>
        </Slide>

        <Slide
          direction='right'
          in={shouldDisplay.submit}
          container={boxContainerRef.current}
        >
          <Box sx={{ marginLeft: 3, marginTop: 5 }}>
            <Button size='large' onClick={handleNext}>
              Next
            </Button>
            <Button size='large' onClick={handleSkip} sx={{ marginLeft: 3 }}>
              Skip
            </Button>
          </Box>
        </Slide>
      </Paper>
    </Slide>
  )
}

export default Image
