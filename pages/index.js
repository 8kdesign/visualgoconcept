import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import ImageSorting from "../assets/home/sorting.gif";
import ImageBitmask from "../assets/home/bitmask.gif";

const color = "rgb(255, 138, 39)";

export default function Home() {
	return (
		<>
			<Head>
				<title>VisuAlgo</title>
				<meta property="og:title" content="VisuAlgo" />
				<meta
					property="description"
					content="Visualising data structures and algorithms through animation"
				/>
				<meta
					property="og:description"
					content="Visualising data structures and algorithms through animation"
				/>
			</Head>
			<div
				className="Container--banner"
				style={{
					height: 700,
					backgroundImage: "url('/banner_tile.jpg')",
					backgroundRepeat: "repeat",
				}}
			>
				<p
					style={{
						color: "black",
						fontFamily: "SilkscreenNormal",
						fontSize: "400%",
						margin: 0,
					}}
				>
					VISU<span style={{ color: color }}>ALGO</span>
					<span style={{ fontSize: "20%" }}>.NET</span>
				</p>
				<p style={{ textAlign: "center", fontSize: "100%" }}>
					Visualising data structures and algorithms through animation
				</p>
			</div>
			<Container>
				<Topics />
			</Container>
			<div className="Buffer--50px" />
		</>
	);
}

function Topics() {
	const itemArray = [];
	topics.forEach((topic) => {
		itemArray.push(
			<Link href={"/" + topic.prefix} key={topic.prefix}>
				<Col xs={12} sm={6} md={6} lg={3} className="Card">
					<Image src={topic.image} layout="intrinsic" />
					<p style={{ fontSize: 20, fontWeight: 600, margin: 5 }}>
						{topic.title}
					</p>
					<Tags tags={topic.tags} />
				</Col>
			</Link>
		);
	});
	return <Row>{itemArray}</Row>;
}

function Tags({ tags }) {
	const itemArray = [];
	Array.from(tags).forEach((tag) => {
		itemArray.push(
			<p style={{ backgroundColor: color }} className="Tag" key={tag}>
				{tag}
			</p>
		);
	});
	return <div className="Card--tags">{itemArray}</div>;
}

const topics = [
	{
		title: "Sorting",
		prefix: "sorting",
		image: ImageSorting,
		tags: ["array", "algorithm", "bubble", "select", "insert"],
	},
	{
		title: "Bitmask",
		prefix: "bitmask",
		image: ImageBitmask,
		tags: ["bit manipulation", "set", "CS3233", "array", "list"],
	},
];
