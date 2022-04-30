import { Theme } from '@mui/material/styles';
//
import Fab from './Fab';
import Card from './Card';
import Tabs from './Tabs';
import Menu from './Menu';
import Link from './Link';
import Lists from './List';
import Paper from './Paper';
import Input from './Input';
import Drawer from './Drawer';
import Avatar from './Avatar';
import Button from './Button';
import Select from './Select';
import SvgIcon from './SvgIcon';
import DataGrid from './DataGrid';
import Skeleton from './Skeleton';
import Progress from './Progress';
import Checkbox from './Checkbox';
import Accordion from './Accordion';
import Typography from './Typography';
import Pagination from './Pagination';
import Breadcrumbs from './Breadcrumbs';
import ButtonGroup from './ButtonGroup';
import CssBaseline from './CssBaseline';
import ToggleButton from './ToggleButton';
import ControlLabel from './ControlLabel';
import LoadingButton from './LoadingButton';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
	return Object.assign(
		Fab(theme),
		Tabs(theme),
		Card(theme),
		Menu(theme),
		Link(theme),
		Input(theme),
		Lists(theme),
		Paper(theme),
		Select(theme),
		Button(theme),
		Avatar(theme),
		Drawer(theme),
		SvgIcon(theme),
		Checkbox(theme),
		DataGrid(theme),
		Skeleton(theme),
		Progress(theme),
		Accordion(theme),
		Typography(theme),
		Pagination(theme),
		ButtonGroup(theme),
		Breadcrumbs(theme),
		CssBaseline(theme),
		ControlLabel(theme),
		ToggleButton(theme),
		LoadingButton(theme)
	);
}
