import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://imgholder.ru/1260x750/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"
          alt=""
        />

        <div className="user">
          <img
            src="https://imgholder.ru/1600x1600/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"
            alt=""
          />

          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sunt,
          repudiandae pariatur suscipit
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          facere atque adipisci vitae numquam nulla nihil eos id quaerat
          praesentium laborum, aspernatur voluptates, aliquam perspiciatis.
          Consequatur ea voluptatem modi expedita.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          laudantium nihil aut accusantium ab ratione harum architecto optio
          laborum, nulla doloremque suscipit vitae soluta repudiandae qui
          repellat quasi consectetur saepe?
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          laudantium nihil aut accusantium ab ratione harum architecto optio
          laborum, nulla doloremque suscipit vitae soluta repudiandae qui
          repellat quasi consectetur saepe?
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          laudantium nihil aut accusantium ab ratione harum architecto optio
          laborum, nulla doloremque suscipit vitae soluta repudiandae qui
          repellat quasi consectetur saepe?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit consequatur molestias vero et
          atque ipsa, odio quidem repellat autem dolorum amet vitae molestiae
          aut excepturi provident recusandae officiis inventore rem.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
