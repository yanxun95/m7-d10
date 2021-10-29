import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCityFromFavorite } from "../actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorite.citys);
  const dispatch = useDispatch();
  return (
    <div>
      <ListGroup>
        {favorites.map((city, i) => (
          <ListGroup.Item style={{ color: "black" }}>
            {city.name}
            <Button
              variant="primary"
              style={{ marginLeft: "1rem" }}
              onClick={() => dispatch(removeCityFromFavorite(i))}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Favorites;
