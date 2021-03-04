import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { observer } from "mobx-react"
import healthInfo from './observers/health'
import projectInfo from './observers/project'
import Home from './routes/home'


const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.text.primary,
    minHeight: "100vh",
    minWidth: "100vh"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Home
        healthInfo={healthInfo}
        projectInfo={projectInfo}
      />
    </div>
  );
}

export default observer(App);
