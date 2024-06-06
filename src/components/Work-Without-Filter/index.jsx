/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkWithoutFilter = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-md-6 items mt-0">
              <div className="main-header mb-0">
                <h3>Ажилууд.</h3>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/2.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Архитектур</span>
                  <span>Орчин үеийн</span>
                  <h5>
                    <Link href="/project-details">Орчин үеийн хотхон</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/1.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Архитектур</span>
                  <span>Орчин үеийн</span>
                  <h5>
                    <Link href="/project-details">Орчин үеийн Таун хаус</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/5.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Архитектур</span>
                  <span>Орчин үеийн</span>
                  <h5>
                    <Link href="/project-details">Орчин үеийн Таун хаус</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/3.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Архитектур</span>
                  <span>Орчин үеийн</span>
                  <h5>
                    <Link href="/project-details">Орчин үеийн Таун хаус</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Архитектур</span>
                  <span>Орчин үеийн</span>
                  <h5>
                    <Link href="/project-details">Орчин үеийн Таун хаус</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithoutFilter;
