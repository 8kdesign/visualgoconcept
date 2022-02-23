export default function Lecture({ content }) {
	return (
		<div
			style={{
				padding: 50,
				overflowY: "scroll",
				height: "calc(100% - 39.5px - 50px)",
			}}
		>
			<p className="Text--header">{content.title}</p>
			<div className="Buffer--20px" />
			<p className="Text--content">{content.content}</p>
		</div>
	);
}
