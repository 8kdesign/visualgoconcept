export default function Menu({ menu, selectedIndex, setSelectedIndex }) {
	const itemArray = [];
	for (let i = 0; i < menu.length; i++) {
		if (selectedIndex === i) {
			itemArray.push(
				<p
					style={{ color: "white", fontWeight: 700 }}
					className="Text--menu Text--nonselectable"
					key={menu[i].shortName}
				>
					{menu[i].name}
				</p>
			);
		} else {
			itemArray.push(
				<p
					style={{ color: "grey" }}
					className="Text--menu Text--nonselectable"
					key={menu[i].shortName}
					onClick={() => {
						setSelectedIndex(i);
					}}
				>
					{menu[i].shortName}
				</p>
			);
		}
	}
	return <div className="Container--menu">{itemArray}</div>;
}
