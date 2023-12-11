import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { CryptoContextType, CurrencyName } from "../types.cryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState() as CryptoContextType;

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            className={classes.title}
            onClick={() => navigate("/")}
            variant="h6"
          >
            Crypto Hunter
          </Typography>
          <Select
            variant="outlined"
            style={{ width: 100, height: 40, marginRight: 15 }}
            value={currency}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setCurrency(e.target.value as CurrencyName)
            }
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
