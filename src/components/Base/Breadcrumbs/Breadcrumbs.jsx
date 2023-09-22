import React from 'react';
import { Link, useMatches } from 'react-router-dom';

const Breadcrumbs = ({ item }) => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb({ path: match.pathname, name: item?.name }));
  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index < crumbs.length - 1 ? <Link to={crumb.path}>{crumb.name}</Link> : <span>{crumb.name}</span>}
          {index < crumbs.length - 1 && ' > '}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
