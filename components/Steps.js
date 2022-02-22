import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

export default function Steps({ screenHeight }) {
	const [isStepsCollapsed, setStepsCollapsed] = useState(false);
	if (isStepsCollapsed) {
		return (
			<div
				style={{
					height: 25,
					width: "100%",
					backgroundColor: "#777777",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
				}}
				onClick={() => {
					setStepsCollapsed(false);
				}}
			>
				<ChevronUp width={20} height={20} color="#c5c5c5" />
			</div>
		);
	} else {
		return (
			<div
				style={{
					height: screenHeight,
					maxHeight: 300,
					width: "100%",
					backgroundColor: "#999999",
				}}
			>
				<div
					style={{
						height: 25,
						backgroundColor: "#777777",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
					}}
					onClick={() => {
						setStepsCollapsed(true);
					}}
				>
					<ChevronDown width={20} height={20} color="#c5c5c5" />
				</div>
			</div>
		);
	}
}
