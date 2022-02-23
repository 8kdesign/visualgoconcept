import Head from "next/head";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Controls from "../../components/Controls";
import Lecture from "../../components/Lecture";
import Menu from "../../components/Menu";
import SectionSelector from "../../components/SectionSelector";
import Steps from "../../components/Steps";

export default function Sorting() {
	const [screenHeight, setScreenHeight] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [sectionIndex, setSectionIndex] = useState(0);
	const [animationPosition, setAnimationPosition] = useState(0);

	useEffect(() => {
		if (typeof window === "undefined") return;
		function updateHeight() {
			setScreenHeight(window.innerHeight - 50);
		}
		updateHeight();
		window.addEventListener("resize", updateHeight);
		return window.removeEventListener("resize", updateHeight);
	}, []);

	return (
		<>
			<Head>
				<title>Sorting | VisuAlgo</title>
				<meta property="og:title" content="Sorting | VisuAlgo" />
				<meta
					property="description"
					content="Bubble, Selection, Insertion, Merge, Quick, Counting, Radix"
				/>
				<meta
					property="og:description"
					content="Bubble, Selection, Insertion, Merge, Quick, Counting, Radix"
				/>
			</Head>
			<Row style={{ width: "100%", margin: 0 }}>
				<Col
					xs={12}
					sm={12}
					md={12}
					lg={8}
					style={{
						height: screenHeight,
						backgroundColor: "#ebfaff",
						padding: 0,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Menu
						menu={menu}
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
					/>
					<div style={{ flex: 1 }}></div>
					<Controls
						positionCount={50}
						position={animationPosition}
						setPosition={setAnimationPosition}
						actions={demoActions}
					/>
					<Steps
						screenHeight={screenHeight}
						instruction={demoStep.instruction}
						code={demoStep.code}
						activeLines={demoStep.active}
					/>
				</Col>
				<Col
					xs={12}
					sm={12}
					md={12}
					lg={4}
					style={{
						height: screenHeight,
						backgroundColor: "#ebebeb",
						padding: 0,
					}}
				>
					<SectionSelector
						setSection={setSectionIndex}
						section={sectionIndex}
						content={content}
					/>
					<Lecture content={getContent(sectionIndex)} />
				</Col>
			</Row>
		</>
	);
}

function getContent(position) {
	if (position < 0 || position >= content.length)
		return {
			title: "",
			content: "",
		};
	return content[position];
}

const menu = [
	{
		name: "BUBBLE SORT",
		shortName: "BUB",
	},
	{
		name: "SELECTION SORT",
		shortName: "SEL",
	},
	{
		name: "INSERTION SORT",
		shortName: "INS",
	},
	{
		name: "MERGE SORT",
		shortName: "MER",
	},
	{
		name: "QUICK SORT",
		shortName: "QUI",
	},
	{
		name: "RANDOM QUICK SORT",
		shortName: "R-Q",
	},
	{
		name: "COUNTING SORT",
		shortName: "COU",
	},
	{
		name: "RADIX SORT",
		shortName: "RAD",
	},
];

const content = [
	{
		title: "1 - Sorting Problem and Sorting Algorithms",
		content:
			"Sorting is a very classic problem of reordering items (that can be compared, e.g., integers, floating-point numbers, strings, etc) of an array (or a list) in a certain order (increasing, non-decreasing (increasing or flat), decreasing, non-increasing (decreasing or flat), lexicographical, etc).\n\nThere are many different sorting algorithms, each has its own advantages and limitations.\n\nSorting is commonly used as the introductory problem in various Computer Science classes to showcase a range of algorithmic ideas.\n\nWithout loss of generality, we assume that we will sort only Integers, not necessarily distinct, in non-decreasing order in this visualization. Try clicking Bubble Sort for a sample animation of sorting the list of 5 jumbled integers (with duplicate) above.",
	},
	{
		title: "1.1 - Motivation - Interesting CS Ideas",
		content:
			"Sorting problem has a variety of interesting algorithmic solutions that embody many Computer Science ideas:\n\n1. Comparison versus non-comparison based strategies,\n\n2. Iterative versus Recursive implementation,\n\n3. Iterative versus Recursive implementation,\n\n4. Iterative versus Recursive implementation,\n\n5. Iterative versus Recursive implementation,\n\n\n\nPro-tip 1: Since you are not logged-in, you may be a first time visitor (or not an NUS student) who are not aware of the following keyboard shortcuts to navigate this e-Lecture mode: [PageDown]/[PageUp] to go to the next/previous slide, respectively, (and if the drop-down box is highlighted, you can also use [→ or ↓/← or ↑] to do the same),and [Esc] to toggle between this e-Lecture mode and exploration mode.",
	},
];

const demoStep = {
	instruction:
		"Set the swapped flag to false. Then iterate from index 1 to 14 inclusive.",
	code: [
		"do",
		"  swapped = false",
		"  for i = 1 to indexOfLastUnsortedElement-1",
		"  for i = 1 to indexOfLastUnsortedElement-1",
		"      swap(leftElement, rightElement)",
		"      swapped = true; ++swapCounter",
		"while swapped",
	],
	active: [1, 2],
};

const demoActions = ["Create(A)", "Sort"];
