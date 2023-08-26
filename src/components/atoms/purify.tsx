import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

type PurifyProps = {
  html: string;
};

const Purify = (props: PurifyProps) => {
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.html) }} />;
};

export default Purify;
