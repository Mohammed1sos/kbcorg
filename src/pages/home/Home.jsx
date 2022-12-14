import { motion } from "framer-motion";
import "./home.css";
import datalist from "../../components/shared/Dropdown/Dropdata";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <section className="mainhome">
        <div className="main-title">
          <div className="knowlege">
            {" "}
            knowlege bace <br />
            corner
          </div>
          <div className="knowlege-des">
            مبادرة تستهدف طلاب الجامعات من الاختصاصات كافة
          </div>
        </div>
        <div className="clod1"></div>
        <div className="clod2"></div>
        <div className="main-city"></div>
        <div className="main-city-back"></div>
      </section>
      
      <section className="coleghome">
        <div className="partysvg">
          <div className="coleg-tit">الاختصاصات</div>
          <div className="colleg">
            {datalist.map((la, index) => {
              return (
                <div className="colgdata" key={index}>
                  <div className="colTitle">{la.title}</div>
                  <div className="collist">
                    {la.list.map((le, ind) => {
                      return (
                        <div key={ind}>
                          <Link className="colitem" to={le.to}>
                            {le.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ul className="anthersection">
        <div className="coleg-tit">الجامعات السورية الحكومية و الخاصة</div>
        <li className="uner">
          <Link  to="/">
            جامعة حلب
          </Link>
        </li>
        <li className="uner">
          <Link  to="/">
            جامعة دمشق
          </Link>
        </li >
        <li className="uner">
          <Link  to="/">
            جامعة تشرين
          </Link>
        </li>
        <li className="uner">
          <Link  to="/">
            جامعة البعث
          </Link>
        </li>
        <li className="uner">
          <Link  to="/">
            جامعة حلب
          </Link>
        </li>
        <li className="uner">
          <Link  to="/">
            جامعة دمشق
          </Link>
        </li >
        <li className="uner">
          <Link  to="/">
            جامعة تشرين
          </Link>
        </li>
        <li className="uner">
          <Link  to="/">
            جامعة البعث
          </Link>
        </li>
        
        <div className="contry"></div>
      </ul>
      <section className="introhome">
        <div className="introtitle">
          بنك المشاريع 

        </div>
        <div className="introtste">
          بنك المشاريع خدمة من الخدمات بلل يلي بلا نحن بلا لازم بلا بلا لانو بلا بلا الجامعات شي نص اي شرح
          بنك المشاريع خدمة من الخدمات بلل يلي بلا نحن بلا لازم بلا بلا لانو بلا بلا الجامعات شي نص اي شرح
          لازم يكون في هيك خدمة لاني ذهب السورية الخاصة
          بنك المشاريع خدمة من الخدمات بلل يلي بلا نحن بلا لازم بلا بلا لانو بلا بلا الجامعات شي نص اي شرح
          بنك المشاريع خدمة من الخدمات بلل يلي بلا نحن بلا لازم بلا بلا لانو بلا بلا الجامعات شي نص اي شرح
          لازم يكون في هيك خدمة لاني ذهب السورية الخاصة

          
        </div>
        <div className="introlink">
          <Link to="/">
            الذهاب للخدمة
          </Link>
          
        </div>
     
      </section>
      
    </div>
  );
}

export default Home;
