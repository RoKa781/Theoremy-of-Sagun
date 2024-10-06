import { FC } from "react"
import st from './ResultList.module.css'


interface IResultList {
    data: {
        minutes: string
        hours: string
    }
}

const ResultList:FC<IResultList> = ({ data }) => {
    const {hours, minutes} = data

  return (
    <div className={st.containerList}>
        <div className={st.listItem}>{hours}</div>
        <div className={st.listPr}>:</div>
        <div className={st.listItem}>{minutes}</div>
    </div>
  )
}

export default ResultList