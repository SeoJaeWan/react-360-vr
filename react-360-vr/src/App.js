import { Pannellum } from "pannellum-react";
import React, { useEffect, useState } from "react";
import image from "./assets";

function App() {
  const [imageName, setImageName] = useState("image");
  return (
    <div className="App">
      <button onClick={() => setImageName("image")}>image1</button>
      <button onClick={() => setImageName("image2")}>image2</button>

      {/* 이미지를 360 vr 로 화면에 출력하기 위해서 사용한다. */}
      <Pannellum
        width="100%"
        height="100vh"
        image={image[imageName]}
        // maxYaw는 사용자가 이미지에서 볼 수 있는 화면의 각도를 나타낸다.
        maxYaw={172}
        // mouseZoom과 keyboardZoom은 사용자에게 화면 줌을  허용 할지 말지를 결정한다.
        mouseZoom={false}
        keyboardZoom={false}
        // autoLoad는 화면에 이미지를 자동으로 rander 해준다.
        autoLoad
        // showControls는 화면에 컨트롤러를 출력할지 말지를 나타낸다.
        showControls={false}
      >
        {/* 화면에서의 버튼을 추가하여 특정 위치에 버튼을 만들어준다. */}
        <Pannellum.Hotspot
          type="custom"
          // 해당 버튼이 나올 위아래 각도를 나타낸다.
          pitch={31}
          // 해당 버튼이 나올 각도를 나타낸다.
          yaw={150}
          handleClick={(_, args) => setImageName(args.name)}
          handleClickArg={{ name: "image2" }}
        />
      </Pannellum>
    </div>
  );
}

export default App;
