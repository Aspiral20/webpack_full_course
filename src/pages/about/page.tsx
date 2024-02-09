import React, { FC } from 'react';

interface PageProps {
}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="about_page">
      About page:

      {new Array(20).fill('').map(item => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque eius eos, ipsam neque velit. Adipisci excepturi facilis iure laudantium nobis pariatur placeat quasi quisquam quos repellat temporibus, unde voluptates!
        </div>
      ))}
    </div>
  );
};

export default Page;