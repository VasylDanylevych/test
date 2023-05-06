import { Avatar, Button, Cirkle, Img, ImgContainer, Line, UserContainer, UserStatList } from "./UserCard.style";
import image from "../../images/picture.png";

export const UserCard = ({ userProp }) => {
    const { avatar, user, tweets, followers } = userProp;

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
                    <img src={avatar} alt="avatar" />
                </Avatar>
            </Cirkle>
            <UserStatList>
                <li>{user}</li>
                <li>{tweets.toLocaleString("en-US")} tweets</li>
                <li>{followers.toLocaleString("en-US")} followers</li>
            </UserStatList>
            <Button type="button">follow</Button>
        </UserContainer>
    );
};
