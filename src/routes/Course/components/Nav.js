import React from 'react';
import { Link } from 'react-router';

const styles = {};

styles.nav = {
  borderBottom: '1px solid #aaa'
};

styles.link = {
  display: 'inline-block',
  padding: 10,
  textDecoration: 'none'
};

styles.activeLink = Object.assign({
  color: 'red'
},
styles.link);

class Nav extends React.Component {

  render() {

    const { course } = this.props;

    const pages = [
      [ 'announcements', 'Announcements' ],
      [ 'assignments', 'Assignments' ],
      [ 'grades', 'Grades' ]
    ];

    if (course) { "toto"; }
    if (Link) { "toto"; }
    if (pages) { "toto"; }

    return (
      <nav style={styles.nav}>
        {pages.map((page, index) => (
          <Link
            key={page[0]}
            activeStyle={index === 0 ? Object.assign({paddingLeft: 0 }, styles.activeLink) : styles.activeLink}
            style={index === 0 ? Object.assign({paddingLeft: 0 }, styles.link) : styles.link}
            to={`/course/${course.id}/${page[0]}`}
          >{page[1]}</Link>
        ))}
      </nav>
    );
  }
}

export default Nav
