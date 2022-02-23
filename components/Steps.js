import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

export default function Steps({
	screenHeight,
	instruction,
	code,
	activeLines,
}) {
	const [isStepsCollapsed, setStepsCollapsed] = useState(false);
	if (isStepsCollapsed) {
		return (
			<div
				style={{
					height: 25,
					width: "100%",
					backgroundColor: "#CCCCCC",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
				}}
				onClick={() => {
					setStepsCollapsed(false);
				}}
			>
				<ChevronUp width={20} height={20} color="white" />
			</div>
		);
	} else {
		return (
			<div
				style={{
					height: screenHeight,
					maxHeight: 300,
					width: "100%",
					backgroundColor: "#fafafa",
				}}
			>
				<div
					style={{
						height: 25,
						backgroundColor: "#CCCCCC",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
					}}
					onClick={() => {
						setStepsCollapsed(true);
					}}
				>
					<ChevronDown width={20} height={20} color="white" />
				</div>
				<div style={{ padding: 20, overflowY: "scroll", height: 275 }}>
					<p className="Text--content">{instruction}</p>
					<div className="Buffer--20px" />
					<Code code={code} activeLines={activeLines} />
				</div>
			</div>
		);
	}
}

function Code({ code, activeLines }) {
	const itemArray = [];
	for (let i = 0; i < code.length; i++) {
		const line = code[i];
		itemArray.push(
			<div
				key={line}
				style={
					activeLines.find((value) => value === i) !== undefined
						? { backgroundColor: "#212121", color: "white" }
						: {}
				}
			>
				<p className="Text--content" style={{ fontWeight: 300 }}>
					{line}
				</p>
			</div>
		);
	}
	return itemArray;
}
