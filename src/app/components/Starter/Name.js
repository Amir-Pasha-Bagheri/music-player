import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useDispatch } from 'react-redux'
import { updateName } from '../../store/userSlice'

function Name({ pageContainerRef, unmount }) {
  const [shouldDisplay, setShouldDisplay] = React.useState({
    container: true,
    hi: false,
    title: false,
    input: false,
    submit: false,
  })
  const [name, setName] = React.useState('')

  const boxContainerRef = React.useRef()
  const dispatch = useDispatch()

  const changeNameHandler = ({ target: { value } }) => {
    setName(value)

    if (value && !shouldDisplay.submit) {
      setShouldDisplay((prev) => ({ ...prev, submit: true }))
    }

    if (!value && shouldDisplay.submit) {
      setShouldDisplay((prev) => ({ ...prev, submit: false }))
    }
  }

  const keyDownHanlder = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }

  const onSubmit = () => {
    dispatch(updateName(name))
    setShouldDisplay((prev) => ({ ...prev, container: false }))
  }

  React.useEffect(() => {
    const intialTime = 0

    const hi = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, hi: true }))
    }, intialTime + 150)

    const title = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, title: true }))
    }, intialTime + 300)

    const input = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, input: true }))
    }, intialTime + 400)

    return () => {
      clearTimeout(hi)
      clearTimeout(title)
      clearTimeout(input)
    }
  }, [])

  return (
    <Slide
      direction='up'
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
          in={shouldDisplay.hi}
          container={boxContainerRef.current}
        >
          <Typography variant='h4' sx={{ marginLeft: 3 }}>
            Hi !
          </Typography>
        </Slide>

        <Slide
          direction='up'
          in={shouldDisplay.title}
          container={boxContainerRef.current}
        >
          <Box sx={{ marginTop: 3, marginLeft: 3 }}>
            <Typography variant='h5' sx={{ marginBottom: 0.5 }}>
              My name is Amir Pasha,
            </Typography>
            <Typography variant='h5'>
              Welcome to my{' '}
              <Tooltip
                placement='right'
                title={
                  <Box
                    component='a'
                    href='https://github.com/Amir-Pasha-Bagheri/music-player'
                    target='_blank'
                    rel='noreferrer'
                    sx={(theme) => ({
                      display: 'flex',
                      fontSize: 18,
                      paddingY: 0.5,
                      color: theme.palette.grey[50],
                    })}
                  >
                    Github
                    <ExitToAppIcon
                      sx={{
                        marginLeft: 1,
                        fontSize: 20,
                      }}
                    />
                  </Box>
                }
              >
                <Box
                  component='span'
                  sx={(theme) => ({
                    color: theme.palette.primary.main,
                  })}
                >
                  Music Player
                </Box>
              </Tooltip>
              .
            </Typography>
          </Box>
        </Slide>

        <Slide
          direction='up'
          in={shouldDisplay.input}
          container={boxContainerRef.current}
        >
          <Box sx={{ marginTop: 5, marginLeft: 3 }}>
            <Typography variant='h5' sx={{ marginBottom: 0.5 }}>
              What's your name ?
            </Typography>
            <TextField
              variant='standard'
              placeholder='My name is ...'
              autoComplete='off'
              value={name}
              onChange={changeNameHandler}
              onKeyDown={keyDownHanlder}
              sx={{
                marginTop: 2,
                width: '60%',
                fontSize: 5,
              }}
              inputProps={{ style: { fontSize: 21 } }}
            />
          </Box>
        </Slide>

        <Slide
          direction='right'
          in={shouldDisplay.submit}
          container={boxContainerRef.current}
        >
          <Button
            size='large'
            sx={{ marginLeft: 3, marginTop: 9 }}
            onClick={onSubmit}
          >
            Next
          </Button>
        </Slide>
      </Paper>
    </Slide>
  )
}

export default Name
