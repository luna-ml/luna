import { makeAutoObservable } from "mobx"
import axios from 'axios'
import {baseApiUrl} from '../configs'

class ProjectInfo {
  constructor() {
    this.projectList = []
    makeAutoObservable(this)
  }

  list() {
    axios.get(`${baseApiUrl}/projects`)
      .then((resp) => {
        this.projectList = resp.data
      })
      .catch(() => {
        this.projectList = []
      })
  }
}

const projectInfo = new ProjectInfo()

export default projectInfo
