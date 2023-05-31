import greek_salad from "../imgs/greek-salad.jpg";
function CommonHeader(props) {
    return(
        <header className={"commonHeader"}>
            <img src={greek_salad} alt={"Header Image"}/>
            <h1 className="header-text-center">
                {props.title}
            </h1>
        </header>
    );
}

export default CommonHeader;