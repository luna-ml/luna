import { makeAutoObservable } from "mobx"
import axios from 'axios'

class ProjectList {
  projectList = []

  constructor() {
    makeAutoObservable(this)
  }

  refresh() {

  }
}
