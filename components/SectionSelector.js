import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";

export default function SectionSelector({ count, section, setSection, title }) {
	function increase() {
		if (section + 1 < count) {
			setSection(section + 1);
		}
	}

	function decrease() {
		if (section > 0) {
			setSection(section - 1);
		}
	}

	return (
		<div className="Container--section_selector">
			<div
				className="Toggle--section_selector"
				style={{ padding: 20, flex: 0 }}
				onClick={decrease}
			>
				<CaretLeftFill color={section > 0 ? "white" : "grey"} />
			</div>
			<div className="Toggle--section_selector">
				<p className="Text--section_selector">{title}</p>
			</div>
			<div
				className="Toggle--section_selector"
				style={{ padding: 20, flex: 0 }}
				onClick={increase}
			>
				<CaretRightFill
					color={section + 1 < count ? "white" : "grey"}
				/>
			</div>
		</div>
	);
}
