import { Badge } from "@material-ui/core";
import { img_300 } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  image,
  title,
  status,
  gender,
  species,
}) => {
  return (
    <ContentModal id={id}>
      <Badge
        badgeContent={status}
        color={status === "Alive"  ? "Primary" : "Secondary"}
      />
      
                 <img
        className="image"
        src={`${img_300}/${id}.jpeg`}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        <span className="subTitle">{gender}</span>
        <span className="subTitle">{species}</span>
       
      </span>
    </ContentModal>
  );
};

export default SingleContent;
