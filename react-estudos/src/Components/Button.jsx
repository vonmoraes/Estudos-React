const Button = (props) => {
    const handleClick = () => {
        alert(props.alerttext);
    };

    return (
        <button className="button" onClick={handleClick}>
        {props.buttontext}
        </button>
    );
};

export default Button;