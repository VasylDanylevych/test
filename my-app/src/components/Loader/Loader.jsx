import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
    return (
        <ThreeCircles
            height="100"
            width="100"
            color="#5736A3"
            wrapperStyle={{ justifyContent: "center" }}
            visible={true}
            ariaLabel="three-circles-rotating"
        />
    );
}
