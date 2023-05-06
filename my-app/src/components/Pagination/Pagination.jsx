import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersThunk } from "../../redux/thunk";
import { UsersList } from "../UsersList/UsersList";
import { Button, Container } from "./Pagination.style";

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, [dispatch]);

    const loadMoreData = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        const itemsPerPage = 3;
        setTotalPage(Math.ceil(users.length / itemsPerPage));
        if (currentPage > 1) {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const newData = users.slice(startIndex, endIndex);
            setData((prevState) => [...prevState, ...newData]);
        } else {
            setData(users.slice(0, itemsPerPage));
        }
    }, [currentPage, users]);

    return (
        <Container>
            <UsersList users={data} />
            {currentPage < totalPage && <Button onClick={loadMoreData}>Load More</Button>}
        </Container>
    );
};
