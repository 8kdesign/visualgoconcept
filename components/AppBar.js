import Link from "next/link";

const color = "rgb(255, 138, 39)";

export default function AppBar() {
	return (
		<div
			style={{
				height: 50,
				width: "100%",
				backgroundColor: "#101010",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<Link href="/">
				<p
					className="Text--nonselectable"
					style={{
						color: "white",
						margin: 0,
						fontFamily: "SilkscreenNormal",
						fontSize: 20,
						paddingLeft: 10,
						cursor: "pointer",
					}}
				>
					VISU<span style={{ color: color }}>ALGO</span>
					<span style={{ fontSize: "50%" }}>.NET</span>
				</p>
			</Link>
		</div>
	);
}
