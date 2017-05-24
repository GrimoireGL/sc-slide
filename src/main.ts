import "grimoirejs/register";
import "grimoirejs-math/register";
import "grimoirejs-fundamental/register";
import "grimoirejs-forward-shading/register";
import "grimoirejs-gltf/register";
import "grimoirejs-slide-system/register";
import gr from "grimoirejs";

import ParagraphComponent from "./Components/ParagraphComponent";
import ContainerComponent from "./Components/ContainerComponent";
import ImageComponent from "./Components/ImageComponent";
import ProgressSeeker from "./Components/ProgressSeeker";
import Rotate from "./Components/Rotate";

export default ()=>{
  gr.register(async ()=>{
    gr.registerComponent("Paragraph",ParagraphComponent);
    gr.registerComponent("Container",ContainerComponent);
    gr.registerComponent("Image",ImageComponent);
    gr.registerComponent("ProgressSeeker",ProgressSeeker);
    gr.registerComponent("Rotate",Rotate);
    gr.registerNode("p",["Paragraph"]);
    gr.registerNode("div",["Container"]);
    gr.registerNode("img",["Image"]);
  });
};