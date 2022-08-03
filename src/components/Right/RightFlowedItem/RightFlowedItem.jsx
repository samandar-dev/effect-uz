import React, { useEffect, useState } from 'react'
import GET from '../../../API/GET.JSX'
import dataIcon from '../../../assets/icons/dataIcon.svg'
import './RightFlowedItem.scss'

function RightFlowedItem() {
  const flowedtItems = [1, 2, 3, 4, 5, 6, 7, 8]

  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      const category = await GET.more();
      setData(category.data)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
  }, []);

  return (
    <>
      {data.map((item, inx) => (
        inx + 1 <= 10 ?
          <li className="right__flowed-item" key={item.id}>
            <span className="main__technology-data-tit">
              <img src={dataIcon} alt="dataIcon" /> 11:45  |  {item.created_date}
            </span>
            <p>
              {item.title_oz.substring(0, 65)}...
            </p>
          </li> : ""
      ))}
    </>
  )
}

export default RightFlowedItem
