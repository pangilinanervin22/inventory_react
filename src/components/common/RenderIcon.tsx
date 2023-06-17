
interface thiProps {
    className: string
}

function RenderIcon(props: thiProps) {
    return (
        <div>{props.className}</div>
    )
}

export default RenderIcon