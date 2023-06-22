
interface thiProps {
    className: string
    error: string;
}

function RenderIcon({ className, error }: thiProps) {
    return (
        <>
            <input></input>
            <div>{error}</div>
        </>
    )
}

export default RenderIcon