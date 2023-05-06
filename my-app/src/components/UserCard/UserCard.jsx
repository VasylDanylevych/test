import { Avatar, Button, Cirkle, Img, ImgContainer, Line, UserContainer, UserStatList } from "./UserCard.style";
import image from "../../images/picture.png";

export const UserCard = () => {
    return (
        <UserContainer>
            <ImgContainer>
                <Img src={image} alt="" />
                {/* <svg>
                    <use href="../../images/logo.svg#icon-Logo"></use>
                </svg> */}
            </ImgContainer>
            <Line></Line>
            <Cirkle>
                <Avatar>
                    <img src="" alt="" />
                </Avatar>
            </Cirkle>
            <UserStatList>
                <li>tweets</li>
                <li>followers</li>
            </UserStatList>
            <Button type="button">follow</Button>
        </UserContainer>
    );
};
