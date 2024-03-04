import React from "react";

export interface INavBarProp {
    element : JSX.Element,
}

interface IProps {
    props : INavBarProp[]
}

const NavBar: React.FC<IProps> = ({props}) => {
  return (
    <div>
      {/* {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))} */}
        {
            props.map((prop) => (
                <>
                    {prop.element}
                </>
            ))
        }
    </div>
  );
};

export default NavBar;
