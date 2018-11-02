import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    
    const detail = query.detail === 'true';
    return(
        <div>
            <h2>망해라!!!!!!!!!!!!!!!!!! {match.params.name}</h2>
            {detail && 'detail: sex sex'}
        </div>
    )
}

export default About;