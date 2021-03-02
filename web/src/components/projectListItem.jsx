import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import {
  Box,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  component: {
    backgroundColor: theme.palette.background.paper,
    height: "120px",
    padding: "15px 15px",
    margin: "5px 0 5px 0"
  }
}))

const ProjectListItem = (props) => {
  const classes = useStyles();

  const {
    name,
    description
  } = props

  return <div className={classes.component}>
    <Box
      display="flex"
      style={{height: "100%"}}
      alignItems="center"
    >
      <Box>
        <Typography variant="h6">
          {name}
        </Typography>
        <Typography variant="caption">
          {description}
        </Typography>
      </Box>
    </Box>
  </div>
}

export default ProjectListItem
