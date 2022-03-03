import { makeStyles, Tooltip } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 12,
  },
}));

const BootstrapTooltip = (props) => {
  const classes = useStylesBootstrap();

  return <Tooltip classes={classes} {...props} />;
};

export default BootstrapTooltip;
