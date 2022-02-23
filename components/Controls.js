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

export default function Controls({ positionCount, position, setPosition }) {
	const [speed, setSpeed] = useState(5);
	const [isPlaying, setPlaying] = useState(false);

	return (
		<div className="Container--controls">
			<div
				className="Toggle--selector"
				style={{ flex: 0, paddingLeft: 50, paddingRight: 50 }}
			>
				<ChevronUp color="white" />
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
