import { Avatar, Button, Cirkle, Img, ImgContainer, Line, UserContainer, UserStatList } from "./UserCard.style";
import image from "../../images/picture.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFollowersThunk } from "../../redux/thunk";

export const UserCard = ({ userProp }) => {
    const { id, avatar, user, tweets, followers } = userProp;
    const [isClicked, setIsClicked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(followers);
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsClicked((prevState) => !prevState);
        setIsFollowing((prevState) => {
            if (!isClicked) return prevState + 1;
            else return prevState - 1;
        });
        dispatch(updateFollowersThunk({ id, isFollowing }));
    };

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
                <li>{isFollowing.toLocaleString("en-US")} followers</li>
            </UserStatList>
            <Button type="button" clicked={isClicked} onClick={handleClick}>
                {isClicked ? "following" : "follow"}
            </Button>
        </UserContainer>
    );
};
