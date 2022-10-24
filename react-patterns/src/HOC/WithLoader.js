import React, { useEffect } from "react";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    if (!data) return <div>Loading...</div>;

    return <Element {...props} data={data} />;
  };
}
