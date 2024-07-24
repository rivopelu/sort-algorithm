import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../components/Header";
import MainContainer from "../components/MainContainer";
import { Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="mt-10">
      <MainContainer>
        <div>
          <div>
            <div className="text-2xl text-center mb-4">
              Github repository :{" "}
              <Link
                className="text-primary hover:underline"
                target="__blank"
                to={"https://github.com/rivopelu/sort-algorithm"}
              >
                https://github.com/rivopelu/sort-algorithm
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {menuItems.map((item, i) => {
                if (i > 0) {
                  return (
                    <li>
                      <Button
                        as={NavLink}
                        to={item.path}
                        fullWidth
                        className="py-10"
                        variant="bordered"
                        color="primary"
                      >
                        <div className="text-5xl uppercase">{item.lebel}</div>
                      </Button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
