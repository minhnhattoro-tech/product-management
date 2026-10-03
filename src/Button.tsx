interface Props {
    text: string;
}
function Button(props: Props) {
    return (
        <h2>{props.text}</h2>
        
    );
}
export default Button;