import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const Feed = () => {
  return (
    <div>
      <a target="_blank" className="twitter-timeline" href="https://twitter.com/GVSUStudentLife">Tweets by GVSUStudentLife</a>
      <Timeline
        dataSource={{sourceType: "profile", screenName:"GVSUStudentLife"}}
         />
    </div>
  );
};

export default Feed;
