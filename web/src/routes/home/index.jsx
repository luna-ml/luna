import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { observer } from "mobx-react"
import ProjectListItem from '../../components/projectListItem'

import {
  Box,
  Button,
  TextField,
  Typography
} from '@material-ui/core'

import {
  MdAdd
} from 'react-icons/md'

const useStyles = makeStyles((theme) => ({
  page: {
    padding: "20px 20px"
  },
  header: {
  }
}))

const Home = (props) => {
  const {
    /*healthInfo,*/
    projectInfo
  } = props

  const classes = useStyles();

  useEffect(() => {
    projectInfo.list()
  }, [projectInfo])

  return <div className={classes.page}>
    <Box className={classes.header} display="flex" alignItems="center">
      <Box>
        <img width="30px" src="https://user-images.githubusercontent.com/1540981/108800725-c77ec080-7548-11eb-9013-b28ee4ee4879.png" alt="luna logo" />
      </Box>
      <Box style={{marginLeft: "10px"}}>
        <Typography variant="h6">
          Luna | 달님 | 月
        </Typography>
      </Box>
      <Box flexGrow={1}>
      </Box>
      <Box>
        <TextField
          label="Search"
          type="search"
          variant="outlined"
          margin="dense"
        />
      </Box>
    </Box>
    <div style={{margin: "30px 0 10px 0"}}>
      <Button
        variant="contained"
        color="primary"
      >
        <MdAdd size={20} />
        New Project
      </Button>
    </div>
    <div>
      {projectInfo.projectList.map(p => {
        return <ProjectListItem
          key={p.id}
          name={p.name}
          description={p.description}
        />
      })}
    </div>
  </div>
}

export default observer(Home)
