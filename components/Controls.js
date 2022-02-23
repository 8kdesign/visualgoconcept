import { useState } from "react";
import {
	ChevronDown,
	ChevronUp,
	SkipStartFill,
	SkipEndFill,
	CaretLeftFill,
	CaretRightFill,
	PlayFill,
	PauseFill,
} from "react-bootstrap-icons";

export default function Controls({
	positionCount,
	position,
	setPosition,
	actions,
}) {
	const [speed, setSpeed] = useState(5);
	const [isPlaying, setPlaying] = useState(false);
	const [showActions, setShowActions] = useState(false);

	return (
		<div className="Container--controls">
			<div
				className="Dropdown--section_selector"
				style={{
					flex: 0,
					width: 200,
				}}
			>
				<div
					className="Dropdown_content--section_selector"
					style={
						showActions
							? {
									display: "block",
									bottom: "100%",
									maxHeight: null,
									overflow: "visible",
							  }
							: { display: "none" }
					}
				>
					<Actions actions={actions} />
				</div>
				<div
					className="Toggle--selector"
					style={{ width: 200 }}
					onClick={() => {
						setShowActions(!showActions);
					}}
				>
					<ChevronUp color="white" />
				</div>
			</div>

			<div
				style={{
					height: 39.5,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					paddingLeft: 20,
					paddingRight: 20,
				}}
			>
				<p className="Text--section_selector">slow</p>
				<input
					type="range"
					min={0}
					max={10}
					defaultValue={5}
					onChange={(e) => setSpeed(e.target.value)}
					className="Slider"
				/>
				<p className="Text--section_selector">fast</p>
			</div>
			<div style={{ width: 200, display: "flex", flexDirection: "row" }}>
				<div className="Toggle--selector">
					<SkipStartFill color="#f0f0f0" />
				</div>
				<div className="Toggle--selector">
					<CaretLeftFill color="#f0f0f0" />
				</div>
				<div
					className="Toggle--selector"
					onClick={() => {
						setPlaying(!isPlaying);
					}}
				>
					{isPlaying ? (
						<PauseFill color="white" width={20} height={20} />
					) : (
						<PlayFill color="white" width={20} height={20} />
					)}
				</div>
				<div className="Toggle--selector">
					<CaretRightFill color="#f0f0f0" />
				</div>
				<div className="Toggle--selector">
					<SkipEndFill color="#f0f0f0" />
				</div>
			</div>
			<div
				style={{
					height: 39.5,
					flex: 1,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					paddingLeft: 20,
					paddingRight: 20,
				}}
			>
				<input
					type="range"
					min={0}
					max={positionCount - 1}
					defaultValue={position}
					onChange={(e) => setPosition(e.target.value)}
					className="Slider2"
					style={{ width: "auto", flex: 1 }}
				/>
			</div>
		</div>
	);
}

function Actions({ actions }) {
	const itemArray = [];
	for (let i = 0; i < actions.length; i++) {
		itemArray.push(
			<div
				className="Toggle--selector"
				style={{
					justifyContent: "start",
					paddingLeft: 20,
					paddingRight: 20,
				}}
				key={i}
			>
				<p className="Text--section_selector Text--nonselectable">
					{actions[i]}
				</p>
			</div>
		);
	}
	return itemArray;
}
