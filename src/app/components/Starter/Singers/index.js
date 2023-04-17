import React from 'react'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Zoom from '@mui/material/Zoom'
import SimpleBar from 'simplebar-react/dist'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { singers } from '../../../constants/singers'
import { updatefavoriteSingers } from '../../../store/userSlice'

function Singers({ pageContainerRef, unmount }) {
  const [selected, setSelected] = React.useState([])
  const [shouldDisplay, setShouldDisplay] = React.useState({
    container: true,
    title: false,
    list: false,
    submit: false,
  })

  const boxContainerRef = React.useRef()

  const dispatch = useDispatch()

  const onClickSinger = (addedSinger) => {
    if (selected.includes(addedSinger.id)) {
      dispatch()
      // showMessage({
      //   iconVariant: 'done',
      //   text: `${addedSinger.name} removed from favourite list`,
      //   textVariant: 'error',
      // })
      setSelected((prev) =>
        prev.filter((singerId) => singerId !== addedSinger.id)
      )
    } else {
      if (selected.length === 3) {
        dispatch()
        // showMessage({
        //   iconVariant: 'limit',
        //   text: 'You can only choose 3 as your favourites !',
        //   textVariant: 'warning',
        // })
      } else {
        dispatch()
        // showMessage({
        //   iconVariant: 'done',
        //   text: `${addedSinger.name} added to your favourite list`,
        //   textVariant: 'success',
        // })
        setSelected((prev) => [...prev, addedSinger.id])
      }
    }
  }

  const onSubmit = () => {
    dispatch(updatefavoriteSingers(selected))
    setShouldDisplay((prev) => ({ ...prev, container: false }))
  }

  React.useEffect(() => {
    const intialTime = 0

    const title = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, title: true }))
    }, intialTime + 150)

    const list = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, list: true }))
    }, intialTime + 350)

    const submit = setTimeout(() => {
      setShouldDisplay((prev) => ({ ...prev, submit: true }))
    }, intialTime + 450)

    return () => {
      clearTimeout(title)
      clearTimeout(list)
      clearTimeout(submit)
    }
  }, [])

  return (
    <Slide
      direction='right'
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
          <Typography variant='h5' sx={{ marginLeft: 2, whiteSpace: 'nowrap' }}>
            Click to choose your top 3 !
          </Typography>
        </Slide>

        <Zoom in={shouldDisplay.list} container={boxContainerRef.current}>
          <Stack
            sx={{
              marginTop: 3,
            }}
            divider={
              <Divider orientation='horizontal' sx={{ width: '100%' }} />
            }
          >
            <SimpleBar style={{ maxHeight: 500 }}>
              {singers.map((singer) => (
                <Card
                  singer={singer}
                  key={singer.id}
                  onClick={onClickSinger}
                  selected={selected.includes(singer.id)}
                />
              ))}
            </SimpleBar>
          </Stack>
        </Zoom>

        <Slide
          direction='right'
          in={shouldDisplay.submit}
          container={boxContainerRef.current}
        >
          <Button
            size='large'
            sx={{ marginLeft: 3, marginTop: 3 }}
            onClick={onSubmit}
          >
            Next
          </Button>
        </Slide>
      </Paper>
    </Slide>
  )
}

export default Singers
