import { Avatar, Button, Cirkle, Img, ImgContainer, Line, Logo, UserContainer, UserStatList } from "./UserCard.style";
import image from "../../images/picture.png";
import logo from "../../images/logo.svg";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFollowersThunk } from "../../redux/thunk";

export const UserCard = ({ userProp }) => {
    const { id, avatar, tweets, followers } = userProp;
    const [isClicked, setIsClicked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(followers);
    const dispatch = useDispatch();

    const handleClick = async () => {
        setIsClicked((prevState) => !prevState);
        const updatedFollowing = isClicked ? isFollowing - 1 : isFollowing + 1;
        setIsFollowing(updatedFollowing);

        try {
            await dispatch(updateFollowersThunk({ id, isFollowing: updatedFollowing }));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <UserContainer>
            <ImgContainer>
                <Img src={image} alt="back" />
                <Logo src={logo} alt="logo" />
            </ImgContainer>
            <Line></Line>
            <Cirkle>
                <Avatar>
                    <img src={avatar} alt="avatar" />
                </Avatar>
            </Cirkle>
            <UserStatList>
                <li>{tweets.toLocaleString("en-US")} tweets</li>
                <li>{isFollowing.toLocaleString("en-US")} followers</li>
            </UserStatList>
            <Button type="button" clicked={isClicked} onClick={handleClick}>
                {isClicked ? "following" : "follow"}
            </Button>
        </UserContainer>
    );
};
