import React from 'react'
import skillsProgress from '../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress()
  }, [])
    return (
      <div className="skills-sec section-padding pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="skills-box full-width">
                <div className="skill-item">
                  <h6>Архитектур</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Дотоод засал чимэглэл</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>3D загварчлал</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h4 className="playfont line-height-50 mb-20">
                Орон зай бүрт тохирсон дизайны шийдлүүдийг санал болгож байна.
                </h4>
                <p className="mb-10">
                Технологийн дэвшил, шинэ материал, минималист загваруудыг ашигладаг.
                </p>
                <p>
                рхитектур нь зөвхөн барилга барих ажил бус, харин орчин тойрон, хүмүүсийн амьдралд шууд болон шууд бусаар нөлөөлөх урлаг, шинжлэх ухаан юм. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills2