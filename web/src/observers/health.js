import { makeAutoObservable } from "mobx"
import axios from 'axios'
import {baseApiUrl} from '../configs'

class HealthInfo {
  constructor() {
    this.healthy = undefined
    makeAutoObservable(this)
  }

  refresh() {
    axios.get(`${baseApiUrl}/health`)
      .then(() => {
        this.healthy = true
      })
      .catch(() => {
        this.healthy = false
      })
  }
}

const healthInfo = new HealthInfo()
healthInfo.refresh()

setInterval(() => {
  healthInfo.refresh()
}, 3000)

export default healthInfo
