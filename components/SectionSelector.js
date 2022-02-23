import { useState } from "react";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";

export default function SectionSelector({ content, section, setSection }) {
	const [showDropdown, setShowDropdown] = useState(false);

	function increase() {
		if (section + 1 < content.length) {
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
				className="Toggle--selector"
				style={{ padding: 20, flex: 0 }}
				onClick={decrease}
			>
				<CaretLeftFill color={section > 0 ? "white" : "grey"} />
			</div>
			<div className="Dropdown--section_selector">
				<div
					className="Toggle--selector"
					onClick={() => {
						setShowDropdown(!showDropdown);
					}}
				>
					<p className="Text--section_selector Text--nonselectable">
						{getContent(content, section).title}
					</p>
				</div>

				<div
					className="Dropdown_content--section_selector"
					style={
						showDropdown
							? { display: "block" }
							: { display: "none" }
					}
				>
					<SectionDropDown
						content={content}
						setSection={setSection}
						showDropdown={showDropdown}
						setShowDropdown={setShowDropdown}
					/>
				</div>
			</div>

			<div
				className="Toggle--selector"
				style={{ padding: 20, flex: 0 }}
				onClick={increase}
			>
				<CaretRightFill
					color={section + 1 < content.length ? "white" : "grey"}
				/>
			</div>
		</div>
	);
}

function SectionDropDown({ content, setShowDropdown, setSection }) {
	const itemArray = [];
	for (let i = 0; i < content.length; i++) {
		const section = getContent(content, i);
		itemArray.push(
			<div
				className="Toggle--selector"
				style={{
					justifyContent: "start",
					paddingLeft: 20,
					paddingRight: 20,
				}}
				key={i}
				onClick={() => {
					setShowDropdown(false);
					setSection(i);
				}}
			>
				<p className="Text--section_selector Text--nonselectable">
					{section.title}
				</p>
			</div>
		);
	}
	return itemArray;
}

function getContent(content, position) {
	if (position < 0 || position >= content.length)
		return {
			title: "",
			content: "",
		};
	return content[position];
}
