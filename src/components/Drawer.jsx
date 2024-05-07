/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { navigation } from "../constant";

export default function BasicDrawer({ open, setOpen }) {
	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={setOpen.bind(open, false)}
		>
			<List>
				{navigation.map((item, index) => (
					<ListItem key={item.title} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Drawer
				anchor="right"
				open={open}
				hideBackdrop={true}
				sx={{ width: "max-content" }}
			>
				{DrawerList}
			</Drawer>
		</div>
	);
}
