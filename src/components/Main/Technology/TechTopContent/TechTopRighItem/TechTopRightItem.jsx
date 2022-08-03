import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import GET from '../../../../../API/GET.JSX';
import dataIcon from '../../../../../assets/icons/dataIcon.svg'

function TechTopRightItem() {
  const [techItemsAct, setTechItemsAct] = useState(22)
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      const category = await GET.newsAll();
      setData(category.data.items)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  console.log(data);

  useEffect(() => {
    fechData()
  }, []);

  return (
    <>
      {data.map((itm, inx) => (
        inx + 1 <= 4 ?
          <Link to={`/newsitems/${itm.id}`}>
            <li
              className={`main__technology-right-item ${techItemsAct === itm.id ? "techItemAct" : ""}`}
              onClick={() => setTechItemsAct(itm.id)}
              key={itm.id}
            >
              <div className="main__technology-right-item-desc">
                <span className="main__technology-data-tit">
                  <img src={dataIcon} alt="dataIcon" /> 11:45  |  {itm.created_date}
                </span>
                <p className='main__technology-text'>{itm.title_uz.substring(0, 45)}...</p>
              </div>

              <div className="main__technology-right-item-img-box">
                <img src={itm.default_img} alt="TechImg_2" />
              </div>
            </li>
          </Link> : ""
      ))}
    </>
  )
}

export default TechTopRightItem
