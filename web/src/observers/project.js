import { makeAutoObservable } from "mobx"
import {baseApiUrl} from '../configs'
import socketio from "socket.io-client"

class ProjectInfo {
  constructor() {
    this.projectList = []
    makeAutoObservable(this)
  }

  update(projectList) {
    this.projectList = projectList
  }

}
const projectInfo = new ProjectInfo()

const socket = socketio(`${baseApiUrl}/project`)

/*
socket.on("connection", (socket) => {
})
*/

socket.on("project_list", (data) => {
  projectInfo.update(data)
})


export default projectInfo
