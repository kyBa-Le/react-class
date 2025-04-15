export function Card() {
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "18vw"

    }
    return (<div style={cardStyle}>
        <img src="https://th.bing.com/th/id/OIP.eQengSdtkOPmCTVvu4rOuQHaHa?rs=1&pid=ImgDetMain" alt="This is camera"/>
        <p>This is an image</p>
        <div>100.000 đ</div>
    </div>)
}